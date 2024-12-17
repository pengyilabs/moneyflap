<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center">
      <div class="container mt-5">
        <section class="main row">
          <div class="col-12 col-md-6">
            <h2
              class="text-white fw-bolder display-2 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("about.main-title") }}
            </h2>
            <p class="text-white">
              {{ $t("about.main-subtitle") }}
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  {{ $t("about.buttons.get-started") }}
                </button>
              </div>
              <div class="me-3 mt-3">
                <RouterLink
                  class="btn btn-outline-light btn-lg shadow rounded-5 px-5"
                  aria-current="page"
                  to="/careers"
                >
                  {{ $t("about.buttons.careers") }}
                </RouterLink>
                <!-- <a
                  class="btn btn-outline-light btn-lg shadow rounded-5 px-5"
                  href="https://www.notion.so/54b87f37b9a74868b4b929848e1f9314?pvs=21"
                  target="_blank"
                >
                  Careers
                </a> -->
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="@/src/assets/bg-about-us-main.svg"
              style="max-width: 100%"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="py-1">
      <div class="container mt-5">
        <section class="load_granted row">
          <div
            class="col-12 col-md-6 d-flex align-items-center justify-content-center"
          >
            <span class="">
              {{ $t("about.description") }}
            </span>
          </div>
          <div class="col-12 col-md-6">
            <img
              src="@/src/assets/img-loan-granted.png"
              style="max-width: 100%"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container mt-5 col">
        <section class="d-flex flex-column align-items-center">
          <h3
            class="text-white fw-bolder display-3 my-4"
            style="font-family: Sofia Pro Bold"
            v-html="$t('about.leadership-title')"
          ></h3>
          <p class="text-white my-4">
            {{ $t("about.leadership-description") }}
          </p>
          <div class="d-flex flex-row flex-wrap">
            <div class="fixed-width d-flex flex-column m-3">
              <img
                src="@/src/assets/img-mamadou-Diallo.png"
                class="image-width"
                style="max-height: 400px"
              />
              <div
                class="card rounded-4 bg-purple p-4 border-white fixed-width small-card"
              >
                <div class="d-flex flex-row justify-content-between">
                  <div class="d-flex flex-column">
                    <h4 class="text-white">Mamadou Diallo</h4>
                    <p class="text-gray">Co-Founder & CEO</p>
                  </div>
                  <div class="d-flex flex-column">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/mamadoudd"
                    >
                      <img
                        src="@/src/assets/logo-linkedin.webp"
                        alt="linkedin logo"
                        style="height: 28px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="fixed-width d-flex flex-column m-3">
              <img
                src="@/src/assets/img-roberto-moya.png"
                class="image-width"
                style="max-height: 400px"
              />
              <div
                class="card rounded-4 bg-purple p-4 border-white fixed-width small-card"
              >
                <div class="d-flex flex-row justify-content-between">
                  <div class="d-flex flex-column">
                    <h4 class="text-white">Roberto Moya</h4>
                    <p class="text-gray">Co-Founder & CPO</p>
                  </div>
                  <div class="d-flex flex-column">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/robmoya"
                    >
                      <img
                        src="@/src/assets/logo-linkedin.webp"
                        alt="linkedin logo"
                        style="height: 28px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="fixed-width d-flex flex-column m-3">
              <img
                src="@/src/assets/img-hamza-yaghmmour.png"
                class="image-width"
                style="max-height: 400px"
              />
              <div
                class="card rounded-4 bg-purple p-4 border-white fixed-width small-card"
              >
                <div class="d-flex flex-row justify-content-between">
                  <div class="d-flex flex-column">
                    <h4 class="text-white">Hamza Yaghmmour</h4>
                    <p class="text-gray">Co-Founder & CTO</p>
                  </div>
                  <div class="d-flex flex-column">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/hyaghmmour"
                    >
                      <img
                        src="@/src/assets/logo-linkedin.webp"
                        alt="linkedin logo"
                        style="height: 28px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1">
      <div class="container mt-5">
        <section class="load_granted d-flex flex-column align-items-center">
          <h3
            class="fw-bolder display-3 my-4"
            style="font-family: Sofia Pro Bold"
          >
            {{ $t("about.trusted") }}
          </h3>
          <div class="row my-4 py-4 justify-content-center">
            <div
              class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-ffe.png"
                alt="Fintech Fincrime Exchange"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-sdf.png"
                alt="Stellar Development Foundation"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-starknet.png"
                alt="Starknet"
                style="width: 60%"
              />
            </div>
            <div
              class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-moneygram.png"
                alt="MoneyGram"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-2 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-unrest.png"
                alt="unrest"
                style="max-width: 110px"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  min-height: 60vh;
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
// section.main{
//     background-image: url('@/src/assets/bg-about-us-main.svg');
//     background-size: auto 100%;
//     background-repeat: no-repeat;
//     background-position: right center;
// }
@media only screen and (max-width: 720px) {
  .footer {
    background: rgb(20, 35, 57, 57) !important;
  }
}
</style>
