import React, { Component } from "react";
import SearchBar from "./search_bar/Search-Bar";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import Logo from '../../../assets/logo.svg';

type Props = React.ComponentProps<"header">;

export default class Header extends Component<Props> {
  render() {
    return (
      <header
        className="h-16 w-screen bg-zinc-50 text-zinc-600 text-base border-b-gray-200 flex items-center justify-center gap-10"
        {...this.props}
      >
        <div className="h-20 w-20 flex items-center justify-center mr-4">
          <img src={Logo} alt="Logo" className="w-full rounded block" />
        </div>
        <SearchBar placeholder="Buscar livros..." type="search" />
        <div className="flex items-center justify-center gap-2">
          <div            className="text-zinc-600 cursor-pointer hover:bg-zinc-800 hover:text-zinc-100 rounded p-3">
            <LuUser
              size="24px"
            />
          </div>
          <div             className="text-zinc-600 cursor-pointer hover:bg-zinc-800 hover:text-zinc-100 rounded p-3">
            <LuShoppingCart
              size="24px"
            />
          </div>
        </div>
      </header>
    );
  }
}
