import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, updateData] = useState({
    fName: "",
    fPassword: "",
    fEmail: "",
    fNumber: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    updateData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const LoginStore = () => {
    const key = localStorage.length;
    if (
      formData.fName &&
      formData.fPassword &&
      formData.fEmail &&
      formData.fNumber
    ) {
      localStorage.setItem(
        key,
        JSON.stringify({
          name: formData.fName,
          password: formData.fPassword,
          email: formData.fEmail,
          number: formData.fNumber,
        })
      );
      navigate("/Login");
    }
  };

  return (
    <>
      <form>
        <div className="register">
          <div className="r_main">
            <div className="r_content">
              <div className="r_details">
                <div className="r_name">Name:</div>
                <div className="r_input">
                  <input
                    type="text"
                    name="fName"
                    value={formData.fName}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="r_details">
                <div className="r_name">Email Id:</div>
                <div className="r_input">
                  <input
                    type="email"
                    name="fEmail"
                    value={formData.fEmail}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="r_details">
                <div className="r_name">Phone:</div>
                <div className="r_input">
                  <input
                    type="number"
                    name="fNumber"
                    value={formData.fNumber}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="r_details">
                <div className="r_name">Password:</div>
                <div className="r_input">
                  <input
                    type="password"
                    name="fPassword"
                    value={formData.fPassword}
                    onChange={HandleChange}
                    required
                  ></input>
                </div>
              </div>
              <div className="r_details">
                <div className="r_input button_register">
                  <button
                    className="button_login_1"
                    onClick={(e) => navigate("/Login")}
                  >
                    Login
                  </button>
                  <button
                    type="Submit"
                    name="rSubmit"
                    value="Sign Up"
                    onClick={LoginStore}
                    className="button_login_1"
                    readOnly
                  >
                    SIGNUP
                  </button>
                </div>
              </div>
              <div className="r_details">
                <div id="in"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
