<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/data.js'
import Loading from './components/Loading.vue';

const api_key = 'a60c8092d60c3a84b51bcf5ac7f13ae9'
const base_url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a60c8092d60c3a84b51bcf5ac7f13ae9`

const useData = useGetData()
const { data, loading, error, getData } = useData

getData(base_url)

</script>

<template>

    <Loading v-if="loading" />
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
        <h3 class="display-6 text-warning">List of now Playing Movies</h3>
        <template v-for="m in data.results" :key="m.id">
            <RouterLink :to="`/movie/${m.id}`"> {{ m.title }} </RouterLink> <br>
        </template>
    </div>
</template>
