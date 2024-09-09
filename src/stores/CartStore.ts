import {defineStore} from "pinia";
import data from "../data/data";
export const useCartStore = defineStore({
    id:"CartStore",
    state:()=>{
        return {
            cart: data.cart
        }
    }
})