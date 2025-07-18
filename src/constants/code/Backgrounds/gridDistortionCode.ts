import code from '@content/Backgrounds/GridDistortion/GridDistortion.vue?raw';
import type { CodeObject } from '../../../types/code';

export const gridDistortion: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Backgrounds/GridDistortion`,
  installation: `npm install three @types/three`,
  usage: `<template>
  <div class="relative w-full h-[600px]">
    <GridDistortion
      imageSrc="https://picsum.photos/1920/1080?grayscale"
      :grid="10"
      :mouse="0.1"
      :strength="0.15
      :relaxation="0.9"
      className="custom-class"
    />
  </div>
</template>

<script setup lang="ts">
  import GridDistortion from "./GridDistortion.vue";
</script>`,
  code
};
