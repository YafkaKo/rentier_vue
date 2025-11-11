import simpleChats from '@/assets/mock/chats'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useChatStore = defineStore('chat', () => {
  const chats = ref([...simpleChats])

  const selectedChatId = ref()

  const currentChat = computed(() => {
    if (!selectedChatId.value) return -1
    return chats.value.find((chat) => chat.id === selectedChatId.value)
  })

  const selectedChatMessages = computed(() => {
    const chat = currentChat.value
    if (!chat || !chat.messages) return []
    return chat.messages
  })
  const selectedChatMessagesAfterClose = computed(() => {
    const chat = currentChat.value
    if (!chat || !chat.messagesAfterClose) return []
    return chat.messagesAfterClose
  })
  const totalUnreadCount = computed(() => {
    return chats.value.reduce((total, chat) => total + (chat.unread || 0), 0)
  })
  const selectChat = (chatId) => {
    try {
      const chatExists = chats.value.some((chat) => chat.id === chatId)
      if (chatExists) {
        selectedChatId.value = chatId
      }
    } catch (error) {
      console.error(error)
    }
  }

  const addMessage = (chatId, messageData) => {
    try {
      const chatIndex = chats.value.findIndex((chat) => chat.id === chatId)
      if (chatIndex === -1) {
        console.warn(`Чат с ID ${chatId} не найден`)
        return null
      }
      if (!messageData?.text?.trim()) {
        console.warn('Пустое сообщение')
        return null
      }
      const newMessage = {
        id: Date.now(),
        text: messageData.text.trim(),
        time: formatTime(),
        sender: 'me',
        status: 'sent',
        isReply: Boolean(messageData.isReply),
        replyPreview: messageData.replyPreview || null,
      }

      const chat = chats.value[chatIndex]
      if (!chat.messages) chat.messages = []
      if (!chat.messagesAfterClose) chat.messagesAfterClose = []

      if (chat.isEnded) {
        chat.messagesAfterClose.push(newMessage)
      } else {
        chat.messages.push(newMessage)
      }

      chat.lastMessage = messageData.text
      chat.time = newMessage.time

      return newMessage
    } catch (error) {
      console.error('Ошибка в addMessage:', error)
      return null
    }
  }

  const addMessageAfterClose = (chatId, messageData) => {
    try {
      const chatIndex = chats.value.findIndex((chat) => chat.id === chatId)
      if (chatIndex === -1) {
        console.warn(`Чат с ID ${chatId} не найден`)
        return null
      }

      if (!messageData?.text?.trim()) {
        console.warn('Пустое сообщение')
        return null
      }

      const newMessage = {
        id: Date.now(),
        text: messageData.text.trim(),
        time: formatTime(),
        sender: 'me',
        status: 'sent',
        isReply: Boolean(messageData.isReply),
        replyPreview: messageData.replyPreview || null,
      }

      const chat = chats.value[chatIndex]
      if (!chat.messagesAfterClose) chat.messagesAfterClose = []

      chat.messagesAfterClose.push(newMessage)
      chat.lastMessage = messageData.text
      chat.time = newMessage.time

      return newMessage
    } catch (error) {
      console.error('Ошибка в addMessageAfterClose:', error)
      return null
    }
  }

  const endChat = (chatId) => {
    try {
      const chatIndex = chats.value.findIndex((chat) => chat.id === chatId)
      if (chatIndex !== -1) {
        chats.value[chatIndex].isEnded = true
        chats.value[chatIndex].EndedTime = new Date()
      }
    } catch (error) {
      console.error('Ошибка в endChat:', error)
    }
  }

  const formatTime = () => {
    try {
      const date = new Date()
      const hours = date.getHours().toString().padStart(2, '0')
      const minutes = date.getMinutes().toString().padStart(2, '0')
      return `${hours}:${minutes}`
    } catch (error) {
      console.error('Ошибка в formatTime:', error)
      return '00:00'
    }
  }

  return {
    chats,
    selectedChatId,
    currentChat,
    selectedChatMessages,
    selectedChatMessagesAfterClose,
    totalUnreadCount,
    selectChat,
    addMessage,
    addMessageAfterClose,
    endChat,
  }
})
