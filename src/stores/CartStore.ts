import {defineStore} from "pinia";
import data from "../data/data";
import {useLocalStorage, useStorage} from "@vueuse/core";
export const useCartStore = defineStore({
    id:"CartStore",
    state:()=>{
        return {
            cart: useStorage('cart',data.cart)
        };
    },
})