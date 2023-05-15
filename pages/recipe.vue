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
                            description="Burger daging sapi adalah jenis burger yang terbuat dari daging sapi giling yang dicetak dan dipanggang hingga matang."
                            image="https://awsimages.detik.net.id/community/media/visual/2022/11/24/resep-mini-cheese-burger_43.jpeg?w=700&q=90" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Beyond burger"
                            description="Burger dengan patty dan bahan tambahan yang lebih mewah dan biasanya lebih mahal daripada burger biasa."
                            image="https://asset.kompas.com/crops/fP_Q5TD9BOn5G5JTnntgtDIjQMI=/53x36:933x623/750x500/data/photo/2021/10/21/6171492e1ea12.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Chicken burger"
                            description="Burger yang terbuat dari patty ayam yang diiris tipis dan diisi dengan sayuran, saus, dan bahan tambahan lainnya."
                            image="https://img.kurio.network/-ltYsFALO68mNha9xrka0B9fJAs=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/20/07/01/f3f1874f-775f-4880-9821-2ea0756aba6a.jpg" />
                    </nuxt-link>
                </div>
                <div class="w-full px-4 lg:w-1/4 mb-10">
                    <nuxt-link to="/detail">
                        <card class="card" title="Veggie burger"
                            description=" Burger yang terbuat dari bahan-bahan vegetarian seperti kacang-kacangan, sayuran, dan rempah-rempah, dan diisi dengan sayuran, keju, dan saus."
                            image="https://www.masakapahariini.com/wp-content/uploads/2018/09/shutterstock_1187496061-780x440.jpg" />
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
// import { definePageMeta } from "nuxt/dist/pages/runtime";

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
  
  
