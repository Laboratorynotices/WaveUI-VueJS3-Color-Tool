<script setup>
import { defineProps } from 'vue'

defineProps({
  generatedColor: String
})

/**
 * Копирует переданную строчку в буфер обмена
 * @param {String} text - Строчка, которая будет скопирована в буфер обмена
 */
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <w-tooltip top>
    <template #activator="{ on }">
      <w-tag class="pa3 sh3 text-bold" bg-color="grey-light3" round xl
        @click="copyToClipboard(generatedColor)" v-on="on" style="cursor: pointer;">
        {{ generatedColor }}
      </w-tag>
    </template>
    Click to Copy<br /> to Clipboard
  </w-tooltip>
</template>
