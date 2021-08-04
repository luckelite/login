import { api } from './axios'

export default {

    postData(email, password){
        return api.post("/autenticacao/entrar", {email, password})
    }
}