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
  <w-button @click="childTouchColorLocked" class="sh3" bg-color="grey-light3" >
    <svg v-if="colorLocked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80v48c0 17.7 14.3 32 32 32s32-14.3 32-32V144C576 64.5 511.5 0 432 0S288 64.5 288 144v48H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V256c0-35.3-28.7-64-64-64H352V144z"/></svg>
  </w-button>
</template>

<style scoped>
svg {
  height: 1em;
}
</style>
