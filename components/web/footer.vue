<template>
  <footer class="mf-gradient py-5">
    <div class="container">
      <div class="row border-bottom pb-4">
        <div class="col-12 col-md-4 text-center text-lg-start">
          <RouterLink aria-current="" to="/">
            <img
              src="@/src/assets/logo-moneyflap-fullwhite.svg"
              alt="MoneyFlap"
              class="img-fluid"
            />
          </RouterLink>
          <div class="pt-3 pb-4">
            <a target="_blank" href="https://www.facebook.com/moneyflap">
              <img
                src="@/src/assets/icon-facebook.svg"
                class="me-4"
                alt="Facebook"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/moneyflap.app/">
              <img
                src="@/src/assets/icon-instagram.svg"
                class="me-4"
                alt="Instagram"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/moneyflap"
            >
              <img
                src="@/src/assets/icon-linkedin.svg"
                class="me-4"
                alt="Linkedin"
              />
            </a>
            <a target="_blank" href="https://twitter.com/moneyflap">
              <img
                src="@/src/assets/icon-twitter-x.svg"
                class="me-4"
                alt="Twitter X"
              />
            </a>
            <a target="_blank" href="https://www.tiktok.com/@moneyflap.app/">
              <img
                src="@/src/assets/icon-douyin.svg"
                class="me-4"
                alt="Tiktok Douyin"
              />
            </a>
          </div>
          <p class="text-light">
            <a
              target="_blank"
              href="mailto:hello@moneyflap.com"
              class="text-white no-text-decoration"
            >
              <img src="@/src/assets/icon-mail.svg" alt="Mail" class="me-3" />
              hello@moneyflap.com
            </a>
          </p>
        </div>
        <div class="row col-auto">
          <div class="col-6 col-md-3">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">
                <strong>{{ $t("footer.company") }}</strong>
              </li>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/about_us"
              >
                {{ $t("footer.about-us") }}
              </RouterLink>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/careers"
              >
                {{ $t("footer.careers") }}
              </RouterLink>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/press_kit"
              >
                {{ $t("footer.press") }}
              </RouterLink>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/ethics_sustainability"
              >
                {{ $t("footer.ethics-sustainability") }}
              </RouterLink>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">
                <strong>{{ $t("footer.for-business") }}</strong>
              </li>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/mfusd"
              >
                MFUSD
              </RouterLink>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/moneyflap_rev"
              >
                MoneyFlap Rev
              </RouterLink>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">
                <strong>{{ $t("footer.resources") }}</strong>
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://moneyflap.medium.com/"
                >
                  Blog
                </a>
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://help.moneyflap.com"
                >
                  {{ $t("footer.help") }}
                </a>
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://security.moneyflap.com/"
                >
                  {{ $t("footer.security") }}
                </a>
              </li>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/fraud_protection"
              >
                {{ $t("footer.fraud-protection") }}
              </RouterLink>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://status.moneyflap.com/"
                >
                  {{ $t("footer.system-status") }}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-3">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2"><strong>Legal</strong></li>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/bsa_aml_program"
              >
                {{ $t("footer.KYC/AML-program") }}
              </RouterLink>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/privacy_policy/"
              >
                {{ $t("footer.privacy") }}
              </RouterLink>
              <!-- <li class="py-2">Terms & Conditions</li> -->
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/terms_of_service/"
              >
                {{ $t("footer.terms") }}
              </RouterLink>
              <!-- <li class="py-2">Licenses & Regulatory</li> -->
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/licenses_and_registrations/"
              >
                {{ $t("footer.licenses") }}
              </RouterLink>
            </ul>
          </div>
        </div>
      </div>
      <p class="text-center pt-4 text-light">
        <small>{{ $t("footer.copyright") }}</small>
      </p>
    </div>
  </footer>
</template>
<style scoped>
.no-text-decoration {
  text-decoration: none;
}
</style>
