<script setup lang="ts">
import Clock from '@/components/Clock.vue'
import { useVia } from '@/composables/useVia'
import { computed } from 'vue'
import type { Train, ViaState } from '@/composables/viaTypes'

const { state, selectTrain, selectStop } = useVia()

const routeDisplay = computed(() => {
  const firstTrain = state.value.nextStarts[0]
  if (!firstTrain) return 'No route'
  const from = firstTrain.departureCity?.name || 'Unknown'
  const to = firstTrain.stop?.name || firstTrain.destination || 'Unknown'
  return `${from} → ${to}`
})
</script>

<template>
  <div id="trip-info">
  <div class="trip-meta">
    <p class="trip-route">{{ routeDisplay }}</p>

    <div class="trip-kpis">
      <div class="trip-kpi">
        <span class="trip-kpi__label">Remaining distance to destination</span>
        <span class="trip-kpi__value">42 km</span>
      </div>

      <div class="trip-kpi">
        <span class="trip-kpi__label">Elapsed time since start</span>
        <span class="trip-kpi__value">42 min</span>
      </div>
    </div>
  </div>

  <div class="trip-clock">
    <Clock :hour="state.hour" :minute="state.minute" />
  </div>
</div>
</template>

<style scoped>
#trip-info {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 0.9rem;
  background: linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%);
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(22, 33, 62, 0.06);
  padding: 0.85rem 0.95rem;
}

.trip-meta {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  min-width: 0;
}

.trip-route {
  margin: 0;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
}

.trip-kpis {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.trip-kpi {
  display: grid;
  gap: 0.1rem;
  background: #ececec;
  border-radius: 10px;
  padding: 0.35rem 0.6rem;
  min-width: 100px;
}

.trip-kpi__label {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
}

.trip-kpi__value {
  font-size: 0.95rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.1;
}

.trip-clock {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  padding: 0.4rem 0.6rem;
}

@media (max-width: 640px) {
  #trip-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .trip-clock {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>