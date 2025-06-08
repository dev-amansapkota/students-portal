import { Download, Eye, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PYQsPage() {
  const pyqs = [
    {
      id: 1,
      title: "Mathematics Final Examination",
      subject: "Mathematics",
      year: "2023",
      examType: "Final",
      duration: "3 hours",
      marks: "100",
      uploadDate: "2024-01-15",
      downloads: 456,
      difficulty: "Hard",
      fileSize: "1.8 MB",
    },
    {
      id: 2,
      title: "Physics Midterm Examination",
      subject: "Physics",
      year: "2023",
      examType: "Midterm",
      duration: "2 hours",
      marks: "75",
      uploadDate: "2024-01-12",
      downloads: 298,
      difficulty: "Medium",
      fileSize: "1.2 MB",
    },
    {
      id: 3,
      title: "Computer Science Practical Exam",
      subject: "Computer Science",
      year: "2023",
      examType: "Practical",
      duration: "4 hours",
      marks: "100",
      uploadDate: "2024-01-10",
      downloads: 387,
      difficulty: "Hard",
      fileSize: "2.1 MB",
    },
    {
      id: 4,
      title: "English Literature Final",
      subject: "English",
      year: "2022",
      examType: "Final",
      duration: "3 hours",
      marks: "100",
      uploadDate: "2024-01-08",
      downloads: 234,
      difficulty: "Medium",
      fileSize: "1.5 MB",
    },
    {
      id: 5,
      title: "Chemistry Lab Practical",
      subject: "Chemistry",
      year: "2023",
      examType: "Practical",
      duration: "3 hours",
      marks: "50",
      uploadDate: "2024-01-05",
      downloads: 189,
      difficulty: "Medium",
      fileSize: "1.9 MB",
    },
    {
      id: 6,
      title: "Biology Final Examination",
      subject: "Biology",
      year: "2022",
      examType: "Final",
      duration: "3 hours",
      marks: "100",
      uploadDate: "2024-01-03",
      downloads: 267,
      difficulty: "Hard",
      fileSize: "2.3 MB",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Previous Year Questions</h1>
        <p className="text-muted-foreground">
          Practice with a comprehensive collection of previous year examination papers.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search previous year questions..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex gap-2">
          <select className="px-4 py-2 border rounded-md">
            <option>All Subjects</option>
            <option>Mathematics</option>
            <option>Physics</option>
            <option>Computer Science</option>
            <option>English</option>
            <option>Chemistry</option>
            <option>Biology</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option>All Years</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option>All Types</option>
            <option>Final</option>
            <option>Midterm</option>
            <option>Practical</option>
            <option>Quiz</option>
          </select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pyqs.map((pyq) => (
          <Card key={pyq.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="line-clamp-2">{pyq.title}</CardTitle>
                  <CardDescription>
                    {pyq.year} - {pyq.examType}
                  </CardDescription>
                </div>
                <Badge className={getDifficultyColor(pyq.difficulty)}>{pyq.difficulty}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject:</span>
                  <Badge variant="secondary">{pyq.subject}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span>{pyq.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Marks:</span>
                  <span>{pyq.marks}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">File Size:</span>
                  <span>{pyq.fileSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Downloads:</span>
                  <span>{pyq.downloads}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span>{new Date(pyq.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>
    </div>
  )
}
