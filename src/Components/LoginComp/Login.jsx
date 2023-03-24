import React, { useState } from "react";
import "./Login.css";
import { authentification } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { useNavigate } from "react-router-dom";


export const Login = () => {
  const navigate=useNavigate()

  const countryCode = "+91";
  const [phoneNumber, setPhoneNumber] = useState(countryCode);
  const [otp, setOtp] = useState("");
  const [expandForm, setExpandForm] = useState(false);
  const [otpvarify, setOtpvarify] = useState(false);

  const [setErr] = useState("please enter valid otp");

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentification
    );
  };
  const requestOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setExpandForm(true);
      generateRecaptcha();
      let appverifier = window.recaptchaVerifier;
      signInWithPhoneNumber(authentification, phoneNumber, appverifier)
        .then((confermationResult) => {
          window.confermationResult = confermationResult;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const varifyOTP = (e) => {
    let otp = e.target.value;
    setOtp(otp);
    if (otp.length === 6) {
      // console.log(otp);
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          setOtpvarify(result);
          console.log(result);
        })
        .catch((error) => {
          setErr("please enter valid otp");
        });
    }
  };

  const submitOtpButton = () => {
    if (otpvarify) {
      // <Navigate to="/cselp" />;
      navigate('/cselp')
    }
  };
  return (
    <div className="myfooter d-flex justify-content-center align-items-center">
    <div className="card mb-3 formContainer" style={{ maxWidth: "80%"}}>
      <form onSubmit={requestOTP}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./assets/loginImg.jpg"
              className=" rounded-end"
              alt="loginImg"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center pt-2">Login Account</h5>
              <br />
              <div className="d-grid gap-3">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  height="25px"
                  className="rounded-pill form-control border border-primary"
                  style={{ height: "40px" }}
                  id="phoneNumberInput"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {expandForm === true ? (
                  <>
                    <div className="mb-3 gap-1">
                      <label htmlFor="otpInput" className="form-lable">
                        Enter OTP
                      </label>
                      <input
                        type="number"
                        className="form-control rounded-pill border border-primary"
                        id="otpInput"
                        value={otp}
                        onChange={varifyOTP}
                      />
                      <div id="otpHelp" className="form-text text-center">
                        <br />

                        {/* <button 
                          className="btn btn-primary rounded-pill text-center "
                          type="submit"
                           onClick={submitOtpButton}
                        >
                          Submit OTP
                        </button> */}

                        <button
                          className="btn btn-primary rounded-pill text-center "
                          type="submit"
                          onClick={submitOtpButton}
                        >
                          Submit OTP
                        </button>
                      </div>
                    </div>
                  </>
                ) : null}
                {expandForm === false ? (
                  <button
                    className="btn btn-primary rounded-pill"
                    type="submit"
                  >
                    Send OTP
                  </button>
                ) : null}
                <div id="recaptcha-container"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
};