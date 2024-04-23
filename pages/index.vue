<template>
   <NuxtLayout name="weblayout">
      <header class="header d-flex align-items-center justify-content-center py-5">
        <div class="container">
          <div class="row">
            <div class="col">
					<div class="">
						<h1 class="text-white fw-bolder display-4 mt-4">
							We are not a bank. <br>
							We are a <span class="text-success">bulldozer.</span>
						</h1>
						<p class="text-white my-4 lh-lg fw-medium">The first global app that pays you to save, spend, and send money <br> — all in one place.</p>
					</div>
					<div class="text-center text-md-right">
						<div class="mt-5">
							<button class="btn btn-primary btn-lg rounded-5 px-5">Get Started</button>
							<button class="btn btn-outline-light btn-lg rounded-5 ms-4 px-4">See our coverage</button>
						</div>
						<div class="mt-5 d-flex justify-content-center justify-content-md-start">
							<button class="btn btn-outline-light border-2 rounded-circle icon-circle"><IconsPlaystore/></button>
							<button class="btn btn-outline-light border-2 rounded-circle icon-circle ms-3"><IconsAppleIcon/></button>
						</div>
					</div>
				</div>
				<div class="col mt-5 mt-md-0">
					<img src="@/src/assets/img-header-moneyflap-app.png" alt="MoneyFlap">
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
            <img src="@/src/assets/img-teleport-money-free-fee.svg" class="img-fluid mt-sm-5" alt="">
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 my-sm-2">
            <div class="card bg-dark border-light text-light rounded-5 shadow-lg h-100" >
              <div class="card-body p-4 fw-medium lh-lg d-flex">
                <p class="pb-4 me-2">Send money in 100+ currencies to your contacts or anyone in our global search in seconds.</p>
                <div class="d-flex align-items-end">
                  <img src="@/src/assets/icon-send-money.svg" alt="" class="" >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-sm-2">
            <div class="card bg-dark border-light text-light rounded-5 shadow-lg h-100" >
              <div class="card-body p-4 fw-medium lh-lg d-flex">
                <p class="pb-4 me-2">Send money within seconds to bank and mobile money accounts in 70+ countries.</p>
                <div class="d-flex align-items-end">
                  <img src="@/src/assets/icon-send-money-fast.svg" alt="" class="" >
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-sm-2">
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
          <div>
            <span class="btn btn-outline-light rounded-5 px-4">Green</span>w
          </div>
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

      <!-- Moneyflap Account  -->
      <section class="wave-hair py-5">
        <div class="container">
          <div class="row">
            <div class="col-sm-10 mx-auto">
              <h2 class="fw-bolder display-6 text-center my-5 pt-4 pb-5">With your MoneyFlap account, go from underserved to what you deserve</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 my-sm-2">
              <div class="bg-primary rounded-5 h-100 mf-gradient" style="padding: .1rem">
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body">
                    <h4 class="fw-bolder mt-4">Easy deposits and withdrawals</h4>
                    <p class="">Quickly link your account to hundreds of local and international mobile wallets, banks, and crypto exchanges.</p>
                    <img src="@/src/assets/icon-easy-deposits.svg" alt="Easy deposits and withdrawals">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-sm-2">
              <div class="bg-primary rounded-5 h-100 mf-gradient" style="padding: .1rem">
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <h4 class="fw-bolder mt-4">Global cash-in and cash-out</h4>
                    <p class="">Instantly deposit and withdraw cash from your account in your local currency at one of 350,000+ <img src="@/src/assets/logo-moneygram.svg" alt="Moneygram"> locations in over 181 countries.</p>
                    <img src="@/src/assets/icon-global-cashin.svg" alt="Global cash-in and cash-out">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 my-sm-2">
              <div class="bg-primary rounded-5 h-100 mf-gradient" style="padding: .1rem">
                <div class="card rounded-5 px-3 h-100">
                  <div class="card-body align-items-end">
                    <h4 class="fw-bolder mt-4">Buy airtime and data</h4>
                    <p class="">Instantly recharge credit and data for any phone, and worldwide.</p>
                    <img src="@/src/assets/icon-airtime.svg" alt="Buy airtime and data">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Real-time Spending Insights and Analytics   -->
      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col">
              <img src="@/src/assets/img-real-time-spending.png" alt="img-real-time-spending" class="img-fluid">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                Real-time Spending <span class="text-primary">Insights and Analytics</span>
              </h2>
              <p class="py-4 lh-lg fw-medium text-secondary">Our intelligent analytics presents you with easy-to-understand charts and a summary of your transactions so you can track your finances and make better spending decisions. No spreadsheet. No calculator!</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Connect, Feel, and Engage Like You’re There!   -->
      <section class="py-5 wave-hair">
        <div class="container">
          <div class="row align-items-center">
            <div class="col order-sm-2">
              <img src="@/src/assets/img-engage-connect-feel-moneyflap.png" alt="img-engage-connect-feel-moneyflap" class="img-fluid">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4">
                Connect, Feel, <span class="text-success">and Engage Like You’re There!</span>
              </h2>
              <p class="py-4 lh-lg fw-medium text-secondary">Connect with your loved ones via our end-to-end encrypted messaging and calling service. Share multimedia content, laugh over GIFs, and organize group chats, all under secure corridors.</p>
              <button class="btn btn-dark btn-lg rounded-5 px-4">Get Started</button>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Two sections fast loans, sims -->
      <section class="py-5 mf-gradient-vertical">
        <div class="container">
          <div class="row align-items-center my-5">
            <div class="col text-center">
              <img src="@/src/assets/img-fast-loans-moneyflap.png" alt="img-fast-loans-moneyflap" class="img-fluid ">
            </div>
            <div class="col-sm-7">
              <h2 class="fw-bolder display-4 text-light">
                Fast Loans, No Fuss: Switch On The 0%
              </h2>
              <p class="py-4 lh-lg fw-medium text-light">Why let emergencies spoil your good night's sleep? Borrow instantly any amount using your money saved as collateral and repay in up to 25 easy installments – your first payment can be made within 90 days after approval! No hidden fees. No interest. No credit checks.</p>
              <p class="h5 fw-bolder text-light">Available Soon</p>
            </div>
            
          </div>
        </div>
      </section>

      <section class="wave-top py-5">
        <div class="bg-glare">
          <div class="container">
            <div class="row align-items-center ">
              <div class="col text-center order-sm-2">
                <img src="@/src/assets/img-moneyflap-sims.png" alt="img-moneyflap-sims" class="img-fluid">
              </div>
              <div class="col-sm-5">
                <h2 class="fw-bolder display-4 text-light">We do <span class="text-info">SIMs too!</span></h2>
                <p class="py-4 lh-lg fw-medium text-light">Travel smart, enjoy unlimited roaming with MoneyFlap eSIM! Forget the old-fashioned ways of changing cards or hunting down Wi-Fi spots abroad. Be it a trip to Paris or an exotic vacation - connect your life with just a click.</p>
                <p class="h5 fw-bolder text-light">Available Soon</p>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-dark py-5">
        <div class="container mb-5">
          <h2 class="fw-bolder display-4 text-light text-center mb-5">We Take Your Security to New Heights</h2>

          <div class="row row-cols-2 gy-5 gx-5">
            <div class="col-md-6 col-sm-12">
              <div class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg">
                <div class="card-body">
                  <img src="@/src/assets/icon-compliance.svg" class="icon-w-bg" alt="icon-compliance">
                  <div class="px-4 pb-3">
                    <h4 class="card-title">Compliance-first</h4>
                    <p>From day 1, we are certified, audited, and regulated across multiple jurisdictions.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg">
                <div class="card-body">
                  <img src="@/src/assets/icon-breakfree-control.svg" class="icon-w-bg" alt="icon-breakfree-control">
                  <div class="px-4 pb-3">
                    <h4 class="card-title">Break-free control</h4>
                    <p>Push notifications, 2-step verification, biometrics, card controls, and fraud detection to protect you from any fraudsters, 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg">
                <div class="card-body">
                  <img src="@/src/assets/icon-bankruptcy-remote.svg" class="icon-w-bg" alt="icon-bankruptcy-remote">
                  <div class="px-4 pb-3">
                    <h4 class="card-title">Bankruptcy remote</h4>
                    <p>Your money are fully segregated and held with qualified, licensed, and insured custodians.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card bg-transparent border-2 border-light text-light rounded-4 shadow-lg">
                <div class="card-body">
                  <img src="@/src/assets/icon-vip-customer-support.svg" class="icon-w-bg" alt="icon-vip-customer-support">
                  <div class="px-4 pb-3">
                    <h4 class="card-title">VIP customer support</h4>
                    <p>Have an account query at 3 am? Ok. 
Chat with our team 24/7 through the app.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container text-center">
          <h2 class="text-info fw-bolder display-6 mb-3">Your Legacy, Not Theirs</h2>
          <p class="lead">Open your account in 2 minutes, verify your ID, and start enjoying your Everything app.</p>
          <button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mt-4 mf-gradient">Get Started</button>
        </div>
      </section>
   </NuxtLayout>
</template>

<style scoped lang="scss">
.header { 
    min-height: 60vh;
    background-image: url('@/src/assets/bg-header-website-landing.svg');
    background-repeat: no-repeat;
    background-size: cover;
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
  background-size:cover;
}
section.wave-hair {
  background-image: url('@/src/assets/bg-wave-hair.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
section.wave-top {
  background-color: #142339;
  background-image: url('@/src/assets/bg-wave-top.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}

.bg-glare {
  background-image: url('@/src/assets/bg-glare.png');
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right center;
}
.icon-w-bg {
  background-color: #142339;
  padding: 0 .5rem .5rem 0;
  margin: 0 0 -1.5rem 0;
  transform: translate(-1.5rem, -1.5rem);
}
.icon-circle {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img { width: 70% }
}
</style>