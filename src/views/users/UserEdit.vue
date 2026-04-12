<template>
  <div class="user-edit">
    <h1>Edit User</h1>
    <p>User ID: {{ route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style scoped>
.user-edit {
  color: white;
}
</style>
