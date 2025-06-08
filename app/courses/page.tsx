import { Clock, Star, Users, Filter, Search, Play, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function CoursesPage() {
  const categories = [
    "All Courses",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "English",
    "Nepali",
    "Social Studies",
    "Economics",
  ]

  const courses = [
    {
      id: 1,
      title: "Complete Mathematics Mastery - SEE to +2",
      description:
        "Comprehensive mathematics course covering algebra, geometry, trigonometry, and calculus with real-world applications",
      instructor: "Dr. Ram Sharma",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "48 hours",
      students: 4847,
      rating: 4.9,
      reviews: 1247,
      level: "All Levels",
      price: "Free",
      originalPrice: "Rs. 4,999",
      category: "Mathematics",
      image: "/placeholder.svg?height=200&width=350",
      features: ["Live Sessions", "Practice Tests", "Certificate", "Lifetime Access"],
      bestseller: true,
      updated: "Recently Updated",
    },
    {
      id: 2,
      title: "Physics for Engineering Entrance Preparation",
      description:
        "Master physics concepts for IOE, KU, and other engineering entrance exams with problem-solving techniques",
      instructor: "Prof. Sita Patel",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "56 hours",
      students: 3156,
      rating: 4.8,
      reviews: 892,
      level: "Advanced",
      price: "Rs. 2,999",
      originalPrice: "Rs. 5,999",
      category: "Physics",
      image: "/placeholder.svg?height=200&width=350",
      features: ["Lab Simulations", "Mock Tests", "Doubt Clearing", "Study Materials"],
      bestseller: false,
      updated: null,
    },
    {
      id: 3,
      title: "Computer Science & Programming Fundamentals",
      description: "Learn programming basics, data structures, algorithms, and computer science concepts from scratch",
      instructor: "Mr. Amit Kumar",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "72 hours",
      students: 5234,
      rating: 4.9,
      reviews: 1456,
      level: "Beginner",
      price: "Free",
      originalPrice: "Rs. 3,999",
      category: "Computer Science",
      image: "/placeholder.svg?height=200&width=350",
      features: ["Coding Practice", "Projects", "Career Guidance", "Industry Insights"],
      bestseller: true,
      updated: "New Course",
    },
    {
      id: 4,
      title: "English Communication & Literature Mastery",
      description:
        "Improve your English speaking, writing, grammar, and literature analysis skills for academic success",
      instructor: "Ms. Priya Thapa",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "32 hours",
      students: 2847,
      rating: 4.7,
      reviews: 734,
      level: "Intermediate",
      price: "Rs. 1,999",
      originalPrice: "Rs. 3,499",
      category: "English",
      image: "/placeholder.svg?height=200&width=350",
      features: ["Speaking Practice", "Writing Workshops", "Grammar Tests", "Literature Analysis"],
      bestseller: false,
      updated: null,
    },
    {
      id: 5,
      title: "Chemistry Lab & Theory Complete Course",
      description: "Master organic, inorganic, and physical chemistry with virtual lab experiments and theory",
      instructor: "Dr. Raj Gurung",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "44 hours",
      students: 1923,
      rating: 4.6,
      reviews: 567,
      level: "Intermediate",
      price: "Rs. 2,499",
      originalPrice: "Rs. 4,499",
      category: "Chemistry",
      image: "/placeholder.svg?height=200&width=350",
      features: ["Virtual Lab", "3D Molecules", "Reaction Mechanisms", "Practice Problems"],
      bestseller: false,
      updated: "Recently Updated",
    },
    {
      id: 6,
      title: "Biology & Life Sciences Comprehensive Guide",
      description:
        "Complete biology course covering cell biology, genetics, ecology, and human anatomy with animations",
      instructor: "Dr. Maya Shrestha",
      instructorImage: "/placeholder.svg?height=40&width=40",
      duration: "40 hours",
      students: 2156,
      rating: 4.8,
      reviews: 623,
      level: "All Levels",
      price: "Rs. 1,799",
      originalPrice: "Rs. 3,299",
      category: "Biology",
      image: "/placeholder.svg?height=200&width=350",
      features: ["3D Animations", "Interactive Diagrams", "Case Studies", "Medical Prep"],
      bestseller: false,
      updated: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Premium Courses</h1>
            <p className="text-xl text-blue-100 mb-8">
              Learn from Nepal's top educators with our comprehensive course library
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for courses, topics, or instructors..."
                className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Filters and Categories */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <Card className="p-6 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </h3>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Level */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Level</h4>
                <div className="space-y-2">
                  {["All Levels", "Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label key={level} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {["Free", "Paid", "Under Rs. 2,000", "Rs. 2,000 - Rs. 5,000"].map((price) => (
                    <label key={price} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <span className="text-sm">{price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-2 rounded" />
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm">{rating} & up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">All Courses</h2>
                <p className="text-gray-600">{courses.length} courses found</p>
              </div>
              <select className="px-4 py-2 border rounded-lg bg-white">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Highest Rated</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {course.bestseller && (
                        <Badge className="bg-orange-500 text-white">
                          <Award className="w-3 h-3 mr-1" />
                          Bestseller
                        </Badge>
                      )}
                      {course.updated && <Badge className="bg-green-500 text-white">{course.updated}</Badge>}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-700">{course.level}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Play className="mr-2 h-5 w-5" />
                        Preview Course
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <img
                        src={course.instructorImage || "/placeholder.svg"}
                        alt={course.instructor}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">{course.instructor}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

                    {/* Course Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.features.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students.toLocaleString()} students
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="ml-1">({course.reviews})</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                        {course.originalPrice && course.price !== "Free" && (
                          <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                        )}
                        {course.price === "Free" && course.originalPrice && (
                          <span className="text-sm text-gray-500 line-through ml-2">{course.originalPrice}</span>
                        )}
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        {course.price === "Free" ? "Enroll Free" : "Enroll Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">...</Button>
                <Button variant="outline">10</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
