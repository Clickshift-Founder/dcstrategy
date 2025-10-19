'use client'

import { useState } from 'react'
import { TrendingUp, Target, Users, MapPin, Award, Calendar } from 'lucide-react'

interface ProgressMetric {
  id: string
  label: string
  current: number
  target: number
  unit: string
  color: string
  icon: any
}

export default function CampaignProgressCharts() {
  const [selectedView, setSelectedView] = useState<'night-of-glory' | '100m-souls'>('night-of-glory')

  const nightOfGloryMetrics: ProgressMetric[] = [
    {
      id: 'attendance',
      label: 'Attendance Progress',
      current: 8500,
      target: 70000,
      unit: '',
      color: 'blue',
      icon: Users
    },
    {
      id: 'salvations',
      label: 'Expected Salvations',
      current: 0,
      target: 10000,
      unit: '+',
      color: 'orange',
      icon: Target
    },
    {
      id: 'flyers',
      label: 'Flyers Distributed',
      current: 12500,
      target: 50000,
      unit: '',
      color: 'green',
      icon: Award
    },
    {
      id: 'buses',
      label: 'Buses Secured',
      current: 87,
      target: 200,
      unit: '',
      color: 'purple',
      icon: MapPin
    },
    {
      id: 'volunteers',
      label: 'Volunteers Active',
      current: 234,
      target: 500,
      unit: '+',
      color: 'indigo',
      icon: Users
    },
    {
      id: 'budget',
      label: 'Budget Raised (₦M)',
      current: 23,
      target: 80,
      unit: 'M',
      color: 'yellow',
      icon: TrendingUp
    }
  ]

  const hundredMMetrics = [
    { year: 2026, label: 'Year 1', target: 4000000, current: 0, region: 'Abuja Saturation' },
    { year: 2027, label: 'Year 2', target: 10000000, current: 0, region: 'FCT + Neighbors' },
    { year: 2028, label: 'Year 3', target: 25000000, current: 0, region: 'Northern Nigeria' },
    { year: 2029, label: 'Year 4', target: 35000000, current: 0, region: 'Nationwide' },
    { year: 2030, label: 'Year 5', target: 26000000, current: 0, region: 'Africa & Diaspora' }
  ]

  const getColorClasses = (color: string) => {
    const colors: any = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600', ring: 'ring-blue-500' },
      green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600', ring: 'ring-green-500' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600', ring: 'ring-orange-500' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600', ring: 'ring-purple-500' },
      yellow: { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-600', ring: 'ring-yellow-500' },
      indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-100', text: 'text-indigo-600', ring: 'ring-indigo-500' }
    }
    return colors[color] || colors.blue
  }

  const calculatePercentage = (current: number, target: number) => {
    return Math.min(100, (current / target) * 100)
  }

  return (
    <section id="progress-charts" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-dominion text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <TrendingUp className="w-5 h-5" />
            <span className="font-bold text-lg">PROGRESS TRACKING</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dominion-blue mb-4">
            Campaign Progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time visualization of our journey to 100 million souls
          </p>
        </div>

        {/* View Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedView('night-of-glory')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              selectedView === 'night-of-glory'
                ? 'bg-gradient-dominion text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg'
            }`}
          >
            <Calendar className="w-5 h-5 inline mr-2" />
            Night of Glory
          </button>
          <button
            onClick={() => setSelectedView('100m-souls')}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              selectedView === '100m-souls'
                ? 'bg-gradient-dominion text-white shadow-xl scale-105'
                : 'bg-white text-gray-700 hover:shadow-lg'
            }`}
          >
            <Target className="w-5 h-5 inline mr-2" />
            100M Souls
          </button>
        </div>

        {/* Night of Glory Progress */}
        {selectedView === 'night-of-glory' && (
          <div className="space-y-8 animate-fade-in">
            {/* Progress Bars */}
            <div className="grid md:grid-cols-2 gap-6">
              {nightOfGloryMetrics.map((metric) => {
                const Icon = metric.icon
                const colors = getColorClasses(metric.color)
                const percentage = calculatePercentage(metric.current, metric.target)

                return (
                  <div key={metric.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`${colors.light} p-3 rounded-xl`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900">{metric.label}</h3>
                      </div>
                      <div className={`px-3 py-1 ${colors.light} ${colors.text} rounded-full text-sm font-bold`}>
                        {percentage.toFixed(0)}%
                      </div>
                    </div>

                    {/* Numbers */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className={`text-3xl font-bold ${colors.text}`}>
                          {metric.current.toLocaleString()}{metric.unit}
                        </span>
                        <span className="text-sm text-gray-500">
                          / {metric.target.toLocaleString()}{metric.unit}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${percentage}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse-slow" />
                      </div>
                    </div>

                    {/* Remaining */}
                    <div className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold">
                        {(metric.target - metric.current).toLocaleString()}{metric.unit}
                      </span>
                      {' '}remaining to reach target
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Overall Progress Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">
                    {Math.round(nightOfGloryMetrics.reduce((sum, m) => sum + calculatePercentage(m.current, m.target), 0) / nightOfGloryMetrics.length)}%
                  </div>
                  <div className="text-blue-100">Overall Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">41</div>
                  <div className="text-blue-100">Days Remaining</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">NOV 28</div>
                  <div className="text-blue-100">Event Date</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 100M Souls Timeline */}
        {selectedView === '100m-souls' && (
          <div className="space-y-8 animate-fade-in">
            {/* Timeline Visualization */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 transform md:-translate-x-1/2" />

              {/* Year Cards */}
              <div className="space-y-12">
                {hundredMMetrics.map((yearData, idx) => {
                  const percentage = calculatePercentage(yearData.current, yearData.target)
                  const isLeft = idx % 2 === 0

                  return (
                    <div
                      key={yearData.year}
                      className={`relative flex items-center ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center font-bold text-blue-600 shadow-lg transform -translate-x-1/2 md:translate-x-0">
                        {idx + 1}
                      </div>

                      {/* Content Card */}
                      <div className={`ml-20 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                          {/* Year Header */}
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-bold text-2xl text-dominion-blue">{yearData.year}</h3>
                              <p className="text-sm text-gray-600">{yearData.label} • {yearData.region}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gradient">
                                {(yearData.target / 1000000).toFixed(1)}M
                              </div>
                              <div className="text-xs text-gray-500">Target</div>
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                            <div
                              className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                              style={{ width: `${percentage}%` }}
                            />
                          </div>

                          {/* Stats */}
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              <span className="font-semibold text-green-600">
                                {yearData.current.toLocaleString()}
                              </span>
                              {' '}souls won
                            </span>
                            <span className="text-gray-600">{percentage.toFixed(1)}% complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Cumulative Progress */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Cumulative Journey to 100 Million</h3>
              <div className="grid grid-cols-5 gap-4">
                {hundredMMetrics.map((year, idx) => {
                  const cumulative = hundredMMetrics.slice(0, idx + 1).reduce((sum, y) => sum + y.target, 0)
                  return (
                    <div key={year.year} className="text-center">
                      <div className="text-3xl font-bold mb-1">{(cumulative / 1000000).toFixed(0)}M</div>
                      <div className="text-sm text-green-100">by {year.year}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* 100M Achievement Badge */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-3xl p-12 shadow-2xl text-center">
              <div className="mb-4">
                <Target className="w-20 h-20 mx-auto" />
              </div>
              <div className="text-6xl font-bold mb-2">100,000,000</div>
              <div className="text-2xl font-semibold mb-4">SOULS FOR JESUS</div>
              <div className="text-lg text-yellow-100">By 2030 • Divine Mandate Complete</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}