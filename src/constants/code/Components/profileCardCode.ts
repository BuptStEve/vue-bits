import code from '@content/Components/ProfileCard/ProfileCard.vue?raw'
import type { CodeObject } from '../../../types/code'

export const profileCard: CodeObject = {
  cli: `npx jsrepo add https://vue-bits.dev/ui/Components/ProfileCard`,
  usage: `<template>
  <ProfileCard
    name="Javi A. Torres"
    title="Software Engineer"
    handle="javicodes"
    status="Online"
    contact-text="Contact Me"
    avatar-url="/assets/person.png"
    icon-url="/assets/iconpattern.png"
    grain-url="/assets/grain.webp"
    :show-user-info="true"
    :show-behind-gradient="true"
    :enable-tilt="true"
    @contact-click="handleContactClick"
  />
</template>

<script setup lang="ts">
  import ProfileCard from "./ProfileCard.vue";

  const handleContactClick = () => {
    console.log('Contact button clicked!');
  };
</script>`,
  code
}