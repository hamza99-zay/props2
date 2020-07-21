import React from 'react'
import './App.css'
 function Profile({x}) {
    return (
        <div className="main">
        <div className="list">
            {x.map((profile) =>(
            <div className="card"> 
            <div>
                      {profile.children}
                      </div>
<h1>{profile.name}</h1>
<h2>{profile.prof}</h2>
<p>{profile.Bio}</p>
            </div>
             )) }   
        </div>
        </div>
    );
}
export default Profile;