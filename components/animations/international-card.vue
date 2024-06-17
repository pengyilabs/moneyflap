<template>
  <client-only>
    <Vue3Lottie :animationData="animationData" />
  </client-only>
</template>

<script>
import animationData from "../../assets/lottie/International_Card.json";
export default {
  data() {
    return {
      animationData: animationData,
    };
  },
};
</script>
