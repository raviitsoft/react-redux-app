import {
    FETCH_BUCKETS_PENDING,
    FETCH_BUCKETS_FULFILLED,
    FETCH_BUCKETS_REJECTED
} from '../actions/BucketsActions';


// INITIALIZE STATE

const initialState = {
    buckets: [],
    fetching: false,
    fetched: false,
    failed: false
};


// REDUCER

export const FetchBucketsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BUCKETS_PENDING:
            return {
                ...state,
                buckets: [],
                fetching: true,
                fetched: false,
                failed: false
            };
        case FETCH_BUCKETS_FULFILLED:
            return {
                ...state,
                buckets: action.payload,
                fetching: false,
                fetched: true,
                failed: false
            };
        case FETCH_BUCKETS_REJECTED:
            return {
                ...state,
                buckets: [],
                fetching: false,
                fetched: false,
                failed: true
            };
        default:
            return state;
    }
};