<template>
  <div :class="isAuthorization ?'top authorization': 'top'">
    <img class="logo" :src="logo" alt="logo" />
    <img class="logo-title" :src="title" alt="title" />
    <p class="logo-subtitle">Развиваем города</p>
    <button v-if="!isAuthorization" class="toggle-sidebar"><img :src="toggleSidebar" alt="toggle-sidebar" /></button>
  </div>
</template>

<script setup>
import logo from '@/assets/images/icons/logo.png'
import title from '@/assets/images/icons/Logo-text.png'
import toggleSidebar from '@/assets/images/icons/toggle-sidebar.svg'

defineProps({isAuthorization:Boolean})
</script>

<style lang="scss" scoped>
.top {
  padding: 27px 39px 27px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 12px;
  box-shadow: -9px 0px 20px 0px #59667a1a;
  &.authorization{
    box-shadow: none;
    padding: 0;
  }

  .logo-subtitle {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.9;
    color: #26313a;
  }
  .toggle-sidebar {
    position: absolute;
    right: 30px;
    top: 36px;
  }
}
</style>
