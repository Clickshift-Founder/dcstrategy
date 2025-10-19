'use client'

import { useState } from 'react'
import { MapPin, Users, Building, Target, ChevronRight, TrendingUp } from 'lucide-react'
import { areaCouncils } from '../data/campaignData'
import { amacPhases, suburbanDistricts } from '../data/phasesData'

type ViewMode = 'overview' | 'amac' | 'councils'

export default function InteractiveAbujaMap() {
  const [viewMode, setViewMode] = useState<ViewMode>('overview')
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)
  const [selectedCouncil, setSelectedCouncil] = useState<number | null>(null)

  const getPriorityColor = (priority: string) => {
    if (priority.toLowerCase().includes('immediate') || priority.toLowerCase().includes('highest')) {
      return 'from-red-500 to-red-600'
    }
    if (priority.toLowerCase().includes('high')) {
      return 'from-orange-500 to-orange-600'
    }
    if (priority.toLowerCase().includes('medium')) {
      return 'from-yellow-500 to-yellow-600'
    }
    return 'from-green-500 to-green-600'
  }

  const getPhaseColor = (phaseId: number) => {
    const colors = [
      'from-blue-500 to-blue-600',      // Phase 1
      'from-green-500 to-green-600',    // Phase 2
      'from-purple-500 to-purple-600',  // Phase 3
      'from-orange-500 to-orange-600',  // Phase 4
      'from-red-500 to-red-600',        // Phase 5
    ]
    return colors[phaseId - 1] || colors[0]
  }

  return (
    <section id="interactive-map" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-dominion text-white px-6 py-3 rounded-full mb-4 shadow-lg">
            <MapPin className="w-5 h-5" />
            <span className="font-bold text-lg">STRATEGIC MAP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-dominion-blue mb-4">
            Interactive Abuja Evangelism Map
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click to explore our systematic approach to reaching every soul in Abuja
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => { setViewMode('overview'); setSelectedPhase(null); setSelectedCouncil(null); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === 'overview'
                ? 'bg-gradient-dominion text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => { setViewMode('amac'); setSelectedCouncil(null); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === 'amac'
                ? 'bg-gradient-dominion text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            AMAC Phases
          </button>
          <button
            onClick={() => { setViewMode('councils'); setSelectedPhase(null); }}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === 'councils'
                ? 'bg-gradient-dominion text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:shadow-md'
            }`}
          >
            All Councils
          </button>
        </div>

        {/* OVERVIEW MODE */}
        {viewMode === 'overview' && (
          <div className="space-y-8">
            {/* FCT Summary */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">4.2M</div>
                  <div className="text-blue-100">Total Population</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6</div>
                  <div className="text-blue-100">Area Councils</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">70+</div>
                  <div className="text-blue-100">Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">6,900</div>
                  <div className="text-blue-100">Streets to Reach</div>
                </div>
              </div>
            </div>

            {/* Visual Hierarchy */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-8 text-dominion-blue">Abuja Structure</h3>
              
              {/* FCT Box */}
              <div className="border-4 border-blue-500 rounded-2xl p-6 mb-6">
                <div className="text-center font-bold text-xl text-blue-600 mb-2">
                  ABUJA FEDERAL CAPITAL TERRITORY
                </div>
                <div className="text-center text-gray-600">Population: 4.2 Million (2025)</div>
              </div>

              {/* Two Main Branches */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: 6 Area Councils */}
                <div className="border-2 border-green-400 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-green-600 mb-4 text-center">
                    6 AREA COUNCILS
                  </h4>
                  <div className="space-y-2">
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                      <div className="font-semibold">1. AMAC (1.8M)</div>
                      <div className="text-xs text-gray-600">Political & Economic Center</div>
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
                      <div className="font-semibold">2. Gwagwalada (800K)</div>
                      <div className="text-xs text-gray-600">University Hub</div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                      <div className="font-semibold">3. Kuje (450K)</div>
                      <div className="text-xs text-gray-600">Agricultural</div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                      <div className="font-semibold">4. Bwari (600K)</div>
                      <div className="text-xs text-gray-600">Educational</div>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
                      <div className="font-semibold">5. Kwali (350K)</div>
                      <div className="text-xs text-gray-600">Cultural Heritage</div>
                    </div>
                    <div className="bg-gray-50 border-l-4 border-gray-500 p-3 rounded">
                      <div className="font-semibold">6. Abaji (200K)</div>
                      <div className="text-xs text-gray-600">Rural Pioneer</div>
                    </div>
                  </div>
                </div>

                {/* Right: AMAC Breakdown */}
                <div className="border-2 border-purple-400 rounded-2xl p-6">
                  <h4 className="font-bold text-lg text-purple-600 mb-4 text-center">
                    AMAC BREAKDOWN
                  </h4>
                  <div className="text-center text-sm text-gray-600 mb-4">5 Phases + Suburban</div>
                  
                  <div className="space-y-2">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="font-semibold">Phase 1</span>
                        <span className="text-sm text-gray-600">600K • 9 Districts</span>
                      </div>
                      <div className="text-xs text-gray-600">Prestige Core • Fully Dev.</div>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="font-semibold">Phase 2</span>
                        <span className="text-sm text-gray-600">550K • 15 Districts</span>
                      </div>
                      <div className="text-xs text-gray-600">Vibrant Expansion • Well Dev.</div>
                    </div>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="font-semibold">Phase 3</span>
                        <span className="text-sm text-gray-600">400K • 17 Districts</span>
                      </div>
                      <div className="text-xs text-gray-600">Rising Frontier • Developing</div>
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="font-semibold">Phase 4-5</span>
                        <span className="text-sm text-gray-600">250K • 22 Districts</span>
                      </div>
                      <div className="text-xs text-gray-600">Future Zones • Under Dev.</div>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                      <div className="flex justify-between">
                        <span className="font-semibold">Suburban</span>
                        <span className="text-sm text-gray-600">700K • 7 Areas</span>
                      </div>
                      <div className="text-xs text-gray-600">Hidden Harvest • High Density</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AMAC PHASES MODE */}
        {viewMode === 'amac' && (
          <div className="space-y-6">
            {/* Phase Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amacPhases.map((phase) => (
                <button
                  key={phase.id}
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-left ${
                    selectedPhase === phase.id ? 'ring-4 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {/* Header */}
                  <div className={`flex items-center justify-between mb-4 pb-4 border-b-2`}>
                    <div>
                      <h3 className="font-bold text-2xl text-dominion-blue">{phase.name}</h3>
                      <p className="text-sm text-gray-600">{phase.subtitle}</p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${getPhaseColor(phase.id)} text-white`}>
                      <Building className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gradient">{(phase.population / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-gray-600">Population</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gradient">{phase.estimatedStreets}</div>
                      <div className="text-xs text-gray-600">Streets</div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`px-2 py-1 rounded text-xs font-semibold bg-gradient-to-r ${getPriorityColor(phase.priority)} text-white`}>
                        {phase.priority}
                      </div>
                    </div>
                    <p className="text-gray-700">{phase.targetDemographic}</p>
                  </div>

                  {/* Districts Count */}
                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {Array.isArray(phase.districts) ? phase.districts.length : 0} Districts
                    </span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      selectedPhase === phase.id ? 'rotate-90' : ''
                    }`} />
                  </div>
                </button>
              ))}

              {/* Suburban Card */}
              <button
                onClick={() => setSelectedPhase(selectedPhase === 99 ? null : 99)}
                className={`bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-left ${
                  selectedPhase === 99 ? 'ring-4 ring-yellow-400 scale-105' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-2xl">SUBURBAN</h3>
                    <p className="text-sm text-orange-100">The Hidden Harvest</p>
                  </div>
                  <Users className="w-8 h-8" />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-2xl font-bold">700K</div>
                    <div className="text-xs text-orange-100">Population</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1,200</div>
                    <div className="text-xs text-orange-100">Streets</div>
                  </div>
                </div>

                <p className="text-sm text-orange-50">
                  High-density, working-class majority - Kubwa, Nyanya, Karu
                </p>
              </button>
            </div>

            {/* Selected Phase Details */}
            {selectedPhase && selectedPhase !== 99 && (
              <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in">
                {(() => {
                  const phase = amacPhases.find(p => p.id === selectedPhase)
                  if (!phase) return null

                  return (
                    <div>
                      <h3 className="text-3xl font-bold text-dominion-blue mb-6">
                        {phase.name}: {phase.subtitle}
                      </h3>

                      {/* Strategy */}
                      <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                        <h4 className="font-bold text-lg mb-2 text-blue-900">Strategy:</h4>
                        <p className="text-gray-700">{phase.approach}</p>
                      </div>

                      {/* Districts */}
                      <div>
                        <h4 className="font-bold text-lg mb-4">Districts ({Array.isArray(phase.districts) ? phase.districts.length : 0}):</h4>
                        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {Array.isArray(phase.districts) && phase.districts.map((district: any, idx: number) => (
                            <div
                              key={idx}
                              className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                            >
                              <div className="font-semibold text-sm text-dominion-blue">
                                {typeof district === 'string' ? district : district.name}
                              </div>
                              {typeof district === 'object' && district.population && (
                                <div className="text-xs text-gray-600 mt-1">
                                  {(district.population / 1000).toFixed(0)}K people
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* Suburban Details */}
            {selectedPhase === 99 && suburbanDistricts && (
              <div className="bg-white rounded-2xl p-8 shadow-2xl animate-fade-in">
                <h3 className="text-3xl font-bold text-dominion-blue mb-6">
                  Suburban Districts: The Hidden Harvest
                </h3>

                <div className="mb-6 p-4 bg-red-50 rounded-xl">
                  <h4 className="font-bold text-lg mb-2 text-red-900">Strategy:</h4>
                  <p className="text-gray-700">{suburbanDistricts.approach}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {suburbanDistricts.areas && suburbanDistricts.areas.map((area: any, idx: number) => (
                    <div key={idx} className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-bold text-lg text-red-600">{area.name}</h5>
                        <div className="text-sm font-semibold text-gray-600">
                          {area.population ? `${(area.population / 1000).toFixed(0)}K` : ''}
                        </div>
                      </div>
                      {area.status && (
                        <div className="text-xs font-semibold text-red-600 mb-2">{area.status}</div>
                      )}
                      {area.strategy && (
                        <p className="text-sm text-gray-700">{area.strategy}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ALL COUNCILS MODE */}
        {viewMode === 'councils' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaCouncils.map((council) => (
              <button
                key={council.id}
                onClick={() => setSelectedCouncil(selectedCouncil === council.id ? null : council.id)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all text-left ${
                  selectedCouncil === council.id ? 'ring-4 ring-blue-500 scale-105' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-dominion-blue">{council.shortName}</h3>
                    <p className="text-xs text-gray-600">{council.character}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getPriorityColor(council.priority)} text-white`}>
                    {council.priority}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b">
                  <div>
                    <div className="text-2xl font-bold text-gradient">
                      {(council.population / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-xs text-gray-600">Population</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gradient">
                      {council.estimatedStreets.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600">Streets</div>
                  </div>
                </div>

                {/* Approach */}
                <p className="text-sm text-gray-700 mb-4">{council.approach}</p>

                {/* More Info Indicator */}
                <div className="flex items-center justify-end text-sm text-blue-600">
                  <span>View Details</span>
                  <ChevronRight className={`w-4 h-4 ml-1 transition-transform ${
                    selectedCouncil === council.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}