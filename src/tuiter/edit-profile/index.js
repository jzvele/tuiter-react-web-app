import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "../reducers/profile-reducer.js"


const EditProfileComponent = () => {
    const userProfile = useSelector(state => state);
    const dispatch = useDispatch();
    const setProfile = (newProfile) => {
        dispatch({
            type: 'UPDATE_PROFILE',
            profile: newProfile
        })
    };
    let completeName = userProfile.firstName.concat(" ",userProfile.lastName);

    return (

        <div>
            <div className="card">
                <img className="rounded card-img" src={userProfile.bannerPicture} alt='Banner picture'/>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <img src={userProfile.profilePicture} alt="Profile picture" className="img-fluid rounded-circle" />
                </div>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder={completeName} required
                           onChange={(e) =>
                               setProfile({...userProfile, fullName: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <input type="text" className="form-control" id="bio" placeholder={userProfile.bio} required
                           onChange={(e) =>
                               setProfile({...userProfile,
                                   bio: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder={userProfile.location} required
                           onChange={(e) =>
                               setProfile({...userProfile,
                                   location: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control" id="website" placeholder={userProfile.website} required
                           onChange={(e) =>
                               setProfile({...userProfile,
                                   website: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input type="text" className="form-control" id="dateOfBirth" placeholder={userProfile.dateOfBirth} required
                           onChange={(e) =>
                               setProfile({...userProfile,
                                   dateOfBirth: e.target.value})}
                    />
                </div>

                <button type="submit" className="btn btn-primary rounded-pill mt-2">Save</button>
            </form>
        </div>
    );
}

export default EditProfileComponent;