import { Download, Eye, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NotesPage() {
  const notes = [
    {
      id: 1,
      title: "Calculus - Limits and Continuity",
      subject: "Mathematics",
      chapter: "Chapter 1",
      author: "Dr. Ram Sharma",
      uploadDate: "2024-01-15",
      downloads: 245,
      pages: 12,
      fileSize: "2.3 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Newton's Laws of Motion",
      subject: "Physics",
      chapter: "Chapter 3",
      author: "Prof. Sita Patel",
      uploadDate: "2024-01-12",
      downloads: 189,
      pages: 8,
      fileSize: "1.8 MB",
      type: "PDF",
    },
    {
      id: 3,
      title: "Data Structures - Arrays and Linked Lists",
      subject: "Computer Science",
      chapter: "Chapter 2",
      author: "Mr. Amit Kumar",
      uploadDate: "2024-01-10",
      downloads: 312,
      pages: 15,
      fileSize: "3.1 MB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Grammar Fundamentals",
      subject: "English",
      chapter: "Chapter 1",
      author: "Ms. Priya Thapa",
      uploadDate: "2024-01-08",
      downloads: 156,
      pages: 10,
      fileSize: "1.5 MB",
      type: "PDF",
    },
    {
      id: 5,
      title: "Organic Chemistry - Hydrocarbons",
      subject: "Chemistry",
      chapter: "Chapter 4",
      author: "Dr. Raj Gurung",
      uploadDate: "2024-01-05",
      downloads: 198,
      pages: 18,
      fileSize: "4.2 MB",
      type: "PDF",
    },
    {
      id: 6,
      title: "Cell Biology - Structure and Function",
      subject: "Biology",
      chapter: "Chapter 2",
      author: "Dr. Maya Shrestha",
      uploadDate: "2024-01-03",
      downloads: 167,
      pages: 14,
      fileSize: "2.8 MB",
      type: "PDF",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Study Notes</h1>
        <p className="text-muted-foreground">
          Access comprehensive notes for all subjects, prepared by experienced teachers.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input type="text" placeholder="Search notes..." className="w-full pl-10 pr-4 py-2 border rounded-md" />
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
            <option>All Chapters</option>
            <option>Chapter 1</option>
            <option>Chapter 2</option>
            <option>Chapter 3</option>
            <option>Chapter 4</option>
            <option>Chapter 5</option>
          </select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="line-clamp-2">{note.title}</CardTitle>
                  <CardDescription>{note.author}</CardDescription>
                </div>
                <Badge variant="outline">{note.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject:</span>
                  <Badge variant="secondary">{note.subject}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Chapter:</span>
                  <span>{note.chapter}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pages:</span>
                  <span>{note.pages}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Size:</span>
                  <span>{note.fileSize}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Downloads:</span>
                  <span>{note.downloads}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span>{new Date(note.uploadDate).toLocaleDateString()}</span>
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
