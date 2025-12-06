"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const collegesData = [
  { rank: 1, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
  { rank: 2, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
  { rank: 3, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
]

const eventsData = {
  mens: [
    { id: 1, event: "Long Jump" },
    { id: 2, event: "Long Jump" },
    { id: 3, event: "Long Jump" },
    { id: 4, event: "Long Jump" },
  ],
  womens: [
    { id: 1, event: "Long Jump" },
    { id: 2, event: "Long Jump" },
    { id: 3, event: "Long Jump" },
  ],
}

const eventResults = {
  "Long Jump": [
    { position: 1, name: "Rahul Kumar", college: "Govt Medical College, Thiruvananthapuram", score: "7.45m" },
    { position: 2, name: "Arjun Singh", college: "Christian Medical College, Vellore", score: "7.32m" },
    { position: 3, name: "Vikram Patel", college: "St. John's Medical College, Bangalore", score: "7.18m" },
  ],
}

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("mens")
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary px-8 py-16 text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground">Results</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="bg-primary text-primary-foreground px-6 py-4">
                <h2 className="text-xl font-bold">College Points Table</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted">
                      <th className="px-6 py-3 text-left text-sm font-semibold">Rank</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">College</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold">Total Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collegesData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="px-6 py-3 text-sm">{item.rank}</td>
                        <td className="px-6 py-3 text-sm">{item.college}</td>
                        <td className="px-6 py-3 text-sm font-semibold">{item.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-primary text-primary-foreground px-6 py-4">
                <h2 className="text-xl font-bold">Published Results</h2>
              </div>
              <div className="p-6">
                <div className="flex gap-6 mb-6 border-b">
                  <button
                    onClick={() => setActiveTab("mens")}
                    className={`pb-3 font-semibold transition-colors ${activeTab === "mens"
                      ? "text-foreground border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Mens
                  </button>
                  <button
                    onClick={() => setActiveTab("womens")}
                    className={`pb-3 font-semibold transition-colors ${activeTab === "womens"
                      ? "text-foreground border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    Women
                  </button>
                </div>

                <div className="space-y-3">
                  {eventsData[activeTab as keyof typeof eventsData].map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">{event.event}</span>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        onClick={() => setSelectedEvent(event.event)}
                      >
                        View Result
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary">{selectedEvent} - Results</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {selectedEvent &&
              eventResults[selectedEvent as keyof typeof eventResults]?.map((result) => (
                <div
                  key={result.position}
                  className="flex items-start gap-4 p-4 bg-muted rounded-lg border-l-4 border-primary"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg shrink-0">
                    {result.position === 1 ? "🥇" : result.position === 2 ? "🥈" : "🥉"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground">{result.name}</p>
                    <p className="text-xs text-muted-foreground">{result.college}</p>
                    <p className="text-sm font-semibold text-primary mt-1">{result.score}</p>
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
