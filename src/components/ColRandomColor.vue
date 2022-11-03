<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue'
import CaptionColRandomColor from '@/components/CaptionColRandomColor.vue'
import ButtonColRandomColor from '@/components/ButtonColRandomColor.vue'

const props = defineProps({
  color: String // код цвета
})

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
const generatedColor = ref((props.color) ? props.color : generateRandomColor())

// Заблокирован ли цвет для изменения
const colorLocked = ref(!!props.color)

/**
 * При нажатии на клавишу пробела будет меняться цвет
 * @param {*} e - event
 */
const keydownListener = (e) => {
  // Функция должна реагировать на клавишу пробела в независимости от системы
  if (e.code.toLowerCase() === 'space' &&
      !colorLocked.value) {
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

/**
 * Переключает значение флага между открытым и закрытым,
 * вызывается из дочернего компонента.
 * А так же исправляет адрес странички, чтобы можно было поделиться цветом
 */
const touchColorLocked = () => {
  // Изменяем значение флага
  colorLocked.value = !colorLocked.value
  // Удаляем из сточки кода цвета первый символ '#', который помешает браузеру
  const colorCode = generatedColor.value.toString().substring(1)

  // Разделяем хеш страницы на части
  const documentLocationHashArray = document.location.hash.split('/')

  const colorCodeHash = documentLocationHashArray[2].replaceAll('-', ' ')

  documentLocationHashArray[2] =
    // Определяем надо ли добавить или удалить код цвета
    ((colorLocked.value)
      // добавляем код к строчке
      ? colorCodeHash + ' ' + colorCode
      // удаляем код из строчки
      : colorCodeHash.replace(colorCode, '')).trim().replace('  ', ' ').replaceAll(' ', '-')

  document.location.hash = documentLocationHashArray.join('/')
}
</script>

<template>
    <w-flex column align-center justify-space-evenly :style="{ 'background-color': generatedColor }">
        <CaptionColRandomColor :generatedColor="generatedColor" />
        <ButtonColRandomColor :colorLocked="colorLocked" @touch-color-locked="touchColorLocked" />
    </w-flex>
</template>
