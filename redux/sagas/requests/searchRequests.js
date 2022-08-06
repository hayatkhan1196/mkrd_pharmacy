import { getCookie } from "commonjs/common"
import api from "../../api"



// trending search 
export const getTrendingProductApi = () => {
    return api.get(`/trending`)
}

// get search result
export const getSearchResultApi = (data) => {
    return api.get(`/products/search?q=${data}`)
}

export const getSearchKeywordApi = () => {
    return api.get(`/recent-search?identifier=${getCookie("deviceId")}`)
}

export const deleteSearchKeywordApi = () => {
    return api.delete(`/recent-search/clearAll?identifier=${getCookie("deviceId")}`)
}

export const saveSearchKeywordApi = (data) => {
    return api.post(`/recent-search?identifier=${getCookie("deviceId")}`, {
        keyword: data
    })
}
