<script setup>
import { defineProps } from 'vue'

defineProps({
  colorLocked: Boolean
})
</script>

<template>
  <button @click="$emit('touchColorLocked')">
    {{ (colorLocked) ? 'locked' : 'unlocked' }}
  </button>
</template>
