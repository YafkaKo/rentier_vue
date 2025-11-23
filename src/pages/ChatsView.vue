<template>
  <SidebarMain />
  <div class="main-container">
    <HeaderMain />
    <main class="chat-container">
      <div class="top">
        <h2 class="top-title">Курс по достижению финансовых целей</h2>
        <p class="top-notice-messages">{{ totalUnreadCount }} новых сообщений</p>
      </div>
      <div class="bottom">
        <ChatSidebar :chats="chats" :selected-chat-id="selectedChatId" @chat-select="selectChat" />
        <transition-group name="fade-chat">
          <ChatMain
            ref="chatMainRef"
            v-if="selectedChatId"
            :chat="currentChat"
            :selectedChatMessages="selectedChatMessages"
            :selectedChatMessagesAfterClose="selectedChatMessagesAfterClose"
            :role="role"
            @send-message="handleSendMessage"
            @send-message-after-close="handleSendMessageAfterClose"
            @toggle-end-chat="toggleEndChat"
          />
          <ChatEmptyState v-else />
        </transition-group>
      </div>
      <Transition name="fade" mode="out-in">
        <ModalEndChat
          v-if="isModalEndChat"
          @toggle-end-chat="toggleEndChat"
          @confirm-end-chat="confirmEndChat"
          :chats="chats"
          :selected-chat-id="selectedChatId"
        />
      </Transition>
    </main>
    <FooterMain />
  </div>
</template>

<script setup>
import FooterMain from '@/components/layout/FooterMain.vue'
import HeaderMain from '@/components/layout/HeaderMain.vue'
import SidebarMain from '@/components/layout/SidebarMain.vue'
import { computed, nextTick, onMounted, provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ModalEndChat from '@/components/ChatsView/ModalEndChat.vue'
import { useChatStore } from '@/stores/ChatStore'
import ChatSidebar from '@/components/ChatsView/ChatSidebar.vue'
import ChatEmptyState from '@/components/ChatsView/ChatEmptyState.vue'
import ChatMain from '@/components/ChatsView/ChatMain.vue'

const route = useRoute()
const role = ref(route.query.role)
const chatMainRef = ref()
const isReply = ref(false)
const isModalEndChat = ref(false)
const scrollbarRef = ref(null)
const chatStore = useChatStore()
const chats = computed(() => chatStore.chats)
const selectedChatId = computed(() => chatStore.selectedChatId)
const currentChat = computed(() => chatStore.currentChat)
const selectedChatMessages = computed(() => chatStore.selectedChatMessages)
const selectedChatMessagesAfterClose = computed(() => chatStore.selectedChatMessagesAfterClose)
const totalUnreadCount = computed(() => chatStore.totalUnreadCount)

const selectChat = (chatId) => {
  chatStore.selectChat(chatId)
  scrollToBottom()
  closeReply()
}

const handleSendMessage = (messageData) => {
  if (!selectedChatId.value) return

  chatStore.addMessage(selectedChatId.value, messageData)
}

const handleSendMessageAfterClose = (messageData) => {
  if (!selectedChatId.value) return
  chatStore.addMessageAfterClose(selectedChatId.value, messageData)
}
const scrollToBottom = async () => {
  await nextTick()
  if (scrollbarRef.value) {
    const wrap = scrollbarRef.value.wrapRef
    if (wrap) {
      wrap.scrollTop = wrap.scrollHeight
    }
  }
}

const toggleEndChat = (value) => {
  isModalEndChat.value = value
  scrollToBottom()
}

const confirmEndChat = () => {
  if (selectedChatId.value) {
    chatStore.endChat(selectedChatId.value)
  }
  isModalEndChat.value = false
  scrollToBottom()
}
const openReply = () => {
  isReply.value = true
}
const closeReply = () => {
  isReply.value = false
}

provide('chatState', {
  scrollbarRef,
  isReply,
  scrollToBottom,
  openReply,
  closeReply,
})

watch(
  [selectedChatMessages, selectedChatMessagesAfterClose, currentChat],
  () => {
    scrollToBottom()
    closeReply()
  },
  { deep: true },
)

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  position: relative;
}
.chat-container {
  margin-top: 30px;
  border-radius: 15px;
  background-color: #fff;
  margin: 20px auto;
  max-width: 1143px;
  width: 100%;
  max-height: 792px;
  height: 100%;
  box-shadow: 0px 4px 40px 0px #2720781a;
  .top {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 24px 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .bottom {
    display: flex;
    gap: 25px;
  }
}

.top {
  &-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: $bold-color;
  }
  &-notice-messages {
    line-height: 20px;
    letter-spacing: 0.4px;
    color: $chat-color;
  }
}
</style>
