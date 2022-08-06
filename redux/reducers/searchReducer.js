import { SET_SEARCH_KEYWORD, SET_SEARCH_RESULT, SET_TRENDING_PRODUCT } from "../action/searchAction";
// initial states
const initialState = {
   trendingItems : [],
   searchResult : [],
   searchKeywords: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TRENDING_PRODUCT:
            return {
                ...state,
                trendingItems: action.payload
            }
        case SET_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload
            }
        case SET_SEARCH_KEYWORD:
            return {
                ...state,
                searchKeywords: action.payload
            }
            
        default:
            return state;
    }
}

export default searchReducer;