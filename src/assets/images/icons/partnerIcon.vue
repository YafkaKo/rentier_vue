<template>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2805_14823)">
      <path
        d="M1.71875 5.83498V13.1325C1.71875 14.5575 2.73125 15.1425 3.96125 14.4375L5.72375 13.4325C6.10625 13.215 6.74375 13.1925 7.14125 13.395L11.0787 15.3675C11.4762 15.5625 12.1137 15.5475 12.4962 15.33L15.7437 13.47C16.1562 13.23 16.5012 12.645 16.5012 12.165V4.86748C16.5012 3.44248 15.4887 2.85748 14.2587 3.56248L12.4962 4.56748C12.1137 4.78498 11.4762 4.80748 11.0787 4.60498L7.14125 2.63998C6.74375 2.44498 6.10625 2.45998 5.72375 2.67748L2.47625 4.53748C2.05625 4.77748 1.71875 5.36248 1.71875 5.83498Z"
        :stroke="props.isActive ? '#7366FF' : '#2C323F'"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M6.42188 3V12.75"
        :stroke="props.isActive ? '#7366FF' : '#2C323F'"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M11.7969 4.96497V15"
        :stroke="props.isActive ? '#7366FF' : '#2C323F'"
        stroke-opacity="0.8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2805_14823">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({ isActive: Boolean })
</script>
