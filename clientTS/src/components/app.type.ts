import { Dispatch, SetStateAction } from "react"

export type newUsersType = {
    name: string,
    login: string,
    email: string,
    password: string,
    isAdmin: boolean,
} | null

export type newResponseUser = {
    accessToken: string,
    user: newUsersType,
}

export type UserProps = {
    user: newUsersType,
    setUser : Dispatch<SetStateAction<newUsersType>>
}

