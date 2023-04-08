import React from "react";
import Home from "./home/index"
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {

    return (
        <Provider store={store}>
            <container>
                <Home/>
            </container>
        </Provider>
    );
}

export default Tuiter