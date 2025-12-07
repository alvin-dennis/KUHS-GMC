"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false })

const SHEET_URLS = {
  collegePoints: "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/1",
  mensEvents: "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/2",
  womensEvents: "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/3"
}

interface CollegeData {
  rank: number
  college: string
  points: number
}

interface EventData {
  id: number
  event: string
  firstName: string
  firstCollege: string
  secondName: string
  secondCollege: string
  thirdName: string
  thirdCollege: string
}

export default function Results() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [collegesData, setCollegesData] = useState<CollegeData[]>([])
  const [eventsData, setEventsData] = useState<{ mens: EventData[], womens: EventData[] }>({ mens: [], womens: [] })

  const fetchResults = async (url: string): Promise<any[]> => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (err) {
      console.error("Fetch error:", err);
      throw err;
    }
  };


  const extractEvents = (rows: any[]) => {
    return rows
      .map((row, index) => ({
        id: index + 1,
        event: String(row["Event Name"] || ""),
        firstName: String(row["First Prize"] || ""),
        firstCollege: String(row["College(First)"] || ""),
        secondName: String(row["Second Prize"] || ""),
        secondCollege: String(row["College(Second)"] || ""),
        thirdName: String(row["Third Prize"] || ""),
        thirdCollege: String(row["College(Third)"] || "")
      }))
      .filter(e => e.event && e.event.trim() !== "")
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      setError(null)
      try {
        const collegeData: any[] = await fetchResults(SHEET_URLS.collegePoints)
        const mensData: any[] = await fetchResults(SHEET_URLS.mensEvents)
        const womensData: any[] = await fetchResults(SHEET_URLS.womensEvents)

        const colleges: CollegeData[] = collegeData
          .map((row) => ({
            college: String(row["College name"] || row.College || row.college || ""),
            points: Number(row["Points"] || row.points || 0)
          }))
          .filter(c => c.college)
          .sort((a, b) => b.points - a.points)
          .map((c, idx) => ({ ...c, rank: idx + 1 }))

        setCollegesData(colleges)

        setEventsData({
          mens: extractEvents(mensData),
          womens: extractEvents(womensData)
        })

      } catch (err) {
        setError("Error loading data. Make sure Google Sheet URLs are accessible.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <Loader />

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-6 max-w-md">
          <h3 className="text-lg font-semibold text-red-600 mb-2">Error Loading Data</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-lg bg-gradient-to-r from-[#049673] to-[#036B92] px-8 py-16 text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Results</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-[#049673] to-[#036B92] text-white px-6 py-4">
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
                    {collegesData.map((item) => (
                      <tr key={item.rank} className="border-b hover:bg-muted/50 transition-colors">
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
              <div className="bg-gradient-to-r from-[#049673] to-[#036B92] text-white px-6 py-4">
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
                            <Button variant="default" onClick={() => setSelectedEvent(event.event)}>
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
        <DialogContent className="px-4 sm:px-6"> 
          <DialogHeader>
            <DialogTitle className="text-primary">{selectedEvent} - Results</DialogTitle>
          </DialogHeader>

          {selectedEvent && (() => {
            const allEvents = [...eventsData.mens, ...eventsData.womens]
            const e = allEvents.find(x => x.event === selectedEvent)
            if (!e) return null

            const places = [
              { medal: "🥇", name: e.firstName, college: e.firstCollege },
              { medal: "🥈", name: e.secondName, college: e.secondCollege },
              { medal: "🥉", name: e.thirdName, college: e.thirdCollege },
            ]

            return (
              <div className="space-y-4">
                {places.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-muted rounded-lg border-l-4 border-primary">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full text-xl">
                      {p.medal}
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{p.name}</div>
                      <div className="text-muted-foreground">{p.college}</div>
                    </div>
                  </div>
                ))}
              </div>
            )
          })()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
