import {defineStore} from "pinia";
import {useFetch, useStorage} from "@vueuse/core";
export const useProductStore = defineStore({
    id:"ProductStore",
    state:()=>{
        return {
            products: useStorage('products',null)
        };
    },
    actions:{
        async fill(){
            const {isFetching,data} = await useFetch('http://localhost:3000/product').json();
            this.products = (await data);
        }
    }
})