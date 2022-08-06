export const GET_TRENDING_PRODUCT = 'GET_TRENDING_PRODUCT';
export const SET_TRENDING_PRODUCT = 'SET_TRENDING_PRODUCT';
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT';
export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const GET_SEARCH_KEYWORD = 'GET_SEARCH_KEYWORD';
export const SAVE_SEARCH_KEYWORD = 'SAVE_SEARCH_KEYWORD';
export const DELETE_SEARCH_KEYWORD = 'DELETE_SEARCH_KEYWORD';


export const getTrendingProductList = () => {
    return {
        type: GET_TRENDING_PRODUCT
    };
};

export const setTrendingProductList = (payload) => {
    return {
        type: SET_TRENDING_PRODUCT,
        payload
    };
};

export const getSearchResult = (payload) => {
    return {
        type: GET_SEARCH_RESULT,
        payload
    };
};

export const setSearchResult = (payload) => {
    return {
        type: SET_SEARCH_RESULT,
        payload
    };
};


export const saveSearchKeyword = (payload) => {
    return {
        type: SAVE_SEARCH_KEYWORD,
        payload
    };
};

export const getSearchKeyword = () => {
    return {
        type: GET_SEARCH_KEYWORD
    };
};

export const setSearchKeyword = (payload) => {
    return {
        type: SET_SEARCH_KEYWORD,
        payload
    };
};

export const deleteSearchKeyword = () => {
    return {
        type: DELETE_SEARCH_KEYWORD,
    };
};