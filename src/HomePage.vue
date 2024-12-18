<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from './stores/counter'

const useCouter = useCounterStore();
const { counter, edadUser } = storeToRefs(useCouter) 
const { increment, decrement, reset } = useCouter;

</script>

<template>
    <div>
        <p>
            {{ counter }} - {{ edadUser  }}
        </p>
        <button class="btn btn-primary ms-2" @click="increment" >
            +1
        </button>
        <button class="btn btn-danger ms-2" @click="reset" >
            Reset
        </button>
        <button class="btn btn-warning ms-2" @click="decrement" >
            -1
        </button>

        <h3>Welcome to my Home Page</h3>    
    </div>
</template>
