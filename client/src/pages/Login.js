import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import loginImage from "../asset/images/login-image.png";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {/* <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-between">
            <Link to="/register"> Not a user ? Click here to register</Link>
            <button className="btn btn-primary">Login</button>
          </div>
        </Form>
      </div> */}

      <div className="login-container">
        {loading && <Spinner />}
        <div className="login-box">
          <div className="login-header">
            <h2>Expense Management System</h2>
          </div>
          <div className="login-content">
            <div className="login-left">
              <img src={loginImage} alt="Login Illustration" />
            </div>
            <div className="login-right">
              <Form layout="vertical" onFinish={submitHandler}>
                <h2>Login Form</h2>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input type="password" placeholder="Enter your password" />
                </Form.Item>

                <div className="form-footer">
                  <Link to="/register">
                    Not a user ? Click here to register !
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
