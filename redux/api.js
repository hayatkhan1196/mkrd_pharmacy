import { nanoid } from "nanoid";
import axios from "axios";
import { getAccessToken, getCookie, setCookie } from "commonjs/common";

// initialize axios
const api = axios.create({
  baseURL: `https://ecom.mkart.dev/api/v1`,
  headers : {
    common : {'Authorization': `Bearer ${getAccessToken() ?? ""}`}
  }
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // check device id and device registration before request is sent
    let devCookie = getCookie("deviceId");
    if (devCookie === "") {
      let deviceId = nanoid();
      axios
        .post(`https://ecom.mkart.dev/api/v1/device-registration`, {
          device_identifier: deviceId,
          device_type: "Web",
        })
        .then((res) => {
          if (res.data.code === 201) {
            setCookie("deviceId", res.data.device.identifier);
            config.headers.device_id = res.data.device.identifier;
          } else {
            console.error("Something went wrong.", res);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      config.headers.device_id = devCookie;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
