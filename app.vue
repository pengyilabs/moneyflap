<script setup>
import { useRouter, useRoute } from 'vue-router';
import { onMounted, watch } from 'vue';

// Función para cargar Weglot de manera asíncrona
const loadWeglot = () => {
  return new Promise((resolve, reject) => {
    if (typeof Weglot !== 'undefined') {
      console.log('Weglot ya está cargado');
      resolve(Weglot);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.weglot.com/weglot.min.js';
    script.async = true;

    script.onload = () => {
      console.log('Script de Weglot cargado correctamente');
      resolve(window.Weglot);
    };
    script.onerror = () => {
      console.error('Error al cargar el script de Weglot');
      reject(new Error('Failed to load Weglot script'));
    };

    document.head.appendChild(script);
  });
};

// Función para inicializar Weglot
const initializeWeglot = async () => {
  try {
    const Weglot = await loadWeglot();
    console.log('Inicializando Weglot');
    Weglot.initialize({
      api_key: 'wg_3ee95520eaf5bc7bb4ebe7595494a9008', // Tu clave API de Weglot
    });
    console.log('Weglot inicializado con éxito');
  } catch (error) {
    console.error('Error inicializando Weglot:', error);
  }
};

// Inicializar Weglot cuando el componente se monte
onMounted(async () => {
  console.log('Componente montado, cargando Weglot');
  await initializeWeglot(); // Inicializa Weglot al montar la página
});

// Detectar cambios de ruta y forzar recarga de la página
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
