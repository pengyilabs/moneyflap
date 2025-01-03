<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';


const route = useRoute();

watch(
  () => route.fullPath, // Monitorear cambios en la ruta
  async (newRoute, oldRoute) => {
    if (newRoute !== oldRoute) {
      console.log(`Ruta cambiada de ${oldRoute} a ${newRoute}, recargando la página.`);
      // Forzar la recarga completa de la página para asegurar que Weglot funcione correctamente
      window.location.href = newRoute; // Redirige a la nueva ruta forzando un recargo completo
    }
  }
);
</script>

<template>
  <div
    style="
      font-family: 'Sofia Pro' !important;
      --bs-body-font-family: 'Sofia Pro' !important;
      --bs-font-sans-serif: 'Sofia Pro' !important;
      --bs-font-monospace: 'Sofia Pro' !important;
      /* max-width: 1440px; */
      /* margin: auto; */
    "
  >
    <NuxtPage />
  </div>
</template>
