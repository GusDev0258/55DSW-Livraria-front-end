export type UserRegisterModel = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export type UserLoginModel = {
  email: string;
  password: string;
}

export type UserResponseModel = {
  token: string;
  email: string;
  firstname: string;
  role: string;
}
