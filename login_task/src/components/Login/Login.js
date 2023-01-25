import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const navigate = useNavigate();
  const [Data, UPData] = useState({
    lName: "",
    lPassword: "",
  });
  const InputHandler = (e) => {
    const { name, value } = e.target;

    UPData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const loginCheck = () => {
    var newarray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const para = localStorage.getItem(i);
      newarray.push(JSON.parse(para));
    }
    newarray.map((e, i) => {
      var gcontent = [e];
      gcontent.map((x, y) => {
        if (x.email == Data.lName) {
          if (x.password == Data.lPassword) {
            navigate("/Employee");
          } else {
            console.log("wrong password");
          }
        }
      });
    });
  };
  return (
    <>
      <div className="L_main">
        <div className="Login">
          <div className="L_content">
            <h2>Welcome Back</h2>
            <div className="L_details">
              <div className="L_name">Email:</div>
              <div className="L_input">
                <input
                  type="email"
                  name="lName"
                  value={Data.lName}
                  onChange={InputHandler}
                  required
                ></input>
              </div>
            </div>
            <div className="L_details">
              <div className="L_name">Password:</div>
              <div className="L_input">
                <input
                  type="password"
                  name="lPassword"
                  value={Data.lPassword}
                  onChange={InputHandler}
                  required
                ></input>
              </div>
            </div>
            <div className="L_details">
              <div className="">
                <button
                  type="Submit"
                  name="Submit"
                  value="Sign In"
                  className="button_login"
                  readOnly
                  onClick={loginCheck}
                >
                  SIGNIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
