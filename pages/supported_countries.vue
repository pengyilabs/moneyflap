<template>
  <NuxtLayout name="weblayout">
    <div
      class="header d-flex align-items-top justify-content-center py-1"
      style="background-color: #142339"
    >
      <div class="container mt-5 col">
        <section>
          <h2 class="text-white fw-bolder display-2 mt-1">
            Supported countries
          </h2>
          <h3 class="text-white">Africa</h3>
          <ul class="text-white">
            <li>Algeria <span class="coming-soon">Coming Soon</span></li>
            <li>Angola</li>
            <li>Benin</li>
            <li>Botswana</li>
            <li>Burkina Faso</li>
            <li>Burundi <span class="coming-soon">Coming Soon</span></li>
            <li>Cameroon</li>
            <li>Cape Verde</li>
            <li>
              Central African Republic
              <span class="coming-soon">Coming Soon</span>
            </li>
            <li>Congo (Brazzaville)</li>
            <li>Congo (Democratic Republic)</li>
            <li>Côte d'Ivoire</li>
            <li>Egypt <span class="coming-soon">Coming Soon</span></li>
            <li>Equatorial Guinea</li>
            <li>Ethiopia <span class="coming-soon">Coming Soon</span></li>
            <li>Gabon</li>
            <li>The Gambia</li>
            <li>Ghana</li>
            <li>Guinea <span class="coming-soon">Coming Soon</span></li>
            <li>Guinea-Bissau</li>
            <li>Kenya</li>
            <li>Liberia <span class="coming-soon">Coming Soon</span></li>
            <li>Madagascar <span class="coming-soon">Coming Soon</span></li>
            <li>Malawi</li>
            <li>Mali</li>
            <li>Mauritania <span class="coming-soon">Coming Soon</span></li>
            <li>Morocco <span class="coming-soon">Coming Soon</span></li>
            <li>Mozambique <span class="coming-soon">Coming Soon</span></li>
            <li>Niger <span class="coming-soon">Coming Soon</span></li>
            <li>Nigeria</li>
            <li>Rwanda</li>
            <li>Senegal</li>
            <li>Sierra Leone <span class="coming-soon">Coming Soon</span></li>
            <li>Sierra Leone</li>
            <li>South Africa</li>
            <li>Tanzania</li>
            <li>Togo</li>
            <li>Tunisia <span class="coming-soon">Coming Soon</span></li>
            <li>Uganda</li>
            <li>Zambia</li>
            <li>Zimbabwe <span class="coming-soon">Coming Soon</span></li>
          </ul>
          <h3 class="text-white">Europe</h3>
          <ul class="text-white">
            <li>Andorra</li>
            <li>Austria</li>
            <li>Belgium</li>
            <li>Bulgaria</li>
            <li>Croatia</li>
            <li>Cyprus</li>
            <li>Czech Republic</li>
            <li>Denmark</li>
            <li>Estonia</li>
            <li>Finland</li>
            <li>France</li>
            <li>Germany</li>
            <li>Greece</li>
            <li>Hungary</li>
            <li>Iceland</li>
            <li>Ireland</li>
            <li>Italy</li>
            <li>Latvia</li>
            <li>Liechtenstein</li>
            <li>Lithuania</li>
            <li>Luxembourg</li>
            <li>Malta</li>
            <li>Monaco</li>
            <li>Netherlands</li>
            <li>Norway</li>
            <li>Poland</li>
            <li>Portugal</li>
            <li>Romania</li>
            <li>San Marino</li>
            <li>Slovakia</li>
            <li>Slovenia</li>
            <li>Spain</li>
            <li>Sweden</li>
            <li>Switzerland</li>
            <li>United Kingdom <span class="coming-soon">Coming Soon</span></li>
            <li>Vatican City State</li>
          </ul>
          <h3 class="text-white">Latin America</h3>
          <ul class="text-white">
            <li>Argentina</li>
            <li>Bolivia <span class="coming-soon">Coming Soon</span></li>
            <li>Brazil</li>
            <li>Chile</li>
            <li>Colombia</li>
            <li>Costa Rica</li>
            <li>
              Dominican Republic<span class="coming-soon">Coming Soon</span>
            </li>
            <li>El Salvador</li>
            <li>Guatemala <span class="coming-soon">Coming Soon</span></li>
            <li>Honduras <span class="coming-soon">Coming Soon</span></li>
            <li>Mexico</li>
            <li>Nicaragua <span class="coming-soon">Coming Soon</span></li>
            <li>Panama</li>
            <li>Paraguay <span class="coming-soon">Coming Soon</span></li>
            <li>Peru</li>
            <li>Uruguay <span class="coming-soon">Coming Soon</span></li>
            <li>Venezuela <span class="coming-soon">Coming Soon</span></li>
          </ul>
          <h3 class="text-white">North America</h3>
          <ul class="text-white">
            <li>Canada <span class="coming-soon">Coming Soon</span></li>
            <li>United States <span class="coming-soon">Coming Soon</span></li>
          </ul>
          <h3 class="text-white">Southeast Asia</h3>
          <ul class="text-white">
            <li>Cambodia</li>
            <li>India</li>
            <li>Indonesia <span class="coming-soon">Coming Soon</span></li>
            <li>Malaysia <span class="coming-soon">Coming Soon</span></li>
            <li>Pakistan <span class="coming-soon">Coming Soon</span></li>
            <li>Philippines</li>
            <li>Singapore <span class="coming-soon">Coming Soon</span></li>
            <li>Thailand <span class="coming-soon">Coming Soon</span></li>
            <li>Vietnam <span class="coming-soon">Coming Soon</span></li>
          </ul>
          <h3 class="text-white">Middle East</h3>
          <ul class="text-white">
            <li>Bahrain</li>
            <li>Jordan</li>
            <li>Lebanon <span class="coming-soon">Coming Soon</span></li>
            <li>Oman</li>
            <li>Saudi Arabia</li>
            <li>Turkey <span class="coming-soon">Coming Soon</span></li>
            <li>
              United Arab Emirates <span class="coming-soon">Coming Soon</span>
            </li>
          </ul>
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
.coming-soon {
  color: #00cec2;
}
.coming-soon::before {
  content: " - ";
}
</style>
