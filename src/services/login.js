import { api } from './axios'

export default {

    postData(email, senha){
        return api.post("/autenticacao/entrar", {email, senha})
    }
}