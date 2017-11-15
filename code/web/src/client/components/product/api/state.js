// Imports

// App Imports
import {
    PRODUCTS_GET_LIST_REQUEST,
    PRODUCTS_GET_LIST_RESPONSE,
    PRODUCTS_GET_LIST_FAILURE,
    PRODUCTS_GET_REQUEST,
    PRODUCTS_GET_RESPONSE,
    PRODUCTS_GET_FAILURE,
} from './actions'

// Thoughts list

// Initial State
const productsInitialState = {
    isLoading: false,
    error: null,
    list: []
}

// State
export const products = (state = productsInitialState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_LIST_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case PRODUCTS_GET_LIST_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                list: action.list
            }

        case PRODUCTS_GET_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}


// Single product

// Initial State
const productInitialState = {
    isLoading: false,
    error: null,
    item: {}
}

// State
export const product = (state = productInitialState, action) => {
    switch (action.type) {
        case PRODUCTS_GET_REQUEST:
            return {
                ...state,
                isLoading: action.isLoading,
                error: null
            }

        case PRODUCTS_GET_RESPONSE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
                item: action.item
            }

        case PRODUCTS_GET_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }

        default:
            return state
    }
}