import fetch from "../utils/fetch"
import { AxiosPromise } from "axios"

export interface FetchUserResponse {
  name: string
  adress?: string
  email: string
  userRole: number
  profilePic?: string
  phone?: string
}

export default (): AxiosPromise<FetchUserResponse> => fetch.get("/auth/user")
