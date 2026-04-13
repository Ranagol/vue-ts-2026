<template>
    <h3>Todos</h3>

    <!-- Create todos -->
    <div>
        <label for="description">Description</label>
        <input
            v-model="data.todo.description"
            id="description"
            type="text"
        >

        <label for="done">Status</label>
        <input
            v-model="data.todo.done"
            id="done"
            type="checkbox"
        >

        <button
            @click="create"
            type="button"
        >Create</button>
    </div>

    <!-- List todos -->
    <h3>List todos</h3>
    <div>
        <div
            v-for="todo in data.todos"
            :key="todo.description"
        >
            <input v-model="todo.description" type="text">
            <input v-model="todo.done" type="checkbox">
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Todo {
    description: string
    done: boolean
}

let data = reactive({
    todos: [] as Todo[],
    todo: {
        description: 'Initial text',
        done: false
    } as Todo
});

const create = () => {

    // Add a COPY of the current todo object to the array
    data.todos.push({ ...data.todo })
    
    // Reset the form
    data.todo = {
        description: '',
        done: false
    }
}









</script>
