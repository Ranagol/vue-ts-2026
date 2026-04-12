<template>

    <input 
        type="number" 
        v-model="data.incrementValue"
    />

    <button
        @click="handleClick"
    >Increment by custom number</button>
    
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const data = reactive({
    incrementValue: 0
});

/**
 * We do not need to import defineEmits(), it is always available. So now, here we create an
 * emit, that will be called increment.
 * Using TypeScript generics (<...>) - allows us to type the emitted payload.
 * (event: 'increment', incrementValue: number) – this defines the name of the emit event (which will be
 * 'increment', and the type of the payload of the emit, which will be a number )
 * defineEmits - creates the emit
 * => void → the function doesn’t return anything (emitting an event has no return value). Aka this
 * is bullshit.
 */
const emit = defineEmits<(event: 'increment', incrementValue: number) => void>();

const handleClick = () => {
    emit('increment', data.incrementValue);
}


</script>