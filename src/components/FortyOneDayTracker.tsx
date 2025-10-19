'use client'

import { useState } from 'react'
import { Calendar, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp, Flame, Users, Target } from 'lucide-react'

interface Task {
  id: string
  text: string
  status: 'pending' | 'in-progress' | 'completed'
  priority: 'high' | 'medium' | 'low'
}

interface DayPlan {
  day: number
  date: string
  dayName: string
  week: number
  theme: string
  tasks: Task[]
  isToday?: boolean
  isPast?: boolean
}

export default function FortyOneDayTracker() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1)
  const [selectedWeek, setSelectedWeek] = useState<number>(1)

  // Sample data structure - you'll populate this from your action plan
  const weeks = [
    {
      weekNum: 1,
      title: "FOUNDATION",
      subtitle: "Assemble the Army",
      dates: "Oct 18-24",
      color: "blue",
      icon: Users
    },
    {
      weekNum: 2,
      title: "ACCELERATION",
      subtitle: "Blanket the City",
      dates: "Oct 25-31",
      color: "green",
      icon: Target
    },
    {
      weekNum: 3,
      title: "INTENSIFICATION",
      subtitle: "Surge Forward",
      dates: "Nov 1-7",
      color: "orange",
      icon: Flame
    },
    {
      weekNum: 4,
      title: "MULTIPLICATION",
      subtitle: "Everyone Brings Someone",
      dates: "Nov 8-14",
      color: "purple",
      icon: Users
    },
    {
      weekNum: 5,
      title: "SATURATION",
      subtitle: "Final Push",
      dates: "Nov 15-21",
      color: "red",
      icon: AlertCircle
    },
    {
      weekNum: 6,
      title: "CULMINATION",
      subtitle: "The Gathering",
      dates: "Nov 22-28",
      color: "yellow",
      icon: Flame
    }
  ]

  const dayPlans: DayPlan[] = [
    {
      day: 1,
      date: "Oct 18",
      dayName: "Saturday",
      week: 1,
      theme: "Emergency Mobilization",
      isToday: true,
      tasks: [
        { id: "1-1", text: "Emergency leadership meeting (10am)", status: "completed", priority: "high" },
        { id: "1-2", text: "Appoint 6 Council Coordinators", status: "completed", priority: "high" },
        { id: "1-3", text: "Create WhatsApp coordination groups", status: "in-progress", priority: "high" },
        { id: "1-4", text: "Begin 24/7 prayer chain", status: "pending", priority: "high" },
        { id: "1-5", text: "Draft social media content calendar", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 2,
      date: "Oct 19",
      dayName: "Sunday",
      week: 1,
      theme: "Church Mobilization",
      tasks: [
        { id: "2-1", text: "Church-wide announcement and commitment", status: "pending", priority: "high" },
        { id: "2-2", text: "Recruit 100 volunteer evangelists", status: "pending", priority: "high" },
        { id: "2-3", text: "Collect special offering for campaign", status: "pending", priority: "high" },
        { id: "2-4", text: "Commission prayer team leaders", status: "pending", priority: "medium" },
        { id: "2-5", text: "Launch online countdown", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 3,
      date: "Oct 20",
      dayName: "Monday",
      week: 1,
      theme: "Logistics Setup",
      tasks: [
        { id: "3-1", text: "Meet with banner/printing companies", status: "pending", priority: "high" },
        { id: "3-2", text: "Reserve 200 buses (make deposits)", status: "pending", priority: "high" },
        { id: "3-3", text: "Contact radio stations for ads", status: "pending", priority: "high" },
        { id: "3-4", text: "Design invitation flyers (50,000)", status: "pending", priority: "high" },
        { id: "3-5", text: "Map all 30 bus pickup points", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 4,
      date: "Oct 21",
      dayName: "Tuesday",
      week: 1,
      theme: "Training Launch",
      tasks: [
        { id: "4-1", text: "Train first 100 street evangelists", status: "pending", priority: "high" },
        { id: "4-2", text: "Print invitation materials", status: "pending", priority: "high" },
        { id: "4-3", text: "Install first banners (10 locations)", status: "pending", priority: "high" },
        { id: "4-4", text: "Launch radio campaign", status: "pending", priority: "medium" },
        { id: "4-5", text: "Set up online registration portal", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 5,
      date: "Oct 22",
      dayName: "Wednesday",
      week: 1,
      theme: "Phase 1 Evangelism Begins",
      tasks: [
        { id: "5-1", text: "Begin Phase 1 street evangelism", status: "pending", priority: "high" },
        { id: "5-2", text: "Wuse Market outreach (500 traders)", status: "pending", priority: "high" },
        { id: "5-3", text: "Distribute 5,000 flyers", status: "pending", priority: "high" },
        { id: "5-4", text: "Post first social media ads", status: "pending", priority: "medium" },
        { id: "5-5", text: "Recruit youth mobilizers (50)", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 6,
      date: "Oct 23",
      dayName: "Thursday",
      week: 1,
      theme: "Phase 2 Expansion",
      tasks: [
        { id: "6-1", text: "Phase 2 evangelism begins", status: "pending", priority: "high" },
        { id: "6-2", text: "Visit government secretariats", status: "pending", priority: "high" },
        { id: "6-3", text: "Partnership meeting: Christian unions", status: "pending", priority: "medium" },
        { id: "6-4", text: "Confirm stadium booking", status: "pending", priority: "high" },
        { id: "6-5", text: "Train 50 more evangelists", status: "pending", priority: "medium" }
      ]
    },
    {
      day: 7,
      date: "Oct 24",
      dayName: "Friday",
      week: 1,
      theme: "Week 1 Consecration",
      tasks: [
        { id: "7-1", text: "ALL-NIGHT PRAYER (10pm-5am)", status: "pending", priority: "high" },
        { id: "7-2", text: "Week 1 review meeting", status: "pending", priority: "high" },
        { id: "7-3", text: "Adjust strategy based on feedback", status: "pending", priority: "medium" },
        { id: "7-4", text: "Social media content review", status: "pending", priority: "low" },
        { id: "7-5", text: "Prepare for Week 2 push", status: "pending", priority: "medium" }
      ]
    },
    // Week 2
    {
      day: 8,
      date: "Oct 25",
      dayName: "Saturday",
      week: 2,
      theme: "Saturation Day",
      tasks: [
        { id: "8-1", text: "Massive street outreach (all phases)", status: "pending", priority: "high" },
        { id: "8-2", text: "Target: 10,000 flyers distributed", status: "pending", priority: "high" },
        { id: "8-3", text: "Utako Market evangelism", status: "pending", priority: "high" },
        { id: "8-4", text: "Youth brigade launch", status: "pending", priority: "medium" },
        { id: "8-5", text: "Instagram/TikTok challenge begins", status: "pending", priority: "medium" }
      ]
    }
    // Add remaining days...
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-300'
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-300'
      default: return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500'
      case 'medium': return 'bg-yellow-500'
      default: return 'bg-gray-400'
    }
  }

  const getWeekColor = (color: string) => {
    const colors: any = {
      blue: 'from-blue-600 to-blue-700',
      green: 'from-green-600 to-green-700',
      orange: 'from-orange-600 to-orange-700',
      purple: 'from-purple-600 to-purple-700',
      red: 'from-red-600 to-red-700',
      yellow: 'from-yellow-600 to-yellow-700'
    }
    return colors[color] || colors.blue
  }

  const filteredDays = selectedWeek ? dayPlans.filter(d => d.week === selectedWeek) : dayPlans

  const calculateWeekProgress = (weekNum: number) => {
    const weekDays = dayPlans.filter(d => d.week === weekNum)
    const totalTasks = weekDays.reduce((sum, day) => sum + day.tasks.length, 0)
    const completedTasks = weekDays.reduce((sum, day) => 
      sum + day.tasks.filter(t => t.status === 'completed').length, 0)
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  }

  return (
    <section id="41-day-tracker" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-dominion text-white px-6 py-3 rounded-full mb-4 shadow-lg animate-pulse">
            <Calendar className="w-5 h-5" />
            <span className="font-bold text-lg">41 DAYS TO GLORY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dominion-blue mb-4">
            Interactive Action Tracker
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Daily countdown with tasks, accountability, and team coordination
          </p>
        </div>

        {/* Week Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {weeks.map((week) => {
            const WeekIcon = week.icon
            const progress = calculateWeekProgress(week.weekNum)
            const isSelected = selectedWeek === week.weekNum
            
            return (
              <button
                key={week.weekNum}
                onClick={() => setSelectedWeek(week.weekNum)}
                className={`relative bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 text-left overflow-hidden group ${
                  isSelected ? 'ring-4 ring-blue-500 scale-105' : ''
                }`}
              >
                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
                  <div 
                    className={`h-full bg-gradient-to-r ${getWeekColor(week.color)} transition-all duration-500`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mb-3">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${getWeekColor(week.color)} text-white mb-2`}>
                    <WeekIcon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-lg text-dominion-blue">Week {week.weekNum}</div>
                  <div className="text-xs text-gray-500">{week.dates}</div>
                </div>
                
                <div className="text-sm font-semibold text-gray-900 mb-1">{week.title}</div>
                <div className="text-xs text-gray-600">{week.subtitle}</div>
                
                <div className="mt-2 text-xs text-gray-500">
                  {progress.toFixed(0)}% complete
                </div>
              </button>
            )
          })}
        </div>

        {/* Day Cards */}
        <div className="space-y-4">
          {filteredDays.map((dayPlan) => {
            const isExpanded = expandedDay === dayPlan.day
            const totalTasks = dayPlan.tasks.length
            const completedTasks = dayPlan.tasks.filter(t => t.status === 'completed').length
            const inProgressTasks = dayPlan.tasks.filter(t => t.status === 'in-progress').length
            const progress = (completedTasks / totalTasks) * 100

            return (
              <div
                key={dayPlan.day}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                  dayPlan.isToday ? 'ring-4 ring-blue-500 shadow-2xl' : ''
                } ${isExpanded ? 'shadow-2xl' : ''}`}
              >
                {/* Day Header */}
                <button
                  onClick={() => setExpandedDay(isExpanded ? null : dayPlan.day)}
                  className="w-full p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Day Number */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl ${
                        dayPlan.isToday ? 'bg-gradient-dominion text-white' : 'bg-blue-50 text-blue-600'
                      }`}>
                        {dayPlan.day}
                      </div>

                      {/* Day Info */}
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-bold text-xl text-dominion-blue">
                            {dayPlan.dayName}, {dayPlan.date}
                          </h3>
                          {dayPlan.isToday && (
                            <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full animate-pulse">
                              TODAY
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-semibold">{dayPlan.theme}</p>
                      </div>
                    </div>

                    {/* Progress and Expand */}
                    <div className="flex items-center gap-4">
                      {/* Task Summary */}
                      <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="font-semibold text-green-600">{completedTasks}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-blue-600">{inProgressTasks}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-gray-400" />
                          <span className="font-semibold text-gray-600">{totalTasks - completedTasks - inProgressTasks}</span>
                        </div>
                      </div>

                      {/* Progress Circle */}
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 transform -rotate-90">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-gray-200"
                          />
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 20}`}
                            strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
                            className="text-green-600 transition-all duration-500"
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                          {progress.toFixed(0)}%
                        </div>
                      </div>

                      {/* Expand Icon */}
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Tasks */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="space-y-3">
                      {dayPlan.tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 transition-all ${getStatusColor(task.status)} hover:shadow-md`}
                        >
                          {/* Checkbox */}
                          <div className="flex-shrink-0 mt-0.5">
                            {task.status === 'completed' ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : task.status === 'in-progress' ? (
                              <Clock className="w-5 h-5 text-blue-600" />
                            ) : (
                              <div className="w-5 h-5 rounded border-2 border-gray-400" />
                            )}
                          </div>

                          {/* Task Text */}
                          <div className="flex-grow">
                            <p className={`font-medium ${
                              task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-900'
                            }`}>
                              {task.text}
                            </p>
                          </div>

                          {/* Priority Indicator */}
                          <div className={`flex-shrink-0 w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-600">High Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-gray-600">Medium Priority</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400" />
            <span className="text-gray-600">Low Priority</span>
          </div>
        </div>
      </div>
    </section>
  )
}