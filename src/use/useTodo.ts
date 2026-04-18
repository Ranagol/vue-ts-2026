import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useTodo() {
    const title = ref<string>('')
    const isLoading = ref<boolean>(false)
    const error = ref<string | null>(null)

    const fetchTodo = async () => {
        try {
            isLoading.value = true;
            error.value = null;

            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/todos/1'
            )

            title.value = response.data.title;
            
        } catch (exception) {
            error.value = 'Failed to load todo';
            console.error('Detailed error:', exception);
        } finally {
            isLoading.value = false;
        }
    }

    onMounted( () => {
        fetchTodo();
    });

    return {
        title,
        isLoading,
        error,
        fetchTodo
    }
}