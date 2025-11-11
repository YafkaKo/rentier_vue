<template>
  <div class="modal-end-chat-container">
    <div class="modal-end-chat">
      <h2>Завершить чат</h2>
      <p>Вы уверены что хотите завершить чат с Роман Родионович?</p>
      <div class="buttons">
        <button class="cancel-button" @click="$emit('toggle-end-chat', false)">Отменить</button>
        <button class="end-button" @click="$emit('confirm-end-chat')">Завершить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['toggle-end-chat', 'confirm-end-chat'])
</script>

<style scoped lang="scss">
.modal-end-chat-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(47, 47, 59, 0.45);
}
.modal-end-chat {
  text-align: center;
  background-color: #fff;
  padding: 30px 0 20px;
  border-radius: 16px;
  min-width: 560px;
  min-height: 193px;
  h2 {
    text-transform: uppercase;
    font-size: 20px;
    color: $bold-color;
    font-weight: 500;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    margin-bottom: 30px;
    color: $chat-color;
  }
  .buttons {
    display: flex;
    gap: 12px;
    justify-content: end;
    border-top: 1px solid #dee2e6;
    font-size: 14px;
    padding: 20px 20px 0;
  }
  .cancel-button {
    padding: 6px 24px;
    background-color: #f73164;
    border-radius: 6px;
    color: #fff;
  }
  .end-button {
    background-color: $accent-color;
    padding: 6px 32px;
    border-radius: 6px;
    color: #fff;
  }
}
</style>
