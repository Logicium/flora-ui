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
            //this.products = (await useFetch('http://localhost:3000/product')).data;
            //return fetch('http://localhost:3000/product').then((result)=>this.products.value=result)
            const {isFetching,data} = await useFetch('http://localhost:3000/product').json();
            this.products = (await data)
            // const {isFetching,data} = await useFetch('http://localhost:3000/product').json();
            // await fetch('http://localhost:3000/product')
            //     .then((response) => response.json())
            //     .then(({ data }) => (this.products = data))
            //     .catch((error) => console.log(error));

        }
    }
})