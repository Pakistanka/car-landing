import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeaturedCarsSection from '../components/features/FeaturedCarsSection'
import CallToActionSection from '../components/CallToActionSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCarsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
}
