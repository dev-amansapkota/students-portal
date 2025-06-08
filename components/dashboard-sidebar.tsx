"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookOpen,
  Calendar,
  FileText,
  GraduationCap,
  Home,
  MessageSquare,
  Settings,
  Users,
  Video,
  Award,
  Target,
  BarChart3,
  Bell,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface DashboardSidebarProps {
  userType: "student" | "teacher"
}

export function DashboardSidebar({ userType }: DashboardSidebarProps) {
  const pathname = usePathname()

  const studentNavItems = [
    { title: "Dashboard", href: "/dashboard/student", icon: Home },
    { title: "My Courses", href: "/dashboard/student/courses", icon: GraduationCap },
    { title: "Live Classes", href: "/dashboard/student/live", icon: Video },
    { title: "Study Materials", href: "/notes", icon: BookOpen },
    { title: "Practice Tests", href: "/practice", icon: FileText },
    { title: "Progress", href: "/dashboard/student/progress", icon: BarChart3 },
    { title: "Schedule", href: "/dashboard/student/schedule", icon: Calendar },
    { title: "Achievements", href: "/dashboard/student/achievements", icon: Award },
    { title: "Messages", href: "/dashboard/student/messages", icon: MessageSquare, badge: "3" },
    { title: "Settings", href: "/dashboard/student/settings", icon: Settings },
  ]

  const teacherNavItems = [
    { title: "Dashboard", href: "/dashboard/teacher", icon: Home },
    { title: "My Courses", href: "/dashboard/teacher/courses", icon: GraduationCap },
    { title: "Students", href: "/dashboard/teacher/students", icon: Users },
    { title: "Live Classes", href: "/dashboard/teacher/live", icon: Video },
    { title: "Materials", href: "/dashboard/teacher/materials", icon: BookOpen },
    { title: "Analytics", href: "/dashboard/teacher/analytics", icon: BarChart3 },
    { title: "Schedule", href: "/dashboard/teacher/schedule", icon: Calendar },
    { title: "Messages", href: "/dashboard/teacher/messages", icon: MessageSquare, badge: "7" },
    { title: "Settings", href: "/dashboard/teacher/settings", icon: Settings },
  ]

  const navItems = userType === "student" ? studentNavItems : teacherNavItems

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gray-900">NepalEdu</h2>
            <p className="text-sm text-gray-500 capitalize">{userType} Portal</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start h-11 px-4",
                  pathname === item.href
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span className="flex-1 text-left">{item.title}</span>
                {item.badge && <Badge className="ml-2 bg-red-500 text-white text-xs px-2 py-1">{item.badge}</Badge>}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {userType === "student" ? (
              <>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Target className="mr-2 h-4 w-4" />
                  Set Goals
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Add Students
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Video className="mr-2 h-4 w-4" />
                  Start Live Class
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
