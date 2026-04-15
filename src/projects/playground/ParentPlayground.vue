<template>
    <ChildPlayground
        :count="count"
        @increment="increase"
    />

   
</template>

<script
    setup
    lang="ts"
>
import ChildPlayground from './ChildPlayground.vue';

const count = ref(0)

const increase = (step: number) => {
  count.value = count.value + step;
}

</script>
