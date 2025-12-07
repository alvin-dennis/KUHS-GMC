import Hero from "@/app/(home)/_components/Hero"
import About from "@/app/(home)/_components/About"
import SpecialGuests from "@/app/(home)/_components/Guests"
import Gallery from "@/app/(home)/_components/Gallery"
import Contact from "@/app/(home)/_components/Contact"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SpecialGuests />
      {/* <Gallery /> */}
      <Contact />
      <div className="fixed bottom-4 right-4 z-50">
        <BackToTop />
      </div>
    </div>
  )
}
