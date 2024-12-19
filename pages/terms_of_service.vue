<template>
  <NuxtLayout name="weblayout">
    <div
      class="header d-flex align-items-top justify-content-center py-1 bg-dark"
    >
      <div class="container mt-5 col whites">
        <h1 class="fw-bolder display-2 mt-1">{{ $t("terms.main-title") }}</h1>
        <section class="introduction_section">
          <h2>Introduction</h2>
          <p v-html="$t('terms.introduction-description')"></p>
        </section>
        <section class="electronic_agreement_section">
          <h2>{{ $t("terms.agreement-title") }}</h2>
          <p>
            {{ $t("terms.agreement-description") }}
          </p>
        </section>
        <section class="access_and_retention_section">
          <h2>{{ $t("terms.access-title") }}</h2>
          <p>
            {{ $t("terms.access-description") }}
          </p>
        </section>
        <section class="our_products_and_services_section">
          <h2>{{ $t("terms.products-title") }}</h2>
          <p>{{ $t("terms.products-description") }}</p>
          <ul class="list-unstyled list-checked">
            <li class="d-block">
              <span v-html="$t('terms.products-op1-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op2-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op3-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op4-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op5-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op6-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op7-title')"> </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op8-title')"> </span>
            </li>
            <li>
              <span>
                <span v-html="$t('terms.products-op9-title')"> </span>
              </span>
            </li>
            <li>
              <span v-html="$t('terms.products-op10-title')"> </span>
            </li>
          </ul>
        </section>
        <section class="registration_and_eligibility_section">
          <h2>{{ $t("terms.registration-title") }}</h2>
          <p>
            {{ $t("terms.registration-description") }}
          </p>
          <ol class="list-unstyled">
            <li>
              <div><div class="me-2 squareDiv">1</div></div>
              <p>{{ $t("terms.registration-op1-title") }}</p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">2</div></div>
              <p>{{ $t("terms.registration-op2-title") }}</p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">3</div></div>
              <p>
                {{ $t("terms.registration-op3-title") }}
              </p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">4</div></div>
              <p>
                {{ $t("terms.registration-op4-title") }}
              </p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">5</div></div>
              <p>
                {{ $t("terms.registration-op5-title") }}
              </p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">6</div></div>
              <p>
                {{ $t("terms.registration-op6-title") }}
              </p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">7</div></div>
              <p>
                {{ $t("terms.registration-op7-title") }}
              </p>
            </li>
          </ol>
          <p>
            {{ $t("terms.registration-final") }}
          </p>
        </section>
        <section class="commercial_use_of_service_section">
          <h2>{{ $t("terms.commercial-title") }}</h2>
          <p>
            {{ $t("terms.commercial-description") }}
          </p>
          <ol class="list-unstyled">
            <li>
              <div><div class="me-2 squareDiv">1</div></div>
              <p>
                {{ $t("terms.commercial-op1-title") }}
              </p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">2</div></div>
              <p>{{ $t("terms.commercial-op2-title") }}</p>
            </li>
            <li>
              <div><div class="me-2 squareDiv">3</div></div>
              <p>
                {{ $t("terms.commercial-op3-title") }}
              </p>
            </li>
          </ol>
          <p>
            {{ $t("terms.commercial-final") }}
          </p>
          <h2 class="mt-4">{{ $t("terms.deposits-withdrawals-title") }}</h2>
          <h4 class="">{{ $t("terms.deposits-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              <div v-html="$t('terms.deposits-op1-title')"></div>
            </li>
            <li class="mb-0 mt-0">
              <div v-html="$t('terms.deposits-op2-title')"></div>
            </li>
            <li class="mb-0 mt-0">
              <div v-html="$t('terms.deposits-op3-title')"></div>
            </li>
          </ul>
          <h4>{{ $t("terms.withdrawals-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              <div v-html="$t('terms.terms.withdrawals-op1-title')"></div>
            </li>
            <li class="mb-0 mt-0">
              <div v-html="$t('terms.withdrawals-op2-title')"></div>
            </li>
          </ul>
        </section>
        <section class="transaction_fees_and_limits_section">
          <h2>{{ $t("terms.transaction-title") }}</h2>
          <p>
            {{ $t("terms.transaction-description") }}
          </p>
        </section>
        <section class="general_risk_disclosure_section">
          <h2>{{ $t("terms.general-title") }}</h2>
          <p>
            {{ $t("terms.general-description") }}
          </p>
          <h4>{{ $t("terms.blockchain-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.blockchain-op1-title") }}
            </li>
          </ul>
          <h4>{{ $t("terms.legal-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.legal-op1-title") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.legal-op2-title") }}
            </li>
          </ul>
          <h4>{{ $t("terms.currency-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.currency-op1-title") }}
            </li>
          </ul>
          <h4>{{ $t("terms.investment-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.investment-op1-title") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.investment-op2-title") }}
            </li>
          </ul>
          <h4>{{ $t("terms.no-bank-title") }}</h4>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.no-bank-op1-title") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.no-bank-op2-title") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.no-bank-op3-title") }}
            </li>
          </ul>
        </section>
        <section class="account_security_section">
          <h2>{{ $t("terms.account-security-title") }}</h2>
          <p>
            {{ $t("terms.account-security-description") }}
          </p>
        </section>
        <section class="your_use_of_the_websites_section">
          <h2>{{ $t("terms.your-use-website-title") }}</h2>
          <ol class="list-unstyled">
            <li>
              <div><div class="me-2 squareDiv">1</div></div>
              {{ $t("terms.your-use-website-op1-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">2</div></div>
              {{ $t("terms.your-use-website-op2-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">3</div></div>
              {{ $t("terms.your-use-website-op3-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">4</div></div>
              {{ $t("terms.your-use-website-op4-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">5</div></div>
              {{ $t("terms.your-use-website-op5-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">6</div></div>
              {{ $t("terms.your-use-website-op6-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">7</div></div>
              {{ $t("terms.your-use-website-op7-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">8</div></div>
              {{ $t("terms.your-use-website-op8-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">9</div></div>
              {{ $t("terms.your-use-website-op9-title") }}
            </li>
            <ul class="list-unstyled ms-4 list-checked">
              <li class="mb-0 mt-0">
                {{ $t("terms.your-use-website-op9-1-title") }}
              </li>
              <li class="mb-0 mt-0">
                {{ $t("terms.your-use-website-op9-2-title") }}
              </li>
              <li class="mb-0 mt-0">
                {{ $t("terms.your-use-website-op9-3-title") }}
              </li>
              <li class="mb-0 mt-0">
                {{ $t("terms.your-use-website-op9-4-title") }}
              </li>
              <li class="mb-0 mt-0">
                {{ $t("terms.your-use-website-op9-5-title") }}
              </li>
            </ul>
            <li>
              <div><div class="me-2 squareDiv">10</div></div>
              {{ $t("terms.your-use-website-op10-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">11</div></div>
              {{ $t("terms.your-use-website-op11-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">12</div></div>
              {{ $t("terms.your-use-website-op12-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">13</div></div>
              {{ $t("terms.your-use-website-op13-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">14</div></div>
              {{ $t("terms.your-use-website-op14-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">15</div></div>
              {{ $t("terms.your-use-website-op15-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">16</div></div>
              {{ $t("terms.your-use-website-op16-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">17</div></div>
              {{ $t("terms.your-use-website-op17-title") }}
            </li>
          </ol>
        </section>
        <section class="representations_and_warranties_section">
          <h2>{{ $t("terms.representations-title") }}</h2>
          <p>{{ $t("terms.representations-description") }}</p>
          <ol class="list-unstyled">
            <li>
              <div><div class="me-2 squareDiv">1</div></div>
              {{ $t("terms.representations-op1-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">2</div></div>
              {{ $t("terms.representations-op2-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">3</div></div>
              {{ $t("terms.representations-op3-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">4</div></div>
              {{ $t("terms.representations-op4-title") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">5</div></div>
              {{ $t("terms.representations-op5-title") }}
            </li>
          </ol>
          <p>
            {{ $t("terms.representations-final") }}
          </p>
        </section>
        <section class="term_suspension_and_termination_section">
          <h2>{{ $t("terms.term_suspension.title") }}</h2>
          <p>
            {{ $t("terms.term_suspension.description1") }}
          </p>
          <p>
            {{ $t("terms.term_suspension.description2") }}
          </p>
          <ul class="list-unstyled list-checked">
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason1") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason2") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason3") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason4") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason5") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason6") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason7") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason8") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason9") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason10") }}
            </li>
            <li class="mb-0 mt-0">
              {{ $t("terms.term_suspension.reasons.reason11") }}
            </li>
          </ul>
          <p>
            {{ $t("terms.term_suspension.description3") }}
          </p>
        </section>
        <section class="modifications_to_service_section">
          <h2>{{ $t("terms.modifications.title") }}</h2>
          <p>
            {{ $t("terms.modifications.description") }}
          </p>
        </section>
        <section class="blocking_of_ip_addresses_section">
          <h2>{{ $t("terms.ip_blocking.title") }}</h2>
          <p>
            {{ $t("terms.ip_blocking.description") }}
          </p>
        </section>
        <section class="content_section">
          <h2>{{ $t("terms.content.title") }}</h2>
          <h4>{{ $t("terms.content.proprietary_rights.title") }}</h4>
          <p>
            {{ $t("terms.content.proprietary_rights.description") }}
          </p>
          <p>
            {{ $t("terms.content.third_party.description") }}
          </p>
          <h4>{{ $t("terms.content.ownership.title") }}</h4>
          <p>
            {{ $t("terms.content.ownership.description1") }}
          </p>
          <p>
            {{ $t("terms.content.ownership.description2") }}
          </p>
          <p>
            {{ $t("terms.content.ownership.description3") }}
          </p>
        </section>
        <section class="restrictions_on_the_use_of_materials_section">
          <h2 class="customShadow">{{ $t("terms.restrictions.title") }}</h2>
          <p>
            {{ $t("terms.restrictions.description") }}
          </p>
        </section>
        <section class="copyright_policy_section">
          <h2 class="customShadow">{{ $t("terms.copyright.title") }}</h2>
          <p>{{ $t("terms.copyright.description1") }}</p>
          <p>{{ $t("terms.copyright.description2") }}</p>
          <p>{{ $t("terms.copyright.address") }}</p>
          <p>{{ $t("terms.copyright.instruction") }}</p>
          <ol class="list-unstyled">
            <li v-for="(item, index) in 6" :key="index">
              <div>
                <div class="me-2 squareDiv">{{ item }}</div>
              </div>
              {{ $t(`terms.copyright.requirements.item${item}`) }}
            </li>
          </ol>
          <p>{{ $t("terms.copyright.dmca_notice") }}</p>
        </section>
        <section class="liability_for_content_section">
          <h2 class="customShadow">
            {{ $t("terms.liability_for_content.title") }}
          </h2>
          <p>{{ $t("terms.liability_for_content.description1") }}</p>
          <p>{{ $t("terms.liability_for_content.description2") }}</p>
          <p>{{ $t("terms.liability_for_content.description3") }}</p>
        </section>

        <section class="repeat_infringers_section">
          <h2 class="customShadow">
            {{ $t("terms.repeat_infringers.title") }}
          </h2>
          <p>{{ $t("terms.repeat_infringers.description1") }}</p>
          <p>{{ $t("terms.repeat_infringers.description2") }}</p>
        </section>
        <section class="limitation_of_liability_section">
          <h2 class="customShadow">
            {{ $t("terms.limitation_of_liability.title") }}
          </h2>
          <p>{{ $t("terms.limitation_of_liability.description1") }}</p>
          <p>{{ $t("terms.limitation_of_liability.description2") }}</p>
          <p>{{ $t("terms.limitation_of_liability.description3") }}</p>
          <p>{{ $t("terms.limitation_of_liability.description4") }}</p>
        </section>
        <section class="indemnity_by_you_section">
          <h2 class="customShadow">{{ $t("terms.indemnity_by_you.title") }}</h2>
          <p>
            {{ $t("terms.indemnity_by_you.description") }}
          </p>
          <ol class="list-unstyled">
            <li>
              <div><div class="me-2 squareDiv">1</div></div>
              {{ $t("terms.indemnity_by_you.items.item1") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">2</div></div>
              {{ $t("terms.indemnity_by_you.items.item2") }}
            </li>
            <li>
              <div><div class="me-2 squareDiv">3</div></div>
              {{ $t("terms.indemnity_by_you.items.item3") }}
            </li>
          </ol>
        </section>
        <section class="attorney_fees_section">
          <h2 class="customShadow">{{ $t("terms.attorney_fees.title") }}</h2>
          <p>
            {{ $t("terms.attorney_fees.description") }}
          </p>
        </section>
        <section class="parental_or_guardian_permission_section">
          <h2 class="customShadow">
            {{ $t("terms.parental_permission.title") }}
          </h2>
          <p>
            {{ $t("terms.parental_permission.description") }}
          </p>
        </section>
        <section class="privacy_policy_section">
          <h2 class="customShadow">{{ $t("terms.privacy_policy.title") }}</h2>
          <p>
            {{ $t("terms.privacy_policy.description") }}
            <RouterLink to="/privacy_policy/">{{
              $t("terms.privacy_policy.link_text")
            }}</RouterLink>
          </p>
        </section>
        <section
          class="jurisdiction_and_choice_of_law_dispute_resolution_section"
        >
          <h2 class="customShadow">
            {{ $t("terms.jurisdiction.title") }}
          </h2>
          <p>
            {{ $t("terms.jurisdiction.description") }}
          </p>
        </section>
        <section class="arbitration_provision_no_class_action_section">
          <h2 class="customShadow">{{ $t("terms.arbitration.title") }}</h2>
          <p>
            {{ $t("terms.arbitration.description") }}
          </p>
        </section>
        <section class="no_third_party_beneficiaries_section">
          <h2 class="customShadow">
            {{ $t("terms.third_party_beneficiaries.title") }}
          </h2>
          <p>{{ $t("terms.third_party_beneficiaries.description") }}</p>
        </section>

        <section class="entire_agreement_section">
          <h2 class="customShadow">{{ $t("terms.entire_agreement.title") }}</h2>
          <p>{{ $t("terms.entire_agreement.description") }}</p>
        </section>
        <section class="severability_waiver_section">
          <h2 class="customShadow">
            {{ $t("terms.severability_waiver.title") }}
          </h2>
          <p>
            {{ $t("terms.severability_waiver.description") }}
          </p>
        </section>
        <section class="contact_section">
          <h2 class="customShadow">{{ $t("terms.contact.title") }}</h2>
          <p>
            {{ $t("terms.contact.description") }}
            <a :href="`mailto:${$t('terms.contact.email')}`">{{
              $t("terms.contact.email")
            }}</a>
          </p>
          <p>{{ $t("terms.contact.updated") }}</p>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  background-image: url("@/src/assets/bg-header-website-landing_2.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.our_products_and_services_section {
  background-image: url("@/src/assets/bg-header-website-landing_3.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
.d-contents {
  display: contents;
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
.customShadow {
  text-shadow: 1px 1px black, -1px 1px black, 1px -1px black, -1px -1px black;
}
.list-unstyled > li {
  display: flex;
  flex-direction: row;
}
.shadowTitle {
  text-shadow: 1px 1px black, -1px -1px black, -1px 1px black, 1px -1px black;
  font-weight: normal;
}
.squareDiv {
  height: 2rem;
  width: 2rem;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-right: 0.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(133deg, #00cec2 33%, #705bff 83%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.squareDiv::before {
  height: 2rem;
  width: 2rem;
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 100%;
  border: 2.5px solid transparent;
  background: linear-gradient(133deg, #00cec2 13%, #705bff 83%) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.whites {
  & > * {
    color: white;
  }
}
</style>
