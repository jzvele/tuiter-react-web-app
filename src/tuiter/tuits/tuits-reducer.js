import { createSlice } from "@reduxjs/toolkit";
import tuits from '../post-summary-list/posts.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits
});

export default tuitsSlice.reducer;