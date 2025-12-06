export default function Gallery() {
  const highlights = [
    {
      id: 1,
      image: "/track-and-field-athletes-sports-event.jpg",
    },
    {
      id: 2,
      image: "/relay-race-athletes-running.jpg",
    },
    {
      id: 3,
      image: "/athletes-medal-ceremony-celebration.jpg",
    },
    {
      id: 4,
      image: "/jump-inflatable-sports-event.jpg",
    },
    {
      id: 5,
      image: "/spectators-crowd-stadium.jpg",
    },
  ]

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">Event Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.id}
              className="relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64"
            >
              <img
                src={highlight.image || "/placeholder.svg"}
                alt={`Highlight ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          {/* See More Card */}
          <div className="relative bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow h-64 flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground mb-2">See More...</p>
              <p className="text-sm text-muted-foreground">View all event photos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
