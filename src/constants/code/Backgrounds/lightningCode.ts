import code from '@content/Backgrounds/Lightning/Lightning.vue?raw'
import type { CodeObject } from '../../../types/code'

export const lightning: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Backgrounds/Lightning`,
  installation: `No additional dependencies required`,
  usage: `<template>
  <div class="lightning-container">
    <Lightning
      :hue="230"
      :x-offset="0"
      :speed="1"
      :intensity="1"
      :size="1"
      class="w-full h-full"
    />
  </div>
</template>

<script setup lang="ts">
  import Lightning from "./Lightning.vue";
</script>

<style scoped>
  .lightning-container {
    width: 100%;
    height: 500px;
    position: relative;
    overflow: hidden;
  }
</style>`,
  code
}
