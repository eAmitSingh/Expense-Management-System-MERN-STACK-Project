import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import registerImage from "../asset/images/login-image.png";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/users/register", values);
      message.success("Registeration Successfull");
      setLoading(false);
      navigate("/login");
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
          <h1>Register Form</h1>
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>

          <div className="d-flex justify-content-between">
            <Link to="/login"> Already Register ? Click here to login</Link>
            <button className="btn btn-primary">Register</button>
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
              <img src={registerImage} alt="Register Illustration" />
            </div>
            <div className="login-right">
              <Form layout="vertical" onFinish={submitHandler}>
                <h2>Register Form</h2>

                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

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
                  <Link to="/login">
                    Already Registered? Click here to login!
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Register
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

export default Register;
