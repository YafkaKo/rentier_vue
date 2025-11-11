<template>
  <div class="bottom-right nothing">
    <p class="nothing-text"><img :src="note" alt="note" />Выберите, кому хотели бы написать</p>
  </div>
</template>

<script setup>
import note from '@/assets/images/icons/note_edit.svg'
</script>

<style scoped lang="scss">
.bottom-right {
  width: 100%;
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  &.nothing {
    align-items: center;
    justify-content: center;
  }
  .nothing-text {
    display: flex;
    gap: 16px;
    align-items: center;
    color: $chat-color;
  }
}
</style>
