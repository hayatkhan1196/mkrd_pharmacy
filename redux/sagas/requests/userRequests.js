import api from "../../api";
import { getCookie } from "commonjs/common";

export const getOtpApi = (data) => {
  return api.post(`/auth/requestOTP?uuid=${data.uuid}`, {
    mobile_no: data.mobile_no,
  });
};

export const getLoggedInApi = (data) => {
  return api.post(`/auth/login?identifier=${getCookie("deviceId")}`, {
    mobile_no: data.mobile_no,
    otp: data.otp,
  });
};

// resend otp
export const getResenOtpdApi = (data) => {
  return api.post(`/auth/resend-otp`, { mobile_no: data.mobile_no });
};
