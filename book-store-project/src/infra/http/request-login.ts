import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../data/config";
import { Token, UserLoginModel, UserRegisterModel } from "../../domain/models/user/user-model";


export const requestRegister = async (data: UserRegisterModel): Promise<Token> => {
  try {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}auth/register`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );
    window.sessionStorage.setItem("authToken", response.data.token);
    return response.data as Token;
  } catch (error) {
    throw new Error("Error on register user");
  }
};

export const requestLogin = async (data: UserLoginModel, token: string | null): Promise<Token> => {
  try {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}auth/authenticate`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    window.sessionStorage.setItem("authToken", response.data.token);
    return response.data as Token;
  } catch (error) {
    throw new Error("Error on login user");
  }
}
