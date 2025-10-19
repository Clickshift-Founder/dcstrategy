'use client'

import { useState } from 'react'
import { TrendingUp, Users, Calendar, Target, CheckCircle, MapPin, Award, Flame } from 'lucide-react'
import CountUp from 'react-countup'

interface MetricCard {
  id: string
  label: string
  current: number
  target: number
  unit: string
  icon: any
  color: string
  bgColor: string
  trend?: number
}

export default function LiveMetricsDashboard() {
  const [metrics] = useState<MetricCard[]>([
    {
      id: 'days-left',
      label: 'Days Until Glory',
      current: 41,
      target: 0,
      unit: '',
      icon: Calendar,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      trend: -1
    },
    {
      id: 'attendance-target',
      label: 'Attendance Target',
      current: 70000,
      target: 70000,
      unit: '',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'salvation-target',
      label: 'Salvations Expected',
      current: 10000,
      target: 10000,
      unit: '+',
      icon: Flame,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'flyers-distributed',
      label: 'Flyers Distributed',
      current: 12500,
      target: 50000,
      unit: '',
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      trend: 25
    },
    {
      id: 'buses-secured',
      label: 'Buses Secured',
      current: 87,
      target: 200,
      unit: '',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      trend: 43.5
    },
    {
      id: 'volunteers',
      label: 'Volunteers Recruited',
      current: 234,
      target: 500,
      unit: '+',
      icon: Award,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      trend: 46.8
    },
    {
      id: 'streets-covered',
      label: 'Streets Evangelized',
      current: 482,
      target: 6900,
      unit: '',
      icon: MapPin,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      trend: 7
    },
    {
      id: '100m-year1',
      label: '100M Souls - Year 1 Target',
      current: 4000000,
      target: 4000000,
      unit: 'M',
      icon: TrendingUp,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    }
  ])

  const calculatePercentage = (current: number, target: number) => {
    if (target === 0) return 100
    return Math.min(100, (current / target) * 100)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-dominion text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <Flame className="w-5 h-5" />
            <span className="font-bold text-lg">LIVE COMMAND CENTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dominion-blue mb-4">
            Campaign Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time metrics tracking our divine mandate
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            const percentage = calculatePercentage(metric.current, metric.target)
            
            return (
              <div
                key={metric.id}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Progress Bar Background */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200"
                >
                  <div 
                    className={`h-full transition-all duration-1000 ease-out ${metric.bgColor.replace('bg-', 'bg-gradient-to-r from-')}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon and Trend */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${metric.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    {metric.trend !== undefined && (
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                        metric.trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        <TrendingUp className="w-3 h-3" />
                        {metric.trend.toFixed(1)}%
                      </div>
                    )}
                  </div>

                  {/* Number */}
                  <div className="mb-2">
                    <div className={`text-4xl font-bold ${metric.color} mb-1`}>
                      <CountUp 
                        end={metric.current} 
                        duration={2.5}
                        separator=","
                        suffix={metric.unit}
                      />
                    </div>
                    {metric.target > 0 && metric.target !== metric.current && (
                      <div className="text-sm text-gray-500">
                        of <CountUp end={metric.target} duration={2} separator="," />{metric.unit}
                      </div>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-sm font-semibold text-gray-700 leading-tight">
                    {metric.label}
                  </p>

                  {/* Progress Percentage */}
                  {metric.trend !== undefined && (
                    <div className="mt-3 text-xs text-gray-500">
                      {percentage.toFixed(1)}% complete
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Stats Summary */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">41</div>
                <div className="text-sm text-blue-100">Days to Transform Abuja</div>
              </div>
            </div>
            <div className="text-sm text-blue-100">
              November 28, 2025 • MKO Abiola Stadium
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">100M</div>
                <div className="text-sm text-orange-100">Souls for Jesus</div>
              </div>
            </div>
            <div className="text-sm text-orange-100">
              2026-2030 • Divine Mandate
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-bold">6,900</div>
                <div className="text-sm text-green-100">Streets to Reach</div>
              </div>
            </div>
            <div className="text-sm text-green-100">
              6 Councils • 70+ Districts
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}