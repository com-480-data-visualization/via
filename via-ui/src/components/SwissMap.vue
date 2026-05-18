<script setup lang="ts">
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { onMounted, ref, computed } from 'vue'
import { useVia } from '@/composables/useVia'
import type {Train} from '@/composables/viaTypes'

const { state } = useVia()

const width = 800
const height = 600
const mapContainer = ref<HTMLElement | null>(null)

// Build cities list from the trip data
const cities = computed(() => {
  const citiesSet = new Set<string>()
  const cityList: { name: string; lat: number; lon: number }[] = []

  // Add departure city from first train
  const firstTrain = state.value.nextStarts[0]
  if (firstTrain?.departureCity) {
    const dept = firstTrain.departureCity
    cityList.push(dept)
    citiesSet.add(dept.name)
  }

  // Add all stops from trains that have them
  state.value.nextStarts.forEach((train: Train) => {
    if (train.stop && !citiesSet.has(train.stop.name)) {
      // Find the city from departureCity if available, or create a placeholder
      const city = { name: train.stop.name, lat: 46.5, lon: 6.5 } // Placeholder coords
      cityList.push(city)
      citiesSet.add(train.stop.name)
    }
  })

  return cityList
})

onMounted(() => {
  if (!mapContainer.value) return

  d3.select(mapContainer.value).selectAll('svg').remove()

  const svg = d3
    .select(mapContainer.value)
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('width', '100%')
    .attr('height', '100%')

  d3.json('switzerland-map.json').then((data: any) => {
    const key = Object.keys(data.objects)[0] as string
    const geoData = topojson.feature(data, data.objects[key]) as any

    const projection = d3.geoMercator().fitSize([width, height], geoData)
    const path = d3.geoPath().projection(projection)

    svg
      .append('path')
      .datum(geoData)
      .attr('d', path)
      .attr('fill', '#efefef')
      .attr('stroke', '#666')
      .attr('stroke-width', 1)

    const projectedCities = cities.value
      .map((city) => {
        const point = projection([city.lon, city.lat])
        if (!point) return null
        return {
          ...city,
          x: point[0],
          y: point[1],
        }
      })
      .filter((d): d is { name: string; lat: number; lon: number; x: number; y: number } => d !== null)

    const cityLinks = projectedCities
      .map((city, idx) => {
        const nextCity = projectedCities[idx + 1]
        if (!nextCity) return null
        return {
          source: city,
          target: nextCity,
        }
      })
      .filter((d): d is { source: { name: string; lat: number; lon: number; x: number; y: number }; target: { name: string; lat: number; lon: number; x: number; y: number } } => d !== null)

    svg
      .append('g')
      .attr('class', 'trip-links')
      .selectAll('line')
      .data(cityLinks)
      .enter()
      .append('line')
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y)
      .attr('stroke', '#d60f11')
      .attr('stroke-width', 5)
      .attr('stroke-linecap', 'round')
      .attr('opacity', 0.9)

    const circles = svg
      .selectAll('.city')
      .data(projectedCities)
      .enter()
      .append('circle')
      .attr('class', 'city')
      .attr('r', 7)
      .attr('fill', '#d93025')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2.5)
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .style('cursor', 'pointer')

    svg
      .selectAll('.city-label')
      .data(projectedCities)
      .enter()
      .append('text')
      .attr('class', 'city-label')
      .attr('x', (d) => d.x + 10)
      .attr('y', (d) => d.y - 10)
      .text((d, i) => `${i + 1}. ${d.name}`)
      .attr('font-size', 14)
      .attr('font-weight', 700)
      .attr('fill', '#111827')

    const tooltip = d3.select('#tooltip')

    circles
      .on('mouseover', (event, d) => {
        tooltip.style('opacity', 1).html(`<strong>${d.name}</strong>`) 
      })
      .on('mousemove', (event) => {
        const [x, y] = d3.pointer(event, mapContainer.value)
        tooltip.style('left', x + 15 + 'px').style('top', y - 15 + 'px')
      })
      .on('mouseout', () => {
        tooltip.style('opacity', 0)
      })
  })
})
</script>

<template>
  <div class="wrapper">
    <div ref="mapContainer" id="map-container">
      <div id="tooltip" class="tooltip"></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

#map-container {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 4 / 3;
  box-sizing: border-box;
  background: linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%);
  position: relative;
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(22, 33, 62, 0.06);
  overflow: hidden;
  padding: 24px;
}

.tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 8px;
  border-radius: 4px;
  pointer-events: none;
  font-size: 12px;
  opacity: 0;
  z-index: 100;
}
</style>
