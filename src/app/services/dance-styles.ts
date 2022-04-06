import axios from "axios"
import { API_URL } from "./constants"

export const getStyles = () => {
    return axios.get(API_URL + 'styles')
}