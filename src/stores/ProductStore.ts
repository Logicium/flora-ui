import {defineStore} from "pinia";
import {useFetch, useStorage} from "@vueuse/core";
import api from "@/router/api";
export const useProductStore = defineStore({
    id:"ProductStore",
    state:()=>{
        return {
            products: useStorage('products',null)
        };
    },
    actions:{
        async fill(){
            const {isFetching,data} = await useFetch(api.product).json();
            this.products = (await data);
        }
    }
})