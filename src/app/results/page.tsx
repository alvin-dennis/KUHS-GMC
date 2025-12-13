"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import dynamic from "next/dynamic"

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false })

const SHEET_URLS = {
  collegePoints:
    "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/1",
  mensEvents:
    "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/2",
  womensEvents:
    "https://opensheet.elk.sh/1FWzVShh5uiuUdaXBjecSyWXKhy3XhfIMOKPNV1MeV3s/3",
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

type SelectedEvent = {
  event: string
  category: "mens" | "womens"
}

export default function Results() {
  const [selectedEvent, setSelectedEvent] = useState<SelectedEvent | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [collegesData, setCollegesData] = useState<CollegeData[]>([])
  const [eventsData, setEventsData] = useState<{
    mens: EventData[]
    womens: EventData[]
  }>({ mens: [], womens: [] })

  const fetchResults = async (url: string): Promise<any[]> => {
    const response = await axios.get(url)
    return response.data
  }

  const extractEvents = (rows: any[]): EventData[] => {
    return rows
      .map((row, index) => ({
        id: index + 1,
        event: String(row["Event Name"] || ""),
        firstName: String(row["First Prize"] || ""),
        firstCollege: String(row["College(First)"] || ""),
        secondName: String(row["Second Prize"] || ""),
        secondCollege: String(row["College(Second)"] || ""),
        thirdName: String(row["Third Prize"] || ""),
        thirdCollege: String(row["College(Third)"] || ""),
      }))
      .filter((e) => e.event.trim() !== "")
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        setError(null)

        const collegeData = await fetchResults(SHEET_URLS.collegePoints)
        const mensData = await fetchResults(SHEET_URLS.mensEvents)
        const womensData = await fetchResults(SHEET_URLS.womensEvents)

        const colleges: CollegeData[] = collegeData
          .map((row: any) => ({
            college: String(row["College name"] || row.college || ""),
            points: Number(row["Points"] || 0),
          }))
          .filter((c) => c.college)
          .sort((a, b) => b.points - a.points)
          .map((c, idx) => ({ ...c, rank: idx + 1 }))

        setCollegesData(colleges)

        setEventsData({
          mens: extractEvents(mensData),
          womens: extractEvents(womensData),
        })
      } catch (err) {
        setError("Error loading data. Check Google Sheet access.")
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) return <Loader />

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6 max-w-md">
          <h3 className="text-lg font-semibold text-red-600">
            Error Loading Data
          </h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-lg bg-gradient-to-r from-[#049673] to-[#036B92] px-8 py-16 text-center mb-12">
            <h1 className="text-4xl font-bold text-white">Results</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <div className="bg-gradient-to-r from-[#049673] to-[#036B92] text-white px-6 py-4">
                <h2 className="text-xl font-bold">College Points Table</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left">Rank</th>
                      <th className="px-6 py-3 text-left">College</th>
                      <th className="px-6 py-3 text-left">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collegesData.map((c) => (
                      <tr key={c.rank} className="border-b">
                        <td className="px-6 py-3">{c.rank}</td>
                        <td className="px-6 py-3">{c.college}</td>
                        <td className="px-6 py-3 font-semibold">{c.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <Card>
              <div className="bg-gradient-to-r from-[#049673] to-[#036B92] text-white px-6 py-4">
                <h2 className="text-xl font-bold">Published Results</h2>
              </div>

              <div className="p-6">
                <Tabs defaultValue="mens">
                  <TabsList className="flex justify-center mb-4">
                    <TabsTrigger value="mens">Mens</TabsTrigger>
                    <TabsTrigger value="womens">Womens</TabsTrigger>
                  </TabsList>

                  {(["mens", "womens"] as const).map((key) => (
                    <TabsContent key={key} value={key}>
                      <div className="space-y-3">
                        {eventsData[key].map((event) => (
                          <div
                            key={event.id}
                            className="flex justify-between items-center p-3 rounded-lg"
                          >
                            <span className="font-medium">{event.event}</span>
                            <Button
                              onClick={() =>
                                setSelectedEvent({
                                  event: event.event,
                                  category: key,
                                })
                              }
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

      <Dialog
        open={!!selectedEvent}
        onOpenChange={(o) => !o && setSelectedEvent(null)}
      >
        <DialogContent>
          {selectedEvent && (() => {
            const e =
              selectedEvent.category === "mens"
                ? eventsData.mens.find(
                  (x) => x.event === selectedEvent.event
                )
                : eventsData.womens.find(
                  (x) => x.event === selectedEvent.event
                )

            if (!e) return null

            const places = [
              { medal: "🥇", name: e.firstName, college: e.firstCollege },
              { medal: "🥈", name: e.secondName, college: e.secondCollege },
              { medal: "🥉", name: e.thirdName, college: e.thirdCollege },
            ]

            return (
              <>
                <DialogHeader>
                  <DialogTitle className="text-primary">
                    {selectedEvent.event} –{" "}
                    {selectedEvent.category === "mens"
                      ? "Men’s"
                      : "Women’s"}{" "}
                    Results
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  {places.map(
                    (p, i) =>
                      p.name && (
                        <div
                          key={i}
                          className="flex gap-4 p-4 bg-muted rounded-lg border-l-4 border-primary"
                        >
                          <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full text-xl">
                            {p.medal}
                          </div>
                          <div>
                            <div className="font-semibold">{p.name}</div>
                            <div className="text-muted-foreground">
                              {p.college}
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </>
            )
          })()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
