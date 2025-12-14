import Image from "next/image"
import Link from "next/link"
import { highlights } from "@/data/common"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Event Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64"
            >
              <Image
                src={highlight.image}
                alt="Gallery photos"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="https://drive.google.com/drive/folders/1MqdXyCAQfslGds8PmbjRPoJB37Oa7qLS?usp=sharing">
            <Button variant="default" size="lg" className="text-lg font-semibold">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
