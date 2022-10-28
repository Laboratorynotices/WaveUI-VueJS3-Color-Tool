<script setup>
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
const generatedColor = generateRandomColor()

</script>

<template>
    <w-flex column align-center justify-space-evenly :style="{ 'background-color': generatedColor }">
        <h2>{{ generatedColor }}</h2>
        <button>lock</button>
    </w-flex>
</template>
