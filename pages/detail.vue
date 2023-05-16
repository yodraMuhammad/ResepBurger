<template>
    <!-- Hero section -->
    <section id="home" class="pt-36 mb-10 ">
      <div class="container">
        <div class="flex flex-wrap">
          <div class="w-full self-end px-4 lg:w-1/2 md:mt-auto mb-10">
            <div class="relative mt-10 lg:mt-9 lg:right-0">
              <img class="rounded-md shadow-md max-w-full mx-auto"
                src="https://awsimages.detik.net.id/community/media/visual/2022/11/24/resep-mini-cheese-burger_43.jpeg?w=700&q=90"
                alt="burger" width="600" height="315" />
            </div>
          </div>
          <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Tutorial Membuat
              <span class="block font-bold text-dark mb-2 text-4xl mt-1 lg:text-5xl">Burger Daging Sapi</span>
            </h1>
            <p class="font-medium text-secondary mb-10 leadinng-relaxed">
              Burger daging sapi adalah jenis burger yang terbuat dari daging sapi
              giling yang dicetak dan dipanggang hingga matang. Patty atau daging
              burger biasanya dibentuk menjadi bentuk bundar atau oval pipih dan
              diberi bumbu sesuai selera. Selain patty daging sapi, burger ini
              juga biasanya disajikan dengan roti burger, daun selada, tomat,
              bawang bombay, saus, dan keju cheddar. Burger daging sapi sering
              kali menjadi favorit masyarakat karena rasanya yang gurih dan enak.
            </p>
            <a href="#video"
              class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Video
              Tutorial</a>
          </div>
        </div>
      </div>
    </section>
    <!-- Hero section end -->


    <!-- ingredients section -->
    <section id="ingredients" class="ml-5 lg:pt-10 md:pt-10  pb-32">
      <div class="container">
        <h4 class="font-bold uppercase text-primary text-lg mb-3">ingredients</h4>
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-10 md:w-1/2">
            <h4 class="font-bold uppercase text-secondary text-md">
              Bahan-bahan :
            </h4>
            <ul class="list-disc pl-7">
              <li>500 gram daging sapi giling</li>
              <li>1 butir telur</li>
              <li>1/2 cup tepung roti</li>
              <li>1/4 cup susu cair</li>
              <li>1 sdt garam</li>
              <li>1/2 sdt merica bubuk</li>
              <li>1 sdm minyak zaitun</li>
            </ul>
          </div>
          <div class="w-full px-4 md:w-1/2">
            <h4 class="font-bold uppercase text-secondary text-md">
              Bahan pelengkap:
            </h4>
            <ul class="list-disc pl-7">
              <li>Roti burger</li>
              <li>Daun selada</li>
              <li>Tomat</li>
              <li>Bawang bombay cincang</li>
              <li>Keju cheddar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- ingredients section end -->
  
    <!-- Step -->
    <section id="step" class="pt-36 pb-16 bg-stone-100">
      <div class="container">
        <div class="w-full px-4">
          <div class="max-w-xl mx-auto text-center mb-5">
            <h4 class="font-semibold text-lg text-primary mb-2">Step</h4>
            <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Burger Daging Sapi
            </h2>
          </div>
        </div>
  
        <div class="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div class="mb-12 p-4 md:w-1/1">
            <h4 class="font-bold uppercase text-secondary text-md">
              Cara membuat :
            </h4>
            <ol class="list-decimal pl-7">
              <li>
                Campurkan daging sapi giling, telur, tepung roti, susu cair,
                garam, dan merica bubuk dalam satu wadah. Aduk rata hingga
                tercampur sempurna.
              </li>
              <li>
                Ambil sejumput adonan dan pipihkan hingga berbentuk bulat pipih
                seperti patty.
              </li>
              <li>
                Panaskan minyak zaitun di atas wajan dengan api sedang. Panggang
                patty hingga matang dan kecoklatan di kedua sisinya.
              </li>
              <li>
                Siapkan roti burger, letakkan daun selada dan tomat di atas roti
                bagian bawah. Kemudian letakkan patty di atasnya, dilanjutkan
                dengan bawang bombay cincang dan keju cheddar.
              </li>
              <li>
                Tutup dengan roti bagian atas dan sajikan burger daging sapi.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <!-- Step Section End -->
  
    <!-- Video -->
    <section id="video" class="pt-36 pb-32 bg-stone-700">
      <div class="container">
        <div class="w-full px-4">
          <div class="mx-auto text-center mb-16">
            <h4 class="font-semibold text-lg text-primary mb-2">Video</h4>
            <h2 class="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Video Tutorial
            </h2>
          </div>
        </div>
        <div class="w-full px-4">
          <div class="flex flex-wrap items-center justify-center">
            <div class="relative overflow-hidden">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0KxyVGnIAAM" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Video end -->
  
  </template>

<script>
import card from '~/components/card.vue'

export default {
  components: {
    card
  }
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
  
  