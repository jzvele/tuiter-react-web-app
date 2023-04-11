import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const isActive = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${isActive === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${isActive === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item
                    ${isActive === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
                    ${isActive === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
                    ${isActive === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${isActive === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
                    ${isActive === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
                    ${isActive === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;