<script setup lang="ts">
import { ref } from 'vue';

const trains = [
  { id: 1, service: 'IC 5', destination: '→ Rorschach', departure: '11:34' },
  { id: 2, service: 'IC 7', destination: '→ Zürich HB', departure: '11:41' },
  { id: 3, service: 'RE 12', destination: '→ St. Gallen', departure: '11:55' },
  { id: 4, service: 'IC 5', destination: '→ Chur', departure: '12:08' },
];
const selectedId = ref(1);
const selectCard = (id: number) => {
  selectedId.value = id;
};
</script>

<template>
  <div id="next-train-selec">
    <div class="train-list">
      <article
        v-for="train in trains"
        :key="train.id"
        :class="['train-card', { 'train-card--selected': train.id === selectedId }]"
        @click="selectCard(train.id)"
      >
        <div class="train-card__row">
          <span class="train-card__service">{{ train.service }}</span>
          <span class="train-card__destination">{{ train.destination }}</span>
          <span class="train-card__time">{{ train.departure }}</span>
        </div>

        <button
          v-if="train.id === selectedId"
          class="train-card__confirm"
          type="button"
        >
          Confirm
        </button>
      </article>
    </div>
  </div>
</template>

<style scoped>
#next-train-selec {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0 1.5rem;
}

.train-list {
  width: min(360px, 100%);
  display: grid;
  gap: 0.85rem;
}

.train-card {
  background: #ffffff;
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(22, 33, 62, 0.06);
  padding: 0.9rem;
  display: grid;
  gap: 0.85rem;
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.train-card:hover {
  transform: translateY(-1px);
}

.train-card--selected {
  border-color: #d60f11;
  box-shadow: 0 14px 30px rgba(214, 15, 17, 0.16);
}

.train-card__row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
}

.train-card__service {
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

.train-card__destination {
  font-size: 0.97rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

.train-card__time {
  font-size: 1rem;
  font-weight: 800;
  color: #111827;
  white-space: nowrap;
}

.train-card__confirm {
  width: 100%;
  border: 1px solid #5a5a5a;
  background: #d60f11;
  color: white;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.train-card__confirm:hover {
  background: #b60c0f;
  transform: translateY(-1px);
}
</style>
