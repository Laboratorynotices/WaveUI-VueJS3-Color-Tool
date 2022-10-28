<script setup>
import ColRandomColor from '@/components/ColRandomColor.vue'

// Количество столбцов
const colCount = 5
</script>

<template>
    <w-grid :columns="colCount">
        <ColRandomColor v-for="i in colCount" :key="i">{{ i }}</ColRandomColor>
    </w-grid>
</template>
