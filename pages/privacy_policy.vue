<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center py-1">
      <div class="container mt-5">
        <h1 class="fw-bolder display-2 mt-1">{{ $t("privacy.title") }}</h1>
        <p>{{ $t("privacy.intro") }}</p>
        <p>{{ $t("privacy.agreement") }}</p>
        <h2>{{ $t("privacy.infoCollectionTitle") }}</h2>
        <p>{{ $t("privacy.infoCollectionIntro") }}</p>
        <ol class="list-unstyled">
          <li>
            <div class="me-2 squareDiv">1</div>
            <h3>{{ $t("privacy.infoCollectionList[0].title") }}</h3>
          </li>
        </ol>
        <p>{{ $t("privacy.infoCollectionList[0].description") }}</p>
        <h4>{{ $t("privacy.registrationInfoTitle") }}</h4>
        <p>{{ $t("privacy.registrationInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.registrationInfoList[0]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[1]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[2]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[3]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[4]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[5]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[6]") }}</li>
          <li>{{ $t("privacy.registrationInfoList[7]") }}</li>
        </ul>
        <h4>{{ $t("privacy.financialInfoTitle") }}</h4>
        <p>{{ $t("privacy.financialInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.financialInfoList[0]") }}</li>
          <li>{{ $t("privacy.financialInfoList[1]") }}</li>
          <li>{{ $t("privacy.financialInfoList[2]") }}</li>
          <li>{{ $t("privacy.financialInfoList[3]") }}</li>
        </ul>
        <h4>{{ $t("privacy.employmentInfoTitle") }}</h4>
        <p>{{ $t("privacy.employmentInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.employmentInfoList[0]") }}</li>
          <li>{{ $t("privacy.employmentInfoList[1]") }}</li>
          <li>{{ $t("privacy.employmentInfoList[2]") }}</li>
        </ul>
        <h4>{{ $t("privacy.marketingInfoTitle") }}</h4>
        <p>{{ $t("privacy.marketingInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.marketingInfoList[0]") }}</li>
          <li>{{ $t("privacy.marketingInfoList[1]") }}</li>
          <li>{{ $t("privacy.marketingInfoList[2]") }}</li>
          <li>{{ $t("privacy.marketingInfoList[3]") }}</li>
        </ul>
        <ol class="list-unstyled">
          <li>
            <div class="me-2 squareDiv">2</div>
            <h3>{{ $t("privacy.infoCollectionList[1].title") }}</h3>
          </li>
        </ol>
        <p>{{ $t("privacy.infoCollectionList[1].description") }}</p>
        <h4>{{ $t("privacy.locationInfoTitle") }}</h4>
        <p>{{ $t("privacy.locationInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.locationInfoList[0]") }}</li>
          <li>{{ $t("privacy.locationInfoList[1]") }}</li>
          <li>{{ $t("privacy.locationInfoList[2]") }}</li>
          <li>{{ $t("privacy.locationInfoList[3]") }}</li>
        </ul>
        <h4>{{ $t("privacy.deviceInfoTitle") }}</h4>
        <p>{{ $t("privacy.deviceInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.deviceInfoList[0]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[1]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[2]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[3]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[4]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[5]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[6]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[7]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[8]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[9]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[10]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[11]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[12]") }}</li>
          <li>{{ $t("privacy.deviceInfoList[13]") }}</li>
        </ul>
        <h4>{{ $t("privacy.transactionInfoTitle") }}</h4>
        <p>{{ $t("privacy.transactionInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.transactionInfoList[0]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[1]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[2]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[3]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[4]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[5]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[6]") }}</li>
          <li>{{ $t("privacy.transactionInfoList[7]") }}</li>
        </ul>
        <ol class="list-unstyled">
          <li>
            <div class="me-2 squareDiv">3</div>
            <h3>{{ $t("privacy.infoCollectionList[2].title") }}</h3>
          </li>
        </ol>
        <p>{{ $t("privacy.thirdPartyInfoIntro") }}</p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.thirdPartyInfoList[0]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[1]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[2]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[3]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[4]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[5]") }}</li>
          <li>{{ $t("privacy.thirdPartyInfoList[6]") }}</li>
        </ul>
        <h4>
          <strong>{{ $t("privacy.aggregateInfoTitle") }}</strong>
        </h4>
        <p>{{ $t("privacy.aggregateInfoIntro") }}</p>
        <h4>
          <strong>{{ $t("privacy.usageInfoTitle") }}</strong>
        </h4>
        <p v-html="$t('privacy.usageInfoIntro')"></p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.usageInfoList[0]") }}</li>
          <li>{{ $t("privacy.usageInfoList[1]") }}</li>
          <li>{{ $t("privacy.usageInfoList[2]") }}</li>
          <li>{{ $t("privacy.usageInfoList[3]") }}</li>
          <li>{{ $t("privacy.usageInfoList[4]") }}</li>
          <li>{{ $t("privacy.usageInfoList[5]") }}</li>
        </ul>
        <p>{{ $t("privacy.nonPersonalInfoUsage") }}</p>
        <h4>
          <strong>{{ $t("privacy.disclosureInfoTitle") }}</strong>
        </h4>
        <p v-html="$t('privacy.disclosureInfoIntro')"></p>
        <ul class="list-unstyled">
          <li>{{ $t("privacy.disclosureInfoList[0]") }}</li>
          <li>{{ $t("privacy.disclosureInfoList[1]") }}</li>
          <li>{{ $t("privacy.disclosureInfoList[2]") }}</li>
          <li>{{ $t("privacy.disclosureInfoList[3]") }}</li>
          <li>{{ $t("privacy.disclosureInfoList[4]") }}</li>
          <li v-html="$t('privacy.disclosureInfoList[5]')"></li>
        </ul>
        <h2>
          <strong>{{ $t("privacy.transfersInfoTitle") }}</strong>
        </h2>
        <p v-html="$t('privacy.transfersInfoIntro')"></p>
        <ul class="list-unstyled">
          <li>
            <h3>
              <strong>{{ $t("privacy.transfersInfoList[0]") }}</strong>
            </h3>
          </li>
        </ul>
        <p v-html="$t('privacy.transfersInfo.adequateCountriesText')"></p>
        <ul class="list-unstyled">
          <li>
            <h3>
              <strong>{{
                $t("privacy.transfersInfo.nonAdequateTitle")
              }}</strong>
            </h3>
          </li>
        </ul>
        <p v-html="$t('privacy.transfersInfo.nonAdequateText')"></p>
        <p>{{ $t("privacy.transfersInfo.contactNote") }}</p>
        <h2>{{ $t("privacy.rights.title") }}</h2>
        <p>{{ $t("privacy.rights.intro") }}</p>
        <ul class="list-unstyled">
          <li v-html="$t('privacy.rights.list[0]')"></li>
          <li v-html="$t('privacy.rights.list[1]')"></li>
          <li v-html="$t('privacy.rights.list[2]')"></li>
          <li v-html="$t('privacy.rights.list[3]')"></li>
          <li v-html="$t('privacy.rights.list[4]')"></li>
          <li v-html="$t('privacy.rights.list[5]')"></li>
        </ul>
        <p>{{ $t("privacy.rights.exerciseNote") }}</p>
        <h2>
          <strong>{{ $t("privacy.cookies.title") }}</strong>
        </h2>
        <p v-html="$t('privacy.cookies.intro')"></p>
        <p>{{ $t("privacy.cookies.deletionNote") }}</p>

        <h2>
          <strong>{{ $t("privacy.analytics.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.analytics.intro") }}</p>
        <p>{{ $t("privacy.analytics.dataCollection") }}</p>
        <p>{{ $t("privacy.analytics.googleAnalytics") }}</p>
        <p>{{ $t("privacy.analytics.cookieUsage") }}</p>
        <p>{{ $t("privacy.analytics.cookieInfo") }}</p>
        <p v-html="$t('privacy.analytics.optOut')"></p>
        <p>{{ $t("privacy.analytics.conversionTracking") }}</p>
        <h2>
          <strong>{{ $t("privacy.communications.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.communications.intro") }}</p>
        <p>{{ $t("privacy.communications.serviceConsent") }}</p>
        <p v-html="$t('privacy.communications.phoneConsent')"></p>
        <p v-html="$t('privacy.communications.dataCharges')"></p>
        <p>{{ $t("privacy.communications.materialUsage") }}</p>

        <h2>
          <strong>{{ $t("privacy.security.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.security.description") }}</p>

        <h2>
          <strong>{{ $t("privacy.dataRetention.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.dataRetention.intro") }}</p>
        <ul class="list-unstyled">
          <li v-html="$t('privacy.dataRetention.list[0]')"></li>
          <li v-html="$t('privacy.dataRetention.list[1]')"></li>
        </ul>

        <h2>
          <strong>{{ $t("privacy.children.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.children.description") }}</p>

        <h2>
          <strong>{{ $t("privacy.otherServices.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.otherServices.description") }}</p>

        <h2>
          <strong>{{ $t("privacy.changes.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.changes.description") }}</p>

        <h2>
          <strong>{{ $t("privacy.optOut.title") }}</strong>
        </h2>
        <p v-html="$t('privacy.optOut.description')"></p>
        <h2>
          <strong>{{ $t("privacy.thirdParty.title") }}</strong>
        </h2>
        <p>{{ $t("privacy.thirdParty.description") }}</p>

        <h2>
          <strong>{{ $t("privacy.contact.title") }}</strong>
        </h2>
        <p>
          {{ $t("privacy.contact.description") }}
          <a href="mailto:legal@moneyflap.com">legal@moneyflap.com</a>
        </p>

        <h2>
          <strong>{{ $t("privacy.effectiveDate.title") }}</strong>
        </h2>
        <p v-html="$t('privacy.effectiveDate.description')"></p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  background-image: url("@/src/assets/bg-header-website-landing_2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #142339;
}
ul {
  list-style-type: none;
  padding-left: 0px;
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
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
ul > li {
  height: 100%;
}
.list-unstyled > li {
  display: flex;
  flex-direction: row;
}
ul > li::before {
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
.container {
  & * {
    color: white;
  }
}
</style>
