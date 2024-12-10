import React from 'react'
import HomeRoutes from './routes/HomeRoutes'
import Lenis from 'lenis';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const App = () => {
const lenis = new Lenis({
  duration: 1.5,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf)
  return (
    <>
      <HomeRoutes lenis={lenis} />
      <AdminRoutes lenis={lenis} />
      <UserRoutes lenis={lenis} />
    </>
  )
}

export default App