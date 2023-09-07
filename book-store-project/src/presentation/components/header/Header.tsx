import { ComponentProps } from "react";
import SearchBar from "./search_bar/Search-Bar";
import { LuUser, LuShoppingCart, LuLogOut } from "react-icons/lu";
import Logo from "../../../assets/logo2.svg";
import { Link } from "react-router-dom";
import { useToken } from "../../hooks/useToken";
import { useUserDetails } from "../../context/userContext";
import NavBar from "./nav_bar/Nav-Bar";
import InformationHeader from "./Information-header";

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
    <>
      <InformationHeader />
      <header
        className="h-24 w-full bg-zinc-50 text-zinc-600 text-base flex items-center justify-center gap-10 border-2 border-zinc-200 border-solid"
        {...props}
      >
        <div className=" w-36 h-36 flex items-center justify-center mr-4">
          <img src={Logo} alt="Logo" className="w-full rounded block" />
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
    </>
  );
};
export default Header;
