<template>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2805_14784)">
      <path
        d="M15.1188 3.23999H2.15875C1.36346 3.23999 0.71875 3.8847 0.71875 4.67999V13.32C0.71875 14.1153 1.36346 14.76 2.15875 14.76H15.1188C15.9141 14.76 16.5588 14.1153 16.5588 13.32V4.67999C16.5588 3.8847 15.9141 3.23999 15.1188 3.23999Z"
        stroke="#2F2F3B"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.71875 7.56H16.5588"
        :stroke="props.isActive ? '#7366FF' : '#2C323F'"
        stroke-width="1.44"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2805_14784">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({ isActive: Boolean })
</script>
