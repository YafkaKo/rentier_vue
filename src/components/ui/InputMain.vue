<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')

defineProps({
  name: String,
  id: String,
  placeholder: String,
  label: String,
  description: String,
  type: String,
  isSharing: Boolean
})
</script>

<template>
  <div :class="isSharing ?'input-with-icons-container is-sharing' :'input-with-icons-container'">
    <label v-if="!isSharing" class="input-label" :for="id">{{label}}</label>
    <p v-if="description" class="input-description">{{ description }}</p>
    <input
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>

<style lang="scss" scoped>
.input-with-icons-container{
  &.is-sharing{
    margin-top: 0;
  }
  .input-description{
    font-size: 12px;
    line-height: 21px;
    letter-spacing: 0.4px;
    margin-top: 1px;
    color: #52526CBF;
  }
  }
</style>