import { HompageCarousel, Navbar, OurInfo } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar/>
      <HompageCarousel/>
      <OurInfo/>
    </>
  )
}
