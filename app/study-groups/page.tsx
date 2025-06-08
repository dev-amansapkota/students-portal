"use client"

import { useState } from "react"
import { Users, MessageSquare, Calendar, Plus, Search, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function StudyGroupsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)

  const studyGroups = [
    {
      id: 1,
      name: "Mathematics Mastery Group",
      subject: "Mathematics",
      description: "Focused on advanced calculus and algebra problem solving",
      members: 12,
      maxMembers: 15,
      nextSession: "Today, 4:00 PM",
      isJoined: true,
      isActive: true,
      topics: ["Calculus", "Algebra", "Trigonometry"],
      admin: "Rajesh Sharma",
    },
    {
      id: 2,
      name: "Physics Problem Solvers",
      subject: "Physics",
      description: "Weekly sessions to solve complex physics problems together",
      members: 8,
      maxMembers: 12,
      nextSession: "Tomorrow, 2:00 PM",
      isJoined: false,
      isActive: true,
      topics: ["Mechanics", "Thermodynamics", "Optics"],
      admin: "Priya Patel",
    },
    {
      id: 3,
      name: "Computer Science Study Circle",
      subject: "Computer Science",
      description: "Collaborative coding sessions and algorithm discussions",
      members: 15,
      maxMembers: 20,
      nextSession: "Wednesday, 6:00 PM",
      isJoined: true,
      isActive: true,
      topics: ["Data Structures", "Algorithms", "Programming"],
      admin: "Amit Kumar",
    },
    {
      id: 4,
      name: "English Literature Discussion",
      subject: "English",
      description: "Analyzing literature and improving writing skills",
      members: 6,
      maxMembers: 10,
      nextSession: "Friday, 3:00 PM",
      isJoined: false,
      isActive: true,
      topics: ["Literature", "Writing", "Grammar"],
      admin: "Sita Thapa",
    },
  ]

  const recentActivities = [
    {
      group: "Mathematics Mastery Group",
      activity: "New study material shared: Integration Techniques",
      time: "2 hours ago",
      type: "material",
    },
    {
      group: "Physics Problem Solvers",
      activity: "Live session scheduled for tomorrow",
      time: "4 hours ago",
      type: "session",
    },
    {
      group: "Computer Science Study Circle",
      activity: "New member joined: Maya Gurung",
      time: "1 day ago",
      type: "member",
    },
    {
      group: "Mathematics Mastery Group",
      activity: "Discussion: Quadratic equations solved",
      time: "2 days ago",
      type: "discussion",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Groups</h1>
            <p className="text-gray-600">Join collaborative learning sessions with your peers</p>
          </div>
          <Button onClick={() => setShowCreateForm(true)} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" />
            Create Group
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Search study groups..." className="pl-10" />
          </div>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Computer Science</option>
            <option>English</option>
            <option>Chemistry</option>
          </select>
          <select className="px-4 py-2 border rounded-lg bg-white">
            <option>All Groups</option>
            <option>My Groups</option>
            <option>Available to Join</option>
            <option>Active Now</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Study Groups List */}
          <div className="lg:col-span-2">
            <div className="grid gap-6">
              {studyGroups.map((group) => (
                <Card key={group.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{group.name}</CardTitle>
                          {group.isActive && <Badge className="bg-green-100 text-green-700">Active</Badge>}
                          {group.isJoined && <Badge className="bg-blue-100 text-blue-700">Joined</Badge>}
                        </div>
                        <Badge variant="secondary" className="mb-2">
                          {group.subject}
                        </Badge>
                        <p className="text-gray-600">{group.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Topics */}
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.topics.map((topic, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Group Info */}
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {group.members}/{group.maxMembers} members
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {group.nextSession}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          Admin: {group.admin}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex space-x-3">
                        {group.isJoined ? (
                          <>
                            <Button className="flex-1 bg-green-600 hover:bg-green-700">
                              <Video className="mr-2 h-4 w-4" />
                              Join Session
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Chat
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Join Group</Button>
                            <Button variant="outline" className="flex-1">
                              View Details
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* My Groups Quick Access */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">My Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {studyGroups
                    .filter((g) => g.isJoined)
                    .map((group) => (
                      <div key={group.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{group.name}</p>
                          <p className="text-xs text-gray-600">{group.nextSession}</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <p className="font-medium text-sm text-gray-900">{activity.group}</p>
                      <p className="text-sm text-gray-600">{activity.activity}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Tips */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Study Group Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p>Set clear goals for each session</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p>Prepare questions in advance</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p>Share resources with group members</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p>Take turns explaining concepts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Create Group Modal */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-4">
              <CardHeader>
                <CardTitle>Create Study Group</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Group Name</label>
                    <Input placeholder="Enter group name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option>Select subject</option>
                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Computer Science</option>
                      <option>English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-lg"
                      rows={3}
                      placeholder="Describe your study group"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Max Members</label>
                    <Input type="number" placeholder="15" min="5" max="50" />
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" className="flex-1" onClick={() => setShowCreateForm(false)}>
                      Cancel
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Create Group</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
