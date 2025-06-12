import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero'
import FeaturedCarsSection from '@/components/features'
import CallToActionSection from '@/components/call-to-action'
import Footer from '@/components/footer'
import Tokenomics from '@/components/tokenomics'
import Team from '@/components/team'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCarsSection />
        <CallToActionSection />
        <Tokenomics />
        <Team />
      </main>
      <Footer />
    </>
  )
}
