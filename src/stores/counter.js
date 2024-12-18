
import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
    state: () => ({ counter: 0 }),

    //!. Variables computadas
    getters: {
        edadUser: (state) => {
            return state.counter * 2;
        }
    },
    //! actions
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
        reset() {
            this.counter = 0;
        }
    }
});

export {
    useCounterStore
}