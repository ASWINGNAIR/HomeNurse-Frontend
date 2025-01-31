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
export const registerNurseApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/nurseRegister`,reqBody,reqHeader)
}

// nurse login request
export const loginNurseApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/nurseLogin`,reqBody,"")
}

// get nurse profile 
export const getNurseProfileApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/nurse-profile`,"",reqHeader)
}

// get all nurse profile
export const getAllNurseProfileApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allNurse-profile`,"",reqHeader)
}

// update nurse profile
export const updateNurseProfileApi = async(id,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-nurseProfile/${id}`,reqBody,reqHeader)
}

