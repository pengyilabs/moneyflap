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
        <p>
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
          <img src="@/src/assets/senegal-flag.png" height="33px" />
          Senegal and West African Economic and Monetary Union (WAEMU)
        </h3>
        <p>
          <strong>MoneyFlap Senegal SAS</strong> operates as a technology
          services provider. It is neither licensed by the Central Bank of the
          West African States (BCEAO) nor by the “Autorité des Marchés
          Financiers de l’UEMOA (AMF-UEMOA)”, also known as the “Conseil
          Regional de l’Epargne Publique et des Marches Financiers (CREPMF)”.
          However, it is self-considered as an “Entreprise et Profession Non
          Financière Désignée (EPNFD)” and is a reporting entity to the
          Financial Intelligence Unit (CENTIF), under the control of the
          Ministry of Economy and Finances, for anti-money laundering purposes.
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
