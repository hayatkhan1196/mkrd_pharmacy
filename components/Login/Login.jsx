import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import Image from "next/image";
import styles from "./Login.module.css";
import useLocalize from "i18n/i18n";
import CountUp, { useCountUp } from "react-countup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  counterLimit,
  getOTP,
  lockUnlockResendOtpTimer,
  reset_otp,
  setLoginOtpErorr,
  setOtpErorr,
} from "redux/action/userAction";
import { setUserData, reSendOtp } from "./../../redux/action/userAction";
import OtpInput from "react-otp-input";

export default function Login(props) {
  const dispatch = useDispatch();
  const { localize } = useLocalize();
  const userToken = useSelector((state) => state?.user?.user?.token);
  const userOtpError = useSelector((state) => state.user.userError);
  const isLoading = useSelector((state) => state?.user?.isLoading);
  const otpData = useSelector((state) => state?.user?.otp);
  const reSendOtpCount = useSelector((state) => state?.user?.resendOtpCount);
  console.log(
    "🚀 ~ file: Login.jsx ~ line 35 ~ Login ~ reSendOtpCount",
    reSendOtpCount
  );
  const resendOtpTimeLimit = useSelector(
    (state) => state?.user?.resendOtpTimeLimit
  );
  console.log(
    "🚀 ~ file: Login.jsx ~ line 37 ~ Login ~ resendOtpTimeLimit",
    resendOtpTimeLimit
  );

  const otpError = useSelector(
    (state) =>
      state &&
      state.user &&
      state.user.error &&
      state.user.error.mobile_no &&
      state.user.error.mobile_no[0]
  );

  console.log(userOtpError);
  // const isLoading = false
  const [stepCount, setstepCount] = useState(1);
  const [otp, setotp] = useState();
  const [mobileNo, setMobileData] = useState();
  const [seconds, setSeconds] = useState(30);
  const [otpErrorMessage, setOtpErrorMessage] = useState("");
  const disabledResendOtp = seconds === 0 ? false : true;
  const [next, setnext] = useState(false);
  const handleMobile = (event) => {
    setMobileData(event.target.value);
  };

  useEffect(() => {
    if (userToken) {
      props.setOpen(false);
      setstepCount(1);
    }
    if (isLoading === false && otpData && !otpError && next === true) {
      setstepCount(2);
    }
    const currentDate = Date().toLocaleString();
    if (resendOtpTimeLimit <= currentDate && reSendOtpCount >= 5) {
      setOtpErrorMessage("");
      dispatch(counterLimit(0));
    }
  }, [userToken, otpData, isLoading]);

  const uuid = uuidv4();
  const optdata = {
    uuid: uuid,
    mobile_no: mobileNo,
  };

  const logIndata = {
    uuid: uuid,
    mobile_no: mobileNo,
    otp: otp,
  };

  const reSendOtpData = {
    mobile_no: mobileNo,
  };

  // resend api call
  function reSendHandler() {
    // setSeconds(30);
    // dispatch(reSendOtp(reSendOtpData));

    const currentDate = Date().toLocaleString();
    console.log(
      "🚀 ~ file: Login.jsx ~ line 98 ~ reSendHandler ~ currentDate",
      currentDate
    );
    if (reSendOtpCount >= 5) {
      console.log(reSendOtpCount, "  reSendOtpCount");
      setOtpErrorMessage("“Maximum limit reached, please try after some time”");
    } else {
      if (resendOtpTimeLimit <= currentDate) {
        dispatch(lockUnlockResendOtpTimer());
      }
      setSeconds(30);
      dispatch(reSendOtp(reSendOtpData));
      dispatch(counterLimit(reSendOtpCount + 1));
    }
  }

  function postOtpApi() {
    if (otp?.length < 4 || otp == undefined) {
      props.setOpen(true);
      dispatch(setUserData());
    } else {
      dispatch(setUserData(logIndata));
      setotp("");
    }
  }

  const sendUserLoginRequest = () => {
    const check =
      otp?.length < 4 || otp == undefined
        ? dispatch(setLoginOtpErorr("Enter otp"))
        : postOtpApi();
    return check;
  };

  function handleClick() {
    if (mobileNo?.length > 10) {
      dispatch(
        setOtpErorr({ mobile_no: ["Mobile number cannot be greater than 10"] })
      );
    } else if (mobileNo?.length < 10) {
      dispatch(
        setOtpErorr({ mobile_no: ["Mobile number cannot  less then 10"] })
      );
    } else {
      dispatch(getOTP(optdata));
      setOtpErorr({ mobile_no: [""] });
      setnext(true);
    }
  }

  function onChangeHandler(e) {
    setotp(e);
  }

  const closeModal = () => {
    props.setOpen(false);
    dispatch(setLoginOtpErorr(""));
  };

  return (
    <div>
      <Modal
        isOpen={props.open}
        toggle={() => props.setOpen(false)}
        centered
        backdrop="static"
      >
        <ModalHeader>
          {" "}
          <button
            className={`${styles.modal_close_btn}`}
            onClick={() => closeModal()}
          >
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <div className="modal-card">
            <div className="row">
              <div className="col-5">
                <div className={`${styles.left_container}`}>
                  <Image
                    src="/assets/login-card/bro.png"
                    alt="Logo"
                    width={222}
                    height={213}
                    className={`${styles.login_card_image}`}
                  />
                  <div className={`${styles.start_journey_text}`}>
                    <span> {localize("Start-Your-Journey")} </span>
                  </div>
                  <div className={`${styles.login_card_group}`}>
                    <Image
                      src="/assets/login-card/Group.png"
                      alt="Logo"
                      width={49}
                      height={7}
                      className={`${styles.login_card_group}`}
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles.right_container} col-7 `}>
                <div>
                  <span className={`${styles.login_text}`}>
                    {" "}
                    {localize("Login-Registery")}
                  </span>
                </div>
                {stepCount === 1 ? (
                  <div className={`${styles.margin_top_68}`}>
                    <span className={`${styles.enter_mobile_text} mb-2`}>
                      {localize("Enter-mobile-number")}
                    </span>
                    <div className={`${styles.Input} mb-2`}>
                      <Input
                        onChange={(event) => handleMobile(event)}
                        value={mobileNo}
                        className={`${styles.Input}`}
                        data-validation="number"
                        maxLength="11"
                        minLength="9"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="Enter mobile number"
                      />
                      <p>+91</p>
                      {otpError && (
                        <span style={{ color: "red" }}>{otpError} </span>
                      )}
                    </div>
                    <span className={`${styles.terms_service_text}`}>
                      {localize("Signing")}{" "}
                      <span style={{ color: "#00683D" }}>
                        <u> {localize("Terms-of-services")}</u>
                      </span>{" "}
                      &{" "}
                      <span style={{ color: "#00683D" }}>
                        <u> {localize("Privacy-Policy")}</u>
                      </span>
                    </span>
                    <div>
                      <Button
                        className={`${styles.continue_button}`}
                        onClick={() => {
                          handleClick();
                        }}
                        disabled={isLoading}
                      >
                        {!isLoading ? "Continue" : "Loggin..."}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.margin_top_68}`}>
                    <div className="height-100 d-flex justify-content-center align-items-center">
                      <div className="position-relative">
                        <div className={`${styles.enter_otp}`}>
                          {localize("Enter-OTP-sent")} {mobileNo}.
                          <span
                            onClick={() => {
                              setstepCount(1);
                              dispatch(reset_otp(null));
                            }}
                            style={{ color: "#00683D", cursor: "pointer" }}
                          >
                            {" "}
                            {localize("Change")}
                          </span>
                        </div>
                        <div
                          id="otp"
                          className={`${styles.pincode_boxes} d-flex flex-row justify-content-center mt-3 ms-3`}
                        >
                          <OtpInput
                            value={otp}
                            placeholder="----"
                            onChange={onChangeHandler}
                            numInputs={4}
                            containerStyle={{ ClassNames: "otp-1" }}
                            isInputNum={true}
                            isInputSecure={true}
                          />
                        </div>
                        <div className="mt-4"></div>
                      </div>
                    </div>
                    <Button
                      className={`${styles.continue_button} mb-2`}
                      onClick={() => sendUserLoginRequest()}
                    >
                      {isLoading ? "Verifing..." : "Continue"}
                    </Button>
                    {userOtpError && (
                      <span style={{ color: "red" }}>{userOtpError} </span>
                    )}
                    <div className={`${styles.resend_code}`}>
                      <span>
                        {localize("Not-received-your-code")}{" "}
                        <span
                          onClick={() =>
                            !disabledResendOtp ? reSendHandler() : ""
                          }
                          style={{
                            color: !disabledResendOtp && "#00683D",
                            cursor: !disabledResendOtp ? "pointer" : "",
                          }}
                          className="user-select-cursor"
                        >
                          {localize("Resend-Code")}
                        </span>
                        {otpErrorMessage && (
                          <span style={{ color: "red" }}>
                            {otpErrorMessage}{" "}
                          </span>
                        )}
                        {seconds <= 5 ? (
                          <></>
                        ) : (
                          <span onClick={() => setSeconds(30)}>
                            <CountUp
                              onEnd={() => {
                                setSeconds(0);
                                console.log("Ended! 👏");
                              }}
                              className="ms-2"
                              start={seconds}
                              end={0}
                              duration={30}
                            />
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}
