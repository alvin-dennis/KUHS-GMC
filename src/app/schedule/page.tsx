"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { scheduleData } from "@/data/schedule"

export default function SchedulePage() {
  const [expandedDay, setExpandedDay] = useState(0)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary px-8 py-12 text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground mb-2">Schedule</h1>
            <p className="text-primary-foreground/90">
              An organized schedule covering all timings, and event highlights
            </p>
          </div>

          <div className="space-y-4">
            {scheduleData.map((daySchedule, index) => (
              <div
                key={index}
                className="rounded-lg bg-primary/30 backdrop-blur-sm overflow-hidden border border-primary/20"
              >
                <button
                  onClick={() => setExpandedDay(expandedDay === index ? -1 : index)}
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-4 text-left">
                    <h2 className="text-2xl font-bold text-primary-foreground">{daySchedule.day}</h2>
                    <span className="text-primary-foreground/80">{daySchedule.date}</span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-foreground transition-transform ${expandedDay === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {expandedDay === index && daySchedule.events.length > 0 && (
                  <div className="border-t border-primary/20 px-6 py-4">
                    <table className="w-full">
                      <thead>
                        <tr className="text-primary-foreground/80 text-sm font-semibold">
                          <td className="pb-3 pr-4">Time</td>
                          <td className="pb-3 px-4">Event</td>
                          <td className="pb-3 pl-4">Details</td>
                        </tr>
                      </thead>
                      <tbody>
                        {daySchedule.events.map((event, eventIndex) => (
                          <tr key={eventIndex} className="border-t border-primary/10 text-primary-foreground">
                            <td className="py-3 pr-4 text-sm font-semibold">{event.time}</td>
                            <td className="py-3 px-4 text-sm">{event.event}</td>
                            <td className="py-3 pl-4 text-sm whitespace-pre-line">{event.details}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
