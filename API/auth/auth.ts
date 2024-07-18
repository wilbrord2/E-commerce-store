import consumeAPI from "../consumeAPI"

interface signupData{
    email: string,
    password: string,
    firstName:string,
    lastName: string,
    phoneNumber: string,
}
interface signinData{
    email: string,
    password: string,
}
export const signup =(data:signupData)=>{
    const api="/auth/signup";
    return consumeAPI().post(api, data)
}
export const signin =(data:signinData )=>{
    return consumeAPI().post("/auth/login", data)
}