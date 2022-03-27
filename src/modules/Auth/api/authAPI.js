import axios from "axios";
import config from "@/config";

export default class authAPI {
    static login(email, pass) {
        const auth = {
            email: email,
            password: pass
        }
        return axios.post(config.hostname+'/api/login', auth)
    }
}