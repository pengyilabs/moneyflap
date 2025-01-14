<template>
  <nav
    class="navbar bg-dark navbar-expand-lg py-3 border-body"
    data-bs-theme="dark"
  >
    <div class="container">
      <div class="col">
        <RouterLink class="navbar-brand" aria-current="page" to="/">
          <IconsMoneyflapLogo />
        </RouterLink>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Menu"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        :class="{ show: isMenuOpen }"
      >
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              aria-current="page"
              to="/about_us"
            >
              {{ $t("navbar.about-us") }}
            </RouterLink>
          </li>
          <li class="nav-item">
            <a
              class="nav-link text-white"
              target="_blank"
              href="https://security.moneyflap.com/"
            >
              {{ $t("navbar.security") }}
            </a>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              aria-current="page"
              to="/pricing"
            >
              {{ $t("navbar.pricing") }}
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link text-white"
              aria-current="page"
              to="/mfusd"
            >
              {{ $t("navbar.mfusd") }}
            </RouterLink>
          </li>

          <li class="nav-item">
            <a
              class="nav-link text-white"
              target="_blank"
              href="http://help.moneyflap.com"
            >
              {{ $t("navbar.help") }}
            </a>
          </li>
          <li class="nav-item">
            <select
              v-model="currentLanguage"
              class="form-select"
              aria-label="Default select example"
              @change="
                changeLanguage(currentLanguage);
                updateLanguage(currentLanguage);
              "
            >
              <option value="en">🇺🇲{{ $t("navbar.english") }}</option>
              <option value="es">🇪🇸{{ $t("navbar.spanish") }}</option>
              <option value="fr">🇫🇷{{ $t("navbar.french") }}</option>
            </select>
          </li>
        </ul>
        <form class="ms-lg-auto d-block d-lg-none text-center">
          <button
            class="btn btn-primary btn-lg mt-3 mt-lg-0 ms-3"
            type="button"
          >
            {{ $t("navbar.get-started") }}
          </button>
        </form>
      </div>
      <form class="ms-lg-auto d-none d-lg-flex">
        <button class="btn btn-primary btn-lg ms-3" type="button">
          {{ $t("navbar.get-started") }}
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  setup() {
    const { locale, setLocale } = useI18n();

    return {
      locale,
      setLocale,
    };
  },

  data() {
    const currentLanguage = "";
    return {
      isMenuOpen: false,
      currentLanguage,
    };
  },
  mounted() {
    const languageSystem = navigator.language.startsWith("es")
      ? "es"
      : navigator.language.startsWith("en")
        ? "en"
        : navigator.language.startsWith("fr")
          ? "fr"
          : "";
    const lang = localStorage.getItem("language") ?? languageSystem;
    this.changeLanguage(lang);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changeLanguage(lang) {
      this.setLocale(lang);
      this.currentLanguage = lang;
    },
    updateLanguage(lang) {
      localStorage.setItem("language", lang);
    },
  },
};
</script>
