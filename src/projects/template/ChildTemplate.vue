<template>
    <div>
        <p>Count: {{ data.count }}</p>
        <p>Double: {{ doubleCount }}</p>
        <button 
            @click="increment"
        >
            Increase
        </button>
        <br>
        <button
            @click="doubleIncrement"
        >
            Double Increase
        </button>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed, watch, onMounted } from "vue";

/**
 * PROPS
 */
const props = defineProps<{
    initialValue: number;
}>();

/**
 * DATA
 */
const data = reactive({
    count: props.initialValue || 0
});

/**
 * COMPUTED
 */
const doubleCount = computed(() => {
    return data.count * 2;
});

/**
 * WATCH
 */
watch(
    () => data.count,
    (newValue, oldValue) => {
        console.log("Count changed from", oldValue, "to", newValue);
    }
);

/**
 * METHODS
 */
const increment = () => {
    data.count++;
    emit("update", data.count);
};

const doubleIncrement = () => {
    data.count += 2;
    emit("double-update", data.count);
};

/**
 * EMIT
 * In the <template> section we must use $emit. Example: @click="$emit('update')".
 * In a function, we use the emit without the $ sign. Example: emit('update').
 */
const emit = defineEmits<{
    (eventx: "update", value: number): void;//for emit("update", data.count);
    (eventx: "double-update", value: number): void;//for emit("double-update", data.count);
}>();

/**
 * HOOK
 */
onMounted(() => {
    console.log("Component mounted!");
});

</script>

<style scoped></style>
