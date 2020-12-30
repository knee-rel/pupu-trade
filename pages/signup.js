import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import valid from "../utils/valid";
import React, { useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Toast from "../components/Toast";
import Notify from "../components/Notify";
import { postData } from "../utils/fetchData";
import Loading from "../components/Loading";

const SignUpPage = () => {
  const initalState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initalState);
  const { firstname, lastname, email, password, cf_password } = userData;

  const [state, dispatch] = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(firstname, lastname, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  return (
    <div>
      <Head>
        <title>Sign Up Page</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        ></link>
        <script src="https://kit.fontawesome.com/8fbfa5c187.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
      </Head>
      <div>
        <Navbar />
        <Notify />
        <Loading />
      </div>
      <div className="p-5 ">
        <form
          className="p-5 align-self-center justify-content-center"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFirstName"
              name="firstname"
              value={firstname}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLastName"
              name="lastname"
              value={lastname}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputCFPassword"
              name="cf_password"
              value={cf_password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <p className="my-2">
            Already have an account?
            <Link href="/login">
              <a style={{ color: "blue" }}> Login Here</a>
            </Link>
          </p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Toast />
    </div>
  );
};

export default SignUpPage;
