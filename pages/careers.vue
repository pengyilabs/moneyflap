<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center">
      <div class="container mt-5">
        <section class="main row">
          <div class="col-12 col-md-6 my-3">
            <h1
              class="text-white fw-bolder display-2 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("careers.main-title") }}
              <br />
              <small class="text-success">{{
                $t("careers.main-subtitle")
              }}</small>
            </h1>
            <p class="text-white display-6">
              {{ $t("careers.main-description1") }}
            </p>
            <p class="text-white">
              {{ $t("careers.main-description2") }}
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  {{ $t("careers.txt.join") }}
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-3">
            <img src="@/src/assets/img-career.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="py-1">
      <div class="container mt-5">
        <section class="row" style="height: 30vh">
          <div class="col-12 d-flex flex-column align-items-center">
            <h2
              class="fw-bolder display-2 mt-1 text-center"
              style="font-family: Sofia Pro Bold"
              v-html="$t('careers.open-positions-title')"
            ></h2>
            <span>
              {{ $t("careers.open-positions-description") }}
            </span>
            <div class="my-4">
              <a
                class="btn btn-primary shadow rounded-5 px-5"
                href="https://www.notion.so/54b87f37b9a74868b4b929848e1f9314?pvs=21"
                target="_blank"
              >
                {{ $t("careers.txt.view-roles") }}
              </a>
            </div>
          </div>
          <!-- <div class="col-12">
            <iframe
              src="https://www.notion.so/54b87f37b9a74868b4b929848e1f9314"
              width="100%"
            >
            </iframe>
          </div> -->
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container mt-5 col">
        <section class="d-flex flex-column align-items-center">
          <h3
            class="fw-bolder display-3 my-4 text-start w-100"
            style="font-family: Sofia Pro Bold"
            v-html="$t('careers.benefits-title')"
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
                      src="@/src/assets/fluent-mdl2_vacation.png"
                      alt="Time Off"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("careers.timeoff-op1-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.timeoff-op1-description") }}
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
                      src="@/src/assets/jam_medical.png"
                      alt="Medical, dental & vision"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("careers.timeoff-op2-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.timeoff-op2-description") }}
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
                      src="@/src/assets/mingcute_remote-line.png"
                      alt="Fully Remote"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("careers.timeoff-op3-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.timeoff-op3-description") }}
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
                      src="@/src/assets/hugeicons_baby-bottle.png"
                      alt="Medical, dental & vision"
                    />
                    <h4
                      class="fw-bolder mt-4"
                      style="font-family: Sofia Pro Bold"
                    >
                      {{ $t("careers.timeoff-op4-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.timeoff-op4-description") }}
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
                {{ $t("careers.core-values-title") }}
              </h3>
              <p>
                {{ $t("careers.core-values-description") }}
              </p>
            </div>
            <div class="col-12 col-md-6">
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-core-values.png"
                alt="Core values"
                style="max-width: 100%"
              />
            </div>
          </div>
          <div class="row my-4 py-4">
            <div class="col-12 col-md-4 my-4">
              <div class="rainbow-border rounded-5" style="height: 100%">
                <div
                  class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
                >
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op1-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op1-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img
                        src="@/src/assets/material-symbols-light_handshake-outline.png"
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
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op2-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op2-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img
                        src="@/src/assets/material-symbols_lock-open-outline.png"
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
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op3-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op3-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img
                        src="@/src/assets/hugeicons_loyalty-card.png"
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
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op4-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op4-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img
                        src="@/src/assets/mdi_head-love-outline.png"
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
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op5-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op5-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img src="@/src/assets/tabler_bulb.png" alt="" class="" />
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
                  <div class="card-body p-4 fw-medium lh-lg d-flex flex-column">
                    <h4 class="mt-4" style="font-family: Sofia Pro Bold">
                      {{ $t("careers.core-values-op6-title") }}
                    </h4>
                    <p class="">
                      {{ $t("careers.core-values-op6-description") }}
                    </p>
                    <div class="top-left-icon">
                      <img
                        src="@/src/assets/hugeicons_headset.png"
                        alt=""
                        class=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center">
            <span
              class="text-center display-5 my-4 mx-auto"
              style="font-family: Sofia Pro Bold; max-width: 800px"
            >
              "{{ $t("careers.txt.phrase1") }}"
            </span>
            <h3 class="text-center my-4">— Marshall McLuhan</h3>
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
</style>
