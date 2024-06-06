
import { newResponseUser, signUpFormType } from "./app.type";
import axiosInstance from "../axiosInstance";

export async function loadUser(): Promise<newResponseUser> {
    const result = await axiosInstance.get('/token/refresh')
    return result.data
}

export async function regUser(event:any, signUpForm:signUpFormType): Promise<newResponseUser> {
    event.preventDefault()

    const result = await axiosInstance.post('/auth/registration', signUpForm)
    return result.data

}