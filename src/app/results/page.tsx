"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const collegesData = [
  { rank: 1, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
  { rank: 2, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
  { rank: 3, college: "Govt Medical College, Thiruvananthapuram", points: 151 },
]

const eventsData = {
  mens: [
    { id: 1, event: "Long Jump" },
    { id: 2, event: "High Jump" },
    { id: 3, event: "100m Sprint" },
  ],
  womens: [
    { id: 1, event: "Long Jump" },
    { id: 2, event: "High Jump" },
    { id: 3, event: "100m Sprint" },
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
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-linear-to-r from-[#049673] to-[#036B92] px-8 py-16 text-center mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground">Results</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="bg-linear-to-r from-[#049673] to-[#036B92] text-primary-foreground px-6 py-4">
                <h2 className="text-xl font-bold">College Points Table</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
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
              <div className="bg-linear-to-r from-[#049673] to-[#036B92] text-primary-foreground px-6 py-4">
                <h2 className="text-xl font-bold">Published Results</h2>
              </div>
              <div className="p-6">
                <Tabs defaultValue="mens" className="space-y-4">
                  <TabsList className="flex justify-center mb-4">
                    <TabsTrigger value="mens">Mens</TabsTrigger>
                    <TabsTrigger value="womens">Womens</TabsTrigger>
                  </TabsList>

                  {Object.entries(eventsData).map(([key, events]) => (
                    <TabsContent key={key} value={key}>
                      <div className="space-y-3">
                        {events.map((event) => (
                          <div key={event.id} className="flex items-center justify-between p-3 rounded-lg">
                            <span className="font-medium">{event.event}</span>
                            <Button
                              variant={"default"}
                              onClick={() => setSelectedEvent(event.event)}
                            >
                              View Result
                            </Button>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
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
                  </div>
                </div>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}