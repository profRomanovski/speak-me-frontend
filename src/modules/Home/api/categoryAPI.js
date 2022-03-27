import axios from "axios";
import config from "@/config";
import store from "@/modules/Framework/store";

export default class authAPI {
    static createCategory(name, image) {
        const token = store.getters.getUserToken
        const configs = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const body = {
            name: name,
            image: image
        }
        return axios.post(config.hostname+'/api/category-create', body, configs)
    }
}