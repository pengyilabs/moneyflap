<template>
  <NuxtLayout name="weblayout">
    <div
      class="header d-flex align-items-top justify-content-center py-1 bg-dark"
    >
      <div class="container my-5 col">
        <h2 class="fw-bolder display-2 mt-1">
          {{ $t("licenses.main-title") }}
        </h2>

        <h3>
          <img src="@/src/assets/us-flag.png" height="33px" />
          {{ $t("licenses.op1-title") }}
        </h3>
        <p class="pb-3" v-html="$t('licenses.op1-description')"></p>

        <h3>
          <img src="@/src/assets/Flag-Argentina.webp" height="33px" />
          {{ $t("licenses.op2-title") }}
        </h3>
        <p class="pb-3" v-html="$t('licenses.op2-description')"></p>

        <h3>
          <img src="@/src/assets/senegal-flag.png" height="33px" />
          {{ $t("licenses.op3-title") }}
        </h3>
        <p class="pb-3" v-html="$t('licenses.op3-description')"></p>

        <h3>
          <img src="@/src/assets/Flag_of_Europe.svg" height="33px" />
          {{ $t("licenses.op4-title") }}
        </h3>
        <p class="pb-3" v-html="$t('licenses.op4-description')"></p>

        <h3>
          <img src="@/src/assets/Flag_of_Tanzania.svg" height="33px" />
          {{ $t("licenses.op5-title") }}
        </h3>
        <p class="pb-3" v-html="$t('licenses.op5-description')"></p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  background-image: url("@/src/assets/bg-header-website-landing_2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-color: #142339;
  & * {
    color: white;
  }
}
</style>
