<template>
  <NuxtLayout name="weblayout">
    <section
      class="header d-flex align-items-center justify-content-center py-5"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="">
              <h1
                class="text-white fw-bolder display-4 mt-4 text-center text-sm-start"
                style="font-family: Sofia Pro Bold"
                v-html="$t('index.main-title')"
              ></h1>
              <p
                class="text-white my-4 lh-lg fw-medium text-center text-sm-start"
                v-html="$t('index.subtitle-header')"
              ></p>
            </div>
            <div class="">
              <div class="show-md">
                <div class="d-flex flex-row flex-wrap mt-5">
                  <div class="me-3 mt-3">
                    <button
                      class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                    >
                      {{ $t("index.buttons.get-started") }}
                    </button>
                  </div>
                  <div class="me-3 mt-3">
                    <RouterLink
                      class="btn btn-outline-light btn-lg rounded-5 px-4"
                      aria-current="page"
                      to="/supported_countries/"
                    >
                      {{ $t("index.buttons.see-our-coverage") }}
                    </RouterLink>
                  </div>
                </div>
              </div>

              <div class="show-sm">
                <div
                  class="d-flex flex-row flex-wrap mt-5 justify-content-center"
                >
                  <div class="me-3 mt-3">
                    <button
                      class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                    >
                      {{ $t("index.buttons.get-started") }}
                    </button>
                  </div>
                  <div class="me-3 mt-3">
                    <RouterLink
                      class="btn btn-outline-light btn-lg rounded-5 px-4"
                      aria-current="page"
                      to="/supported_countries/"
                    >
                      {{ $t("index.buttons.see-our-coverage") }}
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 d-flex justify-content-center justify-content-md-start"
              >
                <button
                  class="btn btn-outline-light border-2 rounded-circle icon-circle me-3"
                  style="--bs-btn-hover-bg: transparent"
                >
                  <IconsPlaystore />
                </button>
                <button
                  class="btn btn-outline-light border-2 rounded-circle icon-circle"
                  style="--bs-btn-hover-bg: transparent"
                >
                  <IconsAppleIcon />
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <AnimationsPhones />

            <!-- <img -->
            <!--   src="@/src/assets/img-header-moneyflap-app.png" -->
            <!--   alt="MoneyFlap" -->
            <!--   style="max-width: 100%" -->
            <!-- /> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Global Account that prioritizes you  -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-4"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.global-account-title')"
            ></h2>
            <p
              class="py-4 lh-lg fw-medium"
              v-html="$t('index.global-account-description')"
            ></p>
            <button class="btn btn-dark btn-lg rounded-5 px-4">
              {{ $t("index.buttons.get-started") }}
            </button>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <AnimationsGlobalAccount />
          </div>
        </div>
      </div>
    </section>

    <!-- Earn up to 5.30% U.S. Treasury yields, on-chain   -->
    <section class="py-2 pb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-4"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.earn-money-title')"
            ></h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              {{ $t("index.earn-money-description") }}
            </p>
            <!-- <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button> -->
          </div>
          <div class="col-12 col-md-6 order-md-first mt-5 mt-md-0">
            <img
              src="@/src/assets/img-earns-treasury-yields.png"
              alt="img-global-account-with-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!--Teleport your money from one country to another, fee-free   -->
    <section class="teleport-bg"></section>
    <section class="teleport">
      <div class="container">
        <div class="row row-cols-sm-2">
          <div class="col-12 col-md-7">
            <h2
              class="fw-bolder display-4 text-white"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.teleport-money-title')"
            ></h2>
            <p class="text-white lh-lg mt-5">
              {{ $t("index.teleport-money-description") }}
            </p>
          </div>
          <div class="col-12 col-md-5 d-flex">
            <img
              src="@/src/assets/Earth.gif"
              class="img-fluid"
              alt=""
              style="max-width: 100%"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 my-4">
            <div style="height: 100%" class="rainbow-border rounded-5">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    {{ $t("index.teleport-money-card1") }}
                  </p>
                  <div class="top-left-icon">
                    <img
                      src="@/src/assets/icon-send-money.svg"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 my-4">
            <div class="rainbow-border rounded-5" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    {{ $t("index.teleport-money-card2") }}
                  </p>
                  <div class="top-left-icon">
                    <img
                      src="@/src/assets/icon-send-money-fast.svg"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4 my-4">
            <div class="rainbow-border rounded-5" style="height: 100%">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient money-card"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    {{ $t("index.teleport-money-card3") }}
                  </p>
                  <div class="top-left-icon">
                    <img
                      src="@/src/assets/icon-send-crypto.svg"
                      alt=""
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pay With The Most International Card   -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-3"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.pay-most-title')"
            ></h2>
            <p
              class="py-4 lh-lg fw-medium text-secondary"
              v-html="$t('index.pay-most-description')"
            ></p>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 order-md-first">
            <AnimationsInternationalCard />
          </div>
        </div>

        <section>
          <div class="row">
            <div class="col-12" style="display: flex; justify-content: center">
              <div>
                <h3
                  style="
                    font-size: 50px;
                    color: #142339;
                    font-weight: 900;
                    line-height: 67px;
                  "
                >
                  {{ $t("index.rewards-title") }}
                </h3>
                <div style="display: flex; justify-content: center">
                  <p
                    style="
                      font-size: 20px;
                      color: #212121;
                      font-weight: 600;
                      line-height: 24px;
                    "
                  >
                    {{ $t("index.coming-soon") }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style="padding-bottom: 16px; margin: 16px">
            <div class="col-12">
              <div class="row" style="display: flex; justify-content: center">
                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                    margin-right: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card1") }}
                    </span>
                  </div>
                </div>

                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card2") }}
                    </span>
                  </div>
                </div>

                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                    margin-right: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card3") }}
                    </span>
                  </div>
                </div>

                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                    margin-right: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card4") }}
                    </span>
                  </div>
                </div>

                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card5") }}
                    </span>
                  </div>
                </div>

                <div
                  class="col-xs-12 col-lg-5"
                  style="
                    box-shadow:
                      rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
                      rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
                      rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
                      rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
                      rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
                      rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
                      rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
                    border-radius: 1px;
                    padding: 16px;
                    margin: 16px;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <img
                      style="padding-right: 16px"
                      src="@/src/assets/pr.svg"
                      alt=""
                    />

                    <span
                      style="
                        font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                      "
                    >
                      {{ $t("index.rewards-card6") }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Smarter Card  -->
    <section class="smarter-card">
      <div class="container text-center">
        <h2
          class="fw-bolder display-4 text-light mb-4"
          style="font-family: Sofia Pro Bold"
        >
          {{ $t("index.smarter-card") }}
        </h2>
        <video
          :autoplay="true"
          :loop="false"
          width="100%"
          :muted="true"
          :controls="false"
          preload="metadata"
        >
          <source src="@/src/assets/cards-moneyflap.mp4" type="video/mp4" />
        </video>
      </div>
    </section>

    <!-- Travel Benefits & Perks -->
    <section class="py-5 mf-gradient-vertical">
      <div class="container d-flex justify-content-center">
        <div class="row my-5">
          <div class="col-12 text-center">
            <h2
              class="fw-bolder display-4 text-light"
              v-html="$t('index.travel-benefits-perks')"
            ></h2>
            <p class="h3 fw-bolder text-light">
              {{ $t("index.buttons.available-soon") }}
            </p>
          </div>
        </div>
      </div>

      <div class="container d-flex justify-content-center">
        <div class="row">
          <div class="col-xs-12 col-lg-3">
            <div class="row">
              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/auto-rental-insurance.svg"
                      alt="Auto Rental Insurance"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op1") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/extended-warranty-coverage.svg"
                      alt="Extended Warranty Coverage"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op2") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/visa-digital-concierge-service.svg"
                      alt="Visa Digital Concierge Service"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op3") }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-lg-3">
            <div class="row">
              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/cell-phone-insurance.svg"
                      alt="Cell Phone Insurance"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op4") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/baggage-loss-insurance.svg"
                      alt="Baggage Loss Insurance"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op5") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/visa-luxury-hotel-collection.svg"
                      alt="Visa Luxury Hotel Collection"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op6") }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-lg-3">
            <div class="row">
              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/purchase-protection.svg"
                      alt="Purchase Protection"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op7") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/baggage-delay-insurance.svg"
                      alt="Baggage Delay Insurance"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op8") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/visa-airport-companion.svg"
                      alt="Visa Airport Companion"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op9") }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-lg-3">
            <div class="row">
              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/return-protection.svg"
                      alt="Return Protection"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op10") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/emergency-medical-service.svg"
                      alt="Emergency Medical Service"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op11") }}</div>
                </div>
              </div>

              <div class="col-12 pb-4">
                <div class="d-flex align-items-center text-white">
                  <div class="pe-3">
                    <img
                      src="@/src/assets/emergency-medical-services.svg"
                      alt="Emergency Medical Services"
                      class="icon-size-travel-benefits"
                    />
                  </div>
                  <div>{{ $t("index.travel-benefits-perks-op12") }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- stats -->
    <section class="py-5" style="background: #deedff">
      <div class="container">
        <div class="row my-5" style="display: flex; justify-content: center">
          <div
            class="col-xs-12 col-lg-3"
            style="display: flex; justify-content: center"
          >
            <div>
              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 45px; color: #5096ff">Material</span>
                </div>
              </div>

              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 25px">{{
                    $t("index.stats-txt-1")
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xs-12 col-lg-3"
            style="display: flex; justify-content: center"
          >
            <div style="align-content: center">
              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <img
                    src="@/src/assets/visa-blue.svg"
                    alt="Auto Rental Insurance"
                    style="width: 132.5px; height: 63.75px"
                  />
                </div>
              </div>

              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 25px">{{
                    $t("index.stats-txt-2")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row my-5" style="display: flex; justify-content: center">
          <div
            class="col-xs-12 col-lg-3"
            style="display: flex; justify-content: center"
          >
            <div>
              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 45px; color: #5096ff">0$</span>
                </div>
              </div>

              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 25px">{{
                    $t("index.stats-txt-3")
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xs-12 col-lg-3"
            style="display: flex; justify-content: center"
          >
            <div>
              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 45px; color: #5096ff">0$</span>
                </div>
              </div>

              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 25px">{{
                    $t("index.stats-txt-4")
                  }}</span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="col-xs-12 col-lg-3"
            style="display: flex; justify-content: center"
          >
            <div>
              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 45px; color: #5096ff">50,000</span>
                </div>
              </div>

              <div class="row">
                <div
                  class="col-12"
                  style="
                    text-align: center;
                    display: flex;
                    justify-content: center;
                  "
                >
                  <span style="font-size: 25px">{{
                    $t("index.stats-txt-5")
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Earn up to 35%  -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-5">
            <h2
              class="fw-bolder display-4 text-info"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("index.earn-up-title") }}
            </h2>
            <p class="h3 mt-3 mb-5" style="font-family: Sofia Pro Bold">
              {{ $t("index.earn-up-subtitle") }}
            </p>
            <p class="fw-medium">
              {{ $t("index.earn-up-description") }}
            </p>
          </div>
          <div class="col-12 col-md-7">
            <img
              src="@/src/assets/img-earn-up-to-35-percent-moneyflap.png"
              alt="img-earn-up-to-35-percent-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Logos  -->
    <section class="wave">
      <div class="container text-center show-md">
        <AnimationsLogos />
      </div>
      <div class="container text-center show-sm overflow-x-hidden">
        <!-- <AnimationsLogos /> -->
        <div class="d-flex flex-row logo-div1">
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-walmart.svg"
            alt="Walmart"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-aliexpress.svg"
            alt="Aliexpresst"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-temu.svg"
            alt="Temu"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-banggood.svg"
            alt="banggood"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-microsoft.svg"
            alt="microsoft"
          />
        </div>
        <div class="d-flex flex-row logo-div2">
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-sephora.svg"
            alt="sephora"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-lookfantastic.svg"
            alt="lookfantastic"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-nike.svg"
            alt="nike"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-boohoo.svg"
            alt="boohoo"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-bloomingdales.svg"
            alt="bloomingdales"
          />
        </div>
        <div class="d-flex flex-row logo-div3">
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-lenovo.svg"
            alt="lenovo"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-booking.svg"
            alt="booking"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-expedia.svg"
            alt="expedia"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-viator.svg"
            alt="viator"
          />
          <img
            class="logo px-3 py-2"
            style="max-height: 56px; max-width: 100%"
            src="@/src/assets/logo-oldnavy.svg"
            alt="oldnavy"
          />
        </div>
      </div>
    </section>

    <!-- Moneyflap Account  -->
    <section class="wave-hair py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-1"></div>
          <div class="col-12 col-md-10">
            <h2
              class="fw-bolder display-5 text-center my-5"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("index.your-moneyflap-title") }}
            </h2>
          </div>
          <div class="col-12 col-md-1"></div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row justify-content-center">
          <!-- Left Arrow Button -->
          <div
            class="col-12 col-md-1 d-flex flex-column align-items-center justify-content-center"
          >
            <button
              class="btn btn-outline-light border-0 rounded-circle icon-circle text-gradient carousel-buttons-navigation"
              @click="accountBack"
            >
              <img src="@/src/assets/chevron-left-gradient.png" alt="back" />
            </button>
          </div>

          <!-- Carousel Container -->
          <div class="col-12 col-md-10">
            <div
              ref="carouselContainer"
              class="d-flex flex-row carousel-scroll"
              style="scroll-behavior: smooth"
            >
              <!-- Slide Items -->
              <div
                v-for="(item, index) in slides"
                :key="index"
                class="col-12 col-md-6 col-lg-4 p-2"
                style="max-width: 90%"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <img :src="item.icon" :alt="item.alt" />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        {{ item.title }}
                      </h4>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Arrow Button -->
          <div
            class="col-12 col-md-1 d-flex flex-column align-items-center justify-content-center"
          >
            <button
              class="btn btn-outline-light border-0 rounded-circle icon-circle text-gradient carousel-buttons-navigation"
              @click="accountNext"
            >
              <img src="@/src/assets/chevron-right-gradient.png" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Real-time Spending Insights and Analytics   -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-4"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.real-time-title')"
            ></h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              {{ $t("index.real-time-spending-description") }}
            </p>
            <button class="btn btn-dark btn-lg rounded-5 px-4">
              {{ $t("index.buttons.get-started") }}
            </button>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 order-md-first">
            <AnimationsInsights />
          </div>
        </div>
      </div>
    </section>

    <!-- Connect, Feel, and Engage Like You’re There!   -->
    <section class="py-5 wave-hair">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-4"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.connect-feel-title')"
            ></h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              {{ $t("index.connect-feel-description") }}
            </p>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <AnimationsConnect />
          </div>
        </div>
      </div>
    </section>

    <!-- Two sections fast loans, sims -->
    <section class="py-5 mf-gradient-vertical">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-12 col-md-6">
            <h2
              class="fw-bolder display-4 text-light"
              style="font-family: Sofia Pro Bold"
              v-html="$t('index.fast-loans-title')"
            ></h2>
            <p class="py-4 lh-lg fw-medium text-light">
              {{ $t("index.fast-loans-description") }}
            </p>
            <p
              class="h3 fw-bolder text-light"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("index.buttons.available-soon") }}
            </p>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 text-center order-md-first">
            <AnimationsFastLoans />
          </div>
        </div>
      </div>
    </section>

    <section class="wave-top py-5">
      <div class="bg-glare">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-8">
              <h2
                class="fw-bolder display-4 text-light"
                style="font-family: Sofia Pro Bold"
                v-html="$t('index.sims-too-title')"
              ></h2>
              <p class="py-4 lh-lg fw-medium text-light">
                {{ $t("index.sims-too-description") }}
              </p>
              <p
                class="h3 fw-bolder text-light"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("index.buttons.available-soon") }}
              </p>
            </div>
            <div class="col-12 col-md-4 mt-5 mt-md-0">
              <AnimationsSims />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-dark py-5">
      <div class="container mb-5">
        <h2
          class="fw-bolder display-4 text-light text-center mb-5"
          style="font-family: Sofia Pro Bold"
        >
          {{ $t("index.take-security-title") }}
        </h2>

        <div class="row" style="max-width: 100%">
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
              style="height: 100%"
              class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg"
            >
              <div class="card-body">
                <img
                  src="@/src/assets/icon-compliance.svg"
                  class="icon-w-bg"
                  alt="icon-compliance"
                  style="max-width: 100%"
                />
                <div class="px-4 pb-3">
                  <h4 class="card-title" style="font-family: Sofia Pro Bold">
                    {{ $t("index.take-security-card1-title") }}
                  </h4>
                  <p>
                    {{ $t("index.take-security-card1-description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
              style="height: 100%"
              class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg"
            >
              <div class="card-body">
                <img
                  src="@/src/assets/icon-breakfree-control.svg"
                  class="icon-w-bg"
                  alt="icon-breakfree-control"
                  style="max-width: 100%"
                />
                <div class="px-4 pb-3">
                  <h4 class="card-title" style="font-family: Sofia Pro Bold">
                    {{ $t("index.take-security-card2-title") }}
                  </h4>
                  <p>
                    {{ $t("index.take-security-card2-description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
              style="height: 100%"
              class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg"
            >
              <div class="card-body">
                <img
                  src="@/src/assets/icon-bankruptcy-remote.svg"
                  class="icon-w-bg"
                  alt="icon-bankruptcy-remote"
                />
                <div class="px-4 pb-3">
                  <h4 class="card-title" style="font-family: Sofia Pro Bold">
                    {{ $t("index.take-security-card3-title") }}
                  </h4>
                  <p>
                    {{ $t("index.take-security-card3-description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
              style="height: 100%"
              class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg"
            >
              <div class="card-body">
                <img
                  src="@/src/assets/icon-vip-customer-support.svg"
                  class="icon-w-bg"
                  alt="icon-vip-customer-support"
                />
                <div class="px-4 pb-3">
                  <h4 class="card-title" style="font-family: Sofia Pro Bold">
                    {{ $t("index.take-security-card4-title") }}
                  </h4>
                  <p>
                    {{ $t("index.take-security-card4-description") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container text-center">
        <h3
          class="text-info fw-bolder display-6 mb-3"
          style="font-family: Sofia Pro Bold"
        >
          {{ $t("index.your-legacy-title") }}
        </h3>
        <p class="lead">
          {{ $t("index.your-legacy-description") }}
        </p>
        <button
          class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mt-4 mf-gradient"
        >
          {{ $t("index.buttons.get-started") }}
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
import IconGlobalCashin from "@/src/assets/icon-global-cashin.svg";
import IconEasyDeposits from "@/src/assets/icon-easy-deposits.svg";
import IconAirtime from "@/src/assets/icon-airtime.svg";
import IconReceipt from "@/src/assets/receipt.svg";
import IconReceiveSquare from "@/src/assets/receive-square.svg";
import IconNoteRemove from "@/src/assets/note-remove.svg";
import IconScan from "@/src/assets/scan.svg";

export default {
  data() {
    return {
      smartCardIndex: 0,
      smartCardLength: 6,
      scrollAmount: 300,
      slides: [
        {
          icon: IconGlobalCashin,
          alt: "Global cash-in and cash-out",
          title: this.$t("index.your-moneyflap-slide1-title"),
          description: this.$t("index.your-moneyflap-slide1-description"),
        },
        {
          icon: IconEasyDeposits,
          alt: "Easy deposits and withdrawals",
          title: this.$t("index.your-moneyflap-slide2-title"),
          description: this.$t("index.your-moneyflap-slide2-description"),
        },
        {
          icon: IconAirtime,
          alt: "Buy airtime and data",
          title: this.$t("index.your-moneyflap-slide3-title"),
          description: this.$t("index.your-moneyflap-slide3-description"),
        },
        {
          icon: IconReceipt,
          alt: "Flawless bill payments",
          title: this.$t("index.your-moneyflap-slide4-title"),
          description: this.$t("index.your-moneyflap-slide4-description"),
        },
        {
          icon: IconReceiveSquare,
          alt: "Receive your paycheck",
          title: this.$t("index.your-moneyflap-slide5-title"),
          description: this.$t("index.your-moneyflap-slide5-description"),
        },
        {
          icon: IconNoteRemove,
          alt: "Smart subscriptions management",
          title: this.$t("index.your-moneyflap-slide6-title"),
          description: this.$t("index.your-moneyflap-slide6-description"),
        },
        {
          icon: IconScan,
          alt: "Scan & Pay at thousands of merchants",
          title: this.$t("index.your-moneyflap-slide7-title"),
          description: this.$t("index.your-moneyflap-slide7-description"),
        },
      ],
    };
  },
  watch: {
    "$i18n.locale"(newLocale) {
      this.updateTranslations();
    },
  },
  methods: {
    next() {
      if (this.smartCardIndex < this.smartCardLength - 1) {
        this.smartCardIndex += 1;
      } else {
        this.smartCardIndex = 0;
      }
    },
    back() {
      if (this.smartCardIndex > 0) {
        this.smartCardIndex -= 1;
      } else {
        this.smartCardIndex = this.smartCardLength - 1;
      }
    },

    // Scroll to the right in the carousel
    accountNext() {
      const carousel = this.$refs.carouselContainer;
      if (carousel) {
        carousel.scrollLeft += this.scrollAmount;
      }
    },

    // Scroll to the left in the carousel
    accountBack() {
      const carousel = this.$refs.carouselContainer;
      if (carousel) {
        carousel.scrollLeft -= this.scrollAmount;
      }
    },
    updateTranslations() {
      this.slides = [
        {
          icon: IconGlobalCashin,
          alt: "Global cash-in and cash-out",
          title: this.$t("index.your-moneyflap-slide1-title"),
          description: this.$t("index.your-moneyflap-slide1-description"),
        },
        {
          icon: IconEasyDeposits,
          alt: "Easy deposits and withdrawals",
          title: this.$t("index.your-moneyflap-slide2-title"),
          description: this.$t("index.your-moneyflap-slide2-description"),
        },
        {
          icon: IconAirtime,
          alt: "Buy airtime and data",
          title: this.$t("index.your-moneyflap-slide3-title"),
          description: this.$t("index.your-moneyflap-slide3-description"),
        },
        {
          icon: IconReceipt,
          alt: "Flawless bill payments",
          title: this.$t("index.your-moneyflap-slide4-title"),
          description: this.$t("index.your-moneyflap-slide4-description"),
        },
        {
          icon: IconReceiveSquare,
          alt: "Receive your paycheck",
          title: this.$t("index.your-moneyflap-slide5-title"),
          description: this.$t("index.your-moneyflap-slide5-description"),
        },
        {
          icon: IconNoteRemove,
          alt: "Smart subscriptions management",
          title: this.$t("index.your-moneyflap-slide6-title"),
          description: this.$t("index.your-moneyflap-slide6-description"),
        },
        {
          icon: IconScan,
          alt: "Scan & Pay at thousands of merchants",
          title: this.$t("index.your-moneyflap-slide7-title"),
          description: this.$t("index.your-moneyflap-slide7-description"),
        },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  min-height: 60vh;
  background-image: url("@/src/assets/bg-header-website-landing.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  background-color: #142339;
}
section.teleport-bg {
  background-image: url("@/src/assets/bg-oval-top.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 30vh;
  background-color: #142339;
}
section.teleport {
  background-color: #142339;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
section.smarter-card {
  background-color: #142339;
  padding-top: 5rem;
}
section.wave {
  background-image: url("@/src/assets/bg-wave-turquoise.svg");
  padding: 7rem 0 5rem;
  // background-color: #4a83eb;
  background-repeat: no-repeat;
  background-size: cover;
}
section.wave-hair {
  background-image: url("@/src/assets/bg-wave-hair.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% 80%;
}
section.wave-top {
  background-color: #142339;
  background-image: url("@/src/assets/bg-wave-top.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.bg-glare {
  background-image: url("@/src/assets/bg-glare.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right center;
}
.icon-w-bg {
  background-color: #142339;
  padding: 0 0.5rem 0.5rem 0;
  margin: 0 0 -1.5rem 0;
  transform: translate(-1.5rem, -1.5rem);
}
.icon-circle {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 70%;
  }
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
.text-gradient {
  text-shadow: 0 0 10px rgb(1, 206, 194);
  text-shadow: 0 0 6px rgba(41, 165, 216, 1) 0 0 2px rgba(113, 92, 255, 1);
}
.show-md {
  display: block;
}
.show-sm {
  display: none;
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
  section.teleport-bg {
    background-size: cover;
    height: 15vh;
    background-color: #142339;
  }
  section.teleport {
    background: #142339;
    padding-top: 5rem;
  }
  section.wave {
    background-image: linear-gradient(
      -45deg,
      #075bff 5%,
      #3e8ee4 15%,
      #00cec2 19%,
      #1cb1d1 62%,
      #705bff 100%
    );
    padding: 7rem 0 5rem;
    background-repeat: no-repeat;
    background-size: cover;
  }
  section.wave-hair {
    background-image: url("@/src/assets/bg-wave-hair.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
  section.wave-top {
    background-color: #142339;
    background-image: url("@/src/assets/bg-wave-top.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
  section.wave {
    padding: 2rem 0 2rem;
  }
  .bg-glare {
    background-image: url("@/src/assets/bg-glare.png");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right center;
  }
  .logo {
    min-width: 150px !important;
  }
  .logo-div1 {
    animation: scroll 20s linear infinite;
    animation-delay: 0.5s;
  }
  .logo-div2 {
    animation: scroll 22s linear infinite;
    animation-delay: 0.7s;
  }
  .logo-div3 {
    animation: scroll 18s linear infinite;
    animation-delay: 0.3s;
  }
  @keyframes scroll {
    0% {
      transform: translate(0%, 0);
    }
    50% {
      transform: translate(-55%, 0);
    }
    100% {
      transform: translate(0%, 0);
    }
  }
}

.carousel-scroll {
  overflow-x: auto;
}

.carousel-buttons-navigation {
  display: none;
}

@media (min-width: 768px) {
  .carousel-scroll {
    overflow-x: hidden;
  }
  .carousel-buttons-navigation {
    display: block;
  }
}

.icon-size-travel-benefits {
  width: 30px;
}
</style>
