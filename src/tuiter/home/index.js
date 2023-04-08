import React from "react";
import ExploreComponent from "../explore";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import {Routes, Route} from "react-router";
import tuitsReducer from "../tuits/tuits-reducer";
import whoReducer from "../reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

// const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {

    return (
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <WhatsHappening/>
                    <TuitsList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>

    );
}

export default Tuiter