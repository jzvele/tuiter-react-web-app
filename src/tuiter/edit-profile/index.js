import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {saveProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
    const userProfile = useSelector(state => state.profile.currentUser);
    const [localProfile, setLocalProfile] = useState(userProfile)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const setProfile = (newProfile) => {
        // dispatch({
        //     type: 'UPDATE_PROFILE',
        //     profile: newProfile
        // })
        dispatch(saveProfile(newProfile))
    };

    function handleFirstNameChange(event) {
        setProfile({...userProfile, firstName: event.target.value});
        console.log(event.target.value);
    }

    console.log(userProfile.firstName);

    return (

        <div>
            <div className="card">
                <img className="rounded card-img" src={userProfile.bannerPicture} alt='Banner'/>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <img src={userProfile.profilePicture} alt="Profile" className="img-fluid rounded-circle" />
                </div>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder={userProfile.firstName} required
                           onChange={handleFirstNameChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Name</label>
                    <input type="text" className="form-control" id="lastName" placeholder={userProfile.lastName} required
                           onChange={(e) =>
                               setProfile({...userProfile, lastName: e.target.value})}
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

                <Link to="/tuiter/profile" className="btn btn-primary rounded-pill mt-2" >Save</Link>
            </form>
        </div>
    );
}

export default EditProfileComponent;