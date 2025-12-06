import { guests } from "@/data/common"

export default function SpecialGuests() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Special Guests</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guests.map((guest, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={guest.image || "/placeholder.svg"} alt={guest.name} className="w-full h-64 object-cover" />
              <div className="bg-primary text-primary-foreground p-6">
                <h3 className="font-bold text-lg mb-1">{guest.name}</h3>
                <p className="text-sm opacity-90">{guest.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
