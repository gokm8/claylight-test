import AboutUs from '@/components/home-page/about-us'
import Hero from '@/components/home-page/hero'
import { HeroTwo } from '@/components/home-page/heroTwo'
import LogoCarousel from '@/components/home-page/logo-carousel'
import Testimonials from '@/components/home-page/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HeroTwo />
      <AboutUs />
      <LogoCarousel />
      <Testimonials />
    </>
  )
}
