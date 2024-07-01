<template>
  <NuxtLayout name="weblayout">
    <div class="header d-flex align-items-top justify-content-center py-1">
      <div class="container mt-5 pb-5">
        <h1 class="fw-bolder display-2 mt-1">BSA/AML Program</h1>
        <h2>MoneyFlap Policy</h2>
        <p>
          MoneyFlap strictly prohibits money laundering and activities that
          support terrorism or crime, in compliance with the Bank Secrecy
          Act (BSA) and regulations. Our Anti-Money Laundering (AML) policies
          and internal controls ensure adherence to BSA regulations and FINRA
          rules. These policies are regularly reviewed and updated to stay
          aligned with regulatory changes and company developments.
        </p>

        <h2>AML Compliance Person Designation and Duties</h2>
        <p>
          MoneyFlap has appointed an AML Compliance Person who is fully
          responsible for its Anti-Money Laundering program. This individual
          will monitor compliance with AML obligations, oversee employee
          communication and training, maintain necessary AML records, and ensure
          Suspicious Activity Reports are filed with FinCEN when needed.
        </p>

        <h2>Checking the Office of Foreign Assets Control (OFAC) Listings</h2>
        <p>
          Before opening an account and continuously thereafter, we'll ensure
          customers aren't on the SDN list or involved in prohibited
          transactions per OFAC's economic sanctions and embargoes. Since these
          lists are frequently updated, we will regularly check them and
          subscribe to updates.
        </p>
        <h2>Customer Identification Program (CIP)</h2>
        <p>
          We have a written Customer Identification Program (CIP) in place. For
          every new account, we collect essential identification details, use
          risk-based methods to verify identities, record the information and
          verification results, give customers a notice about the need for
          identification, and check their information against government lists
          of suspected terrorists.
        </p>
        <h2>Customer Due Diligence Rule</h2>
        <p>
          Before opening an account, we will collect the following information
          for all accounts, if applicable, for any person, that is opening a new
          account and whose name is on the account:
        </p>
        <ol class="list-unstyled">
          <li>
            <div class="me-2 squareDiv">1</div>
            <span>Full legal name;</span>
          </li>
          <li>
            <div class="me-2 squareDiv">2</div>
            <span>Mobile phone number;</span>
          </li>
          <li>
            <div class="me-2 squareDiv">3</div>
            <span>Date of birth;</span>
          </li>
          <li>
            <div class="me-2 squareDiv">4</div>
            <span>Email address;</span>
          </li>
          <li>
            <div class="me-2 squareDiv">5</div>
            <span>A residential street address;</span>
          </li>
          <li>
            <div class="me-2 squareDiv">6</div>
            <span>
              A identification number, which will be one or more of the
              following: a taxpayer identification number, passport number and
              country of issuance, alien identification card number, or number
              and country of issuance of any other government-issued document
              evidencing nationality or residence and bearing a photograph or
              other similar safeguard (for non-U.S. persons); and
            </span>
          </li>
          <li>
            <div class="me-2 squareDiv">7</div>
            <span>
              Additional details or documents may be required by our Compliance
              Team.
            </span>
          </li>
        </ol>
        <p>
          We will understand the nature and purpose of customer relationships to
          develop a customer risk profile. The risk assessment of the client
          will then place them in one of the levels of customer due diligence,
          which determines the risk rating and KYC checks that will be
          performed. 
        </p>

        <h2>Monitoring Accounts for Suspicious Activity</h2>
        <p>
          At MoneyFlap, we will monitor accounts for unusual transactions,
          considering relevant risk factors and red flags. Detected activities
          will be reviewed and documented by our monitoring system. The AML
          Compliance Person or a designee will investigate and review necessary
          information from internal or third-party sources before filing a SAR.
        </p>
        <h2>Suspicious Activity and Currrency Transactions Reporting</h2>
        <p>
          We will file Suspicious Activity Reports (SARs) with FinCEN for any
          transactions involving funds or assets that we suspect or have reason
          to suspect are suspicious. Additionally, we will notify law
          enforcement in cases requiring immediate attention, such as terrorist
          financing or ongoing money laundering.
          <br />
          We will submit Currency Transaction Reports (CTRs) to FinCEN for
          individual or multiple currency transactions that exceed a specified
          USD amount within a single business day, if they are made by or on
          behalf of the same person.
        </p>
        <h2>AML Recordkeeping</h2>
        <p>
          Our designated AML Compliance Person will ensure proper maintenance of
          AML records and the filing of SARs. Our firm will create and keep
          SARs, customer identity verification, and funds transmittal
          documentation for at least six years, maintaining their
          confidentiality. Disclosure will be limited to FinCEN, the SEC, an
          SEC-registered SRO, or other relevant legal authorities.
        </p>
        <h2>Training Programs</h2>
        <p>
          We will implement continuous employee training led by the AML
          Compliance Person and senior management, at least annually. The
          training will be tailored to MoneyFlap’s size, customer base, and
          resources, and updated for new legal developments. We will keep
          records of trained individuals, training dates, and topics covered.
          Additionally, we will assess if certain employees need specialized
          extra training.
        </p>
        <h2>Program to Independently Test AML Program</h2>
        <p>
          Our AML program will be independently tested at least once a year.
          After testing, the findings will be reported to senior management. We
          will promptly address and document how each issue is resolved.
        </p>
        <h2>Monitoring Employee Conduct and Accounts</h2>
        <p>
          Employee accounts will undergo the same Anti-Money Laundering (AML)
          procedures as customer accounts, supervised by the AML Compliance
          Person. Supervisors' AML performance will be evaluated during their
          annual review, and the CEO will review the AML Compliance Person's
          accounts.
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
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
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
