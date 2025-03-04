<template>
  <div>
    <h1>Página Dinámica</h1>
    <p>Esta página se renderiza **solo en el cliente (CSR)**.</p>
    <p>Hora actual: {{ time }}</p>
    <NuxtLink to="/">Volver al SSG</NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const time = ref("");

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
});
</script>

