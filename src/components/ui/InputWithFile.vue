<script setup>
import { ref } from 'vue'

defineProps({
  name: String,
  id: String,
  // label: String
})

const emit = defineEmits(['update:modelValue'])

const placeholderLocal = ref('')

const changeInputFile = (event) => {
  const files = event.target.files

  if (!files || files.length === 0) {
    placeholderLocal.value = ''
    emit('update:modelValue', placeholderLocal.value)
    return
  }

  const fileNames = Array.from(files).map((file) => file.name)
  placeholderLocal.value = fileNames.join(', ')
  console.log(placeholderLocal.value)
  emit('update:modelValue', {
    files: files,
    fileNames: placeholderLocal.value,
    fileCount: files.length,
  })
}
</script>

<template>
  <div class="input-with-icons-container">
    <input
      type="file"
      :name="name"
      multiple
      :id="name"
      accept=".jpg, .jpeg, .png"
      @change="changeInputFile"
    />
    <label class="label-file" :for="name">
      <img src="@/assets/images/icons/InputFile.svg" alt="screpka" />
    </label>
  </div>
</template>

<style lang="scss" scoped>
.input-with-icons-container {
  position: relative;
  display: flex;
  input {
    opacity: 1;
    visibility: hidden;
    position: absolute;
    z-index: 2;
  }
  .label-file {
    border-radius: 12px;
    cursor: pointer;
    padding: 12px 16px;
    line-height: 130%;
    font-size: 16px;
    &::placeholder {
      opacity: 50%;
    }
  }
  p {
    font-size: 12px;
    line-height: 14px;
    padding: 4px 16px 0px 16px;
  }
}
</style>
