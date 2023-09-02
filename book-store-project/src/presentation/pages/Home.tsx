import * as React from "react";
import InformationHeader from "../components/header/Information-header";
import Header from "../components/header/Header";
import NavBar from "../components/header/nav_bar/Nav-Bar";
import Banner from "../../assets/banner1.png";
import { BookShelf } from "../components/book/BookShelf";

export interface HomeProps {}

export const Home = () => {
  return (
    <>
      <InformationHeader />
      <Header />
      <NavBar />
      <img className="w-full" src={Banner}></img>
      <BookShelf />
      <h1 className="text-gray-950">React TS Home</h1>
    </>
  );
};

export default Home;
