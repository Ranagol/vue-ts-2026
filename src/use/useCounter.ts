
export function useCounter(initialValue: number) {

    const count = ref<number>(initialValue);

    function increment() {
        count.value ++;
    }

    const double = computed(
        () => count.value * 2
    )

    watch(
        () => count.value,
        (newValue, oldValue) => {
            console.log("Count changed from", oldValue, "to", newValue);
        }
    );

   
    return {
        count,
        increment,
        double,
    };
}