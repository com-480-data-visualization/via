<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    hour?: number;
    minute?: number;
  }>(),
  {
    hour: 4,
    minute: 28,
  },
);

const normalizedMinute = computed(() => ((props.minute % 60) + 60) % 60);
const normalizedHour24 = computed(() => ((props.hour % 24) + 24) % 24);

const hourForDial = computed(() => normalizedHour24.value % 12);

const minuteAngle = computed(() => normalizedMinute.value * 6);
const hourAngle = computed(() => hourForDial.value * 30 + normalizedMinute.value * 0.5);

const period = computed(() => (normalizedHour24.value < 12 ? 'AM' : 'PM'));
</script>

<template>
  <div class="clock-shell" aria-label="Analog clock">
    <div class="clock-face">
      <div class="clock-face__ticks">
        <span
          v-for="tick in 60"
          :key="tick"
          class="clock-face__tick"
          :class="{ 'clock-face__tick--major': tick % 5 === 0 }"
          :style="{ transform: `translateX(-50%) rotate(${tick * 6}deg)` }"
        ></span>
      </div>

      <span
        class="clock-face__hand clock-face__hand--hour"
        :style="{ transform: `translate(-50%, -100%) rotate(${hourAngle}deg)` }"
      ></span>
      <span
        class="clock-face__hand clock-face__hand--minute"
        :style="{ transform: `translate(-50%, -100%) rotate(${minuteAngle}deg)` }"
      ></span>
    </div>

    <span class="clock-face__period">{{ period }}</span>
  </div>
</template>

<style scoped>
.clock-shell {
  position: relative;
  width: 88px;
  height: 106px;
}

.clock-face {
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 2px solid #cfcfcf;
  background: #fdfdfd;
  box-shadow: inset 0 0 0 1px #efefef;
}

.clock-face__period {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.08rem 0.32rem;
  border-radius: 999px;
  font-size: 0.5rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #ffffff;
  background: #d60f11;
  z-index: 3;
  bottom: 0;
}

.clock-face__ticks {
  position: absolute;
  inset: 0;
}

.clock-face__tick {
  position: absolute;
  top: 3px;
  left: 50%;
  width: 1px;
  height: 6px;
  background: #434343;
  transform-origin: 50% 41px;
  opacity: 0.9;
}

.clock-face__tick--major {
  width: 2px;
  height: 9px;
  background: #1f1f1f;
}

.clock-face__hand {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  border-radius: 999px;
  z-index: 2;
}

.clock-face__hand--hour {
  width: 5px;
  height: 28px;
  background: #d60f11;
}

.clock-face__hand--minute {
  width: 3px;
  height: 38px;
  background: #434343;
}
</style>