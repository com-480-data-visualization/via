<script setup lang="ts">
import { useVia } from '@/composables/useVia';
import { computed } from 'vue';

const { state } = useVia();

const currentCity = computed(() => {
  // Find the first train with a departure city
  const train = state.value.nextStarts[0];
  return train?.departureCity?.name || 'Unknown';
});
</script>


<template>
  <div class="position-card">
    <span class="position-label">Current position</span>
    <span class="position-name">{{ currentCity }}</span>
  </div>
</template>

<style scoped>
.position-card {
  width: min(360px, 100%);
  margin: 0 auto 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  background: linear-gradient(135deg, #fff 0%, #f7f7f7 100%);
  border: 1px solid #d7d7d7;
  border-radius: 14px;
  box-shadow: 0 6px 14px rgba(22, 33, 62, 0.06);
  padding: 0.7rem 1.1rem 0.8rem;
  min-width: 0;
}

.position-label {
  display: inline-block;
  background: #d60f11;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  border-radius: 8px;
  padding: 0.13rem 0.6rem;
  letter-spacing: 0.07em;
  margin-bottom: 0.1rem;
  text-transform: uppercase;
}

.position-name {
  font-size: 1.25rem;
  font-weight: 800;
  color: #111827;
  letter-spacing: 0.01em;
}
</style>