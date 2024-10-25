import React, { useState } from "react";
import "./AdmLogin.css";
import { useNavigate } from "react-router-dom";
// import { useAppContext } from './Components/AppProvider';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiMailLine, RiLockLine } from "react-icons/ri";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  // const { apiServiceCall } = useAppContext();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userAlert, setUserAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertTittle, setAletTittle] = useState("");
  const [alertConfirm, setAlertConfirm] = useState(() => null);
  const [alertClose, setAlertClose] = useState(() => null);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPhoneNumber = (input) => {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(input);
  };

  const isEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!userName.trim()) {
      errors.userName = "Mobile Number is required";
      isValid = false;
    } else if (!isEmail(userName)) {
      errors.userName = "Mobile Number is invalid";
      isValid = false;
    }

    if (!password.trim()) {
      errors.password = "PIN is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const validateEmail = (value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Email Id is required",
      }));
    } else if (!isEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        userName: "Please enter a valid Email Address",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, userName: "" }));
    }
  };

  const validatePassword = (value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "PIN is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const url = `https://kcsmart.infocareerindia.com/cs/user/login`;
      const data = {
        email: userName,
        password: password,
      };
      axios
        .post(url, data)
        .then((response) => {
          console.log(response, "");
          if (response.data.userName != null) {
            localStorage.setItem("email", response.data.email);
            localStorage.setItem("userId", response.data.id);
            localStorage.setItem("userName", response.data.userName);
            localStorage.setItem("token", response.data.token);
              navigate("/Home");
          }
        })
        .catch((error) => {
          console.log(error, "Error in saveUserDetails");
        });
    }
  };

  const handleEmailChange = (value) => {
    setUserName(value);
    validateEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    validatePassword(value);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="login-container">
          <div className="login_maincontent" style={{ display: "flex" }}>
            <h1 style={{ marginBottom: "40px" }}>Welcome!</h1>
            <div className="col-12 col-md-4">
              <div className="input_container">
                <label className="login_label">
                  Email{" "}
                  <span className="required" style={{ color: "red" }}>
                    *
                  </span>
                </label>
                <div className="input_contanier">
                  <input
                    type="tel"
                    id="userName"
                    name="userName"
                    className="input_box"
                    placeholder="Email"
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                  {errors.userName && (
                    <div className="field_form_alert">
                      <span className="signup_alert_container">
                        {errors.userName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="input_container">
                <label className="login_label">
                  PIN{" "}
                  <span className="required" style={{ color: "red" }}>
                    *
                  </span>
                </label>
                <div className="input_contanier">
                  <div className="input_icons">{/* <RiLockLine /> */}</div>
                  <input
                    // type={showPassword ? "number" : "password"}
                    type={showPassword ? "text" : "password"}
                    className="input_box"
                    placeholder="PIN"
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  {showPassword ? (
                    <AiOutlineEye
                      onClick={() => togglePasswordVisibility()}
                      className="eye-icon_login"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => togglePasswordVisibility()}
                      className="eye-icon_login"
                    />
                  )}
                  {errors.password && (
                    <div className="field_form_alert">
                      <span className="signup_alert_container">
                        {errors.password}
                      </span>
                    </div>
                  )}
                  {/* <div style={{display:"flex",justifyContent:"flex-end",marginTop:"2%"}}>
                    <Link to="/ForgetPassword" style={{fontSize:"12px",color:"red"}}>Forgot PIN</Link>
                  </div> */}
                </div>
              </div>
            </div>

            <button
              className="signin-button"
              type="submit"
              style={{ fontWeight: "bold" }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {/* <Alert
        title={alertTittle}
        msg={alertMsg}
        open={userAlert}
        type={alertType}
        onClose={() => setUserAlert(false)}
        onConfirm={() => setUserAlert(false)}
      /> */}
    </div>
  );
};

export default Login;
