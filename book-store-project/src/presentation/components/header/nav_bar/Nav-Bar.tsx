import { LuBookOpen } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useUserDetails } from "../../../context/userContext";
import { CategoryButton } from "./CategoryButton";
import { useCategory } from "../../../hooks/useCategory";

type Props = React.ComponentProps<"nav">;

export const NavBar = (props: Props) => {
  const { userDetails } = useUserDetails();
  const { categoryList } = useCategory();

  return (
    <nav
      className="flex flex-wrap flex-1 justify-center items-center h-14 w-full bg-zinc-50 text-zinc-600 text-xs lg:text-sabe sm:text-sm gap-8"
      {...props}
    >
      <ul className="xl:flex xl:items-center xl:justify-center xl:gap-3 xl:text-sm xl:flex-wrap sm:hidden">
        <CategoryButton categoryList={categoryList} />
        <li>
          <Link
            className="p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded"
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded"
            to={"/books"}
          >
            Livros
          </Link>
        </li>
        <li>
          <Link
            className="p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded"
            to={"/contact"}
          >
            Fale Conosco
          </Link>
        </li>
        <li>
          <Link
            className="p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded"
            to={"/about"}
          >
            Sobre nós
          </Link>
        </li>
        {userDetails?.role === "ROLE_ADMIN" && (
          <li>
            <Link
              to={"/book/register"}
              className="p-4 hover:bg-emerald-600 hover:text-zinc-100 rounded"
            >
              Registrar livro
            </Link>
          </li>
        )}
      </ul>
      <section className="hidden items-center justify-center gap-2 xl:flex">
        <div className="bg-transparent border-2 border-emerald-600 border-solid rounded-full p-1 text-emerald-700">
          <LuBookOpen size="24px" />
        </div>
        <div className="flex flex-col items-center justify-center text-emerald-600 font-bold xl:text-sm md:text-xs">
          <span>A leitura transforma vidas</span>
          <span className="text-xs text-zinc-600 self-start">Leia sempre!</span>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
