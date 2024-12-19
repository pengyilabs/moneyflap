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
              {{ $t("press.main-title") }}
            </h2>
            <p class="text-white mb-4 pb-4">
              {{ $t("press.main-description") }}
            </p>
            <div class="d-flex flex-column mt-5 flex-wrap pt-4">
              <h3
                class="text-white fw-bolder display-4 mt-4 pt-4"
                style="font-family: Sofia Pro Bold"
              >
                {{ $t("press.main-subtitle") }}
              </h3>
              <p class="text-white">
                {{ $t("press.main-subtitle-description") }}
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 my-3">
            <img
              src="@/src/assets/img-media-press.png"
              style="max-width: 100%"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="py-1">
      <div class="container mt-5">
        <section class="load_granted row">
          <div class="col-12 col-md-6 d-flex flex-column">
            <h4 class="fw-bolder display-6" style="font-family: Sofia Pro Bold">
              {{ $t("press.boilerplate-title") }}
            </h4>
            <p v-html="$t('press.boilerplate-description')"></p>
          </div>
          <div class="col-12 col-md-6 text-end">
            <img
              src="@/src/assets/img-boilerplate.png"
              style="max-width: 100%"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container my-5 col">
        <section class="mt-5 row">
          <div class="col-12 col-md-6 d-flex flex-column">
            <h4
              class="text-white fw-bolder display-6 mt-5 mb-3"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("press.founding-title") }}
            </h4>
            <p
              class="text-white my-4"
              v-html="$t('press.founding-description')"
            ></p>

            <div>
              <ul class="list-unstyled text-white">
                <li>
                  {{ $t("press.founding-op1") }}
                </li>
                <li>
                  {{ $t("press.founding-op2") }}
                </li>
                <li>
                  {{ $t("press.founding-op3") }}
                </li>
                <li>
                  {{ $t("press.founding-op4") }}
                </li>
                <li>
                  {{ $t("press.founding-op5") }}
                </li>
                <li>
                  {{ $t("press.founding-op6") }}
                </li>
                <li>
                  {{ $t("press.founding-op7") }}
                </li>
                <li>
                  {{ $t("press.founding-op8") }}
                </li>
              </ul>
            </div>
            <span class="text-white">
              {{ $t("press.founding-credits") }}
            </span>
          </div>
          <div
            class="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center"
          >
            <img
              src="@/src/assets/img-founding-story.png"
              style="max-width: 100%"
            />
          </div>
        </section>
      </div>
    </div>
    <div class="d-flex align-items-top justify-content-center py-1">
      <div class="container mt-5">
        <section class="row">
          <div class="col-12 col-md-6 mb-5">
            <h4
              class="fw-bolder display-6 mt-5 mb-3"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("press.download-logo-title") }}
            </h4>
            <p class="">
              {{ $t("press.download-logo-description") }}
            </p>
            <button
              class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
              @click="downloadLogos"
            >
              {{ $t("press.txt.download-full-set") }}
            </button>
            <h4
              class="fw-bolder display-6 mt-5 mb-3"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("press.download-screenshots-title") }}
            </h4>
            <p class="">
              {{ $t("press.download-screenshots-description") }}
            </p>
            <button
              class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
              @click="downloadScreenshots"
            >
              {{ $t("press.txt.download-full-set") }}
            </button>
            <h4
              class="fw-bolder display-6 mt-5 mb-3"
              style="font-family: Sofia Pro Bold"
            >
              {{ $t("press.download-colors-title") }}
            </h4>
            <p class="">
              {{ $t("press.download-colors-description") }}
              way.
            </p>
            <button
              class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
              @click="downloadColors"
            >
              {{ $t("press.txt.download-full-set") }}
            </button>
          </div>
          <div
            class="col-12 col-md-6 d-flex flex-row justify-content-center align-items-center"
          >
            <img src="@/src/assets/img-download.png" style="max-width: 100%" />
          </div>
        </section>
      </div>
    </div>
    <div class="footer d-flex align-items-top justify-content-center py-1 pb-4">
      <div class="container my-5 col">
        <section
          class="mt-5 d-flex flex-column justify-content-center align-items-center"
        >
          <img src="@/src/assets/icon-contact.png" style="max-width: 100%" />

          <h4
            class="fw-bolder display-6 m-3"
            style="font-family: Sofia Pro Bold; color: #5096ff"
          >
            {{ $t("press.questions-title") }}
          </h4>
          <p
            class="text-white text-center mb-5"
            v-html="$t('press.questions-description')"
          ></p>
          <a
            class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient mt-5"
            href="mailto:press@moneyflap.com"
            target="_blank"
          >
            {{ $t("press.txt.contact-press") }}
          </a>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    downloadScreenshots() {
      axios
        .get("../downloads/Screenshots.zip", { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank";
          a.download = "Screenshots.zip";
          a.click();
        });
    },
    downloadColors() {
      axios
        .get("../downloads/Colors.zip", { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank";
          a.download = "Colors.zip";
          a.click();
        });
    },
    downloadLogos() {
      axios
        .get("../downloads/Logos.zip", { responseType: "blob" })
        .then((response) => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.target = "_blank";
          a.download = "Logos.zip";
          a.click();
        });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  min-height: 70vh;
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
@media only screen and (max-width: 720px) {
  .header {
    background: #142339 !important;
  }
  .footer {
    background: rgb(20, 35, 57, 57) !important;
  }
}
</style>
