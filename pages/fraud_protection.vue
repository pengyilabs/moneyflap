<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center">
      <div class="container mt-5">
        <section class="main row">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="text-white fw-bolder display-4 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("fraud.main-title") }}
            </h2>
            <p class="text-white">
              {{ $t("fraud.main-description") }}
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  {{ $t("fraud.txt.protect-finances") }}
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-3">
            <img src="@/src/assets/img-fraud-1.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container mt-5 col">
        <section class="d-flex flex-column align-items-center">
          <h3
            class="fw-bolder display-3 my-4 text-center w-100"
            style="font-family: Sofia Pro Bold"
            v-html="$t('fraud.how-protect-users-title')"
          ></h3>
          <div class="row mx-auto" style="max-width: 800px">
            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-military.png"
                      alt="Military-Grade AML/KYC"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op1-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op1-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-scams.png"
                      alt="Real-time Scams Mitigation"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op2-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op2-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-risk.png"
                      alt="Real-time Risk Mitigation"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op3-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op3-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-proactive.png"
                      alt="Proactive Financial Crime Prevention"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op4-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op4-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-numberless.png"
                      alt="Numberless Cards"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op5-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op5-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-security.png"
                      alt="Card Security Controls"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op6-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op6-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 p-2 mx-auto" style="max-width: 100%">
              <div
                class="bg-primary rounded-5 h-100 mf-gradient"
                style="padding: 0.1rem; max-width: 100%"
              >
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <img
                      src="@/src/assets/icon-fraud-account.png"
                      alt="Account Security Controls"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("fraud.how-protect-users-op7-title") }}
                    </h4>
                    <p class="">
                      {{ $t("fraud.how-protect-users-op7-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-4">
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("fraud.how-protect-yourself-title") }}
              </h3>
              <p>
                {{ $t("fraud.how-protect-yourself-description") }}
              </p>

              <ul class="list-unstyled">
                <li>
                  {{ $t("fraud.how-protect-yourself-op1-title") }}
                </li>
                <li>
                  {{ $t("fraud.how-protect-yourself-op2-title") }}
                </li>
                <li>
                  {{ $t("fraud.how-protect-yourself-op3-title") }}
                </li>
                <li>
                  {{ $t("fraud.how-protect-yourself-op4-title") }}
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-6 order-md-first">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-fraud-2.png"
                alt="Core values"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-4">
      <div class="container mt-5">
        <section class="d-flex flex-column mt-5">
          <div class="row bg-lightgray rounded-4 p-4">
            <div class="col-12 col-md-6 my-3">
              <div class="d-flex flex-column justify-content-center">
                <h4
                  class="mt-4 display-2"
                  style="font-family: Sofia Pro Bold"
                  v-html="$t('fraud.support-team-title')"
                ></h4>

                <ul class="list-unstyled">
                  <li>
                    {{ $t("fraud.support-team-op1-title") }}
                  </li>
                  <li>
                    {{ $t("fraud.support-team-op2-title") }}
                  </li>
                  <li>
                    {{ $t("fraud.support-team-op3-title") }}
                  </li>
                  <li>
                    <p>
                      {{ $t("fraud.support-team-op4-title-part1") }}
                      <span>@moneyflap.com</span>
                      {{ $t("fraud.support-team-op4-title-part2") }}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 my-3">
              <img src="@/src/assets/img-fraud-3.png" style="max-width: 100%" />
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  min-height: 80vh;
  background-image: url("@/src/assets/bg-header-website-landing.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  background-color: (20, 35, 57, 57);
}
.footer {
  min-height: 60vh;
  background-image: url("@/src/assets/bg-smarter-card.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: (20, 35, 57, 57);
}
.bg-purple {
  background-color: #a092ff22;
}
.border-white {
  border: 1px solid white;
}
.text-gray {
  color: #64748b;
}
.image-width {
  max-width: 293px;
}
.fixed-width {
  width: 320px;
}
.small-card {
  height: fit-content;
}
.rainbow-border {
  background-image: linear-gradient(150deg, #00cec2 0%, #a092ff 100%);
  padding: 1px;
}
.top-left-icon {
  position: absolute;
  top: -40px;
  background: white;
  border-radius: 50%;
  padding: 9px;
}
.card-gradient {
  background-image: linear-gradient(150deg, #a092ff25 70%, #00cec225 100%);
}
// section.main{
//     background-image: url('@/src/assets/bg-about-us-main.svg');
//     background-size: auto 100%;
//     background-repeat: no-repeat;
//     background-position: right center;
// }
@media only screen and (max-width: 720px) {
  .header {
    background: #142339 !important;
  }
  .footer {
    background: rgb(20, 35, 57, 57) !important;
  }
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
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
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
.bg-lightgray {
  background-color: #e2e8f0;
}
</style>
