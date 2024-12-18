import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const useCounterDosStore = defineStore('counter-dos', () => {
    const counter = ref(0);

    const doubleCounter = computed(() => {
        counter.value * 2;
    })

    const incrment = () => {
        counter.value++;
    }
    const decrment = () => {
        counter.value++;
    }
    const reset = () => {
        counter.value++;
    }

    return { 
        counter, 
        doubleCounter, 
        incrment, 
        decrment, 
        reset 
    }
})