<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.weglot.com/weglot.min.js'
  script.async = true
  script.onload = () => {
    Weglot.initialize({
      api_key: 'wg_3ee95520eaf5bc7bb4ebe7595494a9008',
    })
  }
  document.head.appendChild(script)
})
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
