
import { newResponseUser } from "./app.type";
import axiosInstance from "../axiosInstance";

export async function loadUser(): Promise<newResponseUser> {
    const result = await axiosInstance.get('/token/refresh')
    return result.data
}


// async function loadUser (): Promise<{newUsersType}> {
//     try {
//       await axiosInstance.get('/token/refresh').then(data => {
//         console.log(data)
//         const { accessToken, user } = data.data
//         setUser(user)
//         SetAccessToken(accessToken)
//       })
//     } catch ({message}) {
//       return console.log(message);
//     }
//   }