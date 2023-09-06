import { useState } from "react";
import Woman from "../../../../assets/woman-hd.jpg";
import Library from "../../../../assets/white-library-2.jpg";
import Logo from "../../../../assets/logo2.svg";
import {
  Token,
  UserRegisterModel,
} from "../../../../domain/models/user/user-model";
import { requestRegister } from "../../../../infra/http/request-login";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../../hooks/useToken";

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken } = useToken();
  const handleUserRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const user: UserRegisterModel = {
      firstname,
      lastname,
      email,
      password,
    };
    try {
      const token: Token = await requestRegister(user);
      if(token){
        setToken(token.token);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
            <h1 className="text-4xl font-bold text-zinc-600">Registrar-se</h1>
            <p className="text-xs text-zinc-400">
              Se junte a nós para aproveitar os benefícios da LGC
            </p>
            <div className="mt-5">
              <form
                action=""
                className="flex flex-col items-center justify-center gap-2"
                onSubmit={handleUserRegister}
              >
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({ target }) => setFirstname(target.value)}
                />
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({ target }) => setLastname(target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({ target }) => setEmail(target.value)}
                />
                <input
                  type="password"
                  placeholder="Senha"
                  className="w-[16.6vw] h-[4.12vh] bg-transparent border-solid border-2 border-emerald-400 rounded-md p-4 my-2 focus:outline-none focus:border-2 focus:border-solid focus:border-emerald-600 focus:shadow-emerald-600 focus:shadow-sm text-zinc-500"
                  onChange={({ target }) => setPassword(target.value)}
                />
                <button className="w-[16.6vw] h-[4.12vh] bg-emerald-300 rounded-md text-emerald-500 font-bold hover:bg-emerald-500 hover:text-emerald-300 mt-5">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
