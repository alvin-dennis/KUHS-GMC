import { eventFeatures } from "@/data/common"

export default function About() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="bg-linear-to-r from-[#049673] to-[#036B92] rounded-lg p-8 sm:p-12 text-primary-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About the Event</h2>

          <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
            This prestigious event brings together athletes from health science institutions across Kerala, providing a
            dynamic platform to showcase talent, foster camaraderie, and celebrate athletic excellence. The meet
            features multiple sporting disciplines, with events coordinated by the Department of Physical Education,
            GMCH Thrissur, proudly standing at the forefront, honoured to host and coordinate these magnificent
            championships.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 place-items-center">
            {eventFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-primary-foreground/20 backdrop-blur rounded-lg px-6 py-6 text-center 
                             border border-primary-foreground/30 flex flex-col items-center gap-3"
                >
                  <Icon className="h-8 w-8" />
                  <p className="font-semibold">{feature.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
