<script
    setup
    lang="ts"
>
import { ref, watch } from "vue";

interface Props {
    value: string;
    maxLength?: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (e: "update:value", value: string): void;
}>();

// ✅ internal state
const inputValue = ref<string>(props.value);

// ✅ TODO 1: watch for prop changes
// sync props.value -> inputValue

// ✅ TODO 2: handle input event
function onInput(event: Event) {
    // 1. get value from input
    // 2. apply maxLength if exists
    // 3. update inputValue
    // 4. emit "update:value"
}
</script>

<template>
    <input :value="inputValue" @input="onInput" />
</template>