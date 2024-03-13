<template>
   <NuxtLayout name="weblayout">
      <header class="header d-flex align-items-center justify-content-center py-5">
        <div class="container">
          <div class="row">
            <div class="col">
            <h1 class="text-white fw-bolder display-4 mt-4">
              We are not a bank. <br>
              We are a <span class="text-success">bulldozer.</span>
            </h1>
            <p class="text-white my-4">The first global app that pays you to save, spend, and send money <br> — all in one place.</p>
            <div class="mt-5">
              <button class="btn btn-primary btn-lg rounded-5 px-5">Get Started</button>
              <button class="btn btn-outline-light btn-lg rounded-5 ms-4 px-4">See our coverage</button>
            </div>
            <div class="mt-5">
              <button class="btn btn-outline-light rounded-circle py-3 px-3"><IconsPlaystore/></button>
              <button class="btn btn-outline-light rounded-circle py-3 px-3 ms-4"><IconsAppleIcon/></button>
            </div>
          </div>
          <div class="col">
            <img src="@/src/assets/img-header-moneyflap-app.png" alt="MoneyFlap" class="img-fluid">
          </div>
          </div>
        </div>
      </header>

      <!-- Global Account that prioritizes you  -->
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                A Global Account <br> <span class="text-success">That Prioritizes You</span>
              </h2>
              <p class="py-4">Say goodbye to the barriers of the conventional financial system. Step into the new era of financial liberation where your money knows no borders, no restrictions, no exorbitant transaction fees, only growth!</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            <div class="col">
              <img src="@/src/assets/img-global-account-with-moneyflap.png" alt="img-global-account-with-moneyflap" class="img-fluid">
            </div>
          </div>
        </div>
      </section>

   </NuxtLayout>
</template>

<style scoped lang="scss">
.header { 
    min-height: 60vh;
    background-image: url('@/src/assets/bg-header-website-landing.svg');
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: bottom right;
    background-color: #142339;
}
</style>