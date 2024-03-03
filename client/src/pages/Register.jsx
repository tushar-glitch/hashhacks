import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LOG from "../images/logo.svg"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Register() {
  // const [file, setFile] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };


  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      // if (loading) return;
      // if (file === "") return;
      setLoading(true);
      const { firstname, lastname, email, password, confpassword } =
        formDetails;
      // if (!firstname || !lastname || !email || !password || !confpassword) {
      //   return toast.error("Input field should not be empty");
      // } else if (firstname.length < 3) {
      //   return toast.error("First name must be at least 3 characters long");
      // } else if (lastname.length < 3) {
      //   return toast.error("Last name must be at least 3 characters long");
      // } else if (password.length < 5) {
      //   return toast.error("Password must be at least 5 characters long");
      // } else if (password !== confpassword) {
      //   return toast.error("Passwords do not match");
      // }

      await toast.promise(
        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/register`, {
          firstname,
          lastname,
          email,
          password,
        }),
        {
          pending: "Registering user...",
          success: "User registered successfully",
          error: "Unable to register user",
          loading: "Registering user...",
        }
      );
      setLoading(false);
      return navigate("/login");
    } catch (error) {setLoading(false);}
  };

  return (
  
<div className="fullsc">
      
      <div className="l1_mainbody">
      <div className="l1_left_side">
          <div className="l1_left_logo">
            <img src={LOG} alt="Swastika"/>
          </div>
          <div className="l1_left_cont">
          <span id="welcome">Welcome </span> to the Swastika portal
          </div>
        </div>
        <div className="l1_right_side">
        <div className="l1_container">
          <div className="head_log">
            Sign up
          </div>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: "40ch",
                    "@media (max-width: 410px)": {
                      width: "30ch",
                    },
                    "@media (max-width: 338px)": {
                      width: "28ch",
                    },
                    "@media (max-width: 320px)": {
                      width: "26ch",
                    },
                    "@media (max-width: 300px)": {
                      width: "23ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
                className="input"
              >
                <TextField
                  required
                  // id="standard-required"
                  label="First Name"
                  variant="outlined"
                  type="name"
                  name="firstname"
                  // error={erremail}
                  // helperText={erremail ? "Enter Correct Email" : ""}
                  value={formDetails.firstname}
            onChange={inputChange}
                  
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: "40ch",
                    "@media (max-width: 410px)": {
                      width: "30ch",
                    },
                    "@media (max-width: 338px)": {
                      width: "28ch",
                    },
                    "@media (max-width: 320px)": {
                      width: "26ch",
                    },
                    "@media (max-width: 300px)": {
                      width: "23ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
                className="input"
              >
                <TextField
                  required
                  // id="standard-required"
                  label="Last Name"
                  variant="outlined"
                  type="name"
                  name="lastname"
                  // error={erremail}
                  // helperText={erremail ? "Enter Correct Email" : ""}
                  value={formDetails.lastname}
            onChange={inputChange}
                  
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: "40ch",
                    "@media (max-width: 410px)": {
                      width: "30ch",
                    },
                    "@media (max-width: 338px)": {
                      width: "28ch",
                    },
                    "@media (max-width: 320px)": {
                      width: "26ch",
                    },
                    "@media (max-width: 300px)": {
                      width: "23ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
                className="input"
              >
                <TextField
                  required
                  // id="standard-required"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formDetails.email}
            onChange={inputChange}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: "40ch",
                    "@media (max-width: 410px)": {
                      width: "30ch",
                    },
                    "@media (max-width: 338px)": {
                      width: "28ch",
                    },
                    "@media (max-width: 320px)": {
                      width: "26ch",
                    },
                    "@media (max-width: 300px)": {
                      width: "23ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
                className="input"
              >
                <TextField
                  required
                  // id="standard-required"
                  label="Create Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={formDetails.password}
            onChange={inputChange}
                  
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 2,
                    width: "40ch",
                    "@media (max-width: 410px)": {
                      width: "30ch",
                    },
                    "@media (max-width: 338px)": {
                      width: "28ch",
                    },
                    "@media (max-width: 320px)": {
                      width: "26ch",
                    },
                    "@media (max-width: 300px)": {
                      width: "23ch",
                    },
                  },
                }}
                noValidate
                autoComplete="off"
                className="input"
              >
                <TextField
                  required
                  // id="standard-required"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  name="confpassword"
                  value={formDetails.confpassword}
            onChange={inputChange}
                  
                />
              </Box>
              <div className="sub_btn_log">

              <button type="submit" disabled={loading} onClick={formSubmit}>
                {loading ? <>Processing</> : <>Register</>}
              </button>
              </div>
              <div className="bott_text">
                <p>Already registered?</p>
                <NavLink to="/login" id="bottnav">Login</NavLink>
              </div>
            
        </div>
        </div>
      </div>
    </div>
  

  );
}

export default Register;

