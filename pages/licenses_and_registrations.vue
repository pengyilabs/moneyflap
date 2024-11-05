<template>
  <NuxtLayout name="weblayout">
    <div
      class="header d-flex align-items-top justify-content-center py-1 bg-dark"
    >
      <div class="container my-5 col">
        <h2 class="fw-bolder display-2 mt-1">Licenses and Registrations</h2>
        
        <h3>
          <img src="@/src/assets/us-flag.png" height="33px" />
          United States
        </h3>
        <p class="pb-3">
          <strong>MoneyFlap Digital Labs, Inc.</strong> is incorporated in
          Delaware and is registered as a
          <a target="_blank" href="https://www.fincen.gov/msb-state-selector">
            Money Services Business</a
          >
          (MSB) with the Financial Crimes Enforcement Network (FinCEN), a
          regulatory bureau of the United States Department of the Treasury. Our
          MSB Registration Number is 31000266452431.
        </p>

        <h3>
          <img src="@/src/assets/Flag-Argentina.webp" height="33px" />
          Argentina
        </h3>
        <p class="pb-3">
          <strong>MoneyFlap Digital Labs, Inc.</strong> is registered as a
          <a target="_blank" href="https://www.cnv.gov.ar/SitioWeb/ProveedoresServiciosActivosVirtuales/RegistrosPSAV">
            Virtual Assets Service Provider (VASP)
          </a>
          under No. D1-2024-135-APN-GRC#CNV dated 21st August 2024 in the Registry of Virtual Asset Service Providers of National Securities Commission (CNV). This registration is for the purposes of control as an Obligated Subject before the Financial Information Unit (UIF) and any other regulatory entity authorized for this purpose, within the framework of its powers, and does not imply a license or supervision by the National Securities Commission (CNV) on the activity carried out by MoneyFlap. 
        </p>

        <h3>
          <img src="@/src/assets/senegal-flag.png" height="33px" />
          Senegal and West African Economic and Monetary Union (WAEMU)
        </h3>
        <p class="pb-3">
          <strong>MoneyFlap Senegal SAS</strong>  operates as a technology services provider. It is neither licensed by the Central Bank of the West African States (BCEAO) nor by the “Autorité des Marchés Financiers de l’UMOA (AMF-UMOA)”, also known as the “Conseil Regional de l’Epargne Publique et des Marches Financiers (CREPMF)”. However, it is self-considered as an “Entreprise et Profession Non Financière Désignée (EPNFD)” and is a reporting entity to the Financial Intelligence Unit (CENTIF), under the control of the Ministry of Economy and Finances, for anti-money laundering purposes.
        </p>

        <h3>
          <img src="@/src/assets/Flag_of_Europe.svg" height="33px" />
          Bulgaria and European Economic Area (EEA)
        </h3>
        <p>
          <strong>MF European Trade EOOD (trading as MoneyFlap Europe)</strong>, is registered as a
          <a target="_blank" href="https://nra.bg/wps/portal/nra/registers-i-spisuci/registers/page.virtualni.valuti/registur-na-licata-predstaviashti-uslugi-za-obmqna-megdu-virtualni-i-priznati-valuti">
            Virtual Assets Service Provider (VASP)
          </a>
          under No. 3170376608 in the Electronic Public Register of Persons of the National Revenue Agency (NRA) against money laundering. This registration is for the purposes of providing exchange services between virtual currencies and non-gold-backed currencies, as well as offering custodial wallet services. 
        </p>
        <p>
          <strong>Disclaimer:</strong> blockchain technology and virtual
          currency registrations are not yet required.
        </p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.header {
  background-image: url("@/src/assets/bg-header-website-landing_2.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  background-color: #142339;
  & * {
    color: white;
  }
}
</style>
