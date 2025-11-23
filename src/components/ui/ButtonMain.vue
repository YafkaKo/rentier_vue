<template>
  <button class="button-main">{{ text }}</button>
</template>

<script setup>
defineProps({text:String})
</script>

<style lang="scss" scoped>
  .button-main{
    padding: 7px 0;
    background-color: $accent-color;
    color: #fff;
    border-radius: 6px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }
</style>