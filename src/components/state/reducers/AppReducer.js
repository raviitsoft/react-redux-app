// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchBucketsReducer } from './FetchBucketsReducer';


// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    buckets: FetchBucketsReducer
});