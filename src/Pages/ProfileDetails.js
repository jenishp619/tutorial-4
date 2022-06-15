import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProfileDetails() {
    
    const [profileDetails, setProfileDetails] = useState([]);
    const params = useParams();
    console.log("params", params);
    const profiledetails_api = `https://tutorial4-api.herokuapp.com/api/users/${params.id}`;
    
    useEffect(() => {
        axios.get(profiledetails_api).then((res) => {
            console.log("profile",res.data.data);
            setProfileDetails(res.data.data);
        });
    });
    
    return(
        <div>
                <div >
                    <img src={profileDetails.picture}
                   alt="text" ></img>
                    <div>
                        Title: { profileDetails.title }
                    </div>
                    <div>
                    First Name: { profileDetails.firstName } 
                    </div>
                    <div>
                    Last Name: { profileDetails.lastName }
                    </div>
                    <div>
                    Email: { profileDetails.email } 
                    </div>
                </div>
            
            
        </div>
       
        
    )

}
export default ProfileDetails;
