<template>
  <li>
    <button :class="isActive ? 'list-item active' : 'list-item'">
      <AvatarMain :name="props.name" />
      <div class="item-box">
        <div class="item-box-top">
          <AvatarTitle :name="props.name" />
          <p class="item-box-top-last-message">2 минуты</p>
        </div>
        <div class="item-box-bottom">
          <p class="item-box-bottom-text">
            {{ props.lastMessage }}
          </p>
          <span v-if="props.unread !== 0" class="new-messages">{{ props.unread }}</span>
        </div>
      </div>
    </button>
  </li>
</template>

<script setup>
import AvatarMain from '@/components/ui/AvatarMain.vue'
import AvatarTitle from '@/components/ui/AvatarTitle.vue'

const props = defineProps({ name: String, lastMessage: String, unread: Number, isActive: Boolean })
</script>

<style scoped lang="scss">
li {
  width: 100%;
  max-width: 336px;
}
.list-item {
  display: flex;
  padding: 12px;
  gap: 10px;
  border-bottom: 1px solid #dee2e6;
  max-width: 336px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  &.active,
  &:hover {
    background-color: #f8f7ff;
  }
}
.item-box {
  text-align: start;
  display: flex;
  max-width: 252px;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  height: -webkit-fill-available;
}
.item-box-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-last-message {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: $chat-color;
  }
}
.item-box-bottom {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  &-text {
    line-height: 130%;
    color: $chat-color;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .new-messages {
    color: $green-color;
    font-size: 10.5px;
    line-height: 12px;
    letter-spacing: 0.5px;
    padding: 4px 6px;
    border-radius: 4px;
    background-color: rgba(84, 186, 74, 0.25);
  }
}
</style>
