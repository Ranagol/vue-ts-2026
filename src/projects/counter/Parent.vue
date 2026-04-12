<template>
    <div>
        <h1>Counter: {{ data.count }}</h1>
        <Child 
            @increment="increment"
        />
    </div>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { reactive } from 'vue';

let data = reactive({
    count: 0
});

const increment = (incrementValue: number) => {
    data.count = data.count + incrementValue;
}


</script>

