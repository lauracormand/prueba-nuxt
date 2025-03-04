<template>
  <div>
    <h1>🚀 Página Híbrida (SSG + CSR)</h1>
    <p>Este contenido es <strong>pre-renderizado</strong> para el SEO (SSG).</p>

    <p><strong>Hora de carga (SSG):</strong> {{ initialTime }}</p>
    <p><strong>Hora actual (CSR):</strong> {{ time }}</p>

    <NuxtLink to="/">Volver a la Home</NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const initialTime = ref(new Date().toLocaleTimeString());
console.log("⏳ Hora de carga (SSG):", initialTime.value);

const time = ref("Cargando...");

onMounted(() => {
  setInterval(() => {
    time.value = new Date().toLocaleTimeString();
    console.log("⏰ Hora actualizada (CSR):", time.value);
  }, 1000);
});
</script>

