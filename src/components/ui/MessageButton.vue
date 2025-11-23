<template>
  <button class="message-button-main"><img :src="messageImg" alt="message-button" /></button>
</template>

<script setup>
import messageImg from '@/assets/images/icons/message-button.png'
</script>

<style lang="scss" scoped>
.message-button-main {
    position: fixed;
    right: 30px;
    bottom: 30px;
}
</style>
