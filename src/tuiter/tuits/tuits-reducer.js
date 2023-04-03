import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {findTuitsThunk} from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,   // same as "initialState": initialState
    extraReducers: {    // define asynchronous reducers
        [findTuitsThunk.pending]:   // if request is not yet fulfilled …
            (state) => {
                state.loading = true    // set loading true so UI can display spinner
                state.tuits = []    // empty tuits since we are still fetching them
            },
        [findTuitsThunk.fulfilled]: // when we get response, request is fulfilled
            (state, { payload }) => {   // we extract/destruct payload from action object
                state.loading = false   // turn off loading flag since we have the data
                state.tuits = payload   // payload has tuits from server and update redux state
            },
        [findTuitsThunk.rejected]:  // if request times out, or responds with error
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers: {
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action){
            const index = action.payload;
            state.splice(index, 1);
        }
    }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
