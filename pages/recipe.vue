<template>
    <!-- Hero section -->
    <section id="home" class="pt-36 mb-10">
        <div class="container">
            <h1 class="text-3xl">Daftar <strong>Resep</strong></h1>
        </div>
    </section>
    <!-- Hero section end -->

  <!-- card -->
  <section id="card" class="mb-30 pb-35">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Burger Daging Sapi"
                            :star="5"
                            description="Burger daging sapi adalah jenis burger yang terbuat dari daging sapi giling yang dicetak dan dipanggang hingga matang."
                            image="burger1.jpeg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Beyond burger"
                            :star="5"
                            description="Burger dengan patty dan bahan tambahan yang lebih mewah dan biasanya lebih mahal daripada burger biasa."
                            image="burger2.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Chicken burger"
                            :star="5"
                            description="Burger yang terbuat dari patty ayam yang diiris tipis dan diisi dengan sayuran, saus, dan bahan tambahan lainnya."
                            image="burger3.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Veggie burger"
                            :star="4"
                            description=" Burger yang terbuat dari bahan-bahan vegetarian seperti kacang-kacangan, sayuran, dan rempah-rempah, dan diisi dengan sayuran, keju, dan saus."
                            image="burger4.jpg" />
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import card from "~/components/card.vue";

export default {
    components: {
        card,
    },
};
</script>

<script setup>

definePageMeta({
    layouts: "default",
});

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
});
</script>
  
  
