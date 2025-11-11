<template>
  <div class="bottom-left">
    <div class="bottom-left-top">
      <input type="text" placeholder="Введите имя" class="bottom-left-top-input" />
    </div>
    <el-scrollbar class="bottom-left-bottom">
      <ul class="bottom-left-bottom-list">
        <ChatItem
          :key="chat.id"
          v-for="chat in chats"
          :name="chat.name"
          :lastMessage="chat.lastMessage"
          :unread="chat.unread"
          @click="$emit('chat-select', chat.id)"
          :isActive="chat.id == selectedChatId"
        />
      </ul>
    </el-scrollbar>
  </div>
</template>

<script setup>
import ChatItem from '@/components/ChatsView/ChatItem.vue'
defineProps({ chats: Object, selectedChatId: Number })
defineEmits(['chat-select'])
</script>

<style scoped lang="scss">
.bottom-left {
  display: flex;
  flex-direction: column;
  max-width: 364px;
}
.bottom-left-top {
  padding: 16px 20px;
}
.bottom-left-top-input {
  padding: 6px 12px 10px 38px;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #dee2e6;
  background-image: url('@/assets/images/icons/Search_Magnifying_Glass.svg');
  background-repeat: no-repeat;
  background-position-x: 12px;
  background-position-y: 7px;
  .bottom::placeholder {
    line-height: 20px;
    letter-spacing: 0.7px;
    vertical-align: middle;
  }
}
.bottom-left-bottom {
  margin-left: 20px;
  margin-bottom: 40px;
  max-height: 605px;
  padding-right: 12px;
}
.bottom-left-bottom:deep(.el-scrollbar__thumb) {
  background-color: #e0ddff;
  width: 4px;
}
</style>
