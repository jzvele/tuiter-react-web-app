import React, {useState} from "react";


const ProfileComponent = (
    { userProfile =

        {
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
        }
    }
) => {
    let [profile, setProfile] = useState('');

    return (
        <div className="container">
            <div className="row">
                <img className="rounded" src={userProfile.bannerPicture} alt='Banner picture'/>
            </div>
            <div className='d-flex justify-content-end mt-1'>
                    <button type="button" className="btn btn-small btn-light rounded-pill">Edit Profile</button>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <img src={userProfile.profilePicture} alt="Profile picture" className="img-fluid rounded-circle" />
                </div>
                <div className="col-9">
                    <div>
                        <h4 className='mb-0'>{userProfile.firstName} {userProfile.lastName}</h4>
                        <p className="text-muted">{userProfile.handle}</p>
                    </div>
                    <p>{userProfile.bio}</p>
                    <div className="d-flex mb-2 justify-content-between text-muted">
                        <div>
                            <div>
                            <i className="fa-solid fa-location-dot me-2"/>
                            {userProfile.location}</div>
                        </div>
                        <div>
                            <i className="fa-solid fa-cake-candles me-2"/>
                            <span>
                                Born {userProfile.dateOfBirth}
                            </span>
                        </div>
                        <div>
                            <i className="fa-regular fa-calendar-days me-2"/>
                            <span>
                                Joined {userProfile.dateJoined}
                            </span>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="pr-5 me-3">
                            <p>{userProfile.followingCount} <span className="text-muted">Following</span></p>
                        </div>
                        <div className="pr-5">
                            <p>{userProfile.followersCount} <span className='text-muted'>Followers</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileComponent;