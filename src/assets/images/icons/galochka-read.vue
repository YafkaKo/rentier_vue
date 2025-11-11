<template>
  <svg
    class="galochka-svg"
    width="18"
    height="10"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 3.93201L7.68198 7.11399L14.0453 0.75M0.75 3.93201L3.93198 7.11399M10.2959 0.75L7.875 3.19306"
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
