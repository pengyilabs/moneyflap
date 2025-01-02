<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center px-1">
      <div class="container mt-5">
        <section class="main row">
          <div class="col-12 col-md-7 my-3">
            <h2
              class="text-white fw-bolder display-4 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("mfusd.main-title") }}
            </h2>
            <p class="text-white display-6">
              {{ $t("mfusd.main-subtitle") }}
            </p>
            <p class="text-white">
              {{ $t("mfusd.main-description") }}
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  {{ $t("mfusd.txt.get-in-touch") }}
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 my-3">
            <img src="@/src/assets/img-mfusd-1.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1 pb-4 px-1">
      <div class="container mt-5 col">
        <section class="d-flex flex-column align-items-center">
          <h3
            class="fw-bolder display-3 my-4 text-center w-100"
            style="font-family: Sofia Pro Bold"
            v-html="$t('mfusd.moneyflap-dollar-title')"
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
                      src="@/src/assets/icon-mfusd-rock.png"
                      alt="Rock-Solid Security"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op1-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op1-description") }}
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
                      src="@/src/assets/icon-mfusd-regulated.png"
                      alt="Regulated Stability"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op2-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op2-description") }}
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
                      src="@/src/assets/icon-mfusd-unparalleled.png"
                      alt="Unparalleled Speed"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op3-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op3-description") }}
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
                      src="@/src/assets/icon-mfusd-always-on.png"
                      alt="Always-On, Cost-Free"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op4-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op4-description") }}
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
                      src="@/src/assets/icon-mfusd-interoperable.png"
                      alt="Interoperable, Global Access"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op5-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op5-description") }}
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
                      src="@/src/assets/icon-mfusd-seamless.png"
                      alt="Seamless Integration"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("mfusd.moneyflap-dollar-op6-title") }}
                    </h4>
                    <p class="">
                      {{ $t("mfusd.moneyflap-dollar-op6-description") }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 90">
        <path
          fill="#11b5c7"
          fill-opacity="1"
          d="M0,32L120,42.7C240,53,480,75,720,69.3C960,64,1200,32,1320,16L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      <div style="background: #11b5c7" class="row pt-5 pb-5">
        <div class="row justify-content-center">
          <div class="col-2">
            <div
              style="
                border: 1px solid white;
                border-radius: 50px;
                padding-top: 10px;
                padding-bottom: 10px;
                padding-left: 30px;
                padding-right: 30px;
              "
            >
              <span
                class="d-flex justify-content-center text-white"
                style="text-align: center"
                >{{ $t("mfusd.txt.available-soon") }}</span
              >
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-sm-12 col-lg-9">
            <h3 class="fw-bolder display-3 my-4 text-center w-100 text-white">
              {{ $t("mfusd.global-reach-title") }}
            </h3>

            <div class="row justify-content-center">
              <div style="width: 95%">
                <p class="my-4 text-center text-white">
                  {{ $t("mfusd.global-reach-description") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <img src="../src/assets/map.svg" alt="" srcset="" class="img-map" />
          </div>
        </div>
      </div>
    </section>

    <section style="background: #11b5c7; z-index: 1" class="w-100">
      <div class="smarter-card-background d-flex align-items-center">
        <div
          class="py-4 px-1 w-100 flex-wrap d-flex justify-content-center w-100"
        >
          <h4 class="text-white fw-bolder display-3 my-4 text-center w-100">
            {{ $t("mfusd.who-we-serve-title") }}
          </h4>

          <!-- icons -->
          <div
            style="width: 70%"
            class="d-flex flex-wrap justify-content-center"
          >
            <!-- bank -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  src="../src/assets/bank.svg"
                  alt=""
                  srcset=""
                  class="who-serve-icon"
                />
              </div>

              <div class="text-white">Bank</div>
            </div>

            <!-- fintech -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img src="../src/assets/bank.svg" alt="" srcset="" />
              </div>

              <div class="text-white">Neobanks</div>
            </div>

            <!-- mobile wallet -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  class="who-serve-icon"
                  src="../src/assets/wallet.svg"
                  alt=""
                  srcset=""
                />
              </div>

              <div class="text-white">Mobile wallets</div>
            </div>

            <!-- crypto -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  class="who-serve-icon"
                  src="../src/assets/cripto.svg"
                  alt=""
                  srcset=""
                />
              </div>

              <div class="text-white">Crypto Exchanges</div>
            </div>

            <!-- remittance operators -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  class="who-serve-icon"
                  src="../src/assets/bank.svg"
                  alt=""
                  srcset=""
                />
              </div>

              <div class="text-white">Remittance Operators</div>
            </div>

            <!-- mobile money operators -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  class="who-serve-icon"
                  src="../src/assets/coin.svg"
                  alt=""
                  srcset=""
                />
              </div>

              <div class="text-white">Mobile Money Operators</div>
            </div>

            <!-- payments service providers -->
            <div class="d-flex align-items-center who-serve-container">
              <div>
                <img
                  class="who-serve-icon"
                  src="../src/assets/coin2.svg"
                  alt=""
                  srcset=""
                />
              </div>

              <div class="text-white">Payments Service Providers</div>
            </div>
          </div>
          <!-- end icons -->
        </div>
      </div>
    </section>

    <section
      class="footer d-flex align-items-top justify-content-center py-4 px-1"
      style="background: #11b5c7"
    >
      <div class="container mt-5">
        <div class="text-white d-flex flex-column mt-5">
          <div class="row w-100">
            <div class="col-12 col-md-6">
              <h3
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("mfusd.transparency-title") }}
              </h3>
              <p>
                {{ $t("mfusd.transparency-description") }}
              </p>

              <div class="d-flex flex-row mt-5 flex-wrap">
                <div class="me-3 mt-3">
                  <button
                    class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                  >
                    {{ $t("mfusd.txt.mfusd-transparency-page") }}
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 order-md-first">
              <img
                class="my-4"
                src="@/src/assets/img-mfusd-2.png"
                alt="Core values"
                style="max-width: 100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="d-flex align-items-top justify-content-center py-4 px-1">
      <div class="container mt-5 show-md">
        <section class="d-flex flex-column mt-5">
          <div class="row bg-lightgray rounded-4 p-4">
            <div class="col-12 my-3">
              <div class="d-flex flex-column justify-content-center">
                <h4
                  class="mt-4 display-2"
                  style="font-family: Sofia Pro Bold"
                  v-html="$t('mfusd.moneyflap-dollar-alternative-title')"
                ></h4>
                <div class="my-4"></div>
                <table>
                  <thead>
                    <tr>
                      <th style="width: 30%"></th>
                      <th style="width: 25%">
                        <img
                          src="@/src/assets/logo-moneyflap-usd.png"
                          style="max-width: 200px"
                        />
                      </th>
                      <th style="width: 15%">USDC</th>
                      <th style="width: 15%">USDT</th>
                      <th style="width: 15%">SWIFT<br />Network</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="height: 39px">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op1") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op2") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op3") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op4") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container mt-5 show-sm">
        <section class="d-flex flex-column mt-5">
          <div class="row bg-lightgray rounded-4 p-1">
            <div class="col-12 my-3">
              <div class="d-flex flex-column justify-content-center">
                <h4
                  class="mt-4 display-2"
                  style="font-family: Sofia Pro Bold"
                  v-html="$t('mfusd.moneyflap-dollar-alternative-title')"
                ></h4>
                <div class="my-4"></div>
                <table>
                  <thead>
                    <tr>
                      <th style="width: 30%"></th>
                      <th style="width: 25%">
                        <img
                          src="@/src/assets/logo-moneyflap-usd-mobile.png"
                          style="max-width: 100px"
                        />
                      </th>
                      <th style="width: 15%">USDC</th>
                      <th style="width: 15%">USDT</th>
                      <th style="width: 15%">SWIFT<br />Network</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="height: 39px">
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op1") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op2") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op3") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td><hr style="width: 39px; margin: auto" /></td>
                    </tr>
                    <tr>
                      <td class="border-bottom">
                        {{ $t("mfusd.moneyflap-dollar-alternative-op4") }}
                      </td>
                      <td class="border-bottom">
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                      <td>
                        <img
                          src="@/src/assets/icon-mfusd-check.png"
                          style="max-width: 30px"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <div style="transform: translateY(124px)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#132239"
          fill-opacity="1"
          d="M0,96L120,122.7C240,149,480,203,720,192C960,181,1200,107,1320,69.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>

    <div
      class="footer d-flex align-items-top justify-content-center py-4 px-1"
      style="background: #132239"
    >
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5 align-items-center">
          <img
            class="mx-3 my-4"
            src="@/src/assets/icon-moneyflap-section-3.png"
            style="max-width: 39px"
          />
          <span class="display-5 my-4 text-center text-sm-start">
            <img src="@/src/assets/logo-mfusd-2.png" style="max-width: 170px" />
            <div v-html="$t('mfusd.mfusd-available-title')"></div>
          </span>

          <img
            src="@/src/assets/img-mfusd-coins.png"
            style="max-width: 100%"
            class="my-4"
          />
          <div class="d-flex flex-row mt-5 flex-wrap mb-4">
            <div class="me-3 mt-3">
              <a
                class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                href="https://tally.so/r/nPlGx5"
                target="_blank"
              >
                {{ $t("mfusd.txt.get-in-touch") }}
              </a>
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
.show-md {
  display: block;
}
.show-sm {
  display: none;
}

.smarter-card-background {
  min-height: 60vh;
  background-image: url("@/src/assets/bg-smarter-card.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-color: (20, 35, 57, 57);
}
@media only screen and (max-width: 720px) {
  .show-md {
    display: none;
  }
  .show-sm {
    display: block;
  }
  .header {
    background: #142339 !important;
  }
  .footer {
    background: rgb(20, 35, 57, 57) !important;
  }
  table {
    font-size: x-small;
  }
  table tbody tr td,
  table thead tr th {
    padding: 2px !important;
  }
  .container {
    padding: 2px;
    width: 100%;
  }
  // .row.bg-lightgray {
  //   width: 100%;
  // }
  section {
    width: 100%;
  }
  .col-12.col-md-6 {
    width: 100% !important;
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

.img-map {
  width: 95%;
}

@media (min-width: 600px) and (max-width: 1024px) {
  .img-map {
    width: 92%;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .img-map {
    width: 69%;
  }
}

@media (min-width: 1441px) {
  .img-map {
    width: 69%;
  }
}

.who-serve-container {
  border: 1px solid white;
  border-radius: 50px;
  padding: 16px;
  justify-content: space-between;
  margin: 12px;
}
.who-serve-icon {
  padding-right: 8px;
}
</style>
