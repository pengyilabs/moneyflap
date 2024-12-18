<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center py-1">
      <div class="container mt-5 pb-5">
        <h1 class="fw-bolder display-2 mt-1">{{ $t("bsa.main-title") }}</h1>
        <h2>{{ $t("bsa.policy-title") }}</h2>
        <p>
          {{ $t("bsa.policy-description") }}
        </p>

        <h2>{{ $t("bsa.compliance-title") }}</h2>
        <p>
          {{ $t("bsa.compliance-title") }}
        </p>

        <h2>{{ $t("bsa.checking-office-title") }}</h2>
        <p>
          {{ $t("bsa.checking-office-description") }}
        </p>
        <h2>{{ $t("bsa.customer-identification-title") }}</h2>
        <p>
          {{ $t("bsa.customer-identification-description") }}
        </p>
        <h2>{{ $t("bsa.customer-due-title") }}</h2>
        <p>
          {{ $t("bsa.customer-due-description") }}
        </p>
        <ol class="list-unstyled">
          <li>
            <div class="me-2 squareDiv">1</div>
            <span>{{ $t("bsa.customer-due-op1-title") }}</span>
          </li>
          <li>
            <div class="me-2 squareDiv">2</div>
            <span>{{ $t("bsa.customer-due-op2-title") }}</span>
          </li>
          <li>
            <div class="me-2 squareDiv">3</div>
            <span>{{ $t("bsa.customer-due-op3-title") }}</span>
          </li>
          <li>
            <div class="me-2 squareDiv">4</div>
            <span>{{ $t("bsa.customer-due-op4-title") }}</span>
          </li>
          <li>
            <div class="me-2 squareDiv">5</div>
            <span>{{ $t("bsa.customer-due-op5-title") }}</span>
          </li>
          <li>
            <div class="me-2 squareDiv">6</div>
            <span>
              {{ $t("bsa.customer-due-op6-title") }}
            </span>
          </li>
          <li>
            <div class="me-2 squareDiv">7</div>
            <span>
              {{ $t("bsa.customer-due-op7-title") }}
            </span>
          </li>
        </ol>
        <p>
          {{ $t("bsa.customer-due-note") }}
        </p>

        <h2>{{ $t("bsa.monitoring-accounts-title") }}</h2>
        <p>
          {{ $t("bsa.monitoring-accounts-description") }}
        </p>
        <h2>{{ $t("bsa.suspicious-activity-title") }}</h2>
        <p v-html="$t('bsa.suspicious-activity-description')"></p>
        <h2>{{ $t("bsa.aml-title") }}</h2>
        <p>
          {{ $t("bsa.aml-description") }}
        </p>
        <h2>{{ $t("bsa.training-title") }}</h2>
        <p>
          {{ $t("bsa.training-description") }}
        </p>
        <h2>{{ $t("bsa.program-test-title") }}</h2>
        <p>
          {{ $t("bsa.program-test-description") }}
        </p>
        <h2>{{ $t("bsa.monitoring-title") }}</h2>
        <p>
          {{ $t("bsa.monitoring-description") }}
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.header {
  background-image: url("@/src/assets/bg-header-website-landing_2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #142339;
}
ul {
  list-style-type: none;
  padding-left: 0px;
}
.squareDiv {
  height: 2rem;
  width: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-right: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(133deg, #00cec2 33%, #705bff 83%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.squareDiv::before {
  height: 2rem;
  width: 2rem;
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 100%;
  border: 2.5px solid transparent;
  background: linear-gradient(133deg, #00cec2 13%, #705bff 83%) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
ul > li {
  height: 100%;
}
.list-unstyled > li {
  display: flex;
  flex-direction: row;
}
ul > li::before {
  height: 2.5rem;
  width: 28rem;
  max-width: 2rem;
  content: "";
  background-image: url("@/src/assets/vectorialCheck.svg");
  background-repeat: no-repeat;
  display: inline-block;
  background-size: contain;
  margin-right: 1%;
  vertical-align: middle;
}
.container {
  & * {
    color: white;
  }
}
</style>
