import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../presentation/pages/Home";
import BookDetail from "../../presentation/pages/book/BookDetail";
import BookCategory from "../../presentation/pages/book/BookCategory";
import Login from "../../presentation/pages/admin/login/Login";
import Register from "../../presentation/pages/admin/login/Register";
import { UserDetailsProvider } from "../../presentation/context/userContext";
import BookRegister from "../../presentation/pages/book/BookRegister";

const Router = () => {
  return (
    <BrowserRouter>
      <UserDetailsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/book/category/:id" element={<BookCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book/register" element={<BookRegister />} />
        </Routes>
      </UserDetailsProvider>
    </BrowserRouter>
  );
};

export default Router;
