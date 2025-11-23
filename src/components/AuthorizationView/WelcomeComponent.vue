<template>
  <div class="welcome-container">
  <h1 class="welcome-title">Добро Пожаловать На <span>Рантье</span></h1>
  <p class="welcome-description">Мы готовы помочь вам улучшить эффективность вашей работы и повседневной жизни.</p>
  <img :src="WelcomeImg" alt="Welcome" class="welcome-img">
  </div>
</template>

<script setup>
  import WelcomeImg from '@/assets/images/WelcomeImg.png'
</script>

<style lang="scss" scoped>
  .welcome-container{
    padding: 0 100px;
    text-align: center;
    max-width: 800px;
    .welcome-title{
      font-size: 40px;
      font-weight: 500;
      margin-bottom: 24px;
      letter-spacing: 0;
      span{
        color: $accent-color;
      }
    }
    .welcome-description{
      font-size: 20px;
      color: #898989;
      line-height: 29px;
      margin-bottom: 160px;
    }
    .welcome-img{
      max-height: 334px;
      max-width: 500px;
    }
  }
</style>
