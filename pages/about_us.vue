<template>
    <NuxtLayout name="weblayout">
        <div class="header d-flex align-items-top justify-content-center py-1" style="background-color:#142339;">
            <div class="container mt-5 col">
                <section class="main d-flex flex-row">
                    <div>
                        <h2 class="text-white fw-bolder display-2 mt-1">Abous us</h2>
                        <p class="text-white">We are underserved people building a simple, transparent, and modern all-in-one global platform for underserved people.</p>
                        <button class="btn btn-info px-5 text-light rounded-5 btn-lg shadow mt-4 mf-gradient">Get Started</button>
                        <button class="btn btn-outline-light btn-lg shadow rounded-5  ms-4 mt-4 px-5">Careers</button>
                    </div>
                    <img src="@/src/assets/bg-about-us-main.svg"c/>
                </section>
                <section class="load_granted d-flex flex-row">
                    <p class="text-white">How can you leave your legacy when you’re trapped in legacy systems, or denied access to the system altogether. Banks shouldn’t feel a relic from a different era. Elitist, Slow, Expensive. Banks should reflect the times we live in. Inclusive, Fast, Free. We deserve a blockchain-based bank for us. That’s up to speed with modern life. This shouldn’t be a fantasy, when it’s a reality for the rest of the world. Our money should be ours. To do what we want with. To put where we need to. To build our futures. From underserved to what you deserve A new shape of banking for emerging regions.</p>
                    <img src="@/src/assets/img-loan-granted.png"/>
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
    background-position: top right;
    background-color: (20,35,57, 57);
}
// section.main{
//     background-image: url('@/src/assets/bg-about-us-main.svg');
//     background-size: auto 100%;
//     background-repeat: no-repeat;
//     background-position: right center;
// }
</style>