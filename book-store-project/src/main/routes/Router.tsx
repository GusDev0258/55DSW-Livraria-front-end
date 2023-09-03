import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../presentation/pages/Home'
import InformationHeader from '../../presentation/components/header/Information-header'
import Header from '../../presentation/components/header/Header'
import NavBar from '../../presentation/components/header/nav_bar/Nav-Bar'
import BookDetail from '../../presentation/pages/book/BookDetail'
import BookCategory from '../../presentation/pages/book/BookCategory'
import Login from '../../presentation/pages/admin/login/Login'


const Router = () => {
  return (
    <BrowserRouter>
      <InformationHeader />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/book/category/:id" element={<BookCategory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router