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

    <!-- Search bar for listing todos -->
    <h3>Search</h3>
    <input v-model="data.searchTerm" type="text">

    <!-- List todos -->
    <h3>List todos</h3>
    <div>
        <div
            v-for="todo in data.filteredTodos"
            :key="todo.description"
        >
            <input v-model="todo.description" type="text">
            <input v-model="todo.done" type="checkbox">
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { reactive, watch, onMounted } from 'vue';

interface Todo {
    description: string
    done: boolean
}

let data = reactive({
    searchTerm: null as null|string,
    todos: [] as Todo[],
    todo: {
        description: 'Initial text',
        done: false
    } as Todo,
    filteredTodos: [] as Todo[] | []
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

const filterTodos = (searchTerm: string|null) => {
    if (searchTerm === null) {
        data.filteredTodos = data.todos;
        return;
    }

    let filteredTodos = data.todos.filter( 
        todo => (todo.description.toLowerCase()).includes(searchTerm.toLowerCase())
    );
    data.filteredTodos = {...filteredTodos};
} 

// This triggers todo filtering on every search term input or change
watch(
    () => data.searchTerm,
    (newSearchTerm) => {
        console.log('newSearchTerm:', newSearchTerm);
        filterTodos(newSearchTerm);
    }
);

//Get todos from localStorage
onMounted(() => {
    const saved = localStorage.getItem('todoArray');
    if (saved) {
        console.log('saved:', saved)
        data.todos = JSON.parse(saved);
        filterTodos(null);
    }
});

// Save todos to localStorage
watch(
    () => data.todos,
    (newValue) => {
        console.log('newValue:', newValue)
        localStorage.setItem('todoArray', JSON.stringify(newValue));
    },
    { deep: true }
);








</script>
