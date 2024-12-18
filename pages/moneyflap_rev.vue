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
              {{ $t("rev.main-title") }}
            </h2>
            <p
              class="text-white display-6"
              v-html="$t('rev.main-subtitle')"
            ></p>
            <p class="text-white">
              {{ $t("rev.main-description") }}
            </p>
            <div class="d-flex flex-row mt-6 flex-wrap">
              <div class="me-3 mt-3">
                <a
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                  href="https://tally.so/r/wbkP16"
                  target="_blank"
                >
                  {{ $t("rev.txt.join-waitlist") }}
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 my-3">
            <img src="@/src/assets/img-rev-1.png" style="max-width: 100%" />
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
            v-html="$t('rev.global-title')"
          ></h3>
          <div class="row mx-auto">
            <div class="col-12 col-md-5">
              <div class="col-12 p-2" style="max-width: 100%; height: 100%">
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        <img
                          src="@/src/assets/icon-rev-business.png"
                          alt="Business Account"
                        />
                        {{ $t("rev.global-op1-title") }}
                      </h4>
                      <p class="">
                        {{ $t("rev.global-op1-description") }}
                      </p>
                      <img
                        src="@/src/assets/img-rev-business.png"
                        style="width: 100%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7">
              <div class="row">
                <div class="col-12 p-2" style="max-width: 100%">
                  <div
                    class="bg-primary rounded-5 h-100 mf-gradient"
                    style="padding: 0.1rem; max-width: 100%"
                  >
                    <div class="card rounded-5 px-3 h-100">
                      <div class="card-body align-items-end">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <h4
                              class="fw-bolder mt-4"
                              style="font-family: Sofia Pro Bold"
                            >
                              <img
                                src="@/src/assets/icon-rev-treasury.png"
                                alt="Treasury Account"
                              />
                              {{ $t("rev.global-op2-title") }}
                            </h4>
                            <p class="">
                              {{ $t("rev.global-op2-description") }}
                            </p>
                          </div>
                          <div class="col-12 col-md-6">
                            <img
                              src="@/src/assets/img-rev-treasury.png"
                              style="width: 100%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 p-2" style="max-width: 100%">
                  <div
                    class="bg-primary rounded-5 h-100 mf-gradient"
                    style="padding: 0.1rem; max-width: 100%"
                  >
                    <div class="card rounded-5 px-3 h-100">
                      <div class="card-body align-items-end">
                        <div class="row">
                          <div class="col-12 col-md-7">
                            <h4
                              class="fw-bolder mt-4"
                              style="font-family: Sofia Pro Bold"
                            >
                              <img
                                src="@/src/assets/icon-rev-sefaguarding.png"
                                alt="Safeguarding Account"
                              />
                              {{ $t("rev.global-op3-title") }}
                            </h4>
                            <p class="">
                              {{ $t("rev.global-op3-description") }}
                            </p>
                          </div>
                          <div class="col-12 col-md-5">
                            <img
                              src="@/src/assets/img-rev-sefaguarding.png"
                              style="max-width: 100%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div
      class="footer d-flex flex-column align-items-top justify-content-center py-4"
    >
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5">
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("rev.cards-title") }}
              </h3>
              <p>
                {{ $t("rev.cards-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6 order-md-first">
              <img
                class="mx-3 my-4 bg-purple-full rounded-4"
                src="@/src/assets/img-rev-2.png"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5">
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("rev.expense-title") }}
              </h3>
              <p>
                {{ $t("rev.expense-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-rev-3.png"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-4">
      <div class="container">
        <section class="d-flex flex-column">
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("rev.global-pay-title") }}
              </h3>
              <p>
                {{ $t("rev.global-pay-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-rev-4.png"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <section class="wave">
      <div class="container text-white">
        <div class="row">
          <div
            class="col-12 col-md-5 d-flex flex-column justify-content-center"
          >
            <h3
              class="fw-bolder display-3 my-4"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("rev.global-pay-in-title") }}
            </h3>
            <p>
              {{ $t("rev.global-pay-in-description") }}
            </p>
          </div>
          <div class="col-12 col-md-7 order-md-first">
            <img
              class="mx-3 my-4"
              src="@/src/assets/img-rev-5.png"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="d-flex align-items-top justify-content-center py-4">
      <div class="container">
        <section class="d-flex flex-column">
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("rev.accounts-title") }}
              </h3>
              <p>
                {{ $t("rev.accounts-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-rev-6.png"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-4">
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5">
          <div class="row">
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center"
            >
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
                v-html="$t('rev.accounts-receivable-title')"
              ></h3>
              <p>
                {{ $t("rev.accounts-receivable-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6 order-md-first">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-rev-7.png"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container mt-5 col">
        <section class="d-flex flex-column align-items-center">
          <div class="row mx-auto">
            <div class="col-12 col-md-5">
              <div class="col-12 p-2" style="max-width: 100%; height: 100%">
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        <img
                          src="@/src/assets/icon-rev-accounting.png"
                          alt="Accounting & Integrations"
                        />
                        {{ $t("rev.accounts-card1-title") }}
                      </h4>
                      <p class="">
                        {{ $t("rev.accounts-card1-description") }}
                      </p>
                      <img
                        src="@/src/assets/img-rev-accounting.png"
                        style="width: 90%"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7">
              <div class="row">
                <div class="col-12 p-2" style="max-width: 100%">
                  <div
                    class="bg-primary rounded-5 h-100 mf-gradient"
                    style="padding: 0.1rem; max-width: 100%"
                  >
                    <div class="card rounded-5 px-3 h-100">
                      <div class="card-body align-items-end">
                        <div class="row">
                          <div class="col-12 col-md-5">
                            <h4
                              class="fw-bolder mt-4"
                              style="font-family: Sofia Pro Bold"
                            >
                              <img
                                src="@/src/assets/icon-rev-employee.png"
                                alt="Employee Incentives"
                              />
                              {{ $t("rev.accounts-card2-title") }}
                            </h4>
                            <p class="">
                              {{ $t("rev.accounts-card2-description") }}
                            </p>
                          </div>
                          <div class="col-12 col-md-7">
                            <img
                              src="@/src/assets/img-rev-employee.png"
                              style="width: 100%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 p-2" style="max-width: 100%">
                  <div
                    class="bg-primary rounded-5 h-100 mf-gradient"
                    style="padding: 0.1rem; max-width: 100%"
                  >
                    <div class="card rounded-5 px-3 h-100">
                      <div class="card-body align-items-end">
                        <div class="row">
                          <div class="col-12 col-md-6">
                            <h4
                              class="fw-bolder mt-4"
                              style="font-family: Sofia Pro Bold"
                            >
                              <img
                                src="@/src/assets/icon-rev-startup.png"
                                alt="Startup Perks"
                              />
                              {{ $t("rev.accounts-card3-title") }}
                            </h4>
                            <p class="">
                              {{ $t("rev.accounts-card3-description") }}
                            </p>
                          </div>
                          <div class="col-12 col-md-6">
                            <img
                              src="@/src/assets/img-rev-startup.png"
                              style="max-width: 100%"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
          <div
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <h3
              class="fw-bolder display-3 my-4 text-center"
              style="font-family: Sofia Pro Bold"
              v-html="$t('rev.designed-title')"
            ></h3>
            <p>
              {{ $t("rev.designed-description") }}
            </p>
          </div>
          <div
            class="d-flex flex-row flex-wrap justify-content-center align-items-center"
          >
            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-web3.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op1-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-small.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op2-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-restaurant.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op3-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-early.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op4-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-digital.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op5-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-ngos.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op6-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-import.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op7-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-multinational.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op8-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-hospitality.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op9-title") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-row flex-wrap justify-content-center align-items-center"
          >
            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-ipo.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op10-title") }}
                  </p>
                </div>
              </div>
            </div>

            <div class="rainbow-border rounded-5 m-2" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                  <p class="m-0">
                    <img
                      src="@/src/assets/icon-rev-vc.png"
                      style="max-height: 39px"
                    />
                    {{ $t("rev.footer-op11-title") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center m-5"
          >
            <div class="d-flex flex-row mt-6 flex-wrap">
              <div class="me-3 mt-3">
                <a
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                  href="https://tally.so/r/wbkP16"
                  target="_blank"
                >
                  {{ $t("rev.txt.join-waitlist") }}
                </a>
              </div>
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
section.wave {
  background-image: linear-gradient(
    0deg,
    #3e8ee4 2%,
    #00cec2 19%,
    #1cb1d1 62%,
    #705bff 100%
  );
  padding: 7rem 0 5rem;
  // background-color: #4a83eb;
  background-repeat: no-repeat;
  background-size: cover;
}
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
.bg-lightgray {
  background-color: #e2e8f0;
}

table thead tr th {
  padding: 1rem 2rem;
  text-align: center;
}
table tbody tr td {
  padding: 1rem 2rem;
  text-align: center;
}
table tbody tr td:first-child {
  padding: 1rem 2rem;
  text-align: left;
}
.border-bottom {
  border-bottom: 1px solid black !important;
}
.bg-purple-full {
  background: linear-gradient(180deg, #705bff 0%, #32287c 100%) border-box;
}
</style>
