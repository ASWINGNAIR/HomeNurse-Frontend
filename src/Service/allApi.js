import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"


// user register request
export const registerUserApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}

// user login request
export const loginUserApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody,"")
}

// nurse register request
export const registerNurseApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/nurseRegister`,reqBody,"")
}

// nurse login request
export const loginNurseApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/nurseLogin`,reqBody,"")
}