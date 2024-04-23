<template>
    <NuxtLayout name="weblayout">
        <div class="header d-flex align-items-top justify-content-center py-1">
            <div class="container mt-5 col">
                <h2 class="text-white fw-bolder display-2 mt-1">Privacy Policy</h2>
                <h3 class="text-white lh-lg mt-5 font-weight-bold lh-base">
                    MoneyFlap Technologies Inc. understands the importance of your personal privacy. Therefore, we have created this Privacy Policy so that you know how we use and disclose your information when you make it available to us. The Privacy Policy below discloses our practises regarding information collection and usage website located at AFRICA, the related mobile website, and the mobile application (collectively, the “Websites”) and the service provided thereon (the “Service”). By using or accessing the Websites and the Service, you signify your agreement to be bound by this Privacy Policy. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY YOU MAY NOT ACCESS OR OTHERWISE USE OUR SERVICE OR PARTICIPA­­TE IN OUR SERVICES. Key aspects of our privacy practises described in this Privacy Policy include the following explanations:
                </h3>
                <ul>
                    <li class="mt-5 text-white element"><img src="../src/assets/icon-compliance.svg"/><p class="d-inline-block">The information we collect and why we collect it;</p></li>
                    <li class="mt-5 text-white">How we use that information;</li>
                    <li class="mt-5 text-white">How we share information; and</li>
                    <li class="mt-5 text-white">The choices we offer.</li>
                </ul>
            </div>
        </div>
    </NuxtLayout>
</template>

<style scoped lang="scss">
.header { 
    min-height: 60vh;
    background-image: url('@/src/assets/bg-header-website-landing.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom right;
    background-color: #142339;
}
.text{
    font-size: 1.5rem;
    display: block;
}
.element{
    // list-style: url('../src/assets/icon-compliance.svg');
    align-items: center
}
</style>
