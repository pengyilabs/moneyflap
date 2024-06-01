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
                class="text-white fw-bolder display-4 mt-4"
                style="font-family: Sofia Pro Bold"
              >
                We are not a bank. <br />
                We are a <span class="text-success">bulldozer.</span>
              </h1>
              <p class="text-white my-4 lh-lg fw-medium">
                The first global app that pays you to save, spend, and send
                money <br />
                — all in one place.
              </p>
            </div>
            <div class="">
              <div class="d-flex flex-row flex-wrap mt-5">
                <div class="me-3 mt-3">
                  <button
                    class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mf-gradient"
                  >
                    Get Started
                  </button>
                </div>
                <div class="me-3 mt-3">
                  <RouterLink
                    class="btn btn-outline-light btn-lg rounded-5 px-4"
                    aria-current="page"
                    to="/supported_countries/"
                  >
                    See our coverage
                  </RouterLink>
                </div>
              </div>
              <div
                class="mt-5 d-flex justify-content-center justify-content-md-start"
              >
                <button
                  class="btn btn-outline-light border-2 rounded-circle icon-circle me-3"
                >
                  <IconsPlaystore />
                </button>
                <button
                  class="btn btn-outline-light border-2 rounded-circle icon-circle"
                >
                  <IconsAppleIcon />
                </button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <img
              src="@/src/assets/img-header-moneyflap-app.png"
              alt="MoneyFlap"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Global Account that prioritizes you  -->
    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2 class="fw-bolder display-4" style="font-family: Sofia Pro Bold">
              A Global Account <br />
              <span class="text-success">That Prioritizes You</span>
            </h2>
            <p class="py-4 lh-lg fw-medium">
              Say goodbye to the barriers of the conventional financial
              system.<br />
              Step into the new era of financial liberation where your money
              knows no borders, no restrictions, no exorbitant transaction fees,
              only growth!
            </p>
            <button class="btn btn-dark btn-lg rounded-5 px-4">
              Get Started
            </button>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <img
              src="@/src/assets/img-global-account-with-moneyflap.png"
              alt="img-global-account-with-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Earn up to 5.30% U.S. Treasury yields, on-chain   -->
    <section class="py-2 pb-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2 class="fw-bolder display-4" style="font-family: Sofia Pro Bold">
              <span class="text-primary">Earn up to 5.30% U.S.</span><br />
              Treasury yields,<br />
              on-chain
            </h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              Isn't it time we let our money work for us? Get higher, more
              stable returns than classic savings accounts. An unmatched level
              of confidence knowing your assets are indirectly backed by the
              full faith and credit of the U.S. government. Withdraw and get
              paid on a 24/7 basis. No minimum deposit.
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
            >
              Teleport your money from one country to another,
              <span class="text-success">fee-free</span>
            </h2>
            <p class="text-white lh-lg mt-5">
              Whether it is Italy or Mexico, save up to 15x when sending money
              there — Oh, 0% exchange rate mark-up and no sneaky hidden fees!
              Even no more entering account numbers.
            </p>
          </div>
          <div class="col-12 col-md-5 d-flex">
            <img
              src="@/src/assets/img-globe-cards.png"
              class="img-fluid"
              alt=""
              style="max-width: 100%"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 my-4">
            <div class="rainbow-border rounded-5">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    Send money in 100+ currencies to your contacts or anyone in
                    our global search in seconds.
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
            <div class="rainbow-border rounded-5">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    Send money within seconds to bank and mobile money accounts
                    in 70+ countries.
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
            <div class="rainbow-border rounded-5">
              <div
                class="card bg-dark text-light rounded-5 shadow-lg h-100 card-gradient"
              >
                <div class="card-body p-4 fw-medium lh-lg d-flex">
                  <p class="mt-4">
                    Send and receive crypto within seconds from external
                    wallets.
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
            <h2 class="fw-bolder display-3" style="font-family: Sofia Pro Bold">
              Pay With The Most<br />
              <span class="text-info">International Card</span>
            </h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              Sick of overpaying card transaction fees? Banish that feeling
              forever.<br />
              Create your virtual cards to shop globally while saving 4.5% on
              fees, and link them to Google Pay and Apple Pay to start spending
              immediately! Get a sleek, mirror stainless-steel, numberless
              credit card with a premium experience that embraces both security
              and an aura of exclusivity. Access your card details anytime,
              within our app.
            </p>
            <!-- <button class="btn btn-dark btn-lg rounded-5 px-4">
              Get Started
            </button> -->
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 order-md-first">
            <img
              src="@/src/assets/img-moneyflap-international-card.png"
              alt="img-global-account-with-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Smarter Card  -->
    <section class="smarter-card">
      <div class="container text-center">
        <h2
          class="fw-bolder display-4 text-light mb-4"
          style="font-family: Sofia Pro Bold"
        >
          A Smarter Card
        </h2>
        <div>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-if="smartCardIndex == 0"
          >
            Green
          </span>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-else-if="smartCardIndex == 1"
          >
            Gray
          </span>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-else-if="smartCardIndex == 2"
          >
            Purple
          </span>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-else-if="smartCardIndex == 3"
          >
            Blue
          </span>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-else-if="smartCardIndex == 4"
          >
            White
          </span>
          <span
            class="btn btn-outline-light rounded-5 px-4"
            v-else-if="smartCardIndex == 5"
          >
            Platinum
          </span>
        </div>
        <div>
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards Green"
            class="img-fluid"
            style="max-width: 100%"
            v-if="smartCardIndex == 0"
          />
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards Gray"
            class="img-fluid"
            style="max-width: 100%"
            v-else-if="smartCardIndex == 1"
          />
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards Purple"
            class="img-fluid"
            style="max-width: 100%"
            v-else-if="smartCardIndex == 2"
          />
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards Blue"
            class="img-fluid"
            style="max-width: 100%"
            v-else-if="smartCardIndex == 3"
          />
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards White"
            class="img-fluid"
            style="max-width: 100%"
            v-else-if="smartCardIndex == 4"
          />
          <img
            src="@/src/assets/img-smarter-moneyflap-card.png"
            alt="MoneyFlap Smarter Cards Platinum"
            class="img-fluid"
            style="max-width: 100%"
            v-else-if="smartCardIndex == 5"
          />
        </div>
        <div class="d-flex flex-row justify-content-center pb-4">
          <button
            class="btn btn-outline-light border-0 rounded-circle icon-circle bg-transparent"
            @click="back()"
          >
            <img src="@/src/assets/chevron-left.png" alt="back" />
          </button>
          <button
            class="btn btn-outline-light border-0 rounded-circle icon-circle bg-transparent"
            @click="next()"
          >
            <img src="@/src/assets/chevron-right.png" alt="next" />
          </button>
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
              Earn up to 35%
            </h2>
            <p class="h3 mt-3 mb-5" style="font-family: Sofia Pro Bold">
              unlimited cash-back on your favorite brands, for real!
            </p>
            <p class="fw-medium">
              Welcome to our virtual shopping mall! Where else can you shop from
              numerous top brands and get up to a 35% cash-back on every
              purchase? Imagine the hundreds or even thousands of dollars you
              could be pocketing each year! Be a smarter shopper.
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
        <div class="row justify-content-center">
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-walmart.svg"
              alt="Walmart"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-aliexpress.svg"
              alt="Aliexpresst"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-temu.svg"
              alt="Temu"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-banggood.svg"
              alt="banggood"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-3 col-md-3"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-microsoft.svg"
              alt="microsoft"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-sephora.svg"
              alt="sephora"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-lookfantastic.svg"
              alt="lookfantastic"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-nike.svg"
              alt="nike"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-boohoo.svg"
              alt="boohoo"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-3 col-md-3"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-bloomingdales.svg"
              alt="bloomingdales"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-lenovo.svg"
              alt="lenovo"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-booking.svg"
              alt="booking"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-expedia.svg"
              alt="expedia"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-2 col-md-2"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-viator.svg"
              alt="viator"
            />
          </div>
          <div
            class="px-3 py-2 d-flex flex-column justify-content-center col-3 col-md-3"
          >
            <img
              class="logo"
              style="max-height: 56px; max-width: 100%"
              src="@/src/assets/logo-oldnavy.svg"
              alt="oldnavy"
            />
          </div>
        </div>
      </div>
      <div class="container text-center show-sm overflow-x-hidden">
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
              With your MoneyFlap account, go from underserved to what you
              deserve
            </h2>
          </div>
          <div class="col-12 col-md-1"></div>
        </div>
      </div>
    </section>
    <section class="">
      <div class="container show-md">
        <div class="row justify-content-center">
          <div
            class="col-12 col-md-1 d-flex flex-column align-items-center justify-content-center"
          >
            <button
              class="btn btn-outline-light border-0 rounded-circle icon-circle text-gradient"
              @click="accountBack()"
            >
              <img src="@/src/assets/chevron-left-gradient.png" alt="back" />
            </button>
          </div>
          <div class="col-12 col-md-10">
            <div
              id="carousel-container"
              class="d-flex flex-row"
              style="overflow-y: scroll"
            >
              <div
                class="col-12 col-md-4 p-2"
                style="max-width: 100%"
                id="cc-0"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <img
                        src="@/src/assets/icon-global-cashin.svg"
                        alt="Global cash-in and cash-out"
                      />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Global cash-in and cash-out
                      </h4>
                      <p class="">
                        Instantly deposit and withdraw cash from your account in
                        your local currency at one of 350,000+
                        <img
                          src="@/src/assets/logo-moneygram.svg"
                          alt="Moneygram"
                        />
                        locations in over 181 countries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-4 p-2"
                style="max-width: 100%"
                id="cc-1"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <img
                        src="@/src/assets/icon-airtime.svg"
                        alt="Buy airtime and data"
                      />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Buy airtime and data
                      </h4>
                      <p class="">
                        Instantly recharge credit and data for any phone, and
                        worldwide.
                        <br />
                        Earn 3% cashback on every top-up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-4 p-2"
                style="max-width: 100%"
                id="cc-2"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body">
                      <img
                        src="@/src/assets/receipt.svg"
                        alt="Flawless bill payments"
                      />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Flawless bill payments
                      </h4>
                      <p class="">
                        Instantly pay bills globally in a few clicks, with no
                        extra cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-4 p-2"
                style="max-width: 100%"
                id="cc-3"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body">
                      <img
                        src="@/src/assets/receive-square.svg"
                        alt="Receive your paycheck"
                      />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Receive your paycheck
                      </h4>
                      <p class="">
                        Share your bank details with your employers worldwide,
                        and receive your hard-earned money. Fric, not friction!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-4 p-2"
                style="max-width: 100%"
                id="cc-4"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <img
                        src="@/src/assets/note-remove.svg"
                        alt="Smart subscriptions management"
                      />
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Smart subscriptions management
                      </h4>
                      <p class="">
                        Signed up for a trial with your card and forgot to
                        cancel? Block all unwanted subscriptions in-app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-12 col-md-8 p-2"
                style="max-width: 100%"
                id="cc-5"
              >
                <div
                  class="bg-primary rounded-5 h-100 mf-gradient"
                  style="padding: 0.1rem; max-width: 100%"
                >
                  <div class="card rounded-5 px-3 h-100">
                    <div class="card-body align-items-end">
                      <img
                        src="@/src/assets/scan.svg"
                        alt="Scan & Pay at thousands of merchants"
                      />
                      <div class="row">
                        <div class="col-8">
                          <h4
                            class="fw-bolder mt-4"
                            style="font-family: Sofia Pro Bold"
                          >
                            Scan & Pay at thousands of merchants
                          </h4>
                          <h5 style="font-family: Sofia Pro Bold">
                            (Available Soon)
                          </h5>
                          <p class="">
                            Whether it is a taxi, restaurant, or gas station,
                            we've got you! Scan that QR code and earn rewards.
                          </p>
                        </div>
                        <div class="col-4">
                          <img
                            src="@/src/assets/qr.png"
                            alt="qr code"
                            style="max-width: 180px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-md-1 d-flex flex-column align-items-center justify-content-center"
          >
            <button
              class="btn btn-outline-light border-0 rounded-circle icon-circle text-gradient"
              @click="accountNext()"
            >
              <img src="@/src/assets/chevron-right-gradient.png" alt="next" />
            </button>
          </div>
        </div>
      </div>
      <div class="container show-sm">
        <div class="row">
          <div class="col-12 col-md-4 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body align-items-end">
                  <img
                    src="@/src/assets/icon-global-cashin.svg"
                    alt="Global cash-in and cash-out"
                  />
                  <h4
                    class="fw-bolder mt-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    Global cash-in and cash-out
                  </h4>
                  <p class="">
                    Instantly deposit and withdraw cash from your account in
                    your local currency at one of 350,000+
                    <img
                      src="@/src/assets/logo-moneygram.svg"
                      alt="Moneygram"
                    />
                    locations in over 181 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body align-items-end">
                  <img
                    src="@/src/assets/icon-airtime.svg"
                    alt="Buy airtime and data"
                  />
                  <h4
                    class="fw-bolder mt-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    Buy airtime and data
                  </h4>
                  <p class="">
                    Instantly recharge credit and data for any phone, and
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body">
                  <img
                    src="@/src/assets/receipt.svg"
                    alt="Flawless bill payments"
                  />
                  <h4
                    class="fw-bolder mt-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    Flawless bill payments
                  </h4>
                  <p class="">
                    Instantly pay bills globally in a few clicks, with no extra
                    cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body">
                  <img
                    src="@/src/assets/receive-square.svg"
                    alt="Receive your paycheck"
                  />
                  <h4
                    class="fw-bolder mt-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    Receive your paycheck
                  </h4>
                  <h5 style="font-family: Sofia Pro Bold">(Available Soon)</h5>
                  <p class="">
                    Share your bank details with your employers worldwide, and
                    receive your hard-earned money. Fric, not friction!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body align-items-end">
                  <img
                    src="@/src/assets/note-remove.svg"
                    alt="Smart subscriptions management"
                  />
                  <h4
                    class="fw-bolder mt-4"
                    style="font-family: Sofia Pro Bold"
                  >
                    Smart subscriptions management
                  </h4>
                  <p class="">
                    Signed up for a trial with your card and forgot to cancel?
                    Block all unwanted subscriptions in-app.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-8 p-2" style="max-width: 100%">
            <div
              class="bg-primary rounded-5 h-100 mf-gradient"
              style="padding: 0.1rem; max-width: 100%"
            >
              <div class="card rounded-5 px-3 h-100">
                <div class="card-body align-items-end">
                  <img
                    src="@/src/assets/scan.svg"
                    alt="Scan & Pay at thousands of merchants"
                  />
                  <div class="d-flex flex-column">
                    <div class="col-12">
                      <h4
                        class="fw-bolder mt-4"
                        style="font-family: Sofia Pro Bold"
                      >
                        Scan & Pay at thousands of merchants
                      </h4>
                      <h5 style="font-family: Sofia Pro Bold">
                        (Available Soon)
                      </h5>
                      <p class="">
                        Whether it is a taxi, restaurant, or gas station, we've
                        got you! Scan that QR code and earn rewards.
                      </p>
                    </div>
                    <div class="col-12">
                      <img
                        src="@/src/assets/qr.png"
                        alt="qr code"
                        style="max-width: 180px"
                      />
                    </div>
                  </div>
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
          <div class="col-12 col-md-6">
            <h2 class="fw-bolder display-4" style="font-family: Sofia Pro Bold">
              Real-time Spending<br />
              <span class="text-primary">Insights and Analytics</span>
            </h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              Our intelligent analytics presents you with easy-to-understand
              charts and a summary of your transactions so you can track your
              finances and make better spending decisions. No spreadsheet. No
              calculator!
            </p>
            <button class="btn btn-dark btn-lg rounded-5 px-4">
              Get Started
            </button>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 order-md-first">
            <img
              src="@/src/assets/img-real-time-spending.png"
              alt="img-real-time-spending"
              class="img-fluid"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Connect, Feel, and Engage Like You’re There!   -->
    <section class="py-5 wave-hair">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6">
            <h2 class="fw-bolder display-4" style="font-family: Sofia Pro Bold">
              Connect, Feel,<br />
              <span class="text-success">and Engage Like You’re There!</span>
            </h2>
            <p class="py-4 lh-lg fw-medium text-secondary">
              Connect with your loved ones via our end-to-end encrypted
              messaging and calling service. Share multimedia content, laugh
              over GIFs, and organize group chats, all under secure corridors.
            </p>
            <!-- <button class="btn btn-dark btn-lg rounded-5 px-4">
              Get Started
            </button> -->
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <img
              src="@/src/assets/img-engage-connect-feel-moneyflap.png"
              alt="img-engage-connect-feel-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
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
            >
              Fast Loans, No Fuss:<br />
              Switch On The 0%
            </h2>
            <p class="py-4 lh-lg fw-medium text-light">
              Why let emergencies spoil your good night's sleep? Borrow
              instantly any amount using your money saved as collateral and
              repay in up to 25 easy installments – your first payment can be
              made within 90 days after approval! No hidden fees. No interest.
              No credit checks.
            </p>
            <p
              class="h3 fw-bolder text-light"
              style="font-family: Sofia Pro Bold"
            >
              Available Soon
            </p>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0 text-center order-md-first">
            <img
              src="@/src/assets/img-fast-loans-moneyflap.png"
              alt="img-fast-loans-moneyflap"
              class="img-fluid"
              style="max-width: 100%"
            />
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
              >
                We do <span class="text-info">SIMs too!</span>
              </h2>
              <p class="py-4 lh-lg fw-medium text-light">
                Travel smart, enjoy unlimited roaming with MoneyFlap eSIM!
                Forget the old-fashioned ways of changing cards or hunting down
                Wi-Fi spots abroad. Be it a trip to Paris or an exotic vacation
                - connect your life with just a click.
              </p>
              <p
                class="h3 fw-bolder text-light"
                style="font-family: Sofia Pro Bold"
              >
                Available Soon
              </p>
            </div>
            <div class="col-12 col-md-4 mt-5 mt-md-0">
              <img
                src="@/src/assets/img-moneyflap-sims.png"
                alt="img-moneyflap-sims"
                class="img-fluid"
                style="max-width: 100%"
              />
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
          We Take Your Security to New Heights
        </h2>

        <div class="row" style="max-width: 100%">
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
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
                    Compliance-first
                  </h4>
                  <p>
                    From day 1, we are certified, audited, and regulated across
                    multiple jurisdictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
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
                    Break-free control
                  </h4>
                  <p>
                    Push notifications, 2-step verification, biometrics, card
                    controls, and fraud detection to protect you from any
                    fraudsters, 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
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
                    Bankruptcy remote
                  </h4>
                  <p>
                    Your money are fully segregated and held with qualified,
                    licensed, and insured custodians.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 my-4" style="max-width: 100%">
            <div
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
                    VIP customer support
                  </h4>
                  <p>
                    Have an account query at 3 am? Ok. Chat with our team 24/7
                    through the app.
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
          Your Legacy, Not Theirs
        </h3>
        <p class="lead">
          Open your account in 2 minutes, verify your ID, and start enjoying
          your Everything app.
        </p>
        <button
          class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mt-4 mf-gradient"
        >
          Get Started
        </button>
      </div>
    </section>
  </NuxtLayout>
</template>

<script>
export default {
  data() {
    return {
      smartCardIndex: 0,
      smartCardLength: 6,
      accountIndex: 0,
      accountElements: 6,
    };
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
    accountNext() {
      this.accountIndex++;
      if (this.accountIndex >= this.accountElements) {
        this.accountIndex = 0;
      }
      let doc = document.getElementById(`cc-${this.accountIndex}`);
      console.log("Next", doc);
      doc.scrollIntoView();
    },
    accountBack() {
      this.accountIndex--;
      if (this.accountIndex < 0) {
        this.accountIndex = this.accountElements - 1;
      }
      let doc = document.getElementById(`cc-${this.accountIndex}`);
      console.log("Next", doc);
      doc.scrollIntoView();
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
  /*
  background-image: url("@src/assets/bg-smarter-moneyflap-card.png");
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  */
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
  background-position: center;
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
    // background-color: #4a83eb;
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
</style>
