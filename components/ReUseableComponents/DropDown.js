import React from "react";
import { Button } from "reactstrap";
import SavedAddress from "./SavedAddress";
import Images from "./Images";
import Input from "./Input";
import { setAddressErorr } from "redux/action/AddressAction";

const DropDown = ({
  showData,
  DOM_PINCODEBOC,
  save_addresses,
  isLoggedIn,
  error,
  setError,
  pinCode,
  setpinCode,
  dispatch,
}) => {
  const getPinCodeHandler = () => {
    const result = pinCode === "12345" ? setError(true) : setError(false);
    return result;
  };

  const clearHandler = () => {
    dispatch(setAddressErorr(""));
    setpinCode("");
    setError("");
  };

  return (
    <div
      className="dropdown-box pincode-dropdown-box"
      ref={DOM_PINCODEBOC}
      style={{ width: isLoggedIn && showData ? "74%" : 353 }}
    >
      <div>
        <h3>Enter Pincode</h3>
        <h6>Enter Pincode to see Product Availability</h6>
        <div
          className={
            isLoggedIn && showData
              ? `d-flex justify-content-start align-items-center  pb-3`
              : ``
          }
        >
          <div className={`pincode-bar d-flex ${error && "error-border"}`}>
            <div className="left-bar d-flex">
              <Images
                src="/assets/location.svg"
                alt="Logo"
                width={16}
                height={20}
                className="user-select-cursor"
              />
            </div>

            <div className="right-bar">
              <Input
                type="text"
                placeholder="Enter Pincode"
                value={pinCode}
                setState={setpinCode}
              />
            </div>
            {error && (
              <div
                // onClick={() => clearHandler()}
                className="right-bar-error my-2 py-1 ms-3 me-3"
              >
                <h5 onClick={clearHandler}>Clear</h5>
              </div>
            )}
          </div>
          {error && !isLoggedIn && (
            <h4 className="error-message mt-2 ">{error}</h4>
          )}
          <div
            className={`location-picker me-3 ${
              isLoggedIn && showData && "ms-4"
            }`}
          >
            <Images
              src="/assets/pick-location.svg"
              alt="Logo"
              width={14.67}
              height={14.67}
              className="user-select-cursor"
            />
            <h6>Detect my location</h6>
          </div>
        </div>
        {error && isLoggedIn && (
          <h4 className="error-message mt-2 ">Please Enter a Vaild Pin</h4>
        )}
        {!isLoggedIn && (
          <>
            <div className="signin-btn">
              <Button>Sign in to see your location</Button>
            </div>
          </>
        )}

        <div className={`loggedinBox ${showData && isLoggedIn && "scrollBar"}`}>
          {isLoggedIn && <h4>Saved Address</h4>}
          {showData && isLoggedIn && (
            <>
              {save_addresses &&
                save_addresses?.map((address) => {
                  console.log("save_addresses", address);
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
            <div className="not-found text-center">
              <h3>No Address Found</h3>
              <div>
                <button>Add Address</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
