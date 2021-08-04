import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api-academy.wizoom.com.br/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "x-access-token": "{token}"      
    }, 
})