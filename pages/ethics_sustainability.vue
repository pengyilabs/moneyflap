<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center">
      <div class="container mt-5">
        <section class="main row">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="text-white fw-bolder display-2 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("ethics.main-title") }}
            </h2>
            <p class="text-white">
              {{ $t("ethics.main-description") }}
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  {{ $t("ethics.txt.invest-change") }}
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-3 text-center">
            <img src="@/src/assets/img-ethics-1.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="py-1">
      <div class="container mt-5">
        <section class="row" style="min-height: 50vh">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="fw-bolder display-2 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("ethics.eco-friend-title") }}
            </h2>
            <p class="">
              {{ $t("ethics.eco-friend-description") }}
            </p>
          </div>
          <div class="col-12 col-md-6 my-3 text-center">
            <img src="@/src/assets/img-ethics-2.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-4">
      <div class="container mt-5">
        <section class="row mt-5">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="fw-bolder display-2 mt-1 text-white"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("ethics.lower-carbon-title") }}
            </h2>
            <p class="text-white">
              {{ $t("ethics.lower-carbon-description") }}
            </p>
          </div>
          <div class="col-12 col-md-6 my-3 text-center order-md-first">
            <img src="@/src/assets/img-ethics-3.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div
      class="rainbow-border d-flex align-items-top justify-content-center py-4"
    >
      <div class="container mt-5">
        <section class="row mt-5">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="fw-bolder display-2 mt-1 text-white"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("ethics.social-responsibility-title") }}
            </h2>
            <p class="text-white">
              {{ $t("ethics.social-responsibility-description") }}
            </p>
          </div>
          <div class="col-12 col-md-6 my-3 text-center">
            <img src="@/src/assets/img-ethics-4.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div
      class="d-flex align-items-top justify-content-center py-4"
      style="background: rgb(20, 35, 57, 57) !important"
    >
      <div class="container mt-5">
        <section class="text-white d-flex flex-column mt-5">
          <div class="row">
            <div class="col-12 col-md-6">
              <h2
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("ethics.belief-philosophy-title") }}
              </h2>
              <p v-html="$t('ethics.belief-philosophy-description')"></p>
            </div>

            <div class="col-12 col-md-6 order-md-first">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-ethics-5.png"
                alt="Core values"
                style="max-width: 100%"
              />
            </div>
          </div>
        </section>
      </div>
    </div>

    <section>
      <!-- wave -->
      <div style="background-color: #142339">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#16b5ce"
            fill-opacity="1"
            d="M0,64L120,74.7C240,85,480,107,720,101.3C960,96,1200,64,1320,48L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        class="d-flex align-items-top justify-content-center"
        style="background: #16b5ce !important"
      >
        <div class="container mt-5">
          <div class="text-white d-flex flex-column">
            <div class="row">
              <div class="col-12 col-md-6 d-flex align-items-center">
                <div>
                  <h2
                    class="fw-bolder display-3 my-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    {{ $t("ethics.clean-conscientious-title") }}
                  </h2>
                  <p v-html="$t('ethics.clean-conscientious-description')"></p>
                </div>
              </div>

              <div class="col-12 col-md-6 d-flex justify-content-center">
                <img
                  class="mx-3 my-4"
                  src="@/src/assets/girl1.svg"
                  alt="Core values"
                  style="
                    max-width: 100%;
                    background: #c4bcff;
                    border-radius: 14px;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <!-- wave -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path
          fill="#16b5ce"
          fill-opacity="1"
          d="M0,32L60,42.7C120,53,240,75,360,90.7C480,107,600,117,720,128C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div
        class="d-flex justify-content-center"
        style="background: #ffffff !important"
      >
        <div class="container mt-5">
          <div class="text-white d-flex flex-column">
            <div class="row">
              <div class="col-12 col-md-6 d-flex justify-content-center">
                <img
                  class="mx-3"
                  src="@/src/assets/man1.svg"
                  alt="Core values"
                  style="
                    max-width: 100%;
                    background: #00cec2;
                    border-radius: 14px;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                  "
                />
              </div>

              <div
                class="col-12 col-md-6 d-flex align-items-center"
                style="color: #142339"
              >
                <div>
                  <h2
                    class="fw-bolder display-3 my-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    {{ $t("ethics.political-neutrality-title") }}
                  </h2>
                  <p v-html="$t('ethics.political-neutrality-description')"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <!-- wave -->
      <div style="background-color: #ffffff">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
          <path
            fill="#142339"
            fill-opacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,138.7C480,139,600,117,720,101.3C840,85,960,75,1080,85.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div
        class="d-flex align-items-top justify-content-center"
        style="background: #142339 !important"
      >
        <div class="container mt-5">
          <div class="text-white d-flex flex-column">
            <div class="row">
              <div class="col-12 col-md-6 d-flex align-items-center">
                <div>
                  <h2
                    class="fw-bolder display-3 my-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    {{ $t("ethics.honest-tax-title") }}
                  </h2>
                  <p>
                    {{ $t("ethics.honest-tax-description") }}
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6 d-flex justify-content-center">
                <img
                  class="mx-3 my-4"
                  src="@/src/assets/calc.svg"
                  alt="Core values"
                  style="
                    max-width: 100%;
                    border-radius: 14px;
                    padding: 16px;
                    display: flex;
                    justify-content: center;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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

@media only screen and (min-width: 425px) and (max-width: 768px) {
  .clean-wave-container {
    height: 41px;
  }
  .clean-wave-container > svg {
    transform: translateY(-9dvh);
  }
  .political-wave-container {
    height: 41px;
  }
  .political-wave-container > svg {
    transform: translateY(-21dvh);
    position: relative;
    z-index: 1;
  }
}
</style>
