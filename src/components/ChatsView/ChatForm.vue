<template>
  <div class="bottom-right-bottom" v-if="!currentChat?.isEnded || role === 'admin'">
    <div class="bottom-right-bottom-reply" v-if="chatState.isReply.value">
      <img class="bottom-reply-img" :src="forwardReply" alt="Reply" />
      <div class="bottom-reply-box">
        <div class="bottom-reply-box-meta">
          <p class="bottom-reply-box-meta-title">{{ replyPreview?.sender }}</p>
          <p class="bottom-reply-box-meta-time">{{ replyPreview?.time }}</p>
        </div>
        <p class="bottom-reply-box-message">{{ replyPreview?.text }}</p>
      </div>
      <button class="bottom-reply-button" @click="chatState.closeReply()">
        <img :src="close" alt="закрыть" />
      </button>
    </div>

    <input
      class="bottom-right-bottom-text"
      v-model="inputValue"
      type="text"
      placeholder="Напишите сообщение..."
      @keyup.enter="sendMessage"
    />

    <InputWithFile name="inputFile" @update:model-value="handleFileSelect" />

    <button @click="sendMessage" class="bottom-right-bottom-btn">
      <img :src="send" alt="send" />
    </button>
  </div>

  <div class="bottom-right-bottom ended" v-else>
    <img :src="warning" alt="warning" />Чат был закрыт, и у вас больше нет возможности продолжать
    переписку.
  </div>
</template>

<script setup>
import send from '@/assets/images/icons/send.svg'
import warning from '@/assets/images/icons/Circle_warning.svg'
import InputWithFile from '@/components/ui/InputWithFile.vue'
import forwardReply from '@/assets/images/icons/forward-Reply.svg'
import close from '@/assets/images/icons/Close_MD.svg'
import { useChatStore } from '@/stores/ChatStore'
import { computed, inject, ref } from 'vue'

const chatStore = useChatStore()

const currentChat = computed(() => chatStore.currentChat)

const props = defineProps({ replyPreview: Object, role: String })
const emit = defineEmits(['send-message-after-close', 'send-message'])
const replyPreview = computed(() => props.replyPreview)
const inputValue = ref('')
const role = computed(() => props.role)
const chatState = inject('chatState')

const sendMessage = () => {
  if (!inputValue.value.trim()) return

  const messageData = {
    text: inputValue.value,
    isReply: chatState.isReply.value,
    replyPreview: replyPreview.value,
  }

  if (currentChat.value?.isEnded) {
    emit('send-message-after-close', messageData)
  } else {
    emit('send-message', messageData)
  }

  inputValue.value = ''
  chatState.closeReply()
}

const handleFileSelect = (fileNames) => {
  if (fileNames.fileNames && inputValue.value) {
    inputValue.value += ` Файлы: ${fileNames.fileNames}`
  } else if (fileNames.fileNames) {
    inputValue.value = `Файлы: ${fileNames.fileNames}`
  }
}
</script>

<style scoped lang="scss">
.bottom-right-bottom {
  padding: 16px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70px;

  &-text {
    border: none;
    flex-grow: 1;
    height: 100%;
    line-height: 130%;
  }

  &-btn {
    background-color: $accent-color;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;

    img {
      width: 12px;
      height: 12px;
    }
  }
}

.bottom-right-bottom.ended {
  justify-content: start;
  align-items: center;
  align-content: start;
  gap: 12px;
  color: $chat-color;
  padding-top: 8px;
  flex-grow: 1;
}

.bottom-right-bottom-reply {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 80px;
  z-index: 1000;
  background-color: #fff;
  padding: 12px 30px;
  gap: 28px;
  max-width: 726px;
}

.bottom-reply-box {
  color: $chat-color;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .bottom-reply-box-meta {
    display: flex;
    justify-content: space-between;
    color: #54ba4a;
  }

  &-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-meta-time {
    font-size: 12px;
  }
}
</style>
