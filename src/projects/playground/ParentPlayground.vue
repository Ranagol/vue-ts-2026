<template>
    <div>
        <BaseInput v-model:value="username" :maxLength="10" />

        <p>Parent value: {{ username }}</p>

        <!-- simulate external change -->
        <button @click="username = 'Changed from parent'">
            Change from parent
        </button>
    </div>
</template>

<script
    setup
    lang="ts"
>
import { ref } from "vue";

const username = ref<string>("Hello");
</script>
