<template>
  <div
    :class="props.isMy ? 'bottom-right-main-item ' : 'bottom-right-main-item incoming'"
    @contextmenu.prevent="openContextMenu"
  >
    <div class="item-message">
      <div v-if="chatState.isReply.value && props.replyPrewiew" class="item-message-reply">
        <div class="item-message-top">
          <p class="item-message-top-title">{{ props.replyPrewiew.sender }}</p>
          <p class="item-message-top-time">{{ props.replyPrewiew.time }}</p>
        </div>
        <p class="item-message-bottom">{{ props.replyPrewiew.text }}</p>
      </div>
      <div class="item-message-top">
        <p class="item-message-top-title">{{ props.isMy ? 'Вы' : props.name }}</p>
        <p class="item-message-top-time">{{ props.time }}</p>
        <GalochkaUnread v-if="!isRead" :isMy="props.isMy" />
        <GalochkaRead v-if="isRead" :isMy="props.isMy" />
      </div>
      <p class="item-message-bottom">{{ props.message }}</p>
    </div>
    <AvatarMain class="item-avatar" :name="props.name" :isMy="props.isMy" />
    <div
      v-if="showContextMenu"
      class="context-menu"
      :style="contextMenuStyle"
      ref="contextMenuContainer"
    >
      <button @click="replyToMessage" class="context-menu-item">
        <img :src="Forward" alt="forward" />Ответить
      </button>
      <button @click="copyMessage" class="context-menu-item">
        <img :src="Copy" alt="copy" />Копировать
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import GalochkaUnread from '@/assets/images/icons/galochka-unread.vue'
import AvatarMain from '@/components/ui/AvatarMain.vue'
import GalochkaRead from '@/assets/images/icons/galochka-read.vue'
import Forward from '@/assets/images/icons/Forward.svg'
import Copy from '@/assets/images/icons/Copy.svg'
import { computed, inject, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  messageId: Number,
  isMy: Boolean,
  name: String,
  time: String,
  message: String,
  isRead: Boolean,
  replyPrewiew: Object,
})
const chatState = inject('chatState')
const emit = defineEmits(['reply'])
const contextMenuContainer = ref(null)
const showContextMenu = ref(false)
const contextMenuPosition = ref({ x: 0, y: 0 })

const contextMenuStyle = computed(() => ({
  left: `${contextMenuPosition.value.x}px`,
  top: `${contextMenuPosition.value.y}px`,
}))

const openContextMenu = (event) => {
  event.preventDefault()
  contextMenuPosition.value = {
    x: event.clientX,
    y: event.clientY,
  }
  showContextMenu.value = true
}

const closeContextMenu = () => {
  showContextMenu.value = false
}

onClickOutside(contextMenuContainer, closeContextMenu)

const copyMessage = async () => {
  try {
    await navigator.clipboard.writeText(props.message)
    closeContextMenu()
  } catch (err) {
    console.error('Ошибка копирования:', err)
    closeContextMenu()
  }
}

const replyToMessage = () => {
  emit('reply', {
    id: props.messageId,
    author: props.name,
    text: props.message,
    time: props.time,
  })
  closeContextMenu()
}
</script>

<style scoped lang="scss">
.bottom-right-main-item {
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 50px;
  align-items: end;
  gap: 9px;
  .item-message {
    border-radius: 16px;
    background-color: $accent-color;
    padding: 15px;
  }
  .item-message-top {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    margin-bottom: 10px;
  }
  .item-message-top-title {
    flex-grow: 1;
    line-height: 120%;
    font-weight: 500;
  }
  .item-message-top-time {
    font-size: 11px;
    line-height: 21px;
    letter-spacing: 0.5px;
  }
}
.item-message-reply {
  background-color: #9288ff;
  border-radius: 16px;
  padding: 12px 16px;
  margin-bottom: 10px;
  .item-message-top {
    margin-bottom: 4px;
  }
  .item-message-bottom {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 508px;
  }
}
.bottom-right-main-item.incoming {
  color: $chat-color;
  grid-template-columns: 50px 1fr;
  .item-message {
    order: 2;
    background-color: #fff;
  }
}

.context-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 8px 12px;
  background-color: #fff;
  box-shadow: 0px 5px 20px 0px #2e235e12;
  color: $chat-color;
  border-radius: 8px;
  position: fixed;
  z-index: 1000;
  &-item {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  &-item:first-child {
    padding-bottom: 5px;
  }
  &-item:last-child {
    padding-top: 5px;
  }
}
</style>
