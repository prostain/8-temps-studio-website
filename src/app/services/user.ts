import axios from "axios";
import {API_URL} from './constants'
import authHeader from './auth.header'
import { getCurrentUser } from "./auth";


export const getUserData = () =>{
    const token = getCurrentUser()
    console.log('ro', token);
    
    return axios.get(API_URL + '/profil', {headers : {'Authorization' : `Bearer ${token.accessToken}`} }) ;
}
