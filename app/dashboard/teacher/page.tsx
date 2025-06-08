import Link from "next/link"
import { BookOpen, FileText, MessageSquare, Plus, Users, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar userType="teacher" />
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+1 from last semester</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">128</div>
                  <p className="text-xs text-muted-foreground">+12 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">Need grading</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Uploaded Materials</CardTitle>
                  <Video className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground">+8 this month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Upcoming Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Mathematics - Advanced Calculus</p>
                        <p className="text-sm text-muted-foreground">Today, 9:00 AM - 10:30 AM</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Materials
                        </Button>
                        <Button size="sm">Start Class</Button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Physics - Mechanics</p>
                        <p className="text-sm text-muted-foreground">Today, 1:00 PM - 2:30 PM</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Materials
                        </Button>
                        <Button size="sm">Start Class</Button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Computer Science - Data Structures</p>
                        <p className="text-sm text-muted-foreground">Tomorrow, 10:30 AM - 12:00 PM</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          Materials
                        </Button>
                        <Button size="sm">Start Class</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Student Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Rahul Sharma</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                      <p className="text-sm mt-1">Question about integration by parts in today's lecture</p>
                      <div className="mt-2 flex justify-end">
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Priya Patel</p>
                        <p className="text-xs text-muted-foreground">Yesterday</p>
                      </div>
                      <p className="text-sm mt-1">Need clarification on Newton's Third Law application</p>
                      <div className="mt-2 flex justify-end">
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">Amit Kumar</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                      <p className="text-sm mt-1">Request for additional resources on binary search trees</p>
                      <div className="mt-2 flex justify-end">
                        <Button size="sm">Reply</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="courses" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Your Courses</h3>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create New Course
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Mathematics</CardTitle>
                  <CardDescription>Advanced Calculus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">48 students enrolled</p>
                  <p className="text-sm mt-2">Monday, Wednesday - 9:00 AM</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Materials
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Physics</CardTitle>
                  <CardDescription>Mechanics and Thermodynamics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">36 students enrolled</p>
                  <p className="text-sm mt-2">Monday, Thursday - 1:00 PM</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Materials
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Computer Science</CardTitle>
                  <CardDescription>Data Structures and Algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">42 students enrolled</p>
                  <p className="text-sm mt-2">Tuesday, Friday - 10:30 AM</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Materials
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>English</CardTitle>
                  <CardDescription>Advanced Communication Skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">32 students enrolled</p>
                  <p className="text-sm mt-2">Tuesday, Thursday - 2:00 PM</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Materials
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Chemistry</CardTitle>
                  <CardDescription>Organic Chemistry</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">28 students enrolled</p>
                  <p className="text-sm mt-2">Wednesday, Friday - 11:00 AM</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Materials
                  </Button>
                  <Button size="sm">Manage</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Student Management</CardTitle>
                <CardDescription>View and manage your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        placeholder="Search students..."
                        className="px-3 py-2 border rounded-md text-sm"
                      />
                      <Button variant="outline" size="sm">
                        Search
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <select className="px-3 py-2 border rounded-md text-sm">
                        <option>All Courses</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Computer Science</option>
                        <option>English</option>
                        <option>Chemistry</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Filter
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-5 bg-muted px-4 py-2 font-medium text-sm">
                      <div>Name</div>
                      <div>Course</div>
                      <div>Progress</div>
                      <div>Last Active</div>
                      <div className="text-right">Actions</div>
                    </div>
                    <div className="divide-y">
                      <div className="grid grid-cols-5 px-4 py-3 items-center">
                        <div className="font-medium">Rahul Sharma</div>
                        <div className="text-sm">Mathematics</div>
                        <div className="text-sm">75%</div>
                        <div className="text-sm">Today</div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 px-4 py-3 items-center">
                        <div className="font-medium">Priya Patel</div>
                        <div className="text-sm">Physics</div>
                        <div className="text-sm">60%</div>
                        <div className="text-sm">Yesterday</div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 px-4 py-3 items-center">
                        <div className="font-medium">Amit Kumar</div>
                        <div className="text-sm">Computer Science</div>
                        <div className="text-sm">90%</div>
                        <div className="text-sm">2 days ago</div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 px-4 py-3 items-center">
                        <div className="font-medium">Sita Thapa</div>
                        <div className="text-sm">English</div>
                        <div className="text-sm">45%</div>
                        <div className="text-sm">3 days ago</div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-5 px-4 py-3 items-center">
                        <div className="font-medium">Raj Gurung</div>
                        <div className="text-sm">Chemistry</div>
                        <div className="text-sm">80%</div>
                        <div className="text-sm">1 week ago</div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">Showing 5 of 128 students</div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="materials" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Teaching Materials</h3>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload Notes
                </Button>
                <Button variant="outline">
                  <Video className="mr-2 h-4 w-4" />
                  Upload Video
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Assignment
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                  <CardDescription>Lecture notes and study materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Mathematics - Calculus Notes</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Physics - Mechanics Notes</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Computer Science - Data Structures</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/notes/manage" className="w-full">
                    <Button className="w-full">Manage All Notes</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Previous Year Questions</CardTitle>
                  <CardDescription>Past exam papers for practice</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Mathematics - 2023 Final Exam</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Physics - 2022 Midterm</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Computer Science - 2023 Practical</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/pyqs/manage" className="w-full">
                    <Button className="w-full">Manage All PYQs</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Video Lectures</CardTitle>
                  <CardDescription>Recorded lectures and tutorials</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Mathematics - Integration Techniques</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Physics - Newton's Laws</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-sm">Computer Science - Sorting Algorithms</span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          Delete
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/videos/manage" className="w-full">
                    <Button className="w-full">Manage All Videos</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
