<template>
    <!-- Hero section -->
    <section id="home" class="pt-36 mb-20">
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-4 lg:w-1/2 mb-10">
                    <h1 class="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                        Tutorial Membuat
                        <span class="block font-bold text-dark mb-2 text-4xl mt-1 lg:text-5xl">Burger Sandwich</span>
                    </h1>
                    <p class="font-medium text-secondary mb-10 leadinng-relaxed">
                        Burger adalah makanan cepat saji yang terbuat dari roti berbentuk bundar yang diiris menjadi dua dan
                        diisi dengan patty (daging cincang), sayuran, keju, saus, dan bahan tambahan lainnya sesuai selera.
                    </p>
                    <nuxt-link to="/recipe"
                        class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Daftar
                        Resep Burger</nuxt-link>
                </div>
                <div class="w-full self-end px-10 lg:w-1/2 md:mt-auto">
                    <div class="relative mt-10 lg:mt-9 lg:right-0">
                        <img src="~/assets/images/hero.png" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero section end -->

    <!-- card -->
    <section id="card" class="mb-30 pb-35">
        <div class="container">
            <h4 class="font-bold text-dark text-3xl mb-6">Best <strong>Recipe</strong></h4>
            <div class="flex flex-wrap">
                <div class="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/1 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Burger Daging Sapi" :star="5"
                            description="Burger daging sapi adalah jenis burger yang terbuat dari daging sapi giling yang dicetak dan dipanggang hingga matang."
                            image="burger1.jpeg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/1 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Beyond burger" :star="5"
                            description="Burger dengan patty dan bahan tambahan yang lebih mewah dan biasanya lebih mahal daripada burger biasa."
                            image="burger2.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/1 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Chicken burger" :star="5"
                            description="Burger yang terbuat dari patty ayam yang diiris tipis dan diisi dengan sayuran, saus, dan bahan tambahan lainnya."
                            image="burger3.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 md:w-1/2 sm:w-1/1 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Veggie burger" :star="4"
                            description=" Burger yang terbuat dari bahan-bahan vegetarian seperti kacang-kacangan, sayuran, dan rempah-rempah, dan diisi dengan sayuran, keju, dan saus."
                            image="burger4.jpg" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import card from '~/components/card.vue'

export default {
    components: {
        card
    },
    
}
</script>

<script setup>

definePageMeta({
    layouts: 'default',
})

onMounted(() => {
    // navber fixed
    window.onscroll = function () {
        const header = document.querySelector("header");
        const fixedNav = header.offsetTop;

        if (window.pageYOffset > fixedNav) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    };

    // Hamburger
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    });

    var counterContainer = document.querySelector("#website-counter");
    // var resetButton = document.querySelector("#reset");
    var visitCount = localStorage.getItem("page_view");

    // Periksa apakah entri page_view ada
    if (visitCount) {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
    } else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }
    counterContainer.innerHTML = visitCount;
})

</script>
  
  
