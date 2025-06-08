"use client"

import { useState } from "react"
import { Calendar, Clock, Users, Video, Mic, MicOff, VideoOff, Share, MessageSquare, Hand } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function LiveClassesPage() {
  const [isInClass, setIsInClass] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isVideoOff, setIsVideoOff] = useState(true)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { user: "Teacher", message: "Welcome to today's mathematics class!", time: "10:00 AM", isTeacher: true },
    { user: "Rajesh", message: "Good morning sir!", time: "10:01 AM", isTeacher: false },
    { user: "Priya", message: "Ready for the lesson", time: "10:01 AM", isTeacher: false },
  ])

  const upcomingClasses = [
    {
      id: 1,
      title: "Advanced Mathematics - Integration",
      instructor: "Dr. Ram Sharma",
      time: "10:00 AM - 11:30 AM",
      date: "Today",
      students: 45,
      status: "live",
      subject: "Mathematics",
    },
    {
      id: 2,
      title: "Physics - Newton's Laws",
      instructor: "Prof. Sita Patel",
      time: "2:00 PM - 3:30 PM",
      date: "Today",
      students: 38,
      status: "upcoming",
      subject: "Physics",
    },
    {
      id: 3,
      title: "Computer Science - Data Structures",
      instructor: "Mr. Amit Kumar",
      time: "4:00 PM - 5:30 PM",
      date: "Today",
      students: 52,
      status: "upcoming",
      subject: "Computer Science",
    },
    {
      id: 4,
      title: "English Literature Discussion",
      instructor: "Ms. Priya Thapa",
      time: "9:00 AM - 10:30 AM",
      date: "Tomorrow",
      students: 28,
      status: "scheduled",
      subject: "English",
    },
  ]

  const sendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          user: "You",
          message: chatMessage,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isTeacher: false,
        },
      ])
      setChatMessage("")
    }
  }

  if (isInClass) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16">
        <div className="h-screen flex">
          {/* Main Video Area */}
          <div className="flex-1 flex flex-col">
            {/* Video Grid */}
            <div className="flex-1 p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                {/* Teacher Video */}
                <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">DS</span>
                      </div>
                      <p className="text-lg font-medium">Dr. Ram Sharma</p>
                      <p className="text-sm text-gray-300">Teacher</p>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-500">Live</Badge>
                  <Badge className="absolute top-4 right-4 bg-black/50 text-white">Presenter</Badge>
                </div>

                {/* Student Videos Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((student) => (
                    <div key={student} className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-sm font-bold">S{student}</span>
                          </div>
                          <p className="text-xs">Student {student}</p>
                        </div>
                      </div>
                      {student === 1 && <Badge className="absolute top-2 left-2 bg-green-500 text-xs">You</Badge>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-gray-800 p-4">
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant={isMuted ? "destructive" : "secondary"}
                  size="lg"
                  onClick={() => setIsMuted(!isMuted)}
                  className="rounded-full w-12 h-12"
                >
                  {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                </Button>
                <Button
                  variant={isVideoOff ? "destructive" : "secondary"}
                  size="lg"
                  onClick={() => setIsVideoOff(!isVideoOff)}
                  className="rounded-full w-12 h-12"
                >
                  {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
                </Button>
                <Button variant="secondary" size="lg" className="rounded-full w-12 h-12">
                  <Share className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="lg" className="rounded-full w-12 h-12">
                  <Hand className="h-5 w-5" />
                </Button>
                <Button variant="destructive" onClick={() => setIsInClass(false)} className="px-6 py-2 rounded-full">
                  Leave Class
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="w-80 bg-white border-l flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-lg">Class Chat</h3>
              <p className="text-sm text-gray-600">45 participants</p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`${msg.isTeacher ? "bg-blue-50" : "bg-gray-50"} p-3 rounded-lg`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`font-medium text-sm ${msg.isTeacher ? "text-blue-700" : "text-gray-700"}`}>
                      {msg.user}
                    </span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-800">{msg.message}</p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} size="sm">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Live Classes</h1>
          <p className="text-gray-600">Join interactive live sessions with expert teachers</p>
        </div>

        {/* Live Now Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
            Live Now
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses
              .filter((cls) => cls.status === "live")
              .map((liveClass) => (
                <Card key={liveClass.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-red-500 text-white animate-pulse">🔴 LIVE</Badge>
                      <Badge variant="secondary">{liveClass.subject}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{liveClass.title}</CardTitle>
                    <p className="text-gray-600">{liveClass.instructor}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {liveClass.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {liveClass.students} students joined
                      </div>
                    </div>
                    <Button
                      onClick={() => setIsInClass(true)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Video className="mr-2 h-4 w-4" />
                      Join Live Class
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Classes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingClasses
              .filter((cls) => cls.status !== "live")
              .map((upcomingClass) => (
                <Card key={upcomingClass.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        className={
                          upcomingClass.status === "upcoming"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      >
                        {upcomingClass.status === "upcoming" ? "Starting Soon" : "Scheduled"}
                      </Badge>
                      <Badge variant="secondary">{upcomingClass.subject}</Badge>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{upcomingClass.title}</CardTitle>
                    <p className="text-gray-600">{upcomingClass.instructor}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {upcomingClass.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {upcomingClass.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {upcomingClass.students} students registered
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Set Reminder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Class Schedule */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Time</th>
                      <th className="text-left py-3 px-4">Monday</th>
                      <th className="text-left py-3 px-4">Tuesday</th>
                      <th className="text-left py-3 px-4">Wednesday</th>
                      <th className="text-left py-3 px-4">Thursday</th>
                      <th className="text-left py-3 px-4">Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">9:00 AM</td>
                      <td className="py-3 px-4">
                        <div className="bg-blue-100 p-2 rounded text-sm">
                          <p className="font-medium">Mathematics</p>
                          <p className="text-gray-600">Dr. Ram Sharma</p>
                        </div>
                      </td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">
                        <div className="bg-green-100 p-2 rounded text-sm">
                          <p className="font-medium">Physics</p>
                          <p className="text-gray-600">Prof. Sita Patel</p>
                        </div>
                      </td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">
                        <div className="bg-purple-100 p-2 rounded text-sm">
                          <p className="font-medium">Computer Science</p>
                          <p className="text-gray-600">Mr. Amit Kumar</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">2:00 PM</td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">
                        <div className="bg-orange-100 p-2 rounded text-sm">
                          <p className="font-medium">English</p>
                          <p className="text-gray-600">Ms. Priya Thapa</p>
                        </div>
                      </td>
                      <td className="py-3 px-4"></td>
                      <td className="py-3 px-4">
                        <div className="bg-red-100 p-2 rounded text-sm">
                          <p className="font-medium">Chemistry</p>
                          <p className="text-gray-600">Dr. Raj Gurung</p>
                        </div>
                      </td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
