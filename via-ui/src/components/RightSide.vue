<script setup lang="ts">
import Position from '@/components/Position.vue'
import NextTrainSelec from '@/components/NextTrainSelec.vue'
import StopSelec from '@/components/StopSelec.vue'
</script>

<template>
<div id="right-side">
  <Position/>
  <!-- <NextTrainSelec/> -->
      <StopSelec/>
</div>
</template>

<style scoped>
  #right-side{
    width: 25%;
  }
</style>
