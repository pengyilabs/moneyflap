<template>
  <client-only>
    <Vue3Lottie :animationData="animationData" :speed="0.25" />
  </client-only>
</template>

<script>
import animationData from "../../assets/lottie/Logos.json";
export default {
  data() {
    return {
      animationData: animationData,
    };
  },
};
</script>
