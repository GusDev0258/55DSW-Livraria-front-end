import Woman from "../../../../assets/woman-hd.jpg";
import Library from "../../../../assets/white-library-2.jpg";
import Logo from "../../../../assets/logo2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useToken } from "../../../hooks/useToken";
import React, { useState } from "react";
import { UserResponseModel, UserLoginModel } from "../../../../domain/models/user/user-model";
import { requestLogin } from "../../../../infra/http/request-login";
import { useUserDetails } from "../../../context/userContext";
import Header from "../../../components/header/Header";
export const Login = () => {

  const {setToken} = useToken();
  const {setUserDetails} = useUserDetails();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      const user: UserLoginModel = {
        email,
        password
      }
      const userResponse: UserResponseModel = await requestLogin(user);
      if(userResponse){
        await setToken(userResponse.token);
        await setUserDetails({firstname: userResponse.firstname, email: userResponse.email, role: userResponse.role})
        await navigate("/")
      }
    }catch(error){
      console.log(error);
    }
  }

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center w-full h-[48rem] rounded-md">
      <div className="w-[62.5vw] h-[74.3vh] bg-slate-50 grid grid-cols-2 items-center justify-center rounded-lg shadow-lg">
        <section
          className="h-full w-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${Library})`,
          }}
        >
          <div className=" w-[23vw] h-[63.3vh] flex items-center justify-center">
            <img src={Woman} alt="" className="rounded-md shadow-md" />
          </div>
        </section>
        <section className="w-full h-full bg-slate-50 p-10 flex flex-col items-center justify-center">
          <div className="h-[53.7vh] w-[23vw] flex items-center justify-center bg-slate-50 flex-col gap-4">
            <img src={Logo} alt="" width="200" height="200" className="" />
            <h1 className="text-4xl font-bold text-zinc-600">Login</h1>
            <p className="text-xs text-zinc-400">
              Entre para poder cadastrar livros e realizar compras
            </p>
            <div className="mt-5">
              <form
                action=""
                className="flex flex-col items-center justify-center gap-2"
                onSubmit={handleUserLogin}
              >
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({target}) => setEmail(target.value)}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({target}) => setPassword(target.value)}
                />
                <div className="text-xs w-[16.6vw] break-words mb-5">
                  <Link to={"/register"} className="text-emerald-500">
                    Ainda não faz parte da LGC?{" "}
                    <em className="underline text-emerald-400">
                      Junte-se a nós
                    </em>
                  </Link>
                </div>
                <button className="w-[16.6vw] h-[4.12vh] bg-emerald-300 rounded-md text-emerald-500 font-bold hover:bg-emerald-500 hover:text-emerald-300">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Login;
