import { Eye, Play, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VideosPage() {
  const videos = [
    {
      id: 1,
      title: "Integration by Parts - Advanced Techniques",
      subject: "Mathematics",
      instructor: "Dr. Ram Sharma",
      duration: "45:30",
      views: 1245,
      rating: 4.8,
      uploadDate: "2024-01-15",
      level: "Advanced",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Learn advanced integration techniques with step-by-step examples",
    },
    {
      id: 2,
      title: "Newton's Laws of Motion Explained",
      subject: "Physics",
      instructor: "Prof. Sita Patel",
      duration: "38:15",
      views: 987,
      rating: 4.6,
      uploadDate: "2024-01-12",
      level: "Intermediate",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Comprehensive explanation of Newton's three laws with real-world examples",
    },
    {
      id: 3,
      title: "Binary Search Trees Implementation",
      subject: "Computer Science",
      instructor: "Mr. Amit Kumar",
      duration: "52:20",
      views: 1567,
      rating: 4.9,
      uploadDate: "2024-01-10",
      level: "Advanced",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Complete guide to implementing and using binary search trees",
    },
    {
      id: 4,
      title: "Essay Writing Techniques",
      subject: "English",
      instructor: "Ms. Priya Thapa",
      duration: "32:45",
      views: 756,
      rating: 4.7,
      uploadDate: "2024-01-08",
      level: "Intermediate",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Master the art of essay writing with proven techniques and examples",
    },
    {
      id: 5,
      title: "Organic Chemistry Reactions",
      subject: "Chemistry",
      instructor: "Dr. Raj Gurung",
      duration: "48:10",
      views: 892,
      rating: 4.5,
      uploadDate: "2024-01-05",
      level: "Advanced",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Understanding complex organic chemistry reactions and mechanisms",
    },
    {
      id: 6,
      title: "Cell Division and Mitosis",
      subject: "Biology",
      instructor: "Dr. Maya Shrestha",
      duration: "41:25",
      views: 634,
      rating: 4.6,
      uploadDate: "2024-01-03",
      level: "Intermediate",
      thumbnail: "/placeholder.svg?height=180&width=320",
      description: "Detailed explanation of cell division processes and their importance",
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Video Lectures</h1>
        <p className="text-muted-foreground">Learn at your own pace with our extensive library of video lectures.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search video lectures..."
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
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
          <select className="px-4 py-2 border rounded-md">
            <option>Sort by</option>
            <option>Most Recent</option>
            <option>Most Viewed</option>
            <option>Highest Rated</option>
            <option>Duration</option>
          </select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden">
            <div className="relative">
              <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button size="lg" className="rounded-full">
                  <Play className="mr-2 h-5 w-5" />
                  Play
                </Button>
              </div>
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
              <Badge className={`absolute top-2 left-2 ${getLevelColor(video.level)}`}>{video.level}</Badge>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{video.title}</CardTitle>
              <CardDescription>{video.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{video.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subject:</span>
                  <Badge variant="secondary">{video.subject}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <Eye className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>{video.views} views</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{video.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploaded:</span>
                  <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Add to Playlist
                </Button>
                <Button size="sm" className="flex-1">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Now
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
