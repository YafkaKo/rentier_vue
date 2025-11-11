<template>
  <li :class="props.isActive ? 'nav-item active' : 'nav-item'">
    <slot />
    <p>{{ props.text }}</p>
    <div class="galochka">></div>
  </li>
</template>

<script setup>
const props = defineProps({
  alt: String,
  source: String,
  text: String,
  isDangerous: Boolean,
  isActive: Boolean,
  isDropList: Boolean,
})
</script>

<style scoped lang="scss">
.nav-item {
  cursor: pointer;
  padding: 13px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: $chat-color;
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;

  p {
    line-height: 21px;
    vertical-align: middle;
  }
  &.active,
  &:hover {
    background-color: #f1f0ff;
    color: $accent-color;
    .Icon {
      stroke: $accent-color;
    }
  }
  .galochka {
    position: absolute;
    right: 20px;
    top: 14px;
    font-weight: 400;
  }
}
</style>
