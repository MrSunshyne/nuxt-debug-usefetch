<script setup lang="ts">
const props = defineProps({
    title: String,
});

const localTitle = computed(() => {
    return 'dynamic'
});

</script>

<template>
    <div :class="`bg-gray-200 h-24 w-24`">
        {{ localTitle }}
    </div>
</template>