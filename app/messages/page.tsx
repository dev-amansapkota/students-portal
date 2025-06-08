"use client"

import { useState } from "react"
import { Search, Send, Paperclip, Smile, Phone, Video, MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(0)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Dr. Ram Sharma",
      role: "Mathematics Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Great work on your assignment! Keep it up.",
      time: "2 min ago",
      unread: 0,
      online: true,
    },
    {
      id: 2,
      name: "Study Group - Physics",
      role: "Group Chat",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Anyone solved problem 15?",
      time: "5 min ago",
      unread: 3,
      online: false,
    },
    {
      id: 3,
      name: "Prof. Sita Patel",
      role: "Physics Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Tomorrow's class is at 2 PM",
      time: "1 hour ago",
      unread: 1,
      online: true,
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "Classmate",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Can you share your notes?",
      time: "2 hours ago",
      unread: 0,
      online: false,
    },
    {
      id: 5,
      name: "Mr. Amit Kumar",
      role: "Computer Science Teacher",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Check out this programming tutorial",
      time: "Yesterday",
      unread: 0,
      online: true,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Dr. Ram Sharma",
      content: "Hello! How are you doing with the quadratic equations chapter?",
      time: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Hi sir! I'm doing well, but I have some doubts about the discriminant formula.",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Dr. Ram Sharma",
      content: "That's perfectly fine! The discriminant is b² - 4ac. It helps us determine the nature of roots.",
      time: "10:33 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      content: "Thank you for the explanation! Could you share some practice problems?",
      time: "10:35 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Dr. Ram Sharma",
      content:
        "Of course! I'll send you a PDF with 20 practice problems. Work through them and let me know if you need help.",
      time: "10:36 AM",
      isOwn: false,
    },
    {
      id: 6,
      sender: "Dr. Ram Sharma",
      content: "📎 Quadratic_Equations_Practice.pdf",
      time: "10:36 AM",
      isOwn: false,
      isFile: true,
    },
    {
      id: 7,
      sender: "You",
      content: "Thank you so much sir! I'll work on these tonight.",
      time: "10:38 AM",
      isOwn: true,
    },
    {
      id: 8,
      sender: "Dr. Ram Sharma",
      content: "Great work on your assignment! Keep it up.",
      time: "Just now",
      isOwn: false,
    },
  ]

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="h-screen flex">
        {/* Sidebar - Conversations List */}
        <div className="w-80 bg-white border-r flex flex-col">
          {/* Header */}
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input type="text" placeholder="Search conversations..." className="pl-10" />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedChat(index)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedChat === index ? "bg-blue-50 border-r-2 border-r-blue-500" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={conversation.avatar || "/placeholder.svg"}
                      alt={conversation.name}
                      className="w-12 h-12 rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                        {conversation.unread > 0 && (
                          <Badge className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.role}</p>
                    <p className="text-sm text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={conversations[selectedChat]?.avatar || "/placeholder.svg"}
                  alt={conversations[selectedChat]?.name}
                  className="w-10 h-10 rounded-full"
                />
                {conversations[selectedChat]?.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{conversations[selectedChat]?.name}</h2>
                <p className="text-sm text-gray-600">
                  {conversations[selectedChat]?.online ? "Online" : "Last seen 2 hours ago"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs lg:max-w-md ${message.isOwn ? "order-2" : "order-1"}`}>
                  {!message.isOwn && <p className="text-xs text-gray-500 mb-1 px-3">{message.sender}</p>}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? "bg-blue-600 text-white"
                        : message.isFile
                          ? "bg-gray-100 border border-gray-300"
                          : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.isFile ? (
                      <div className="flex items-center space-x-2">
                        <Paperclip className="h-4 w-4" />
                        <span className="text-sm">{message.content}</span>
                      </div>
                    ) : (
                      <p className="text-sm">{message.content}</p>
                    )}
                  </div>
                  <p className={`text-xs text-gray-500 mt-1 px-3 ${message.isOwn ? "text-right" : "text-left"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <div className="flex-1 relative">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="pr-10"
                />
                <Button variant="ghost" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Smile className="h-4 w-4" />
                </Button>
              </div>
              <Button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
