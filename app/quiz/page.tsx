"use client"

import { useState, useEffect } from "react"
import { Clock, CheckCircle, XCircle, Award, RotateCcw, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({})
  const [timeLeft, setTimeLeft] = useState(1800) // 30 minutes
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = {
    title: "Mathematics - Quadratic Equations",
    subject: "Mathematics",
    duration: 30,
    totalQuestions: 10,
    passingScore: 70,
    questions: [
      {
        id: 1,
        question: "What is the discriminant of the quadratic equation 2x² + 5x + 3 = 0?",
        options: ["1", "7", "25", "-1"],
        correctAnswer: 0,
        explanation: "The discriminant is b² - 4ac = 5² - 4(2)(3) = 25 - 24 = 1",
      },
      {
        id: 2,
        question: "Which of the following is the standard form of a quadratic equation?",
        options: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² + cx + d = 0", "ax + by = c"],
        correctAnswer: 1,
        explanation: "The standard form of a quadratic equation is ax² + bx + c = 0 where a ≠ 0",
      },
      {
        id: 3,
        question: "What are the roots of x² - 5x + 6 = 0?",
        options: ["2, 3", "1, 6", "-2, -3", "5, 6"],
        correctAnswer: 0,
        explanation: "Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3",
      },
      {
        id: 4,
        question: "If the discriminant of a quadratic equation is negative, what can we say about its roots?",
        options: ["Two real and equal roots", "Two real and distinct roots", "No real roots", "One real root"],
        correctAnswer: 2,
        explanation: "When discriminant < 0, the quadratic equation has no real roots (complex roots)",
      },
      {
        id: 5,
        question: "What is the vertex form of a quadratic equation?",
        options: ["y = ax² + bx + c", "y = a(x - h)² + k", "y = a(x + h)² - k", "y = ax + b"],
        correctAnswer: 1,
        explanation: "The vertex form is y = a(x - h)² + k where (h, k) is the vertex",
      },
    ],
  }

  useEffect(() => {
    if (quizStarted && !quizCompleted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSubmitQuiz()
    }
  }, [timeLeft, quizStarted, quizCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex })
  }

  const handleSubmitQuiz = () => {
    let correctAnswers = 0
    quiz.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })
    setScore((correctAnswers / quiz.questions.length) * 100)
    setQuizCompleted(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setTimeLeft(1800)
    setQuizStarted(false)
    setQuizCompleted(false)
    setScore(0)
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{quiz.title}</CardTitle>
                <Badge className="bg-blue-100 text-blue-700">{quiz.subject}</Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-gray-600">{quiz.duration} minutes</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                    <p className="font-medium">Questions</p>
                    <p className="text-sm text-gray-600">{quiz.totalQuestions} questions</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-medium text-yellow-800 mb-2">Instructions:</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• You have {quiz.duration} minutes to complete this quiz</li>
                    <li>• Each question has only one correct answer</li>
                    <li>• You can navigate between questions freely</li>
                    <li>• Passing score is {quiz.passingScore}%</li>
                    <li>• Make sure you have a stable internet connection</li>
                  </ul>
                </div>

                <Button
                  onClick={() => setQuizStarted(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg"
                >
                  Start Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    score >= quiz.passingScore ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  {score >= quiz.passingScore ? (
                    <Award className="h-10 w-10 text-green-600" />
                  ) : (
                    <XCircle className="h-10 w-10 text-red-600" />
                  )}
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</CardTitle>
                <Badge
                  className={score >= quiz.passingScore ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                >
                  {score >= quiz.passingScore ? "Passed" : "Failed"}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gray-900 mb-2">{Math.round(score)}%</div>
                  <p className="text-gray-600">Your Score</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="font-medium text-blue-900">Correct Answers</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {
                        Object.keys(selectedAnswers).filter(
                          (key) =>
                            selectedAnswers[Number.parseInt(key)] ===
                            quiz.questions[Number.parseInt(key)].correctAnswer,
                        ).length
                      }
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-red-900">Wrong Answers</p>
                    <p className="text-2xl font-bold text-red-600">
                      {quiz.questions.length -
                        Object.keys(selectedAnswers).filter(
                          (key) =>
                            selectedAnswers[Number.parseInt(key)] ===
                            quiz.questions[Number.parseInt(key)].correctAnswer,
                        ).length}
                    </p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Time Taken</p>
                    <p className="text-2xl font-bold text-gray-600">{formatTime(1800 - timeLeft)}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Review Answers:</h3>
                  {quiz.questions.map((question, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <p className="font-medium mb-2">
                        {index + 1}. {question.question}
                      </p>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-2 rounded ${
                              optionIndex === question.correctAnswer
                                ? "bg-green-100 text-green-800"
                                : selectedAnswers[index] === optionIndex
                                  ? "bg-red-100 text-red-800"
                                  : "bg-gray-50"
                            }`}
                          >
                            {option}
                            {optionIndex === question.correctAnswer && " ✓"}
                            {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && " ✗"}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button onClick={restartQuiz} variant="outline" className="flex-1">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Continue Learning</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="container mx-auto px-6 py-8">
        {/* Quiz Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
              <p className="text-gray-600">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-red-600">
                <Clock className="h-5 w-5 mr-2" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
          <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="h-2" />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Question Panel */}
          <div className="lg:col-span-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {currentQuestion + 1}. {quiz.questions[currentQuestion].question}
                  </h2>
                  <div className="space-y-3">
                    {quiz.questions[currentQuestion].options.map((option, index) => (
                      <label
                        key={index}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedAnswers[currentQuestion] === index
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={index}
                          checked={selectedAnswers[currentQuestion] === index}
                          onChange={() => handleAnswerSelect(currentQuestion, index)}
                          className="mr-4"
                        />
                        <span className="text-gray-900">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                  >
                    Previous
                  </Button>
                  <div className="space-x-4">
                    {currentQuestion < quiz.questions.length - 1 ? (
                      <Button
                        onClick={() => setCurrentQuestion(currentQuestion + 1)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button onClick={handleSubmitQuiz} className="bg-green-600 hover:bg-green-700">
                        Submit Quiz
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Question Navigator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {quiz.questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentQuestion(index)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                        index === currentQuestion
                          ? "bg-blue-600 text-white"
                          : selectedAnswers[index] !== undefined
                            ? "bg-green-100 text-green-700 border border-green-300"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-100 border border-green-300 rounded mr-2"></div>
                    <span>Answered</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                    <span>Not Answered</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
