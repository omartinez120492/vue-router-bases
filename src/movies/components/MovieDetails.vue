<script setup>
import { RouterLink, useRoute } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue';

const route = useRoute()
const { id } = route.params
const movie = ref({})

const api_key = 'a60c8092d60c3a84b51bcf5ac7f13ae9'
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`



const getDetailsMovieById = async()=>{
    const resp = await axios.get( url );
    movie.value = resp.data
    console.log(movie.value);
}


console.log(id);
getDetailsMovieById()
</script>

<template>
    <div>
        <h3>Movie Details: {{ movie.title }} - {{ movie.id }}</h3>
    </div>
    <RouterLink class="btn btn-success" to="/movie">Back</RouterLink>
</template>
