<template>
    <!-- Navbar -->
    <div>
        <header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div class="container">
                <div class="flex items-center justify-between relative">
                    <nuxt-link to="/">
                        <div class="px-4 flex">
                            <client-only class="max-w-full mx-auto">
                                <Vue3Lottie class="max-w-full mx-auto"
                                    animationLink="https://assets7.lottiefiles.com/private_files/lf30_rcfol5ub.json"
                                    :height="0" :width="0" :speed="0.8" style="width: 50px; height: 50px" />
                            </client-only>
                            <p class="font-bold text-xl text-primary block py-5 px-4">ResepBurger</p>
                        </div>
                    </nuxt-link>
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
                                    <nuxt-link to="/"
                                        class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</nuxt-link>
                                </li>
                                <li class="group">
                                    <nuxt-link to="/recipe"
                                        class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Recipe</nuxt-link>
                                </li>
                                <li class="group">
                                    <a href="#contact"
                                        class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- Navbar end -->

        <!-- Content -->
        <div>
            <slot />
        </div>
        <!-- End Content -->


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
                                <div id="website-counter" class="badge text-primary text-wrap font-bold flex mx-0 shrink-0">
                                </div>
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
    </div>
</template>

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
  
  
