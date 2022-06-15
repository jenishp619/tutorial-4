import React, { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const initialValues = { search: "" };
  const [beforeValue, setFormValue] = useState(initialValues);

  const [profileList, setProfileList] = useState([]);
  const navigate = useNavigate();

  const [filtereddata, setFilteredData] = useState([]);

  const handleChange = (e) => {
    setFormValue({ ...beforeValue, [e.target.name]: e.target.value });
  };

  const profile_url = "https://tutorial4-api.herokuapp.com/api/users";
  useEffect(() => {
    console.log("in it");
    axios.get(profile_url).then((res) => {
      console.table("RESULT", JSON.stringify(res));
      setProfileList(res.data.data);
    });
  }, []);

  const handleClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const searchBar = (e) => {
    e.preventDefault();

  
    console.log("Line 38", beforeValue.search);

    const filtereddata = profileList.filter((val) => {
      if (beforeValue.search.includes(val.firstName) || beforeValue.search.includes(val.lastName)|| beforeValue.search.includes(val.title)) {
        return val.firstName;
      }
    });
    console.log("Filtered Data", filtereddata);
    setFilteredData(filtereddata);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          value={beforeValue.search}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={searchBar}>Search</button>
        {filtereddata.map((rawimg) => (
          <div className="row">
            <div className="column-profile">
              <img
                src={rawimg.picture}
                onClick={() => handleClick(rawimg.id)}
              alt="text"></img>
              <div>Title: {rawimg.title}</div>
              <div>First Name: {rawimg.firstName}</div>
              <div>Last Name: {rawimg.lastName}</div>
              <div>Email: {rawimg.email}</div>
            </div>
          </div>
        ))}
      </div>

       <h1 >User Profile Lists</h1>
      {profileList.map((rawimg) => (
       <Grid container>
         <Grid item  md={3}>
         <div className="column">
          <img src={rawimg.picture} alt="text" onClick={() => handleClick(rawimg.id)}></img>
          <div>Title: {rawimg.title}</div>
          <div>First Name: {rawimg.firstName}</div>
          <div>Last Name: {rawimg.lastName}</div>
          <div>Email: {rawimg.email}</div>
        </div>
         </Grid>
       </Grid>
       
    
      ))}

    </div>
  );
}
export default Profile;
