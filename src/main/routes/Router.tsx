import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../presentation/pages/Home";
import BookDetail from "../../presentation/pages/book/BookDetail";
import BookCategory from "../../presentation/pages/book/BookCategory";
import Login from "../../presentation/pages/admin/login/Login";
import Register from "../../presentation/pages/admin/login/Register";
import { UserDetailsProvider } from "../../presentation/context/userContext";
import BookRegister from "../../presentation/pages/book/BookRegister";
import { NotFound } from "../../presentation/pages/not-found/NotFound";

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
          <Route path="/404" element={ <NotFound /> } />
          <Route path="*" element={ <Navigate to="/404" replace />} />

        </Routes>
      </UserDetailsProvider>
    </BrowserRouter>
  );
};

export default Router;
