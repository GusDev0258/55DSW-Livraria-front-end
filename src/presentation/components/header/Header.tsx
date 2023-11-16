import { ComponentProps } from "react";
import SearchBar from "./search_bar/Search-Bar";
import { LuUser, LuShoppingCart, LuLogOut } from "react-icons/lu";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import { useUserDetails } from "../../context/userContext";
import NavBar from "./nav_bar/Nav-Bar";

type Props = ComponentProps<"header">;

export const Header = (props: Props) => {
  const { token, clearToken } = useToken();
  const { userDetails, setUserDetails } = useUserDetails();

  const handleLogOut = (): void => {
    clearToken();
    window.sessionStorage.clear();
    setUserDetails(null);
  }

  return (
    <div className="w-full">
      <header
        className="h-28 bg-zinc-50 text-zinc-600 text-base flex items-center justify-center gap-10 border-2 border-zinc-200 border-solid"
        {...props}
      >
        <div className=" w-36 h-20 flex items-center justify-center font-mono font-bold xl:text-xl 2xl:text-2xl">
          <img src={Logo} alt="LGC logo" />
        </div>
        <SearchBar placeholder="Buscar livros..." type="search" />
        <div className="flex items-center justify-center gap-2">
        <Link
            to={"/"}
            className="text-zinc-600 cursor-pointer hover:bg-zinc-800 hover:text-zinc-100 rounded p-3"
          >
            <LuShoppingCart size="24px" />
          </Link>
          {(token && userDetails) ? (
            <div className="flex gap-8 items-center justify-center">
            <span className="text-zinc-600">Olá, {userDetails?.firstname}</span>
            <Link to={"/login"} onClick={handleLogOut} title="Sair"><LuLogOut size="24px"/></Link>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="text-zinc-600 cursor-pointer hover:bg-zinc-800 hover:text-zinc-100 rounded p-3"
            >
              <LuUser size="24px" />
            </Link>
          )}
        </div>
      </header>
      <NavBar />
    </div>
  );
};
export default Header;
