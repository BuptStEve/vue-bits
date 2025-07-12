import code from '@content/Components/CardSwap/CardSwap.vue?raw';
import type { CodeObject } from '../../../types/code';

export const cardSwap: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Components/CardSwap`,
  installation: `npm install gsap`,
  usage: `<template>
  <CardSwap 
    :card-distance="60"
    :vertical-distance="70"
    :delay="5000"
    :skew-amount="6"
    easing="elastic"
    :pause-on-hover="false"
    @card-click="handleCardClick"
  >
    <template #card-0>
      <div class="border-b border-white bg-gradient-to-t from-[#222] to-[#0b0b0b]">
        <div class="m-2 flex items-center">
          <i class="pi pi-circle-fill mr-2"></i>
          <span>Smooth</span>
        </div>
      </div>
    </template>
    
    <template #card-1>
      <div class="border-b border-white bg-gradient-to-t from-[#222] to-[#0b0b0b]">
        <div class="m-2 flex items-center">
          <i class="pi pi-code mr-2"></i>
          <span>Reliable</span>
        </div>
      </div>
    </template>
    
    <template #card-2>
      <div class="border-b border-white bg-gradient-to-t from-[#222] to-[#0b0b0b]">
        <div class="m-2 flex items-center">
          <i class="pi pi-sliders-h mr-2"></i>
          <span>Customizable</span>
        </div>
      </div>
    </template>
  </CardSwap>
</template>

<script setup lang="ts">
  import CardSwap from "./CardSwap.vue";

  const handleCardClick = (index: number) => {
    console.log(\`Card \${index} clicked\`);
  };
</script>`,
  code
};
