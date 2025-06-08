import Link from "next/link"
import { ArrowRight, BookOpen, GraduationCap, Play, Star, Users, Award, Clock, Globe, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-6 relative pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-100 border-blue-400/30 px-4 py-2">
              🏆 Nepal's #1 Educational Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Master Your <span className="text-blue-300">Future</span>
              <br />
              Excel in <span className="text-blue-300">Education</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 50,000+ students across Nepal learning with our AI-powered platform. Get access to premium courses,
              expert mentorship, and cutting-edge learning tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/register">
                <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 shadow-xl">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-300">50K+</div>
                <div className="text-blue-100 text-sm">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">1K+</div>
                <div className="text-blue-100 text-sm">Expert Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">5K+</div>
                <div className="text-blue-100 text-sm">Video Lectures</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-300">98%</div>
                <div className="text-blue-100 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">Features</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need to Excel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with proven educational methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Smart Study Materials",
                description: "AI-curated notes, practice questions, and study guides tailored to your learning style",
                color: "blue",
              },
              {
                icon: Play,
                title: "Interactive Video Lectures",
                description: "HD quality videos with interactive quizzes, bookmarks, and speed controls",
                color: "green",
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "1-on-1 guidance from Nepal's top educators and industry professionals",
                color: "purple",
              },
              {
                icon: Award,
                title: "Certification Programs",
                description: "Industry-recognized certificates to boost your academic and career prospects",
                color: "orange",
              },
              {
                icon: Globe,
                title: "Live Classes",
                description: "Real-time interactive sessions with teachers and fellow students",
                color: "red",
              },
              {
                icon: Shield,
                title: "Progress Tracking",
                description: "Advanced analytics to monitor your learning progress and identify improvement areas",
                color: "indigo",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div
                    className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-7 w-7 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge className="mb-4 bg-green-50 text-green-700 border-green-200">Popular Courses</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending This Month</h2>
              <p className="text-xl text-gray-600">Join thousands of students in these popular courses</p>
            </div>
            <Link href="/courses">
              <Button variant="outline" className="hidden md:flex">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Mathematics Mastery",
                instructor: "Dr. Ram Sharma",
                students: 2847,
                rating: 4.9,
                price: "Free",
                level: "All Levels",
                duration: "24 hours",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Physics for Engineering Entrance",
                instructor: "Prof. Sita Patel",
                students: 1923,
                rating: 4.8,
                price: "Rs. 2,999",
                level: "Advanced",
                duration: "32 hours",
                image: "/placeholder.svg?height=200&width=350",
              },
              {
                title: "Computer Science Fundamentals",
                instructor: "Mr. Amit Kumar",
                students: 3156,
                rating: 4.9,
                price: "Free",
                level: "Beginner",
                duration: "28 hours",
                image: "/placeholder.svg?height=200&width=350",
              },
            ].map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">{course.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">{course.price}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Students Love NepalEdu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from students who transformed their academic journey with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "SEE Topper 2024",
                location: "Kathmandu",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "NepalEdu's personalized learning approach helped me score 95% in SEE. The video lectures and practice tests were game-changers!",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Engineering Student",
                location: "Pokhara",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "I cleared IOE entrance exam on my first attempt thanks to NepalEdu's comprehensive physics and math courses.",
                rating: 5,
              },
              {
                name: "Amit Gurung",
                role: "Medical Student",
                location: "Chitwan",
                image: "/placeholder.svg?height=80&width=80",
                quote:
                  "The biology courses here are exceptional. I'm now studying MBBS at IOM, and it all started with NepalEdu.",
                rating: 5,
              },
            ].map((story, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">"{story.quote}"</blockquote>
                  <div className="flex items-center">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.role}</div>
                      <div className="text-sm text-gray-500">{story.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 50,000+ students who are already building successful careers with NepalEdu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="px-8 py-4 text-lg bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10"
              >
                Talk to Advisor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-2xl font-bold">NepalEdu</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Nepal's premier educational platform empowering students with world-class learning experiences, expert
                mentorship, and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  YouTube
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/courses" className="hover:text-white transition-colors">
                    Browse Courses
                  </Link>
                </li>
                <li>
                  <Link href="/notes" className="hover:text-white transition-colors">
                    Study Materials
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-white transition-colors">
                    Video Lectures
                  </Link>
                </li>
                <li>
                  <Link href="/live" className="hover:text-white transition-colors">
                    Live Classes
                  </Link>
                </li>
                <li>
                  <Link href="/practice" className="hover:text-white transition-colors">
                    Practice Tests
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 NepalEdu. All rights reserved. Made with ❤️ for Nepal's future.
              </p>
              <div className="flex items-center space-x-6 text-gray-400">
                <span>🇳🇵 Proudly Nepali</span>
                <span>🏆 Award Winning Platform</span>
                <span>🔒 Secure & Trusted</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
