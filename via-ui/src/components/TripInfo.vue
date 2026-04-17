<script setup lang="ts">
import Clock from '@/components/Clock.vue'
</script>

<template>
<div id="trip-info">
  <div>
     <p>Genève -> Leimbach AG</p>
     <p>42 km left</p>
     <p>Time since departure: 42 minutes</p>
  </div>
    <Clock/>
</div>
</template>

<style scoped>
#trip-info{
    display: flex;
    justify-content: space-between;
}
</style>