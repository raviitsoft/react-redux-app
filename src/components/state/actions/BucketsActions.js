import { fetchBuckets } from '../../../services/BucketsService';

// FETCH BUCKETS ACTION NAMES

export const FETCH_BUCKETS = 'FETCH_BUCKETS';
export const FETCH_BUCKETS_PENDING = 'FETCH_BUCKETS_PENDING';
export const FETCH_BUCKETS_FULFILLED = 'FETCH_BUCKETS_FULFILLED';
export const FETCH_BUCKETS_REJECTED = 'FETCH_BUCKETS_REJECTED';


// ACTION GENERATORS

const fetchBucketsAction = () => ({
    type: FETCH_BUCKETS,
    payload: fetchBuckets()
});


// EXPORT ACTIONS

export { fetchBucketsAction as fetchBuckets };