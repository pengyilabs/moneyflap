<template>
    <NuxtLayout name="weblayout">
        <div class="header d-flex align-items-top justify-content-center py-1" style="background-color:#142339;">
            <div class="container mt-5 col">
                <section class="main">
                    <h2 class="text-white fw-bolder display-2 mt-1">Abous us</h2>
                    <p class="text-white">We are underserved people building a simple, transparent, and modern all-in-one global platform for underserved people.</p>
                    <button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mt-4 mf-gradient">Get Started</button>
                    <button class="btn btn-outline-light btn-lg shadow rounded-5  ms-4 mt-4 px-5">Careers</button>
                </section>
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
    background-color: (20,35,57, 57);
}
section.main{
    background-image: url('@/src/assets/bg-about-us-main.svg');
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: right center;
}
</style>