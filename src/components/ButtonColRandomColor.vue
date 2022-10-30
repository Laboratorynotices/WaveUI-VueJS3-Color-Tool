<script setup>
import { defineProps, defineEmits } from 'vue'
const emit = defineEmits(['touchColorLocked'])

defineProps({
  colorLocked: Boolean
})

/**
 * Обрабатываем клик-событие по кнопке.
 * Нужно, чтобы отсеивать ложные срабатывания при нажатии на клавишу "пробел".
 * @param {event} e - клик-событие, передающееся от HTML-документа
 */
const childTouchColorLocked = (e) => {
  // Отсеиваем срабатывания, вызванные нажатием клавиши "пробел".
  if (e.x === 0) {
    // Если кликать по кнопке мышкой, то с событием передаётся и положение курсора.
    // А если событие вызывается нажатием клавиши "пробел", то это значение равно нулю.
    e.preventDefault()
  } else {
    // Если правильно сработало, то отправляем событие родительскому компоненту.
    emit('touchColorLocked')
  }
}
</script>

<template>
  <button @click="childTouchColorLocked">
    {{ (colorLocked) ? 'locked' : 'unlocked' }}
  </button>
</template>
