"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, FileText, Upload, Download, CheckCircle, AlertCircle, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AssignmentsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const assignments = [
    {
      id: 1,
      title: "Quadratic Equations Problem Set",
      subject: "Mathematics",
      teacher: "Dr. Ram Sharma",
      dueDate: "2024-01-20",
      submittedDate: null,
      status: "pending",
      description:
        "Solve 20 problems on quadratic equations covering all types of discriminants and root finding methods.",
      totalMarks: 50,
      obtainedMarks: null,
      attachments: ["quadratic_problems.pdf"],
      timeLeft: "2 days",
    },
    {
      id: 2,
      title: "Newton's Laws Lab Report",
      subject: "Physics",
      teacher: "Prof. Sita Patel",
      dueDate: "2024-01-25",
      submittedDate: "2024-01-18",
      status: "submitted",
      description: "Write a detailed lab report on the experiment demonstrating Newton's three laws of motion.",
      totalMarks: 30,
      obtainedMarks: 27,
      attachments: ["lab_instructions.pdf"],
      timeLeft: "Submitted",
    },
    {
      id: 3,
      title: "Data Structures Implementation",
      subject: "Computer Science",
      teacher: "Mr. Amit Kumar",
      dueDate: "2024-01-15",
      submittedDate: "2024-01-14",
      status: "graded",
      description: "Implement stack, queue, and binary search tree data structures with complete CRUD operations.",
      totalMarks: 40,
      obtainedMarks: 38,
      attachments: ["assignment_requirements.pdf"],
      timeLeft: "Completed",
    },
    {
      id: 4,
      title: "Essay on Climate Change",
      subject: "English",
      teacher: "Ms. Priya Thapa",
      dueDate: "2024-01-30",
      submittedDate: null,
      status: "pending",
      description: "Write a 1000-word essay on the impact of climate change on Nepal's agriculture and economy.",
      totalMarks: 25,
      obtainedMarks: null,
      attachments: ["essay_guidelines.pdf"],
      timeLeft: "1 week",
    },
    {
      id: 5,
      title: "Organic Chemistry Mechanisms",
      subject: "Chemistry",
      teacher: "Dr. Raj Gurung",
      dueDate: "2024-01-12",
      submittedDate: null,
      status: "overdue",
      description: "Draw and explain reaction mechanisms for 10 organic chemistry reactions.",
      totalMarks: 35,
      obtainedMarks: null,
      attachments: ["reaction_list.pdf"],
      timeLeft: "3 days overdue",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "submitted":
        return "bg-blue-100 text-blue-700"
      case "graded":
        return "bg-green-100 text-green-700"
      case "overdue":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="h-4 w-4" />
      case "submitted":
        return <Clock className="h-4 w-4" />
      case "graded":
        return <CheckCircle className="h-4 w-4" />
      case "overdue":
        return <XCircle className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignments</h1>
          <p className="text-gray-600">Manage your assignments and track submission deadlines</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Assignments</p>
                  <p className="text-3xl font-bold">{assignments.length}</p>
                </div>
                <FileText className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 text-sm">Pending</p>
                  <p className="text-3xl font-bold">{assignments.filter((a) => a.status === "pending").length}</p>
                </div>
                <AlertCircle className="h-12 w-12 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Completed</p>
                  <p className="text-3xl font-bold">{assignments.filter((a) => a.status === "graded").length}</p>
                </div>
                <CheckCircle className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-100 text-sm">Overdue</p>
                  <p className="text-3xl font-bold">{assignments.filter((a) => a.status === "overdue").length}</p>
                </div>
                <XCircle className="h-12 w-12 text-red-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white border shadow-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              All Assignments
            </TabsTrigger>
            <TabsTrigger value="pending" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Pending
            </TabsTrigger>
            <TabsTrigger value="submitted" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Submitted
            </TabsTrigger>
            <TabsTrigger value="graded" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Graded
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid gap-6">
              {assignments.map((assignment) => (
                <Card key={assignment.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{assignment.title}</CardTitle>
                          <Badge className={getStatusColor(assignment.status)}>
                            {getStatusIcon(assignment.status)}
                            <span className="ml-1 capitalize">{assignment.status}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="font-medium">{assignment.subject}</span>
                          <span>•</span>
                          <span>{assignment.teacher}</span>
                          <span>•</span>
                          <span>{assignment.totalMarks} marks</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          Due: {new Date(assignment.dueDate).toLocaleDateString()}
                        </div>
                        <div
                          className={`text-sm font-medium ${
                            assignment.status === "overdue"
                              ? "text-red-600"
                              : assignment.status === "pending"
                                ? "text-yellow-600"
                                : "text-green-600"
                          }`}
                        >
                          {assignment.timeLeft}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{assignment.description}</p>

                    {/* Attachments */}
                    {assignment.attachments.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Attachments:</h4>
                        <div className="flex flex-wrap gap-2">
                          {assignment.attachments.map((attachment, index) => (
                            <Button key={index} variant="outline" size="sm" className="text-xs">
                              <Download className="h-3 w-3 mr-1" />
                              {attachment}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Grade Display */}
                    {assignment.status === "graded" && assignment.obtainedMarks !== null && (
                      <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-green-800">Grade:</span>
                          <span className="text-2xl font-bold text-green-600">
                            {assignment.obtainedMarks}/{assignment.totalMarks}
                          </span>
                        </div>
                        <Progress
                          value={(assignment.obtainedMarks / assignment.totalMarks) * 100}
                          className="mt-2 h-2"
                        />
                        <p className="text-sm text-green-700 mt-1">
                          {Math.round((assignment.obtainedMarks / assignment.totalMarks) * 100)}% - Excellent work!
                        </p>
                      </div>
                    )}

                    {/* Submission Area */}
                    {assignment.status === "pending" || assignment.status === "overdue" ? (
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Submit Assignment</h3>
                        <p className="text-gray-600 mb-4">Upload your completed assignment file</p>

                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                          id={`file-upload-${assignment.id}`}
                          accept=".pdf,.doc,.docx,.txt"
                        />
                        <label htmlFor={`file-upload-${assignment.id}`}>
                          <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">Choose File</Button>
                        </label>

                        {selectedFile && (
                          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                            <p className="text-sm text-blue-800">Selected: {selectedFile.name}</p>
                            <Button className="mt-2 bg-green-600 hover:bg-green-700">Submit Assignment</Button>
                          </div>
                        )}
                      </div>
                    ) : assignment.status === "submitted" ? (
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-blue-800">Assignment Submitted</p>
                            <p className="text-sm text-blue-600">
                              Submitted on:{" "}
                              {assignment.submittedDate && new Date(assignment.submittedDate).toLocaleDateString()}
                            </p>
                          </div>
                          <CheckCircle className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="grid gap-6">
              {assignments
                .filter((a) => a.status === "pending")
                .map((assignment) => (
                  <Card key={assignment.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 mb-4">{assignment.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
                        <span className="text-sm text-gray-500">Due: {assignment.timeLeft}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="submitted">
            <div className="grid gap-6">
              {assignments
                .filter((a) => a.status === "submitted")
                .map((assignment) => (
                  <Card key={assignment.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 mb-4">{assignment.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-blue-100 text-blue-700">Submitted</Badge>
                        <span className="text-sm text-gray-500">Awaiting Grade</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="graded">
            <div className="grid gap-6">
              {assignments
                .filter((a) => a.status === "graded")
                .map((assignment) => (
                  <Card key={assignment.id} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 mb-4">{assignment.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-green-100 text-green-700">Graded</Badge>
                        <span className="text-lg font-bold text-green-600">
                          {assignment.obtainedMarks}/{assignment.totalMarks}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
