<script setup lang="ts">
import TripInfo from "@/components/TripInfo.vue"
import SwissMap from "@/components/SwissMap.vue"

</script>

<template>
  <div id="left-side">
    <TripInfo id="trip-info"/>
    <SwissMap id="map"/>
  </div>
</template>

<style scoped>
 #left-side{
  width: 70%;
 }

 #map{
  margin-top: 10px;
 }
</style>
