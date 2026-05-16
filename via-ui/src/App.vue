<script setup lang="ts">
import LeftSide from '@/components/LeftSide.vue'
import RightSide from '@/components/RightSide.vue'
</script>

<template>
<div id="app-shell">
  <header class="app-header">
    <div class="app-title-wrap">
      <span class="app-title-tag">Swiss train trip simulator</span>
      <h1 class="app-title">Via</h1>
      <!-- <p class="app-subtitle">Swiss trip companion</p> -->
    </div>
  </header>

  <div id="TopLevel">
    <LeftSide />
    <RightSide />
  </div>
</div>
</template>

<style scoped>
#app-shell {
  width: min(1300px, 95vw);
  margin: 1.2rem auto;
}

.app-header {
  margin-bottom: 1rem;
}

.app-title-wrap {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  padding: 0.7rem 1rem 0.75rem;
  box-shadow: 0 8px 18px rgba(22, 33, 62, 0.06);
}

.app-title-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  background: #d60f11;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-title {
  margin: 0;
  font-size: clamp(1.7rem, 2.5vw, 2.2rem);
  line-height: 1;
  color: #111827;
  font-weight: 800;
  letter-spacing: 0.01em;
}

.app-subtitle {
  margin: 0;
  font-size: 0.87rem;
  color: #6b7280;
  font-weight: 500;
}

#TopLevel {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

@media (max-width: 980px) {
  #TopLevel {
    flex-direction: column;
  }
}
</style>
