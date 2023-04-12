import { createSlice } from "@reduxjs/toolkit";

const currentUser = {
    "firstName": 'Jane',
    "lastName": 'Doe',
    "handle": '@janedoe',
    "profilePicture": '/images/default-avatar-profile-icon-of-social-media-user-vector.jpeg',
    "bannerPicture": '/images/twitter-banner.png',
    "bio": 'You\'ve met some of my relatives.',
    'website': 'youtube.com/webdevtv',
    'location': 'Boston, MA',
    'dateOfBirth': 'January 1 1988',
    'dateJoined': 'April 2011',
    'followingCount': 540,
    'followersCount': 723
};

const profileSlice = createSlice({
    name: 'Profile',
    initialState: currentUser,
    reducers: {
        saveProfile(state=currentUser, action) {
            switch (action.type) {
                case "UPDATE_PROFILE":
                    return action.profile;
                default:
                    return state;
                }
            }
    }
});

export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;