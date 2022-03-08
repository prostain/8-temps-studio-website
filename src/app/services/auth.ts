import axios from "axios";

const apiURL = 'https://temps-studio-api.herokuapp.com/api'

export type registerData = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    passwordConfimation?: string,
    address: string,
    postalCode: string,
    city: string,
    country: string
}

export const login = async (email: string, password: string) => {

    const response = await axios.post(apiURL + "/login", {
        email,
        password
    });
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;

}

export const register = async (registerData: registerData) => {
    const response = await axios.post(apiURL + "/register", {...registerData})
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data
}

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
}