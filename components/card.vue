<template>
  <div class="my-component">
    <!-- <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <button @click="handleClick">{{ buttonText }}</button> -->
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full gambar" :src="image" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
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
  },
  methods: {
    handleClick() {
      // do something when button is clicked
    },
  },
};
</script>

<style scoped></style>
