import {createStore} from "redux";

const profile = {
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
    'followersCount': 723};

const profileReducer = (state = profile, action) => {
    return profile;
    switch (action.type) {
        case "UPDATE_PROFILE":
            return action.profile;
        default:
            return state;
    }
};

const store = createStore(profileReducer);

export default store;