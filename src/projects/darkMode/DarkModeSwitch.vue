<template>
    <button @click="toggleDark">
        Toggle dark mode
    </button>
</template>

<script
    setup
    lang="ts"
>

const toggleDark = () => {

    /**
     * document = whole webpage
     * documentElement = the <html> element, where we want to add our 'dark' class
     * classList = built in JS function, that can add/remove/toggle classes
     * toggle('dark') = if dark class is there, removes is. If not, ads it.
     * toggle() returns true, if dark class NOW is present, or returns false if the class was removed
     * isDark = After toggling, are we in dark mode? Is the 'dark' class present, there?
     */
    const isDark = document.documentElement.classList.toggle('dark');

    /**
     * Dark mode toggle works, but on refresh is forgotten. We want our app to remember the dark mode.
     * So, we store the isDark in localStorage.
     * Save the current theme (dark or light) in the browser.
     * 'theme' key will have 'dark' value, if the dark mode is triggered
     */
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
}

/**
 * As said, refresh is a problem. We want our app to remember even after refresh, if it should have
 * dark mode. So, whenever this component is mounted, we check if there is a 'theme' key with 'dark'
 * value in localStorage. If so, then we automatically add the 'dark' class to the <html> element.
 */
onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
        document.documentElement.classList.add('dark')
    }
})

</script>

<style scoped></style>
