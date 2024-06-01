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
              About us
            </h2>
            <p class="text-white">
              We are underserved people building a simple, transparent, and
              modern all-in-one global platform for underserved people.
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  Get Started
                </button>
              </div>
              <div class="me-3 mt-3">
                <RouterLink
                  class="btn btn-outline-light btn-lg shadow rounded-5 px-5"
                  aria-current="page"
                  to="/careers"
                >
                  Careers
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
              How can you leave your legacy when you’re trapped in legacy
              systems, or denied access to the system altogether. Banks
              shouldn’t feel a relic from a different era. Elitist, Slow,
              Expensive. Banks should reflect the times we live in. Inclusive,
              Fast, Free. We deserve a blockchain-based bank for us. That’s up
              to speed with modern life. This shouldn’t be a fantasy, when it’s
              a reality for the rest of the world. Our money should be ours. To
              do what we want with. To put where we need to. To build our
              futures. From underserved to what you deserve A new shape of
              banking for emerging regions.
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
          >
            Leadership <span class="text-success">Team</span>
          </h3>
          <p class="text-white my-4">
            We founded MoneyFlap to be the bridge between the traditional and
            decentralized finance.
          </p>
          <div class="d-flex flex-row flex-wrap">
            <div class="fixed-width d-flex flex-column m-3">
              <img
                src="@/src/assets/img-whole-planet-moneyflap.png"
                class="image-width"
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
                src="@/src/assets/img-whole-planet-moneyflap.png"
                class="image-width"
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
            <div class="fixed-width d-flex flex-column m-3">
              <img
                src="@/src/assets/img-whole-planet-moneyflap.png"
                class="image-width"
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
            Trusted by:
          </h3>
          <div class="row my-4 py-4">
            <div
              class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-ffe.png"
                alt="Fintech Fincrime Exchange"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-sdf.png"
                alt="Stellar Development Foundation"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center"
            >
              <img
                class="mx-3 my-4"
                src="@/src/assets/logo-moneygram.svg"
                alt="MoneyGram"
                style="max-width: 100%"
              />
            </div>
            <div
              class="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center"
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
