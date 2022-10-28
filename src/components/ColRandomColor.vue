<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Функция по генерации кода цвета для столбцов
 */
const generateRandomColor = () => {
  // Список символов, которые будем использовать для генерации
  const hexCodes = '0123456789ABCDEF'

  // В этой переменной будем хранить сгенерированный цвет
  let color = '#'

  /* В цвете используется 6 шестнадцатизначных символов,
   * вот и выполним цикл шесть раз.
  */
  for (let i = 0; i < 6; i++) {
    // Добавляем к коду цвета очередной симвл
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  }

  return color
}

// Тут будем хранить сгенерированный цвет, поскольку его использовать будем несколько раз
const generatedColor = ref(generateRandomColor())

/**
 * При нажатии на клавишу пробела будет меняться цвет
 * @param {*} e - event
 */
const keydownListener = (e) => {
  // Функция должна реагировать на клавишу пробела в независимости от системы
  if (e.code.toLowerCase() === 'space') {
    // Обновляем цветовой код
    generatedColor.value = generateRandomColor()
  }
}

// Лайфхук при генерации сайта
onMounted(() => {
  // Добавляем "слушателя" на нажатие клавиш
  document.addEventListener('keydown', keydownListener)
})

// Лайфхук при уничтожении страницы
onUnmounted(() => {
  // Удаляем "слушателя" на нажатие клавиш
  document.removeEventListener('keydown', keydownListener)
})

</script>

<template>
    <w-flex column align-center justify-space-evenly :style="{ 'background-color': generatedColor }">
        <h2>{{ generatedColor }}</h2>
        <button>lock</button>
    </w-flex>
</template>
