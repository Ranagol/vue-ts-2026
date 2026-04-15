<template>
    <div>
        <p>Count: {{ count }}</p>

        <!-- ❗ Task: show computed label here -->
        <p>Status: {{ status }}</p>

        <button @click="onClick">Increase</button>
    </div>
</template>

<script
    setup
    lang="ts"
>

const props = defineProps<{
    count: number;
}>();

const step = 5;

const onClick = () => {
    emit('increment', step);
}

const status = computed(
    () => {
        if (props.count < 10) {
            return 'Low';
        } 
        return 'High';
        
    }
);

// ❗ TASK:
// Add a watch that logs to console:
// "Count changed: X"
watch(
    () => props.count,
    (newValue, oldValue) => {
        console.log("Count changed from", oldValue, "to", newValue);
    }
);


/**
 * EMIT
 * In the <template> section we must use $emit. Example: @click="$emit('increment')".
 * In a function, we use the emit without the $ sign. Example: emit('increment').
 */
const emit = defineEmits<{
    (e: "increment", step: number): void;    
}>();

</script>
