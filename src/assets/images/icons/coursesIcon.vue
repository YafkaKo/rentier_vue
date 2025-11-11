<template>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2805_14773)">
      <path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        :stroke="props.isActive ? '#7366FF' : '#2C323F'"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M9 10.4998C9.82843 10.4998 10.5 9.82818 10.5 8.99976C10.5 8.17133 9.82843 7.49976 9 7.49976C8.17157 7.49976 7.5 8.17133 7.5 8.99976C7.5 9.82818 8.17157 10.4998 9 10.4998Z"
        stroke="#2C323F"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2805_14773">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({ isActive: Boolean })
</script>
