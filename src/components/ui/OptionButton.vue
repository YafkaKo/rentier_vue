<template>
  <button class="option-button" @click="toggleOptions" :disabled="isOpen">
    <img :src="triple" alt="Triple" />
    <transition name="fade" mode="out-in">
      <div class="modal" ref="modalContainer" @click="closeChat" v-if="isOpen">
        <img :src="Circle_Check" alt="check" />Завершить чат
      </div>
    </transition>
  </button>
</template>

<script setup>
import triple from '@/assets/images/icons/triple_dot.svg'
import Circle_Check from '@/assets/images/icons/Circle_Check.svg'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const emit = defineEmits(['toggle-end-chat'])
const isOpen = ref(false)
const modalContainer = ref(null)

const toggleOptions = () => {
  isOpen.value = !isOpen.value
}

const closeChat = () => {
  toggleOptions()
  emit('toggle-end-chat', true)
}

onClickOutside(modalContainer, toggleOptions)
</script>

<style scoped lang="scss">
.option-button {
  height: 100%;
  position: relative;
}
.modal {
  bottom: -40px;
  right: 0;
}
</style>
