<template>
  <div>
    <h1>🌐 Página Client-Only</h1>
    <p>Esta página se carga estática, pero algunos componentes solo se renderizan en el cliente.</p>
    
    <ClientOnly fallback-tag="span" fallback="⏳ Cargando comentarios...">
      <Comment />
    </ClientOnly>

    <NuxtLink to="/">Volver a la Home</NuxtLink>
  </div>
</template>

<script setup>
import Comment from "@/components/Comment.vue";
</script>
