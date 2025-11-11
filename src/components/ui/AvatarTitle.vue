<template>
  <p class="avatar-title"><img :src="person" alt="person" />{{ props.name }}</p>
</template>

<script setup>
const props = defineProps({ name: String })
import person from '@/assets/images/icons/person.svg'
</script>

<style scoped lang="scss">
.avatar-title {
  font-weight: 500;
  line-height: 120%;
  color: $bold-color;
  img {
    margin-right: 10px;
  }
}
</style>
