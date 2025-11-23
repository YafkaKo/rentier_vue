<template>
  <div :class="isReferal ? 'referal-container is-referal' : 'referal-container '">
    <p class="referal-text">
      Ваша реферальная ссылка {{ isReferal ? 'действительна' : 'недействительна' }}.
    </p>
    <p class="referal-text">Ваш партнёр - аккаунт администратора.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isReferal = ref(false)
</script>

<style lang="scss" scoped>
.referal-container {
  padding: 22px;
  width: 100%;
  margin-top: 15px;
  background-color: #54ba4a;
  border-radius: 15px;
  color: #fff;
  &.is-referal {
    background-color: #fc4438;
  }
  .referal-text {
    max-width: 308px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.7px;
    margin: 0 auto;
  }
}
</style>
