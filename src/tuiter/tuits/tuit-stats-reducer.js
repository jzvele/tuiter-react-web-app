import { createSlice } from '@reduxjs/toolkit'

const initialLikes = {"likes" : 2345};

const likeSlice = createSlice({
    name: 'likeslice',
    initialState: initialLikes,
    reducers: {
        like(state) {
            state.likes = state.likes + 1;
        },
        unlike(state) {
            state.likes = state.likes - 1;
        },
    }
});

export const {like, unlike} = likeSlice.actions
export default likeSlice.reducer