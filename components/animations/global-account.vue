<template>
  <client-only>
    <Vue3Lottie
      :animationData="animationData"
      :loop="false"
      :speed="0.25"
      :autoPlay="true"
    />
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
