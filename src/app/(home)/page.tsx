import Hero from "@/app/(home)/_components/Hero"
import AboutEvent from "@/app/(home)/_components/About"
import SpecialGuests from "@/app/(home)/_components/Guests"
import EventHighlights from "@/app/(home)/_components/Gallery"
import GetInTouch from "@/app/(home)/_components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutEvent />
      <SpecialGuests />
      {/* <EventHighlights /> */}
      <GetInTouch />
    </div>
  )
}
