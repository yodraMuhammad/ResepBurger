<template>
  <!-- Navbar -->
  <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4 flex">
          <client-only class="max-w-full mx-auto">
            <Vue3Lottie class="max-w-full mx-auto"
              animationLink="https://assets7.lottiefiles.com/private_files/lf30_rcfol5ub.json" :height="0" :width="0"
              :speed="0.8" style="width: 50px; height: 50px" />
          </client-only>
          <a href="#home" class="font-bold text-xl text-primary block py-5 px-4">ResepBurger</a>
        </div>
        <div class="flex items-center px-4">
          <button id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
            <span class="hamburger-line transition duration-300 ease-in-out"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
          </button>
          <nav id="nav-menu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
            <ul class="block lg:flex">
              <li class="group">
                <a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
              </li>
              <li class="group">
                <a href="#ingredients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Ingredients</a>
              </li>
              <li class="group">
                <a href="#step" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Step</a>
              </li>
              <li class="group">
                <a href="#video" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Video</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- Navbar end -->

  <!-- Hero section -->
  <section id="home" class="pt-36">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2 mb-10">
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
        <div class="w-full self-end px-4 lg:w-1/2 md:mt-auto">
          <div class="relative mt-10 lg:mt-9 lg:right-0">
            <client-only class="max-w-full mx-auto">
              <Vue3Lottie class="max-w-full mx-auto"
                animationLink="https://assets2.lottiefiles.com/packages/lf20_KRvh3dv2eW.json" :height="20" :width="20"
                :speed="0.8" style="width: 300px; height: 300px" />
            </client-only>
            <span class="absolute -bottom-12 -z-10 left-1/2 -translate-x-1/2">
              <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#D2001A"
                  d="M54.8,-47C62,-34.7,52.5,-12.5,44.3,4.8C36.1,22,29.3,34.3,16.8,43.6C4.4,52.9,-13.6,59.2,-29.6,54.3C-45.7,49.3,-59.9,33.1,-63.4,15.2C-66.9,-2.7,-59.8,-22.4,-47.5,-35.8C-35.1,-49.2,-17.6,-56.4,3.1,-58.9C23.8,-61.4,47.7,-59.2,54.8,-47Z"
                  transform="translate(100 100) scale(1.1)" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero section end -->

  <!-- ingredients section -->
  <section id="ingredients" class="pt-36 pb-32">
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
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Step</h4>
          <h2 class="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
            Burger Daging Sapi
          </h2>
          <p class="font-medium text-md text-secondary md:text-lg">
            Berikut merupakan Langkah-Langkah Pembuatan
          </p>
          <div class="rounded-md shadow-md overflow-hidden">
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2022/11/24/resep-mini-cheese-burger_43.jpeg?w=700&q=90"
              alt="burger" width="600" height="315" />
          </div>
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

  <!-- Footer -->
  <div id="contact" class="bg-stone-900 pt-24 pb-12">
    <div class="container">
      <div class="flex items-center justify-center">
        <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <h2 class="font-bold text-4xl text-white">ResepBurger</h2>
          <h3 class="font-bold text-2xl mb-2">Hubungi</h3>
          <p>resepburger1990@gmail.com</p>
        </div>
        <div class="w-full px-4 mb-12 text-slate-300 md:w-1/3">
          <p>
            <span>Jumlah kunjungan web:
              <div id="website-counter" class="badge text-primary text-wrap font-bold flex mx-0 shrink-0"></div>
            </span>
          </p>
        </div>
      </div>

      <div class="w-full pt-5 border-t border-slate-700"></div>
      <p class="font-medium text-sm text-slate-500 text-center mt-10">
        Yodra Muhamad Akbar N | 2023
      </p>
    </div>
  </div>
  <!-- End Footer  -->
  <!-- </div> -->
</template>

<script setup>
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

