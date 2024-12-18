<script setup>
import { useGetData } from '../composables/data'
const useData = useGetData();
const { data, loading, error, getData } = useData;

const url = 'https://jsonplaceholder.typicode.com/posts';

getData(url)

</script>

<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="post in data" :key="post.id">
            <b> {{ post.title }}</b> <br>
            <p>{{ post.body }} </p>
        </li>
    </ul>
</template>
