
import React, { useEffect, useState, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  getAddress,
  setAddressErorr,
  setAddress,
} from "redux/action/AddressAction";
import save_addresses from "../../JSON_DATA/save_addresses.json";
import Image from "next/image";
import styles from "./Pincode.module.scss";
import DropDown from "./PinCodeDropdown";

export default function PincodeFunc({}) {
  const dispatch = useDispatch();
  const pincodeError = useSelector((state) => state.address?.error);
  const pincodeAddress = useSelector(
    (state) => state.address?.pinCodeAddress,
    shallowEqual
  );
  const [error, setError] = useState();
  const [showAddress, setShowAddress] = useState(pincodeAddress);
  const [pinCode, setpinCode] = useState("");
  const [showData, setshowData] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPincode, setshowPincode] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (save_addresses.length > 0) {
      setshowData(true);
    }
    if (pincodeAddress) {
      setActive(false);
      dispatch(setAddressErorr(""));
    }
    if (pincodeError) {
      setActive(true);
      dispatch(setAddress(""));
    }
    if (pinCode !== "") {
      dispatch(getAddress(pinCode));
    }
    setShowAddress(pincodeAddress);
    setError(pincodeError);
    if (pincodeAddress.length > 0) {
      setError("");
    }
  }, [pinCode, showData, isLoggedIn, pincodeAddress, pincodeError]);

  const refreshHander = () => {
    //hrer refresh the token
  };
  return (
    <>
      <div
        className={`div ${
          !showAddress.city
            ? styles.pincode_container
            : styles.pincode_address_container
        } col-2 d-flex justify-content-center align-items-center user-select-cursor`}
        onClick={() => setshowPincode(true)}
      >
        <span className={`${styles.pincode_title} me-3 mt-1`}>
          {showAddress.city && showAddress.city
            ? `${showAddress.city} ${pincodeAddress.state}`
            : "Pincode"}
        </span>
        <Image
          width={14}
          height={15}
          className={styles.pin_code_down_icon}
          src="/assets/Icon.svg"
          alt="DropDownIcon"
        />
      </div>
      {showPincode && (
        <DropDown
          showData={showData}
          isLoggedIn={isLoggedIn}
          save_addresses={save_addresses}
          error={error}
          setError={setError}
          pinCode={pinCode}
          setpinCode={setpinCode}
          dispatch={dispatch}
          getAddress={getAddress}
          setshowPincode={setshowPincode}
        />
      )}
    </>
  );
}