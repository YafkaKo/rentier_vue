<template>
  <svg width="18" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.75 3.93201L3.93198 7.11399L10.2953 0.75"
      :stroke="props.isMy ? 'white' : '#52526CCC'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const props = defineProps({ isMy: Boolean })
</script>
