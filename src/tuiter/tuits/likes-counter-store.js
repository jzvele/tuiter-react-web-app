import {configureStore} from "@reduxjs/toolkit";

const likes = 10;

const likesReducer = (
    state = likes,
        action) => {
            switch (action.type) {
                case 'LIKE_TUIT':
                    return (state + 1);
                case 'UNLIKE_TUIT':
                    return (state - 1);
                default:
                    return (state);
            }
        };

const likesStore = configureStore(likesReducer);

export default likesStore;