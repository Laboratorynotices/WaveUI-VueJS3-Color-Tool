<script setup>
import ColRandomColor from '@/components/ColRandomColor.vue'

// Количество столбцов
const colCount = 5
</script>

<template>
    <w-flex class="row fill-height fill-width">
        <ColRandomColor v-for="i in colCount" :key="i">{{ i }}</ColRandomColor>
    </w-flex>
</template>
