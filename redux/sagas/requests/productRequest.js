import { getCookie } from "commonjs/common"
import api from "../../api"




export const getProductDetailsApi = (data) => {
    return api.get(`/products/${data}?identifier=${getCookie("deviceId")}`)
}


export const getGenericAlternateApi = (data) => {
    return api.get(`/products/${data}/generic-alternative`)
}
