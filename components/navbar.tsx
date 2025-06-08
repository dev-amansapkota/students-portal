"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { GraduationCap, Menu, X, Search, Bell, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-gray-900" : "text-white"}`}>
              NepalEdu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/courses"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/live-classes"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Live Classes
            </Link>
            <Link
              href="/practice"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Practice
            </Link>
            <Link
              href="/mentorship"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Mentorship
            </Link>
            <Link
              href="/about"
              className={`font-medium transition-colors hover:text-blue-600 ${
                isScrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              About
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search courses, topics..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Desktop Auth & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`transition-colors ${
                isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
              }`}
            >
              <Bell className="h-4 w-4" />
            </Button>
            <Link href="/login">
              <Button
                variant="ghost"
                className={`transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                }`}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input type="text" placeholder="Search courses..." className="pl-10" />
              </div>

              {/* Mobile Menu Items */}
              <Link
                href="/courses"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                href="/live-classes"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Live Classes
              </Link>
              <Link
                href="/practice"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Practice
              </Link>
              <Link
                href="/mentorship"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Mentorship
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              {/* Mobile Auth */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-gray-700">
                    <User className="mr-2 h-4 w-4" />
                    Sign In
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started Free</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
