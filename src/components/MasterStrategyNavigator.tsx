'use client'

import { useState } from 'react'
import { 
  BookOpen, Map, Calendar, Globe, Smartphone, Users, 
  Shield, Heart, TrendingUp, Zap, ChevronDown, ChevronUp,
  Download, ExternalLink
} from 'lucide-react'

interface StrategyPart {
  id: number
  title: string
  subtitle: string
  icon: any
  color: string
  keyPoints: string[]
  downloadLink?: string
}

export default function MasterStrategyNavigator() {
  const [expandedPart, setExpandedPart] = useState<number | null>(null)

  const strategyParts: StrategyPart[] = [
    {
      id: 1,
      title: "Abuja Demographic Intelligence",
      subtitle: "Know Your Territory",
      icon: Map,
      color: "from-blue-500 to-blue-600",
      keyPoints: [
        "Complete breakdown of all 6 Area Councils",
        "Population estimates for 2025",
        "6,900+ street counts and reach potential",
        "Council-by-council strategic importance",
        "Phase-by-phase AMAC breakdown"
      ]
    },
    {
      id: 2,
      title: "AMAC Phase-by-Phase Breakdown",
      subtitle: "Systematic Coverage",
      icon: Users,
      color: "from-green-500 to-green-600",
      keyPoints: [
        "All 5 development phases detailed",
        "70+ districts mapped with populations",
        "Street-level planning for each phase",
        "Strategic approach customized per phase",
        "Priority rankings: Immediate → Low"
      ]
    },
    {
      id: 3,
      title: "Night of Glory Action Plan",
      subtitle: "41 Days to Victory",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      keyPoints: [
        "Week-by-week breakdown (41 days)",
        "Mobilization strategies per week",
        "Transportation logistics (200+ buses)",
        "Budget: ₦50-80 million detailed",
        "Target: 50,000-70,000 attendance"
      ]
    },
    {
      id: 4,
      title: "100 Million Souls Strategy",
      subtitle: "5-Year Divine Mandate",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      keyPoints: [
        "Year 1 (2026): 4M - Abuja saturation",
        "Year 2 (2027): 10M - FCT + neighboring states",
        "Year 3 (2028): 25M - Northern Nigeria",
        "Year 4 (2029): 35M - Nationwide",
        "Year 5 (2030): 26M - Africa & Diaspora"
      ]
    },
    {
      id: 5,
      title: "Digital & Online Strategy",
      subtitle: "50% of Harvest",
      icon: Smartphone,
      color: "from-indigo-500 to-indigo-600",
      keyPoints: [
        "Social media evangelism (70M followers)",
        "Virtual church experience",
        "Content multiplication strategy",
        "Mobile app & WhatsApp bots",
        "Campus evangelism (5M students)"
      ]
    },
    {
      id: 6,
      title: "Organizational Structure",
      subtitle: "Leadership & Hierarchy",
      icon: Users,
      color: "from-pink-500 to-pink-600",
      keyPoints: [
        "Council coordinators (6)",
        "Phase leaders (5 for AMAC)",
        "District captains (70+)",
        "Street captains (500+)",
        "KPIs and reporting systems"
      ]
    },
    {
      id: 7,
      title: "Spiritual Warfare & Prayer",
      subtitle: "Foundation of Victory",
      icon: Shield,
      color: "from-red-500 to-red-600",
      keyPoints: [
        "Prayer mandates and schedules",
        "Spiritual covering strategies",
        "24/7 prayer chain structure",
        "Fasting protocols",
        "Declarations & confessions"
      ]
    },
    {
      id: 8,
      title: "Consolidation & Discipleship",
      subtitle: "Keeping the Harvest",
      icon: Heart,
      color: "from-teal-500 to-teal-600",
      keyPoints: [
        "24-hour new convert follow-up",
        "4-stage discipleship pathway",
        "Leadership development",
        "House fellowship integration",
        "Retention strategies"
      ]
    },
    {
      id: 9,
      title: "Success Metrics",
      subtitle: "Measuring Impact",
      icon: TrendingUp,
      color: "from-yellow-500 to-yellow-600",
      keyPoints: [
        "Night of Glory milestones",
        "Year-by-year targets for 100M",
        "Tracking and measurement systems",
        "Weekly reporting templates",
        "Accountability structures"
      ]
    },
    {
      id: 10,
      title: "Call to Action",
      subtitle: "Execute Now!",
      icon: Zap,
      color: "from-emerald-500 to-emerald-600",
      keyPoints: [
        "Weekly breakdown starting Oct 21",
        "Daily action steps",
        "Immediate implementation guide",
        "Emergency contact templates",
        "Faith declarations"
      ]
    }
  ]

  return (
    <section id="master-strategy" className="section-padding bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-dominion text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold text-lg">STRATEGIC BLUEPRINT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dominion-blue mb-4">
            Master Strategy Navigator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete 10-part strategic playbook for kingdom expansion
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">10</div>
            <div className="text-sm text-gray-600">Strategic Parts</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">100M</div>
            <div className="text-sm text-gray-600">Souls Target</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">5</div>
            <div className="text-sm text-gray-600">Year Timeline</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">41</div>
            <div className="text-sm text-gray-600">Days to Glory</div>
          </div>
        </div>

        {/* Strategy Parts Grid */}
        <div className="space-y-4">
          {strategyParts.map((part) => {
            const Icon = part.icon
            const isExpanded = expandedPart === part.id

            return (
              <div
                key={part.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpandedPart(isExpanded ? null : part.id)}
                  className="w-full p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${part.color} flex items-center justify-center text-white shadow-lg`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <div className="text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-sm font-bold text-gray-400">PART {part.id}</span>
                          <h3 className="font-bold text-xl text-dominion-blue">
                            {part.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600">{part.subtitle}</p>
                      </div>
                    </div>

                    {/* Expand Icon */}
                    <div className="flex items-center gap-4">
                      {part.downloadLink && (
                        <a
                          href={part.downloadLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold"
                        >
                          <Download className="w-4 h-4" />
                          <span className="hidden md:inline">Download</span>
                        </a>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                    <h4 className="font-bold text-lg mb-4 text-dominion-blue">Key Components:</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {part.keyPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${part.color} flex items-center justify-center text-white text-xs font-bold`}>
                            {idx + 1}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Download All Section */}
        <div className="mt-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Complete Strategy Package</h3>
              <p className="text-blue-100">
                Download all documents, spreadsheets, and action plans in one package
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1FJkbfQmzWChoKbr8SsVy8FbvzGHnINOU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Download className="w-5 h-5" />
                Master Strategy
              </a>
              <a
                href="https://docs.google.com/spreadsheets/d/1JV7Das3kANVnytxt4zR4EdUAbHZ8F8KQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-colors shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Campaign Tracker
              </a>
            </div>
          </div>
        </div>

        {/* Scripture Foundation */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea."
          </p>
          <p className="text-sm text-gray-500 mt-1">- Habakkuk 2:14</p>
        </div>
      </div>
    </section>
  )
}