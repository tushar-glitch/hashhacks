import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/user.css";

const Quickcheckup = () => {
    const loading = true;

  return (
    <>
      <Navbar />
          {loading ? (
              <Loading />
          ):null}
        </>
  );
};
export default Quickcheckup;