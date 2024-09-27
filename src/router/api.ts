import * as dotenv from "dotenv";
import * as process from "process";

dotenv.config();

const baseUrl = process.env.VUE_APP_SERVICE || 'http://localhost:3000';

const api = {
    product:baseUrl+'/product',
    orders:baseUrl+'/order',
    order:{
        sessionStatus:'/order/session-status',
        checkout:'/order/create-checkout-session'
    },
    auth:{
        account:'/auth/account',
        login: '/auth/login',
        signup:'/auth/signup'
    },
    email:{
        contact:'/email/contact'
    }
}

export default api