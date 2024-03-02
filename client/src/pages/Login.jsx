import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import jwt_decode from "jwt-decode";
import fetchData from "../helper/apiCall";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LOG from "../images/logo.svg"

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Login() {
  const erremail=false;
  const dispatch = useDispatch();
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
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
      const { email, password } = formDetails;
      console.log(password);
      if (!email || !password) {
        return toast.error("Input field should not be empty");
      } else if (password.length < 5) {
        return toast.error("Password must be at least 5 characters long");
      }
      setLoading(true);
      const details = {
        email: email,
        password: password
      }
      const { data } = await toast.promise(
        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/user/login`, {
          email,
          password,
        }),
        {
          pending: "Logging in...",
          success: "Login successfully",
          error: "Unable to login user",
          loading: "Logging user...",
        }
      );
      // var data
      // axios.post("http://localhost:5000/api/user/login", details)
      // .then((res) => {
      //   console.log(res);
      //   data = res
      //   localStorage.setItem("token", res.data.token);
      //   dispatch(setUserInfo(jwt_decode(res.data.token).userId));
      //   getUser(jwt_decode(res.data.token).userId);
      // })
      
      setLoading(false);
      console.log(data);
      localStorage.setItem("token", data.token);
      dispatch(setUserInfo(jwt_decode(data.token).userId));
      getUser(jwt_decode(data.token).userId);
    } catch (error) {
        setLoading(false);
      return error;
    }
  };

  const getUser = async (id) => {
    try {
      const temp = await fetchData(`${process.env.REACT_APP_SERVER_DOMAIN}/user/getuser/${id}`);
      dispatch(setUserInfo(temp));
      return navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="fullsc">
      <div className="l1_mainbody">
        <div className="l1_left_side">
          <div className="l1_left_logo">
          <img src={LOG} alt="Healthy"/>
          </div>
          <div className="l1_left_cont">
          <span id="welcome">Welcome </span> to the Swastika
          </div>
        </div>
        <div className="l1_right_side">
          <div className="l1_container">
            <div className="head_log">Login</div>
            
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
                type="name"
                //   error={errpass}
                //   helperText={errpass ? "Your password is weak" : ""}
            value={formDetails.email}
            onChange={inputChange}
                InputProps={{
                  style: { color: "black" },
                  classes: {
                    notchedOutline: erremail ? "red-border" : "black-border",
                  },
                }}
                InputLabelProps={{ style: { color: "black" } }}
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
                label="Password"
                variant="outlined"
                type="password"
                //   error={errpass}
                //   helperText={errpass ? "Your password is weak" : ""}
                value={formDetails.password}
            onChange={inputChange}
                InputProps={{
                  style: { color: "black" },
                  classes: { notchedOutline: "black-border" },
                }}
                InputLabelProps={{ style: { color: "black" } }}
              />
            </Box>
            <div className="forgot_text">
              {/* <Link to="/forgotpassword" id="fglink">
                Forgot Password?
              </Link> */}
            </div>
            <div className="sub_btn_log">
              <button type="submit" onClick={formSubmit}>
                 <>Login</>
              </button>
            </div>
            <div className="bott_text">
              <p>Don't have an account?</p>
              <NavLink to="/register" id="bottnav">
                Create Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
