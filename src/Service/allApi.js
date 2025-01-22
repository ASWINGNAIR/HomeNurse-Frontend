import { commonApi } from "./commonApi"
import { serverUrl } from "./serviceUrl"


//register request
export const registerUserApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody,"")
}