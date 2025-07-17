import code from '@/content/Animations/MetaBalls/MetaBalls.vue?raw';
import type { CodeObject } from '../../../types/code';

export const metaBalls: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Animations/MetaBalls`,
  installation: `npm i ogl`,
  usage: `<template>
    <MetaBalls
        color="#27ff64"
        cursorBallColor="#27ff64"
        :cursorBallSize="2"
        :ballCount="15"
        :animationSize="30"
        :enableMouseInteraction="true"
        :enableTransparency="true"
        :hoverSmoothness="0.05"
        :clumpFactor="1"
        :speed="0.3"
    />
</template>

<script setup lang="ts">
  import MetaBalls from "./MetaBalls.vue";
</script>`,
  code
};
