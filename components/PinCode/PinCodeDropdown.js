import React, { useRef, useEffect } from "react";
import { Button } from "reactstrap";
import Image from "next/image";
import { setAddressErorr } from "redux/action/AddressAction";
import styles from "./PincodeDropdown.module.scss";
import SavedAddress from "components/ReUseableComponents/SaveAddress/SavedAddress";
import useLocalize from 'i18n/i18n';

const DropDown = ({
  showData,
  save_addresses,
  isLoggedIn,
  error,
  setError,
  pinCode,
  setpinCode,
  dispatch,
  getAddress,
  setshowPincode,
}) => {
  const { localize } = useLocalize();

  const getPinCodeHandler = (val) => {
    setpinCode(val);
    dispatch(getAddress(val));
  };

  const clearHandler = () => {
    dispatch(setAddressErorr(""));
    setpinCode("");
    setError("");
  };

  const wrapperRef = useRef(null);
  //Close pincode model
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowPincode(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <>
      {useOutsideAlerter(wrapperRef)}
      <div
        ref={wrapperRef}
        className={`${styles.dropdown_box} ${styles.pincode_dropdown_box} pt-3`}
        style={{ width: isLoggedIn && showData ? "74%" : 353 }}
      >
        <div>
          <h3>{localize("Enter-Pincode")}</h3>
          <h6> {localize("Enter-Pincode-Product")}</h6>
          <div
            className={
              isLoggedIn && showData
                ? `d-flex justify-content-start align-items-center  pb-3`
                : ``
            }
          >
            <div
              className={`${styles.pincode_bar} d-flex ${
                error && "error-border"
              }`}
            >
              <div className={`${styles.left_bar} d-flex`}>
                <Image
                  src="/assets/location.svg"
                  alt="Logo"
                  width={16}
                  height={20}
                  className="user-select-cursor"
                />
              </div>

              <div className={`${styles.right_bar}`}>
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pinCode}
                  onChange={(e) => getPinCodeHandler(e.target.value)}
                />
              </div>
              {error && (
                <div
                  className={`${styles.right_bar_error} my-2 py-1 ms-3 me-3`}
                >
                  <h5 onClick={clearHandler}>{localize("Clear")}</h5>
                </div>
              )}
            </div>
            {error && !isLoggedIn && (
              <h4 className="error-message mt-2 ">{error}</h4>
            )}
            <div
              className={`${styles.location_picker} me-3 ${
                isLoggedIn && showData && "ms-4"
              }`}
            >
              <Image
                src="/assets/pick-location.svg"
                alt="Logo"
                width={14.67}
                height={14.67}
                className="user-select-cursor"
              />
              <h6>{localize("Detect-my-location")}</h6>
            </div>
          </div>
          {error && isLoggedIn && (
            <h4 className="error-message mt-2 ">{localize("Enter-Vaild-Pin")}</h4>
          )}
          {!isLoggedIn && (
            <>
              <div className={`${styles.signin_btn}`}>
                <Button>{localize("Sign-your-location")}</Button>
              </div>
            </>
          )}

          <div
            className={`${styles.loggedin_Box} ${
              showData && isLoggedIn && "scrollBar"
            }`}
          >
            {isLoggedIn && <h4>{localize("Saved-Address")}</h4>}
            {showData && isLoggedIn && (
              <>
                {save_addresses &&
                  save_addresses?.map((address) => {
                    return (
                      <SavedAddress
                        key={address.key}
                        title={address.name}
                        className={address.className}
                      />
                    );
                  })}
              </>
            )}
            {!showData && isLoggedIn && (
              <div className={`${styles.not_found} text-center`}>
                <h3>{localize("No-Address-Found")}</h3>
                <div>
                  <button>{localize("Add-Address")}</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;