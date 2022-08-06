import { getCookie } from "commonjs/common";
import api from "../../api"



// trending search 
export const getAddressApi = (data) => {
    return api.get(`/pincode-details?pincode=${data}`)
}


export const addAddressApi = (data) => {
    return api.post(`/address?identifier=${getCookie("deviceId")}`, 
        {
            name: data.fullName,
            type: data.addressType,
            mobile_no: data.mobileNumber,
            address: data.address,
            landmark: data.landMark,
            pincode: data.pincode,
            city: data.city,
            state: data.state,
            is_default: false
        }
    )
}