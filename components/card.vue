<template>
  <div class="my-component">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full gambar" :src="'images/'+image" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <!-- Title -->
        <div class="font-bold text-xl mb-2">{{ title }}</div>

        <!-- Star -->
        <div class="flex items-center mt-2.5 mb-4">
          <svg v-for="(index) in star" :key="index" aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
            </path>
          </svg>
          
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ (formatNumber(star)) }}</span>
        </div>

        <!-- Desc -->
        <p class="text-gray-700 text-base">
          {{ description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Burger</span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Petty</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      star_number: 0
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
  },
  methods: {
    formatNumber(num) {
      return num.toFixed(1);
    }
  },
  mounted() {
    this.star_number = this.star;
  }
};
</script>

<style scoped></style>
