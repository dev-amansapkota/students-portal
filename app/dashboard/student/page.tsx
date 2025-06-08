import {
  Calendar,
  Clock,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Award,
  Target,
  PlayCircle,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar userType="student" />
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Rajesh! 👋</h1>
              <p className="text-gray-600 mt-1">Continue your learning journey and achieve your goals</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Messages
                <Badge className="ml-2 bg-red-500">3</Badge>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <PlayCircle className="mr-2 h-4 w-4" />
                Continue Learning
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Enrolled Courses</p>
                  <p className="text-3xl font-bold">6</p>
                  <p className="text-blue-100 text-xs mt-1">+2 this month</p>
                </div>
                <GraduationCap className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Completed Lessons</p>
                  <p className="text-3xl font-bold">124</p>
                  <p className="text-green-100 text-xs mt-1">+15 this week</p>
                </div>
                <CheckCircle className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Study Hours</p>
                  <p className="text-3xl font-bold">47.5</p>
                  <p className="text-purple-100 text-xs mt-1">+8.5 this week</p>
                </div>
                <Clock className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Average Score</p>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-orange-100 text-xs mt-1">+5% improvement</p>
                </div>
                <TrendingUp className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="courses" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Courses
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Progress
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Continue Learning */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PlayCircle className="mr-2 h-5 w-5 text-blue-600" />
                      Continue Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Course"
                          className="w-15 h-15 rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">Advanced Mathematics</h3>
                          <p className="text-sm text-gray-600">Lesson 12: Integration by Parts</p>
                          <div className="flex items-center mt-2">
                            <Progress value={75} className="flex-1 mr-3" />
                            <span className="text-sm text-gray-500">75%</span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                          Continue
                        </Button>
                      </div>

                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <img
                          src="/placeholder.svg?height=60&width=60"
                          alt="Course"
                          className="w-15 h-15 rounded-lg mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">Physics Fundamentals</h3>
                          <p className="text-sm text-gray-600">Lesson 8: Newton's Laws</p>
                          <div className="flex items-center mt-2">
                            <Progress value={60} className="flex-1 mr-3" />
                            <span className="text-sm text-gray-500">60%</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Continue
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Upcoming Deadlines */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-red-600" />
                    Upcoming Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200">
                      <div>
                        <p className="font-medium text-gray-900">Math Assignment</p>
                        <p className="text-sm text-red-600">Due in 2 days</p>
                      </div>
                      <Badge className="bg-red-500">Urgent</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div>
                        <p className="font-medium text-gray-900">Physics Quiz</p>
                        <p className="text-sm text-yellow-600">Due in 5 days</p>
                      </div>
                      <Badge className="bg-yellow-500">Soon</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div>
                        <p className="font-medium text-gray-900">CS Project</p>
                        <p className="text-sm text-green-600">Due in 1 week</p>
                      </div>
                      <Badge className="bg-green-500">On Track</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity & Achievements */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-green-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Completed "Quadratic Equations" lesson</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Scored 95% in Physics Quiz</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Joined "Advanced Programming" course</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="mr-2 h-5 w-5 text-yellow-600" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-yellow-50 rounded-lg">
                      <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      <p className="text-xs font-medium">First Course</p>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Target className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-xs font-medium">Goal Achiever</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-xs font-medium">Top Performer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced Mathematics",
                  instructor: "Dr. Ram Sharma",
                  progress: 75,
                  nextLesson: "Integration by Parts",
                  totalLessons: 48,
                  completedLessons: 36,
                },
                {
                  title: "Physics Fundamentals",
                  instructor: "Prof. Sita Patel",
                  progress: 60,
                  nextLesson: "Newton's Laws",
                  totalLessons: 32,
                  completedLessons: 19,
                },
                {
                  title: "Computer Science",
                  instructor: "Mr. Amit Kumar",
                  progress: 90,
                  nextLesson: "Data Structures",
                  totalLessons: 24,
                  completedLessons: 22,
                },
              ].map((course, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600">{course.instructor}</p>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <p className="text-xs text-gray-500 mt-1">
                        {course.completedLessons}/{course.totalLessons} lessons completed
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Next Lesson:</p>
                      <p className="font-medium">{course.nextLesson}</p>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue Learning</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Learning Progress Analytics</CardTitle>
                <CardDescription>Track your learning journey and identify areas for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Subject-wise Progress</h3>
                    <div className="space-y-4">
                      {[
                        { subject: "Mathematics", progress: 85, color: "bg-blue-500" },
                        { subject: "Physics", progress: 72, color: "bg-green-500" },
                        { subject: "Computer Science", progress: 94, color: "bg-purple-500" },
                        { subject: "English", progress: 68, color: "bg-orange-500" },
                      ].map((item) => (
                        <div key={item.subject}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">{item.subject}</span>
                            <span className="text-sm text-gray-500">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`${item.color} h-2 rounded-full transition-all duration-300`}
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-4">Weekly Study Time</h3>
                    <div className="space-y-3">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                        <div key={day} className="flex items-center">
                          <span className="w-8 text-sm">{day}</span>
                          <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${Math.random() * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-12 text-right">
                            {Math.floor(Math.random() * 8)}h
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Weekly Schedule
                </CardTitle>
                <CardDescription>Your upcoming classes and study sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      day: "Monday",
                      classes: [
                        { time: "9:00 AM", subject: "Mathematics", type: "Live Class", instructor: "Dr. Ram Sharma" },
                        { time: "2:00 PM", subject: "Physics Lab", type: "Practical", instructor: "Prof. Sita Patel" },
                      ],
                    },
                    {
                      day: "Tuesday",
                      classes: [
                        {
                          time: "10:30 AM",
                          subject: "Computer Science",
                          type: "Live Class",
                          instructor: "Mr. Amit Kumar",
                        },
                        { time: "3:00 PM", subject: "English", type: "Discussion", instructor: "Ms. Priya Thapa" },
                      ],
                    },
                    {
                      day: "Wednesday",
                      classes: [
                        {
                          time: "9:00 AM",
                          subject: "Mathematics",
                          type: "Problem Solving",
                          instructor: "Dr. Ram Sharma",
                        },
                        { time: "1:00 PM", subject: "Study Group", type: "Peer Learning", instructor: "Self Study" },
                      ],
                    },
                  ].map((daySchedule) => (
                    <div key={daySchedule.day} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-3 text-blue-600">{daySchedule.day}</h3>
                      <div className="space-y-3">
                        {daySchedule.classes.map((classItem, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              <div>
                                <p className="font-medium">{classItem.subject}</p>
                                <p className="text-sm text-gray-600">{classItem.instructor}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{classItem.time}</p>
                              <Badge variant="secondary" className="text-xs">
                                {classItem.type}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
