import code from '@content/Components/Dock/Dock.vue?raw';
import type { CodeObject } from '../../../types/code';

export const dock: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Components/Dock`,
  installation: `npm install motion-v`,
  usage: `<template>
  <Dock
    :items="items"
    :panel-height="68"
    :base-item-size="50"
    :magnification="70"
    :distance="200"
    :dock-height="256"
    :spring="{ mass: 0.1, stiffness: 150, damping: 12 }"
  />
</template>

<script setup lang="ts">
  import { h } from 'vue'
  import Dock from "./Dock.vue";

  const items = [
    { 
      icon: () => h('i', { class: 'pi pi-home', style: { fontSize: '18px', color: 'white' } }), 
      label: 'Home', 
      onClick: () => console.log('Home clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-inbox', style: { fontSize: '18px', color: 'white' } }), 
      label: 'Archive', 
      onClick: () => console.log('Archive clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-user', style: { fontSize: '18px', color: 'white' } }), 
      label: 'Profile', 
      onClick: () => console.log('Profile clicked!') 
    },
    { 
      icon: () => h('i', { class: 'pi pi-cog', style: { fontSize: '18px', color: 'white' } }), 
      label: 'Settings', 
      onClick: () => console.log('Settings clicked!') 
    },
  ];
</script>`,
  code
};
