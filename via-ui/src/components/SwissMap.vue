<script setup lang="ts">
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { onMounted, ref } from 'vue'

const width = 800
const height = 600
const mapContainer = ref<HTMLElement | null>(null)

const cities = [
  // { name: 'Geneva', lat: 46.2044, lon: 6.1432 },
  { name: 'Lausanne', lat: 46.5197, lon: 6.6323 },
  // { name: 'Zurich', lat: 47.3769, lon: 8.5417 },
  // { name: 'Bern', lat: 46.948, lon: 7.4474 },
  // { name: 'Lucerne', lat: 47.0502, lon: 8.3093 },
  // { name: 'St. Gallen', lat: 47.4245, lon: 9.3767 },
  // { name: 'Lugano', lat: 46.0037, lon: 8.9511 },
  // { name: 'Basel', lat: 47.5596, lon: 7.5886 },
]

onMounted(() => {
  if (!mapContainer.value) return

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
      .attr('fill', '#e0e0e0')
      .attr('stroke', '#333')
      .attr('stroke-width', 1)

    const circles = svg
      .selectAll('.city')
      .data(cities)
      .enter()
      .append('circle')
      .attr('class', 'city')
      .attr('r', 8)
      .attr('fill', '#d93025')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .attr('cx', (d) => projection([d.lon, d.lat])![0])
      .attr('cy', (d) => projection([d.lon, d.lat])![1])
      .style('cursor', 'pointer')

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
  align-items: center;
  width: 100%;
}

#map-container {
  width: 800px;
  height: 600px;
  background: #fff;
  position: relative;
  border: 1px solid #ccc;
  overflow: hidden;
  padding: 50px;
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
