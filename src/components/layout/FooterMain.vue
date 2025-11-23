<script setup lang="ts">
import MessageButton from '../ui/MessageButton.vue';

</script>

<template>
  <footer>
    Проект запущен: 2023 © Рантье
    <MessageButton />
  </footer>
</template>

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
}
</style>
