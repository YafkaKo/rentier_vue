<template>
  <footer>
    Проект запущен: 2023 © Рантье
    <button class="message-button-main"><img :src="messageImg" alt="message-button" /></button>
  </footer>
</template>

<script setup>
import messageImg from '@/assets/images/icons/message-button.png'
</script>

<style scoped lang="scss">
footer {
  color: #2f2f3b;
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px #59667a1a;
  position: relative;
  .message-button-main {
    position: absolute;
    right: 50px;
    bottom: 75px;
  }
}
</style>
