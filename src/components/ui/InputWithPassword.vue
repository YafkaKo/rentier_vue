<script setup lang="ts">
import { ref } from 'vue'

const inputValue = ref('')
const isShowPassword = ref(false)

const setShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

defineProps({
  name: String,
  id: String,
  placeholder: String,
  label: String
})
</script>

<template>
  <div class="input-with-icons-container">
    <label class="input-label" :for="id">{{label}}</label>
    <input
      :type="isShowPassword ? 'text' : 'password'"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      v-model="inputValue"
      autocomplete="new-password"
    />
    <button @click.prevent="setShowPassword()">
      <img src="@/assets/images/icons/eye-slash.svg" alt="" />
    </button>
  </div>
</template>