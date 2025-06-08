import { Clock, Trophy, Target, BookOpen, Play, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function PracticePage() {
  const practiceCategories = [
    {
      title: "Quick Quizzes",
      description: "Short 5-10 minute quizzes to test your knowledge",
      icon: Clock,
      color: "blue",
      count: 150,
    },
    {
      title: "Mock Exams",
      description: "Full-length practice exams with detailed analysis",
      icon: Trophy,
      color: "green",
      count: 25,
    },
    {
      title: "Skill Assessments",
      description: "Evaluate your proficiency in specific topics",
      icon: Target,
      color: "purple",
      count: 80,
    },
    {
      title: "Previous Year Papers",
      description: "Practice with actual exam papers from previous years",
      icon: BookOpen,
      color: "orange",
      count: 200,
    },
  ]

  const recentTests = [
    {
      title: "Mathematics - Quadratic Equations",
      type: "Quick Quiz",
      score: 85,
      totalQuestions: 10,
      timeSpent: "8 min",
      date: "2 hours ago",
      subject: "Mathematics",
    },
    {
      title: "Physics - Newton's Laws Mock Exam",
      type: "Mock Exam",
      score: 92,
      totalQuestions: 50,
      timeSpent: "45 min",
      date: "Yesterday",
      subject: "Physics",
    },
    {
      title: "Computer Science - Data Structures",
      type: "Skill Assessment",
      score: 78,
      totalQuestions: 25,
      timeSpent: "20 min",
      date: "2 days ago",
      subject: "Computer Science",
    },
  ]

  const recommendedTests = [
    {
      title: "Calculus Integration Techniques",
      difficulty: "Advanced",
      questions: 15,
      duration: "20 min",
      subject: "Mathematics",
      rating: 4.8,
      attempts: 1247,
    },
    {
      title: "Organic Chemistry Reactions",
      difficulty: "Intermediate",
      questions: 20,
      duration: "25 min",
      subject: "Chemistry",
      rating: 4.6,
      attempts: 892,
    },
    {
      title: "English Grammar & Comprehension",
      difficulty: "Beginner",
      questions: 12,
      duration: "15 min",
      subject: "English",
      rating: 4.7,
      attempts: 1456,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice & Assessment</h1>
          <p className="text-gray-600">
            Test your knowledge and track your progress with our comprehensive practice tools
          </p>
        </div>

        {/* Practice Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {practiceCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-${category.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <Badge className={`bg-${category.color}-100 text-${category.color}-700`}>
                  {category.count} Available
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Tests Completed</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <Trophy className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Average Score</p>
                  <p className="text-3xl font-bold">87%</p>
                </div>
                <Target className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Study Streak</p>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-purple-100 text-xs">days</p>
                </div>
                <Award className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Time Practiced</p>
                  <p className="text-3xl font-bold">24</p>
                  <p className="text-orange-100 text-xs">hours</p>
                </div>
                <Clock className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Tests */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  Recent Test Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTests.map((test, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{test.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <Badge variant="secondary">{test.type}</Badge>
                            <span>{test.subject}</span>
                            <span>{test.date}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div
                            className={`text-2xl font-bold ${test.score >= 80 ? "text-green-600" : test.score >= 60 ? "text-yellow-600" : "text-red-600"}`}
                          >
                            {test.score}%
                          </div>
                          <div className="text-sm text-gray-500">{test.totalQuestions} questions</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex-1 mr-4">
                          <Progress value={test.score} className="h-2" />
                        </div>
                        <div className="text-sm text-gray-500">⏱️ {test.timeSpent}</div>
                        <Button variant="outline" size="sm" className="ml-4">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Results
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Tests */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5 text-green-600" />
                  Recommended for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedTests.map((test, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{test.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Difficulty:</span>
                          <Badge
                            className={
                              test.difficulty === "Advanced"
                                ? "bg-red-100 text-red-700"
                                : test.difficulty === "Intermediate"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-green-100 text-green-700"
                            }
                          >
                            {test.difficulty}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Questions:</span>
                          <span>{test.questions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Duration:</span>
                          <span>{test.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Rating:</span>
                          <span>
                            ⭐ {test.rating} ({test.attempts})
                          </span>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Play className="mr-2 h-4 w-4" />
                        Start Test
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="mt-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Subject-wise Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { subject: "Mathematics", score: 87, tests: 15, color: "blue" },
                  { subject: "Physics", score: 82, tests: 12, color: "green" },
                  { subject: "Chemistry", score: 79, tests: 8, color: "purple" },
                  { subject: "Computer Science", score: 94, tests: 10, color: "orange" },
                ].map((subject, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">{subject.subject}</h3>
                    <div className={`text-3xl font-bold text-${subject.color}-600 mb-2`}>{subject.score}%</div>
                    <p className="text-sm text-gray-600">{subject.tests} tests completed</p>
                    <Progress value={subject.score} className="mt-3" />
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
