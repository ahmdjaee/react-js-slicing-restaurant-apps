import axiosClient from "./axios.js";
import { BASE_URL, token } from "./config.js";

async function register(data) {
    try {
        const response = await fetch(BASE_URL + "/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (response.status === 404) {
            throw new Error("Error " + response.status + " " + response.statusText);
        }

        return {
            data: await response.json(),
            code: response.status
        };
    } catch (error) {
        console.log(error.message);
    }

}

async function login(data) {
    try {
        const response = await fetch(BASE_URL + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.status === 404) {
            throw new Error("Error " + response.status + " " + response.statusText);
        }

        return response.json();
    } catch (error) {
        console.log(error.message);
    }

}

async function logout() {
    try {
        const response = await fetch(BASE_URL + "/users/logout",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        );
        return response.json();
    } catch (error) {
        console.log(error.message);
    }
}

async function current() {
    try {
        const response = await axiosClient.get("/users/current");
        return response.data
    } catch (error) {
        console.log(error.message);
        throw error
    }
}
export { register, login, logout, current }


