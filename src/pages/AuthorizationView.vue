<template>
<div class="authorization-container">
  <WelcomeComponent />
  <LoginComponent v-if="path==='/login'" />
  <RegistrationComponent v-if="path==='/registration'" />
</div>
</template>

<script setup>
import LoginComponent from '@/components/AuthorizationView/LoginComponent.vue';
import RegistrationComponent from '@/components/AuthorizationView/RegistrationComponent.vue';
import WelcomeComponent from '@/components/AuthorizationView/WelcomeComponent.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const path = ref(route.path)
</script>

<style lang="scss" scoped >
  .authorization-container{
    width: 100%;
    min-height: 100vh;
    background: url('@/assets/images/WelcomeBg.jpg') no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>