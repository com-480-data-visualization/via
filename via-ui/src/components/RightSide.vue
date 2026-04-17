<script setup lang="ts">
import Position from '@/components/Position.vue'
import NextTrainSelec from '@/components/NextTrainSelec.vue'
</script>

<template>
<div id="right-side">
  <Position/>
  <NextTrainSelec/>
</div>
</template>

<style scoped>
  #right-side{
    width: 25%;
  }
</style>
