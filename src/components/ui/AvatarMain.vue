<template>
  <div class="avatar-main">{{ isMy ? 'В' : props.name.slice(0, 1) }}</div>
</template>

<script setup>
const props = defineProps({ name: String, isMy: Boolean })
</script>

<style scoped lang="scss">
.avatar-main {
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 50%;
  background-color: greenyellow;
  font-size: 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
