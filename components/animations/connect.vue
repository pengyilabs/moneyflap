<template>
  <client-only>
    <Vue3Lottie :animationData="animationData" />
  </client-only>
</template>

<script>
import animationData from "../../assets/lottie/Connect.json";
export default {
  data() {
    return {
      animationData: animationData,
    };
  },
};
</script>
