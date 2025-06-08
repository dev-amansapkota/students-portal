import { Award, Download, Share, Calendar, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CertificatesPage() {
  const certificates = [
    {
      id: 1,
      title: "Mathematics Mastery Certificate",
      course: "Advanced Mathematics - Complete Course",
      issueDate: "2024-01-15",
      instructor: "Dr. Ram Sharma",
      grade: "A+",
      score: 95,
      credentialId: "NEPAL-MATH-2024-001",
      skills: ["Calculus", "Algebra", "Trigonometry", "Statistics"],
      verified: true,
    },
    {
      id: 2,
      title: "Physics Excellence Award",
      course: "Physics Fundamentals for Engineering",
      issueDate: "2024-01-10",
      instructor: "Prof. Sita Patel",
      grade: "A",
      score: 88,
      credentialId: "NEPAL-PHYS-2024-002",
      skills: ["Mechanics", "Thermodynamics", "Electromagnetism"],
      verified: true,
    },
    {
      id: 3,
      title: "Programming Fundamentals Certificate",
      course: "Computer Science Basics",
      issueDate: "2024-01-05",
      instructor: "Mr. Amit Kumar",
      grade: "A+",
      score: 97,
      credentialId: "NEPAL-CS-2024-003",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
      verified: true,
    },
  ]

  const achievements = [
    {
      title: "Top Performer",
      description: "Scored in top 5% of all students",
      icon: "🏆",
      date: "2024-01-15",
    },
    {
      title: "Perfect Attendance",
      description: "Attended all live classes for 3 months",
      icon: "📅",
      date: "2024-01-10",
    },
    {
      title: "Quick Learner",
      description: "Completed course 2 weeks ahead of schedule",
      icon: "⚡",
      date: "2024-01-05",
    },
    {
      title: "Peer Helper",
      description: "Helped 10+ classmates with their studies",
      icon: "🤝",
      date: "2024-01-01",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificates & Achievements</h1>
          <p className="text-gray-600">Your earned certificates and academic achievements</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-3 text-blue-200" />
              <div className="text-3xl font-bold mb-1">{certificates.length}</div>
              <div className="text-blue-100 text-sm">Certificates Earned</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-200" />
              <div className="text-3xl font-bold mb-1">{achievements.length}</div>
              <div className="text-green-100 text-sm">Achievements</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">📊</div>
              <div className="text-3xl font-bold mb-1">93%</div>
              <div className="text-purple-100 text-sm">Average Score</div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-3xl font-bold mb-1">15</div>
              <div className="text-orange-100 text-sm">Skills Mastered</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certificates */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Certificates</h2>
            <div className="space-y-6">
              {certificates.map((certificate) => (
                <Card key={certificate.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 mb-2">{certificate.title}</CardTitle>
                        <p className="text-gray-600 mb-2">{certificate.course}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(certificate.issueDate).toLocaleDateString()}
                          </div>
                          <span>•</span>
                          <span>{certificate.instructor}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge className="bg-green-100 text-green-700">{certificate.grade}</Badge>
                          {certificate.verified && (
                            <Badge className="bg-blue-100 text-blue-700">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-green-600">{certificate.score}%</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Skills Demonstrated:</h4>
                      <div className="flex flex-wrap gap-2">
                        {certificate.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Credential ID:</strong> {certificate.credentialId}
                      </p>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certificate Preview */}
            <Card className="border-0 shadow-lg mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Certificate Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-dashed border-blue-200 text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Certificate of Excellence</h3>
                  <p className="text-sm text-gray-600 mb-4">This is to certify that</p>
                  <p className="font-bold text-lg text-blue-600 mb-4">Rajesh Sharma</p>
                  <p className="text-sm text-gray-600 mb-4">has successfully completed</p>
                  <p className="font-semibold text-gray-900 mb-4">Mathematics Mastery Course</p>
                  <p className="text-xs text-gray-500">with a score of 95%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Progress */}
        <div className="mt-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Skills Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { skill: "Mathematics", level: 95, courses: 3 },
                  { skill: "Physics", level: 88, courses: 2 },
                  { skill: "Computer Science", level: 97, courses: 4 },
                  { skill: "English", level: 82, courses: 2 },
                  { skill: "Problem Solving", level: 90, courses: 5 },
                  { skill: "Critical Thinking", level: 85, courses: 3 },
                ].map((skill, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{skill.skill}</h3>
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-300"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-600"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeDasharray={`${skill.level}, 100`}
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">{skill.level}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.courses} courses completed</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
