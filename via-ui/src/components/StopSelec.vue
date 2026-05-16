<script setup lang="ts">
import { ref } from 'vue';
// Placeholder data for stops
const stops = [
  { name: 'Yverdon-Les-Bains', time: '12:00' },
  { name: 'Neuchâtel', time: '12:21' },
  { name: 'Biel/Bienne', time: '12:42' },
  { name: 'Solothurn', time: '12:59' },
  { name: 'Olten', time: '13:18' },
  { name: 'Aarau', time: '13:29' },
];
const selectedIdx = ref<number|null>(null);
const selectStop = (idx: number) => {
  selectedIdx.value = idx;
};
</script>

<template>
  <div class="stopselec-root">
    <div class="stopselec-header">
      <span class="stopselec-service">IC 5</span>
      <span class="stopselec-dest">→ Rorschach</span>
      <span class="stopselec-depart">Departure: 11:34</span>
    </div>
    <div class="stopselec-timeline">
      <div class="stopselec-timeline-bar"></div>
      <div class="stopselec-stops">
        <div
          v-for="(stop, i) in stops"
          :key="i"
          class="stopselec-stop-row"
        >
          <div class="stopselec-dot"></div>
          <div
            class="stopselec-stop-card"
            :class="{ 'stopselec-stop-card--selected': selectedIdx === i }"
            @click="selectStop(i)"
            tabindex="0"
            role="button"
            :aria-pressed="selectedIdx === i"
          >
            <div class="stopselec-stop-name">{{ stop.name }}</div>
            <div class="stopselec-stop-time">Arrival: {{ stop.time }}</div>
            <button v-if="selectedIdx === i" class="stopselec-confirm">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stopselec-root {
  width: min(340px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.stopselec-header {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.stopselec-service {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  padding: 0.3rem 0.65rem;
  background: #d60f11;
  color: white;
  font-weight: 700;
  border-radius: 10px;
  letter-spacing: 0.03em;
  font-size: 0.85rem;
}
.stopselec-dest {
  font-size: 0.97rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}
.stopselec-depart {
  font-size: 0.92rem;
  color: #6b7280;
}
.stopselec-timeline {
  position: relative;
  display: flex;
  flex-direction: row;
}
.stopselec-timeline-bar {
  width: 2.5px;
  background: #222;
  position: absolute;
  top: 0.7rem;
  bottom: 0.7rem;
  left: 19px;
  z-index: 0;
}
.stopselec-stops {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-left: 0.5rem;
  width: 100%;
}
.stopselec-stop-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
}
.stopselec-dot {
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2.5px solid #222;
  border-radius: 50%;
  margin-right: 0.7rem;
  margin-top: 0.1rem;
  margin-left: 5px;
  z-index: 1;
  box-sizing: border-box;
}
.stopselec-stop-card {
  background: #ededed;
  border-radius: 10px;
  padding: 0.5rem 0.9rem;
  min-width: 170px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 0.97rem;
  color: #222;
  box-sizing: border-box;
  cursor: pointer;
  border: 2px solid transparent;
  transition: border-color 0.18s, background 0.18s;
}
.stopselec-stop-card--selected {
  border-color: #d60f11;
  background: #fff4f4;
}
.stopselec-stop-name {
  font-weight: 600;
}
.stopselec-stop-time {
  font-size: 0.92rem;
  color: #555;
}
.stopselec-confirm {
  margin-top: 0.5rem;
  width: 100%;
  border: 1.5px solid #222;
  background: #fff;
  color: #222;
  font-size: 0.97rem;
  font-weight: 600;
  padding: 0.45rem 0;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.stopselec-confirm:hover {
  background: #d60f11;
  color: #fff;
  border-color: #d60f11;
}
</style>
