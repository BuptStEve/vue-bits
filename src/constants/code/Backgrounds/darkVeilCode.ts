import code from '@content/Backgrounds/DarkVeil/DarkVeil.vue?raw';
import type { CodeObject } from '../../../types/code';

export const darkVeil: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Backgrounds/DarkVeil`,
  installation: `npm install ogl`,
  usage: `<template>
  <div style="width: 100%; height: 600px; position: relative">
    <DarkVeil
      :hue-shift="0"
      :noise-intensity="0"
      :scanline-intensity="0"
      :speed="0.5"
      :scanline-frequency="0"
      :warp-amount="0"
      :resolution-scale="1"
    />
  </div>
</template>

<script setup lang="ts">
  import DarkVeil from "./DarkVeil.vue";
</script>`,
  code
};
