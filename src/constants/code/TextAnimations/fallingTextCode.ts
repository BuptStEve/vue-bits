import code from '@/content/TextAnimations/FallingText/FallingText.vue?raw';
import type { CodeObject } from '@/types/code';

export const fallingText: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/TextAnimations/FallingText`,
  installation: `npm install matter-js @types/matter-js`,
  usage: `<template>
  <FallingText
    text="Vue Bits is awesome!"
    :highlight-words="['Vue', 'Bits']"
    trigger="hover"
    :gravity="1"
    font-size="2rem"
    :mouse-constraint-stiffness="0.2"
  />
</template>

<script setup lang="ts">
  import FallingText from "./FallingText.vue";
</script>`,
  code
};
