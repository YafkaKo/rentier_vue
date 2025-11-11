<template>
  <el-scrollbar class="bottom-right-main" :ref="(el) => (chatState.scrollbarRef.value = el)">
    <transition-group name="fade" tag="div" class="bottom-right-main-transition">
      <ChatMessage
        :key="message.id"
        :message-id="message.id"
        v-for="message in selectedChatMessages"
        :is-my="message.sender === 'me'"
        :time="message.time"
        :is-read="message.status === 'read'"
        :message="message.text"
        :name="currentChat?.name"
        :reply-prewiew="message.replyPreview"
        @reply="handleReplyMessage"
      />

      <p v-if="currentChat?.isEnded" class="bottom-right-main-ended">Чат завершен</p>

      <p
        v-if="currentChat?.isEnded && selectedChatMessagesAfterClose?.length > 0"
        class="bottom-right-main-ended open"
      >
        Чат открыт
      </p>

      <ChatMessage
        :key="message.id"
        :message-id="message.id"
        v-for="message in selectedChatMessagesAfterClose"
        :is-my="message.sender === 'me'"
        :time="message.time"
        :is-read="message.status === 'read'"
        :message="message.text"
        :name="currentChat?.name || ''"
        :reply-prewiew="message.replyPreview"
        @reply="$emit('reply')"
      />
    </transition-group>
  </el-scrollbar>
</template>

<script setup>
import ChatMessage from '@/components/ChatsView/ChatMessage.vue'
import { useChatStore } from '@/stores/ChatStore'
import { computed, inject } from 'vue'

const emit = defineEmits(['handle-reply-message'])
const chatStore = useChatStore()
const chatState = inject('chatState')

const currentChat = computed(() => chatStore.currentChat)
const selectedChatMessages = computed(() => chatStore.selectedChatMessages)
const selectedChatMessagesAfterClose = computed(() => chatStore.selectedChatMessagesAfterClose)

const handleReplyMessage = (replyData) => {
  emit('handle-reply-message', replyData)
}
</script>

<style scoped lang="scss">
.bottom-right-main {
  margin: 0 39px;
  background-color: #f7f8f9;
  padding: 10px 10px 15px 10px;
  max-height: 543px;

  &-ended {
    color: #fc4438;
    padding: 8px 64px;
    border-radius: 8px;
    background-color: #ffeff3;
    margin: 0 auto;

    &.open {
      background-color: #e6f5e4;
      color: #54ba4a;
    }
  }

  .bottom-right-main-transition {
    display: flex;
    flex-direction: column;
    gap: 26px;
    height: 100%;
  }
}
</style>
