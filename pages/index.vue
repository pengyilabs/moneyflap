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
            <p class="text-white my-4 lh-lg fw-medium">The first global app that pays you to save, spend, and send money <br> — all in one place.</p>
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
            <div class="col order-sm-2">
              <img src="@/src/assets/img-global-account-with-moneyflap.png" alt="img-global-account-with-moneyflap" class="img-fluid">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                A Global Account <br> <span class="text-success">That Prioritizes You</span>
              </h2>
              <p class="py-4 lh-lg fw-medium">Say goodbye to the barriers of the conventional financial system. Step into the new era of financial liberation where your money knows no borders, no restrictions, no exorbitant transaction fees, only growth!</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Earn up to 5.30% U.S. Treasury yields, on-chain   -->
      <section class="py-2 pb-4">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <img src="@/src/assets/img-earns-treasury-yields.png" alt="img-global-account-with-moneyflap" class="img-fluid">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                <span class="text-primary">Earn up to 5.30% U.S.</span> Treasury yields,  on-chain 
              </h2>
              <p class="py-4 lh-lg fw-medium text-secondary">Say goodbye to the barriers of the conventional financial system. Step into the new era of financial liberation where your money knows no borders, no restrictions, no exorbitant transaction fees, only growth!</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            
          </div>
        </div>
      </section>

      <!--Teleport your money from one country to another, fee-free   -->
      <section class="teleport">
       <div class="container">
        <div class="row row-cols-sm-2">
          <div class="col">
            <h2 class="fw-bolder display-4 text-white">Teleport your money from one country to another, <span class="text-success">fee-free</span></h2>
            <p class=" text-white lh-lg mt-5">Whether it is Italy or Mexico, save up to 15x when sending money there — Oh, 0% exchange rate mark-up and no sneaky hidden fees! Even no more entering account numbers.</p>
          </div>
          <div class="col d-flex">
            <img src="@/src/assets/img-teleport-money-free-fee.svg" class="img-flui mt-sm-5" alt="">
          </div>
        </div>

        <div class="row row-cols-sm-3">
          <div class="col">
            <div class="card bg-dark border-light text-light rounded-5 shadow-lg h-100" >
              <div class="card-body p-4 fw-medium lh-lg d-flex">
                <p class="pb-4 me-2">Send money in 100+ currencies to your contacts or anyone in our global search in seconds.</p>
                <div class="d-flex align-items-end">
                  <img src="@/src/assets/icon-send-money.svg" alt="" class="" >
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-light text-light rounded-5 shadow-lg h-100" >
              <div class="card-body p-4 fw-medium lh-lg d-flex">
                <p class="pb-4 me-2">Send money within seconds to bank and mobile money accounts in 70+ countries.</p>
                <div class="d-flex align-items-end">
                  <img src="@/src/assets/icon-send-money-fast.svg" alt="" class="" >
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card bg-dark border-light text-light rounded-5 shadow-lg h-100" >
              <div class="card-body p-4 fw-medium lh-lg d-flex">
                <p class="pb-4 me-2">Send and receive crypto within seconds from external wallets.</p>
                <div class="d-flex align-items-end">
                  <img src="@/src/assets/icon-send-crypto.svg" alt="" class="" >
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
            <div class="col">
              <img src="@/src/assets/img-moneyflap-international-card.png" alt="img-global-account-with-moneyflap" class="img-fluid">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                Pay With The Most <span class="text-info">International Card</span>
              </h2>
              <p class="py-4 lh-lg fw-medium text-secondary">Say goodbye to the barriers of the conventional financial system. Step into the new era of financial liberation where your money knows no borders, no restrictions, no exorbitant transaction fees, only growth!</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Smarter Card  -->
      <section class="smarter-card">
        <div class="container text-center">
          <h2 class="fw-bolder display-4 text-light mb-4">A Smarter Card</h2>
          <span class="btn btn-outline-light rounded-5 px-4">Green</span>
          <img src="@/src/assets/img-smarter-moneyflap-card.png" alt="MoneyFlap Smarter Cards" class="img-fluid ms-5">
        </div>
      </section>

      <!-- Earn up to 35%  -->
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col order-sm-2">
              <img src="@/src/assets/img-earn-up-to-35-percent-moneyflap.png" alt="img-earn-up-to-35-percent-moneyflap" class="img-fluid">
            </div>
            <div class="col-sm-5">
              <h2 class="fw-bolder display-4 text-info">
                Earn up to 35% 
              </h2>
              <p class="h3 mt-3 mb-5">unlimited cash-back on your favorite brands, for real!</p>
              <p class="fw-medium">Welcome to our virtual shopping mall! Where else can you shop from numerous top brands and get up to a 35% cash-back on every purchase? Imagine the hundreds or even thousands of dollars you could be pocketing each year! Be a smarter shopper.</p>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Logos  -->
      <section class="wave">
        <div class="container text-center">
          <div class="">
            <img class="mx-3 my-2" src="@/src/assets/logo-walmart.svg" alt="Walmart">
            <img class="mx-3 my-2" src="@/src/assets/logo-aliexpress.svg" alt="Aliexpresst">
            <img class="mx-3 my-2" src="@/src/assets/logo-banggood.svg" alt="banggood">
            <img class="mx-3 my-2" src="@/src/assets/logo-microsoft.svg" alt="microsoft">
            <img class="mx-3 my-2" src="@/src/assets/logo-sephora.svg" alt="sephora">
            <img class="mx-3 my-2" src="@/src/assets/logo-lookfantastic.svg" alt="lookfantastic">
            <img class="mx-3 my-2" src="@/src/assets/logo-nike.svg" alt="nike">
            <img class="mx-3 my-2" src="@/src/assets/logo-boohoo.svg" alt="boohoo">
            <img class="mx-3 my-2" src="@/src/assets/logo-bloomingdales.svg" alt="bloomingdales">
            <img class="mx-3 my-2" src="@/src/assets/logo-lenovo.svg" alt="lenovo">
            <img class="mx-3 my-2" src="@/src/assets/logo-booking.svg" alt="booking">
            <img class="mx-3 my-2" src="@/src/assets/logo-expedia.svg" alt="expedia">
            <img class="mx-3 my-2" src="@/src/assets/logo-viator.svg" alt="viator">
            <img class="mx-3 my-2" src="@/src/assets/logo-oldnavy.svg" alt="oldnavy">
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
section.teleport {
  background-image: url('@/src/assets/bg-teleport-your-money.svg');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 50vh;
  background-color: #142339;
  padding-top:15rem;
  padding-bottom: 5rem;
}
section.smarter-card {
  background-image: url('@src/assets/bg-smarter-card.png');
  background-position: center top;
  background-color: #142339;
  background-repeat: no-repeat;
  padding-top: 5rem;
  background-size: cover;
}
section.wave {
  background-image: url('@/src/assets/bg-wave-turquoise.svg');
  padding: 7rem 0 5rem; 
  background-color: #4A83EB;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>