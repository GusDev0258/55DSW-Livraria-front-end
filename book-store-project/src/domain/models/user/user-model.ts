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

export type Token = {
  token: string;
}
