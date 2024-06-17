<template>
  <client-only>
    <Vue3Lottie :animationData="animationData" />
  </client-only>
</template>

<script>
import animationData from "../../assets/lottie/Global_Account.json";
export default {
  data() {
    return {
      animationData: animationData,
    };
  },
};
</script>
