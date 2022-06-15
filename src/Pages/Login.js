import React, { useState } from "react";
import axios from "axios";

function Login() {
  const initialValues = { email: "", password: "" };
  const [beforeValue, setFormValue] = useState(initialValues);

  const handleChange = (e) => {
    //const { name, value } = e.target;
    setFormValue({ ...beforeValue, [e.target.name]: e.target.value });
  };

  const validateUser = (e) => {
    e.preventDefault();
    const article = {
      email: beforeValue.email,
      password: beforeValue.password,
    };
    console.log(beforeValue.email);
    axios
      .post("https://tutorial4-api.herokuapp.com/api/users/login", article)
      .then((response) => {
        console.log(response);
        if (response.data.status === true) {
          window.alert(response.data.message);
          window.location.href = "/profile";
        }
      })
      .catch((response)=> {
        console.log("Please Enter correct data", response.response.data.message);
      });
  };

  return (
    <div className="Registration  ">
      <form onSubmit={validateUser}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={beforeValue.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={beforeValue.password}
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
