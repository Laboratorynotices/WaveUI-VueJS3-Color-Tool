<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Определяем показывать ли кнопку,
 * в зависимости от того как прокручена страница.
 */
const isVisible = () => {
  return (window.scrollY > 100)
}

/**
 * Хранит состояние видна ли кнопка или нет
 */
const visible = ref(isVisible())

/**
 * "Слушает" бегунок и определяет показывать ли
 * кнопку перемотки наверх или нет.
 */
const scrollListener = (e) => {
  visible.value = isVisible()
}

// Лайфхук при генерации сайта
onMounted(() => {
  // Добавляем "слушателя" на прокрутку
  window.addEventListener('scroll', scrollListener)
})

// Лайфхук при уничтожении страницы
onUnmounted(() => {
  // Удаляем "слушателя" на прокрутку
  window.removeEventListener('scroll', scrollListener)
})

/**
 * Функция прокрутки страницы наверх
 */
const scrollTop = () => {
  // функция setInterval() повторяет некое действие
  const intervalId = setInterval(() => {
    // определяем условие окончание повторения
    if (window.pageYOffset === 0) {
      clearInterval(intervalId)
    }
    // прокручиваем окно наверх
    window.scroll(0, window.pageYOffset - 20)
  }, 50) // Пауза между повторениями
}
</script>

<template>
  <transition name="fade">
    <w-button color="success" fixed bottom right v-show="visible" @click="scrollTop">
      ^
    </w-button>
  </transition>

</template>

<style scoped>
/* Анимация для всплытия и скрытия кнопки */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
