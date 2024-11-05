<template>
  <NuxtLayout name="weblayout">
    <section
      class="header d-flex align-items-start justify-content-center py-5"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="">
              <h1
                class="text-white fw-bolder display-4 mt-4"
                style="font-family: Sofia Pro Bold"
              >
                <span class="text-success">Fair</span>, Competitive,
                <br />
                and <span class="text-success">Transparent</span>
                <br />
                Transaction Fees
              </h1>
              <p class="text-white my-4 lh-lg fw-medium">
                We believe in offering clear and upfront pricing. Here's a
                breakdown of our fees to help you understand the costs
                associated with using our services:
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
                    to="/pricing"
                  >
                    Explore Fees
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mt-5 mt-md-0">
            <img
              src="@/src/assets/img-pricing-header.png"
              alt="MoneyFlap"
              style="max-width: 100%"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 mx-auto">
            <div class="rainbow-border rounded-5">
              <div class="row m-0 p-0 w-100">
                <div class="col-9 rounded-tl-5 p-4 bg-white margin-bottom">
                  <h2 class="text-success">SPENDING ACCOUNTS</h2>
                </div>
                <div
                  class="col-3 bg-green rounded-tr-5 p-4 margin-bottom border-left"
                ></div>
              </div>
              <!-- General -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-general.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3>General</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                    <!-- <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span> Opening Fee </span>
                      </li>
                      <li>
                        <span> Monthly Fee </span>
                      </li>
                      <li>
                        <span> Suscription Fee </span>
                      </li>
                      <li>
                        <span> Minimum Deposit </span>
                      </li>
                    </ul> -->
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <!-- <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 40px"> Free </span>
                      <span style="height: 40px"> Free </span>
                      <span style="height: 40px"> Free </span>
                      <span style="height: 40px"> None </span>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 mb-0 text-muted">
                      <li>
                        <span> Opening Fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked m-0 text-muted">
                      <li>
                        <span> Monthly Fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column m-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked m-0 text-muted">
                      <li>
                        <span> Suscription Fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column m-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked text-muted mb-2">
                      <li>
                        <span> Minimum Deposit </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column text-muted mb-2">
                      <span style="height: 40px"> None </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Adding Money -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-adding-money.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3>Adding Money</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                    <!-- <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span>
                          Cash deposit & withdrawal
                          <br />
                          <small style="margin-left: 45px">
                            Foreign exchange fee may apply at cash outlets
                          </small>
                        </span>
                      </li>
                      <li>
                        <span> Crypto deposit </span>
                      </li>
                      <li>
                        <span> Open banking </span>
                      </li>
                      <li>
                        <span>
                          Bank transfer
                          <br />
                          <small style="margin-left: 45px">
                            Fee only applies after 2 free transfers every month
                          </small>
                        </span>
                      </li>
                      <li>
                        <span>
                          Mobile wallet
                          <br />
                          <small style="margin-left: 45px">
                            Fee varies by mobile wallet
                          </small>
                        </span>
                      </li>
                    </ul> -->
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 mb-0 text-muted">
                      <li>
                        <span>
                          Cash deposit & withdrawal
                          <br />
                          <small style="margin-left: 45px">
                            Transaction fee may apply at MoneyGram locations
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 64px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 mb-0 text-muted">
                      <li>
                        <span> Crypto deposit </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 mb-0 text-muted">
                      <li>
                        <span> Open banking </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 mb-0 text-muted">
                      <li>
                        <span>
                          Bank transfer
                          <br />
                          <small style="margin-left: 45px">
                            Fee only applies after 2 free transfers every month
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> From 0.2% </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 mb-0 text-muted">
                      <li>
                        <span>
                          Mobile wallet
                          <br />
                          <small style="margin-left: 45px">
                            Fee varies by mobile wallet
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> From 1% </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sending Money -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-sending-money.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3>Sending Money</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span> International transfer to contacts </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          International transfer to bank accounts
                          <br />
                          <small style="margin-left: 45px">
                            Fee varies by currency
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> From 0.25% </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          International transfer to mobile wallets
                          <br />
                          <small style="margin-left: 45px">
                            Fee varies by mobile wallet
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span
                        >From 0.25% (capped at 1.2 USD)</span
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          International transfer to crypto wallets
                          <br />
                          <small style="margin-left: 45px">
                            Network fee may apply
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> 0.15% </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Foreign exchange spreads/markups </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> None </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Reveiving Money -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-receiving-money.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3>Reveiving Money</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          Getting banking details in fiat currencies
                          <br />
                          <small style="margin-left: 45px">
                            USD, EUR, and GBP
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          Receiving payments in fiat currencies
                          <br />
                          <small style="margin-left: 45px">
                            Fixed fee per payment
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> 2.6 USD </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Getting on-chain details in stablecoins </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Receiving payments in stablecoins </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Paying Bills -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-paying-bills.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3>Paying Bills</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span>
                          International bill payments
                          <br />
                          <small style="margin-left: 45px">
                            Fee varies by country
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 64px"> From 0 USD </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- YIELD ACCOUNTS -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-yield-accounts.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3 class="text-success">YIELD ACCOUNTS</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span> Opening fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Management fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> 0.15% </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white margin-bottom">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked text-muted mt-0">
                      <li>
                        <span> Minimum deposit </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green margin-bottom border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column text-muted mt-0">
                      <span style="height: 40px"> None </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Cards -->
              <div class="row m-0 p-0 w-100">
                <div class="col-9 p-4 bg-white">
                  <img
                    src="@/src/assets/img-pricing-cards.png"
                    alt=""
                    class="left-icon"
                  />
                  <div
                    class="div-icon-separator d-flex flex-column justify-content-between"
                  >
                    <div>
                      <h3 class="text-success">CARDS</h3>
                      <button class="btn btn-dark btn-lg rounded-5 px-4">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-3 bg-green p-4 border-left d-flex flex-column justify-content-end"
                ></div>
              </div>

              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-4 text-muted">
                      <li>
                        <span> Virtual card issuance </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-4 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          Eco plastic card issuance
                          <br />
                          <small style="margin-left: 45px">
                            One-time fee per card
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> 3 USD </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          Metal card issuance
                          <br />
                          <small style="margin-left: 45px">
                            One-time fee per card
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> 35 USD </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span>
                          Mirror card issuance
                          <br />
                          <small style="margin-left: 45px">
                            One-time fee per card
                          </small>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 64px"> 65 USD </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Transaction fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column mt-0 text-muted">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row m-0 p-0 w-100">
                <div class="col-9 bg-white rounded-bl-5">
                  <div
                    class="div-margin-left d-flex flex-column justify-content-between"
                  >
                    <ul class="list-unstyled list-checked mt-0 text-muted">
                      <li>
                        <span> Foreign transaction fee </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-3 bg-green rounded-br-5 border-left d-flex flex-column justify-content-end"
                >
                  <div class="d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column text-muted mt-0">
                      <span style="height: 40px"> Free </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  min-height: 75vh;
  background-image: url("@/src/assets/bg-header-website-landing.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom right;
  background-color: #142339;
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
.bg-green {
  background-color: #00cec2;
}
.rainbow-border {
  background-image: linear-gradient(150deg, #00cec2 0%, #a092ff 100%);
  padding: 1px;
}
.left-icon {
  position: relative;
  top: 30px;
  border-radius: 50%;
  left: -70px;
  margin-right: -70px;
}
.div-icon-separator {
  margin-top: -65px;
  margin-left: 30px;
}
.div-margin-left {
  margin-left: 30px;
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
.rounded-tl-5 {
  border-top-left-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-tr-5 {
  border-top-right-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-bl-5 {
  border-bottom-left-radius: var(--bs-border-radius-xxl) !important;
}
.rounded-br-5 {
  border-bottom-right-radius: var(--bs-border-radius-xxl) !important;
}
.margin-bottom {
  margin-bottom: 1px;
}
.border-left {
  border-left: 1px solid #64748b;
}
.list-checked > li {
  height: 100%;
}
.list-checked > li::before {
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
  .left-icon {
    position: relative;
    top: -26px;
    border-radius: 50%;
    left: -28px;
    margin-right: -70px;
    height: 50px;
  }
  .show-md {
    display: none;
  }
  .show-sm {
    display: block;
  }
  .header {
    background: #142339 !important;
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
