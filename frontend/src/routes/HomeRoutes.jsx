import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ErrorPage from '../pages/home/ErrorPage'

const HomeRoutes = ({lenis, ScrollTrigger}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home lenis={lenis} ScrollTrigger={ScrollTrigger} />} />
        <Route path="/sitemap" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default HomeRoutes