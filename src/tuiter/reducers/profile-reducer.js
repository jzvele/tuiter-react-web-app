import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    firstName: 'Jose',
    lastName: 'Annunziato',
    handle: '@jannunzi',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.',
    website: 'youtube.com/webdevtv',
    location: 'Boston, MA',
    dateOfBirth: '7/7/1968',
    dateJoined: '4/2009',
    followingCount: 340,
    followersCount: 223,
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

export default profileSlice.reducer;