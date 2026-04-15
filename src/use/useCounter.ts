import { computed, reactive } from "vue";

export function useCounter(initialValue: number, step?: number) {

    let data = reactive({
        count: initialValue,
        stepValue: step ?? 1
    })

    const double = computed(() => {
        return data.count * 2;
    });

    function increment() {
        data.count = data.count + data.stepValue;
    }

    function decrement() {
        data.count = data.count - data.stepValue;
    }

    /**
     * There is a trick here... 
     * count: data.count ---> this we can not do here. That will only return the current value, but
     * not a reactive thingy. As soon as we increase/decrese, this will not change! Not reactive!
     * So, to make data.count reactive in the composable return function, we use here a computed,
     * that listens for changes in data.count, and as soon there is a change it returns the new value.
     */
    return {
        count: computed(() => data.count),
        double,
        increment,
        decrement
    };
}