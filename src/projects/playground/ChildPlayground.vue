<template>
    <component
        :is="currentComponent"
        :title="title"
    />

    <button
        @click="fetchTodo"
        :disabled="isLoading"
    >Reload</button>


    
</template>

<script
    setup
    lang="ts"
>
import { computed } from 'vue';
import { useTodo } from '@/use/useTodo';
import LoadingView from './LoadingView.vue';
import TodoView from './TodoView.vue';

const {
    title,
    isLoading,
    error,
    fetchTodo
} = useTodo();

const currentComponent = computed(() => {
    if (isLoading.value === true) {
        return LoadingView;
    }

    return TodoView;
});


</script>
