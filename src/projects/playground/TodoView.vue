<template>
    <p>{{ title }}</p>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
    //Here we set types and names for props, notice the '?'
    title?: string;
}>(), {
    //Here we set default values for props
});



</script>