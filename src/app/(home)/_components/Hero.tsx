import { Button } from "@/components/ui/button"
import { heroDates } from "@/data/common"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              KUHS
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                12<sup className="text-2xl">th</sup> Intercollege
              </span>
              <br />
              Athletics Meet 2025-26
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {heroDates.map((day) => (
                <div
                  key={day}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold text-center"
                >
                  <div className="text-lg font-bold">{day}</div>
                  <div className="text-xs">DEC</div>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground mb-6 space-y-1">
              <p>Govt. Model Boys HSS Kunnamkulam</p>
              <p>DEPT. OF PHYSICAL EDUCATION GOVERNMENT MEDICAL COLLEGE THRISSUR</p>
            </div>


            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={"/results"}>
                <Button variant={"default"}>View Results</Button>
              </Link>
              <Link href={"/schedule"}>
                <Button variant="outline">
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/home/hero.png"
              alt="Athletics"
              width={1600}
              height={900}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-full object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
