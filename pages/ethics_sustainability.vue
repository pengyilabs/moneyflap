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
              Ethics and Sustainability 
            </h2>
            <p class="text-white">
              Empowering communities by weaving social impact into every
              financial decision.
            </p>
            <div class="d-flex flex-row mt-5 flex-wrap">
              <div class="me-3 mt-3">
                <button
                  class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                >
                  Invest for Change
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
        <section class="row" style="height: 50vh">
          <div class="col-12 col-md-6 my-3">
            <h2
              class="fw-bolder display-2 mt-1"
              style="font-family: Sofia Pro Bold"
            >
              Eco-Friendly Elegance
            </h2>
            <p class="">
              At MoneyFlap, we believe that fashioning tomorrow starts with what
              you carry today. Our plastic cards and packaging are meticulously
              crafted from recycled materials, reducing the burden on our
              planet's resources and minimizing environmental waste. We
              transform waste into wonder, ensuring that every swipe you make
              contributes to a cleaner, greener planet. 
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
          <div class="col-12 col-md-6 my-3 text-center">
            <img src="@/src/assets/img-ethics-3.png" style="max-width: 100%" />
          </div>
          <div class="col-12 col-md-6 my-3">
            <h2
              class="fw-bolder display-2 mt-1 text-white"
              style="font-family: Sofia Pro Bold"
            >
              Lower Carbon Emission
            </h2>
            <p class="text-white">
              By harnessing the power of technology, we provide seamless,
              efficient, and entirely digital solutions. Every transaction you
              make with MoneyFlap is a step towards a greener, more sustainable
              world. Our remote operations mean fewer facilities, translating
              into less energy consumption and lower carbon emissions. You enjoy
              the convenience of managing your finances from the comfort of your
              home while contributing to our planet's wellbeing. In
              collaboration with leading sustainability management companies, we
              take crucial steps to measure and manage our CO2e footprint with
              precision and integrity. 
            </p>
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
              Social Responsibility
            </h2>
            <p class="text-white">
              At MoneyFlap, we believe in a world where wealth is more than just
              numbers; it’s a powerful tool for transformation. Our mission goes
              beyond providing exceptional products and services – we are a
              force for good, making a lasting difference in the world we live
              in. We stand committed to channeling a significant percentage of
              our annual profits to charitable groups and NGOs fighting the
              toughest battles of our time. From confronting climate change
              head-on, supporting war refugees to find safety and solace, to
              championing equal opportunities for all. 
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
              <img
                class="mx-3 my-4"
                src="@/src/assets/img-ethics-5.png"
                alt="Core values"
                style="max-width: 100%"
              />
            </div>
            <div class="col-12 col-md-6">
              <h2
                class="fw-bolder display-3 my-4"
                style="font-family: Sofia Pro Bold"
              >
                Belief-based Philosophy
              </h2>
              <p>
                MoneyFlap targets a global market but prioritizes making a
                positive impact in emerging economies by addressing local
                challenges with tailored solutions. We provide equitable access
                to global financial opportunities rooted in Shariah-based
                principles of equity and solidarity, fostering inclusivity,
                fairness, and support for the underprivileged.

                <br />
                In a complex, fast-paced world, traditional interest-based
                products can feel rigid and misaligned with personal values.
                MoneyFlap transforms these offerings into belief-based products
                that align with your ethical and religious values, combining
                conscientious investment strategies with lucrative outcomes, all
                crafted by top financial minds who honor your principles.
              </p>
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
</style>
