import {call, delay, put} from "redux-saga/effects"
import { GET_SEARCH_KEYWORD, SAVE_SEARCH_KEYWORD, SET_SEARCH_KEYWORD, SET_SEARCH_RESULT, SET_TRENDING_PRODUCT } from "redux/action/searchAction";
import { deleteSearchKeywordApi, getSearchKeywordApi, getSearchResultApi, getTrendingProductApi, saveSearchKeywordApi } from "../requests/searchRequests";

// Handle get trending products
export function* handleGetTrendingProduct() {
    try {
        yield delay(500)
        const response = yield call(getTrendingProductApi)
        // Set user data
        const listData = response.data.product ?? undefined;
        if(listData && response.data.code >= 200 && response.data.code < 300 ) {
            yield put({ type: SET_TRENDING_PRODUCT, payload : listData})
        } else {
            console.log("Error in getting trending product data.")
        }
    } catch (error) {
        console.log(error)
    } 
}


// Handle get user
export function* handleGetSearchResult(action) {
    try {
        yield delay(500)
        const response = yield call(getSearchResultApi, action.payload)
        // Set search data
        const listData = response.data.products ?? undefined;
        if(listData && response.data.code >= 200 && response.data.code < 300 ) {
            yield put({ type: SET_SEARCH_RESULT, payload : listData})
            yield put({ type: SAVE_SEARCH_KEYWORD, payload : action.payload})
        } else {
            console.log("Error in getting search result.")
        }
    } catch (error) {
        console.log(error)
    } 
}

// Handle save keyword
export function* handleSaveSearchKeyword(action) {
    try {
        const response = yield call(saveSearchKeywordApi, action.payload)
        // Set search data
        if(response.data.code >= 200 && response.data.code < 300 ) {
            yield put({ type: GET_SEARCH_KEYWORD})
        } else {
            console.log("Error in getting search result.")
        }
    } catch (error) {
        console.log(error)
    } 
}


export function* handleGetSearchKeyword() {
    try {
        yield delay(500)
        const response = yield call(getSearchKeywordApi)
        // Set search data
        const listData = response.data.recentSearch ?? undefined;
        if(listData && response.data.code >= 200 && response.data.code < 300 ) {
            yield put({ type: SET_SEARCH_KEYWORD, payload : listData})
        } 
    } catch (error) {
        console.log(error)
    } 
}

export function* handleDeleteSearchKeyword() {
    try {
        const response = yield call(deleteSearchKeywordApi)
        // Set search data
        if(response.data.code >= 200 && response.data.code < 300 ) {
            yield put({ type: SET_SEARCH_KEYWORD, payload : []})
        } 
    } catch (error) {
        console.log(error)
    } 
}


