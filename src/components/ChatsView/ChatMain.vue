<template>
  <div v-if="currentChat" :key="currentChat.id" class="bottom-right">
    <div class="bottom-right-top" v-if="currentChat?.name">
      <AvatarMain :name="currentChat.name" />
      <AvatarTitle :name="currentChat.name" />
      <OptionButton v-if="role === 'admin'" @toggle-end-chat="$emit('toggle-end-chat', true)" />
    </div>
    <ChatList @handle-reply-message="handleReplyMessage" />
    <ChatForm
      :reply-preview="replyPreview"
      :role="role"
      @send-message="sendMessage"
      @send-message-after-close="sendMessageAfterClose"
    />
  </div>
</template>

<script setup>
import AvatarMain from '@/components/ui/AvatarMain.vue'
import AvatarTitle from '@/components/ui/AvatarTitle.vue'

import OptionButton from '@/components/ui/OptionButton.vue'
import { ref, computed, inject } from 'vue'
import ChatList from './ChatList.vue'
import ChatForm from './ChatForm.vue'
import { useChatStore } from '@/stores/ChatStore'

const props = defineProps({
  chat: Object,
  selectedChatMessages: Array,
  selectedChatMessagesAfterClose: Array,
  role: String,
})
const emit = defineEmits(['send-message', 'send-message-after-close', 'toggle-end-chat'])
const chatStore = useChatStore()
const replyPreview = ref(null)
const currentChat = computed(() => chatStore.currentChat)
const role = computed(() => props.role || 'user')
const chatState = inject('chatState')

const handleReplyMessage = (replyData) => {
  replyPreview.value = {
    messageId: replyData.id,
    sender: replyData.author,
    text: replyData.text,
    time: replyData.time,
  }
  document.querySelector('.bottom-right-bottom-text')?.focus()
  chatState.openReply()
}

const sendMessage = (messageData) => {
  emit('send-message-after-close', messageData)
}
const sendMessageAfterClose = (messageData) => {
  emit('send-message', messageData)
}
</script>

<style scoped lang="scss">
.bottom-right {
  width: 100%;
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &-top {
    display: grid;
    gap: 13px;
    grid-template-columns: 50px 1fr 24px;
    align-items: center;
    margin: 16px 0;
  }
}
</style>
