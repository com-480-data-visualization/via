<script setup lang="ts">
import LeftSide from '@/components/LeftSide.vue'
import RightSide from '@/components/RightSide.vue'
</script>

<template>
<div>
  <h1>Via</h1>
  <div id="TopLevel"> 
    <LeftSide/>
    <RightSide/>
  </div>
</div>
</template>

<style scoped>
#TopLevel{
  display: flex;
  justify-content: space-between;
}
</style>
