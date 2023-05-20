<script setup>

const { data: films } = await useFetch('http://www.omdbapi.com/?apiKey=41243417&i='+route.params.id)

</script>

<template>
    <div class="detail">
        <div class="container">
            <div class="flex">
                <div class="w-1/2">
                    <img :src="films.Poster" alt="">
                </div>
            </div>
        </div>
    </div>
</template>