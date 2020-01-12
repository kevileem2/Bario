import AsyncStorage from "@react-native-community/async-storage"
import * as Keychain from "react-native-keychain"
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios"
import CookieManager from "react-native-cookies"
import Config from "react-native-config"
import { getUniqueId } from "react-native-device-info"

interface Client extends AxiosInstance {
  login: (username: string, password: string) => Promise<ResponseData>
  ssoLogin: (azureToken: string) => Promise<any>
  logout: (urlChanged?: boolean) => void
}
export interface ResponseData {
  userCode: string
  loginDisplayName: string
  cultureCode: string
  domainCode: string
  token: string
}

type LoginSuccessResponse = AxiosResponse<ResponseData>

const client: Client = axios.create({
  baseURL: Config.API_URL
}) as Client

AsyncStorage.getItem("access_token").then(token => {
  if (token) {
    tokens.access_token = token
  }
})

let tokens = {
  access_token: ""
}

client.interceptors.request.use((axiosConfig: AxiosRequestConfig) => {
  if (tokens.access_token) {
    return {
      ...axiosConfig,
      headers: { Authorization: `Bearer ${tokens.access_token}` }
    }
  }
  return axiosConfig
})

client.interceptors.response.use(undefined, async error => {
  console.log({ ...error })
  if (
    error &&
    error.response &&
    error.response.status === 403 &&
    error.response.data &&
    error.response.data.message === "Invalid credentials"
  ) {
    await removeTokens()
    throw error.response
  } else if (error && error.response && error.response.status === 403) {
    const credentials = await Keychain.getGenericPassword()
    const ssoLogin = await AsyncStorage.getItem("ssoLogin")
    if (credentials) {
      await client.login(credentials.username, credentials.password)
      await client.request(error.config)
    } else {
      console.log(error)
      removeTokens()
      throw error.response
    }
  } else {
    throw error.response
  }
  if (!error.response) {
    throw new Error("Network error!")
  }
})

const setTokens = (isSSOLogin: boolean) => async (
  response: LoginSuccessResponse
) => {
  const { data } = response
  await AsyncStorage.setItem("access_token", data.token)
  await AsyncStorage.setItem("ssoLogin", isSSOLogin ? "true" : "false")

  tokens = {
    access_token: data.token
  }

  return data
}

client.login = async (
  email: string,
  password: string
): Promise<ResponseData> => {
  return client
    .post(`${client.defaults.baseURL}/auth/token`, {
      user: email,
      password,
      clientCode: getUniqueId()
    })
    .then(setTokens(false))
}

client.ssoLogin = async (azureToken: string): Promise<ResponseData> => {
  tokens.access_token = ""
  return client
    .post(
      `${client.defaults.baseURL}/auth/sso/token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${azureToken}`
        }
      }
    )
    .then(setTokens(true))
}

client.logout = async (urlChanged?: boolean) => {
  const url = await AsyncStorage.getItem("apiUrl")
  if (urlChanged && url) {
    client.defaults.baseURL = url
  }
  await Keychain.resetGenericPassword()
  removeTokens()
}

client.interceptors.request.use(request => {
  console.log(
    "REQUEST",
    "\n",
    "URL: ",
    request.url,
    "\n",
    "Method: ",
    request.method,
    "\n",
    "Body: ",
    request.data
  )
  return request
})

client.interceptors.response.use(response => {
  if (response) {
    console.log(
      "RESPONSE",
      "\n",
      "Status: ",
      response.status,
      "\n",
      "URL: ",
      response.config.url,
      "\n",
      "Method: ",
      response.config.method,
      "\n",
      "Status text: ",
      response.statusText,
      "\n",
      "Data: ",
      response.data
    )
  }
  return response
})

const removeTokens = async () => {
  try {
    await AsyncStorage.removeItem("access_token")
    tokens = {
      access_token: ""
    }
    await CookieManager.clearAll()
    return true
  } catch {
    return false
  }
}

export { removeTokens, setTokens }
export default client
