import axios from "axios";

const apiURL = 'https://temps-studio-api.herokuapp.com/api'

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

export const register = () => {
    return 2
}

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
}