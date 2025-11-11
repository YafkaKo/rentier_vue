<script setup>
// import ChatComponent from './components/ChatComponent.vue'
import FooterMain from './components/layout/FooterMain.vue'
import HeaderMain from './components/layout/HeaderMain.vue'
import SidebarMain from './components/layout/SidebarMain.vue'
</script>

<template>
  <div class="app-container">
    <SidebarMain />
    <div class="main-container">
      <HeaderMain />
      <RouterView />
      <FooterMain />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-container {
  display: flex;
  width: 100%;
  min-height: 100vh;
}
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  position: relative;
}
</style>
