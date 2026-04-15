<template>
    <ChildTemplate
        :initialValue="data.value"
        @update="handleUpdate"
        @double-update="handleDoubleUpdate"
    />
</template>

<script setup lang="ts">
import ChildTemplate from "./ChildTemplate.vue";

let data = reactive({
    value: 0
});

const handleUpdate = (value: number) => {
    console.log("New value from child in parent:", value);
};

const handleDoubleUpdate = (value: number) => {
    console.log("New double value from child in parent:", value);
};
</script>

