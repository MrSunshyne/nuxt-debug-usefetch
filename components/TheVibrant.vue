<script setup lang="ts">
const props = defineProps({
    title: String,
    backgroundColor: String
});

const localTitle = computed(() => {
    return props.title ? props.title : 'TheVibrant'
});

const backgroundColor = computed(() => {
    return props.backgroundColor ? props.backgroundColor : 'bg-red-500'
});

</script>

<template>
    <div class="bg-blue-500">
        <div :class="`${backgroundColor} block h-24 w-24`">
            {{ localTitle }}
        </div>
    </div>
</template>