import code from '@content/Animations/ClickSpark/ClickSpark.vue?raw';
import { createCodeObject } from '@/types/code';

export const clickSpark = createCodeObject(code, 'Animations/ClickSpark', {
  usage: `<template>
  <ClickSpark
    spark-color="#ff6b6b"
    :spark-size="12"
    :spark-radius="25"
    :spark-count="12"
    :duration="600"
    easing="ease-out"
    :extra-scale="1.2"
    class="interactive-area"
  >
    <div class="content">
      <h3>Click me!</h3>
      <p>Click anywhere to create sparks</p>
    </div>
  </ClickSpark>
</template>

<script setup lang="ts">
import ClickSpark from '@/content/Animations/ClickSpark/ClickSpark.vue'
</script>

<style scoped>
.interactive-area {
  width: 100%;
  height: 200px;
  border: 2px dashed #333;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.content {
  text-align: center;
  pointer-events: none;
  user-select: none;
}
</style>`
});
