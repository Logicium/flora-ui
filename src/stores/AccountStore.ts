import {defineStore} from "pinia";
import {createFetch, useFetch, useStorage} from "@vueuse/core";
export const useAccountStore = defineStore({
    id:"AccountStore",
    state:()=>{
        return {
            user: useStorage('user',{token:null})
        };
    },
    actions:{
        async fill(token:string){
            const fetchUser = createFetch({
                options: {
                    async beforeFetch({ options }) {
                        options.headers.Authorization = `Bearer ${token}`
                        return { options }
                    },
                }
            })
            const {isFetching,data} = await fetchUser('http://localhost:3000/auth/account').json();
            this.user = (await data);
            console.log(this.user);
        }
    }
})