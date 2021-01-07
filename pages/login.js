import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Toast from "../components/Toast";
import Notify from "../components/Notify";
import { postData } from "../utils/fetchData";
import Loading from "../components/Loading";
import Cookie from "js-cookie";

const LoginPage = () => {
  const initalState = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(initalState);
  const { email, password } = userData;

  const [state, dispatch] = useContext(DataContext);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: { loading: true } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/login", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
      </div>
      <div className="p-5">
        <form
          className="p-5 align-self-center justify-content-center"
          style={{ maxWidth: "600px" }}
          onSubmit={handleSubmit}
        >
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
          <p className="my-2">
            Don't have an account yet?
            <Link href="/signup">
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

export default LoginPage;
