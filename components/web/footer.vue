<template>
  <footer class="mf-gradient py-5">
    <div class="container">
      <div class="row border-bottom pb-4">
        <div class="col text-center text-lg-start">
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
          <div class="col-4 col-md-3">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">Company</li>
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/about_us"
              >
                About Us
              </RouterLink>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://www.notion.so/54b87f37b9a74868b4b929848e1f9314?pvs=21"
                  >Careers</a
                >
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://www.notion.so/15f7978292f84d689bd3e2dd7d33a80c?pvs=21"
                  >Press</a
                >
              </li>
            </ul>
          </div>
          <div class="col-4 col-md-4">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">Resources</li>
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
                  href="https://security.moneyflap.com/"
                >
                  Security
                </a>
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://status.moneyflap.com/"
                >
                  System Status
                </a>
              </li>
              <li class="py-2">
                <a
                  class="text-white no-text-decoration"
                  target="_blank"
                  href="https://help.moneyflap.com"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          <div class="col-4 col-md-5">
            <ul class="list-unstyled text-light me-sm-5">
              <li class="fs-5 mb-2">Legal</li>
              <!-- <li class="py-2">Privacy Policy</li> -->
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/privacy_policy/"
              >
                Privacy Policy
              </RouterLink>
              <!-- <li class="py-2">Terms & Conditions</li> -->
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/terms_of_service/"
              >
                Terms & Conditions
              </RouterLink>
              <!-- <li class="py-2">Licenses & Regulatory</li> -->
              <RouterLink
                class="nav-link text-white py-2"
                aria-current="page"
                to="/licenses_and_registrations/"
              >
                Licenses & Regulatory
              </RouterLink>
            </ul>
          </div>
        </div>
      </div>
      <p class="text-center pt-4 text-light">
        <small>Copyright 2024 MoneyFlap. All rights reserved.</small>
      </p>
    </div>
  </footer>
</template>
<style scoped>
.no-text-decoration {
  text-decoration: none;
}
</style>
