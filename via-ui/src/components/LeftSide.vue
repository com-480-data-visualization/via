<script setup lang="ts">
import TripInfo from "@/components/TripInfo.vue"
import SwissMap from "@/components/SwissMap.vue"

</script>

<template>
  <div id="left-side">
    <TripInfo/>
    <SwissMap/>
  </div>
</template>

<style scoped>
 #left-side{
  width: 70%;
 }
</style>
