<script setup lang="ts">
import InputMain from './InputMain.vue';

</script>

<template>

    <label for="">Ваши данные</label>
    <div class="input-sharing">
      <InputMain
        type="text"
        name="input-name"
        id="input-name"
        placeholder="Имя"
        isSharing
      />
      <InputMain
        type="text"
        name="input-family"
        id="input-family"
        placeholder="Фамилия"
        isSharing
      />
  </div>
</template>

<style lang="scss" scoped>
.input-sharing{
  width: 100%;
  display: flex;
  gap: 12px;
}
label{
  margin-bottom: 5px;
}
</style>