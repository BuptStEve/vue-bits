import code from '@content/Components/MagicBento/MagicBento.vue?raw';
import type { CodeObject } from '../../../types/code';

export const magicBento: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Components/MagicBento`,
  installation: `npm install gsap`,
  usage: `<template>
    <MagicBento
      :text-auto-hide="true"
      :enable-stars="true"
      :enable-spotlight="true"
      :enable-border-glow="true"
      :enable-tilt="true"
      :enable-magnetism="true"
      :click-effect="true"
      :spotlight-radius="300"
      :particle-count="12"
      glow-color="132, 0, 255"
    />
</template>

<script setup lang="ts">
  import MagicBento from "./MagicBento.vue";
</script>`,
  code
};
