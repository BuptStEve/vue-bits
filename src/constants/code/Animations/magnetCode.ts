import code from '@content/Animations/Magnet/Magnet.vue?raw';
import type { CodeObject } from '../../../types/code';

export const magnet: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Animations/Magnet`,
  usage: `<template>
  <Magnet
    :padding="120"
    :disabled="false"
    :magnet-strength="3"
    active-transition="transform 0.2s ease-out"
    inactive-transition="transform 0.6s ease-in-out"
    wrapper-class-name="custom-wrapper"
    inner-class-name="custom-inner"
  >
    <div class="magnet-element">
      <h3>Hover me!</h3>
      <p>I'll follow your cursor</p>
    </div>
  </Magnet>
</template>

<script setup lang="ts">
import Magnet from '@/content/Animations/Magnet/Magnet.vue'
</script>

<style scoped>
.magnet-element {
  padding: 2rem;
  background: #0b0b0b;
  border: 1px solid #333;
  border-radius: 12px;
  color: white;
  text-align: center;
}

.magnet-element h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
}

.magnet-element p {
  margin: 0;
  opacity: 0.8;
}
</style>`,
  code
};
