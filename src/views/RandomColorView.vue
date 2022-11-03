<script setup>
import { defineProps } from 'vue'
import ColRandomColor from '@/components/ColRandomColor.vue'

/*
* Ожидаем два значения, которые будут передаваться при помощи маршрутизатора
*/
const props = defineProps({
  colors: String, // коды цвета, разделённые знаком "-"
  columns: String // число столбиков
})

// Разделим код цвета на части, а если было передано пустое значение, то создадим пустой массив.
const colorsArray = (props.colors) ? props.colors.split('-') : []

// Количество столбцов
let colCount = 5

/**
 * Переопределяем сколько столбиков надо создать.
 * А так же соответственно обновим адрес сайта.
 * @param {Number} propsColumns количество столбиков
 */
const setColCount = (propsColumns) => {
  // Если надо переписать число столбиков
  if (propsColumns > 0) {
    colCount = propsColumns
  }

  // Разделяем хеш адреса на части
  const documentLocationHashArray = document.location.hash.split('/')

  // Обновляем хеш странички, чтобы указать число столбиков
  document.location.hash =
    '/' + colCount + '/' +
    // Если на страницу перешли по адресу с кодом
    ((documentLocationHashArray.length === 3)
      ? documentLocationHashArray[2]
      : '')
}
setColCount(Math.max(Number(props.columns), colorsArray.length))
</script>

<template>
    <w-flex class="row fill-height fill-width">
        <ColRandomColor
          v-for="i in colCount" :key="i"
          :color="(i <= colorsArray.length) ? '#'+colorsArray[i-1] : ''"></ColRandomColor>
    </w-flex>
</template>
