import axios from "axios";
import {API_URL} from './constants'
import authHeader from './auth.header'


export const getAuthData = () =>{
    return axios.get(API_URL + 'profil');
}