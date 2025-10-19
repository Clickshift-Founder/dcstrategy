'use client'

import { useState, useEffect } from 'react'
import { 
  Menu, X, Calendar, Users, Target, MapPin, Church, Heart,
  Download, ArrowRight, Phone, Mail, Globe, FileText, 
  Map, BookOpen, CheckCircle, Clock, Building, Bus
} from 'lucide-react'
import { campaignInfo, areaCouncils, statistics, busPickupPoints, transportationStrategy } from '../data/campaignData'
import { amacPhases, suburbanDistricts } from '../data/phasesData'
import { downloadableResources, prayerPoints, wisdomFromStrategy, scriptureFoundations } from '../data/resourcesData'
import LiveMetricsDashboard from '../components/LiveMetricsDashboard'
import FortyOneDayTracker from '../components/FortyOneDayTracker'
import InteractiveAbujaMap from '../components/InteractiveAbujaMap'
import MasterStrategyNavigator from '../components/MasterStrategyNavigator'
import CampaignProgressCharts from '../components/CampaignProgressCharts'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [daysLeft, setDaysLeft] = useState(41)

  useEffect(() => {
    const eventDate = new Date('2025-11-28')
    const today = new Date()
    const diffTime = Math.abs(eventDate.getTime() - today.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    setDaysLeft(diffDays)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-dominion rounded-lg flex items-center justify-center">
                <Church className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-display font-bold text-lg text-dominion-blue">Dominion City</h1>
                <p className="text-xs text-gray-600">100 Million Souls</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-dominion-blue transition">Home</button>
              <button onClick={() => scrollToSection('night-of-glory')} className="text-gray-700 hover:text-dominion-blue transition">Night of Glory</button>
              <button onClick={() => scrollToSection('100m-souls')} className="text-gray-700 hover:text-dominion-blue transition">100M Souls</button>
              <button onClick={() => scrollToSection('abuja-strategy')} className="text-gray-700 hover:text-dominion-blue transition">Abuja Strategy</button>
              <button onClick={() => scrollToSection('resources')} className="text-gray-700 hover:text-dominion-blue transition">Resources</button>
              <a href={campaignInfo.church.website} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2">
                Visit Church <Globe className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col p-4 gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700">Home</button>
              <button onClick={() => scrollToSection('night-of-glory')} className="text-left py-2 text-gray-700">Night of Glory</button>
              <button onClick={() => scrollToSection('100m-souls')} className="text-left py-2 text-gray-700">100M Souls</button>
              <button onClick={() => scrollToSection('abuja-strategy')} className="text-left py-2 text-gray-700">Abuja Strategy</button>
              <button onClick={() => scrollToSection('resources')} className="text-left py-2 text-gray-700">Resources</button>
              <a href={campaignInfo.church.website} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                Visit Church <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 section-padding hero-pattern">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-dominion-blue px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Calendar className="w-4 h-4" />
              <span className="font-semibold">November 28, 2025 • 5:00 PM • MKO Abiola Stadium</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold text-dominion-blue mb-6 animate-slide-up">
              ABUJA NIGHT OF GLORY
            </h1>

            <div className="bg-gradient-dominion text-white rounded-2xl p-8 mb-8 shadow-2xl animate-scale-in">
              <div className="text-6xl md:text-8xl font-bold mb-2">{daysLeft}</div>
              <div className="text-2xl">DAYS TO GO!</div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Join us for a historic gathering of <span className="font-bold text-dominion-blue">70,000+ souls</span> as we launch 
              the <span className="font-bold text-gradient">100 Million Souls Campaign</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('night-of-glory')} className="btn-primary text-lg">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollToSection('resources')} className="btn-secondary text-lg">
                Download Strategy <Download className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* 🔥 NEW: Live Metrics Dashboard */}
      <LiveMetricsDashboard />

           {/* 🔥 NEW: 41-Day Tracker - MOST IMPORTANT! */}
      <FortyOneDayTracker />

      {/* Night of Glory Section */}
      <section id="night-of-glory" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">Night of Glory 2025</h2>
          <div className="section-divider"></div>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A divine gathering at MKO Abiola National Stadium • Constitution Avenue, Abuja FCT
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-dominion-gold">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Calendar className="w-7 h-7 text-dominion-gold" />
                Event Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">Friday, November 28, 2025</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Time</span>
                  <span className="font-semibold">5:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Venue</span>
                  <span className="font-semibold text-right">MKO Abiola Stadium</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Expected</span>
                  <span className="font-semibold">70,000+ Attendees</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Salvations Target</span>
                  <span className="font-semibold text-green-600">10,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-dominion text-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-7 h-7" />
                Ministers Lineup
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {campaignInfo.nightOfGlory.ministersLineup.map((minister, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-sm font-medium">
                    {minister}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 🔥 NEW: Campaign Progress Charts */}
      <CampaignProgressCharts />

          {/* Transportation */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Bus className="w-7 h-7 text-dominion-blue" />
              Free Transportation - {transportationStrategy.totalBuses}+ Buses
            </h3>
            <p className="text-gray-700 mb-6">
              We've secured {transportationStrategy.totalBuses}+ buses with {busPickupPoints.length} pickup points across all 6 area councils. 
              Transportation starts at {transportationStrategy.startTime}.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {busPickupPoints.slice(0, 3).map((category, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-dominion-blue mb-3">{category.category}</h4>
                  <ul className="space-y-2 text-sm">
                    {category.points.slice(0, 4).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 100M Souls Section */}
      <section id="100m-souls" className="section-padding bg-gradient-dominion text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">100 Million Souls Vision</h2>
          <div className="w-24 h-1 bg-dominion-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-center text-xl max-w-3xl mx-auto mb-12 text-blue-100">
            A 5-year strategic mandate to win 100 million souls for Jesus Christ across Nigeria, Africa, and the world
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {campaignInfo.hundredMillion.years.map((year, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition">
                <div className="text-4xl font-bold mb-2">{year.year}</div>
                <div className="text-sm font-semibold text-dominion-gold mb-3">{year.phase}</div>
                <div className="text-2xl font-bold mb-2">{(year.target / 1000000).toFixed(0)}M</div>
                <div className="text-xs mb-3">{year.focus}</div>
                <div className="text-xs text-blue-200">Cumulative: {(year.cumulative / 1000000).toFixed(0)}M</div>
              </div>
            ))}
          </div>

          {/* GO's Multiplication Model */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-dominion-blue">
              Pastor David Ogbueli's Multiplication Strategy
            </h3>
            <p className="text-gray-700 mb-6">
              {campaignInfo.hundredMillion.goMultiplicationModel.description}
            </p>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Level 1: Core Leaders</div>
                <p>100 people × 12,000 souls each = <span className="text-dominion-blue font-bold">1.2M souls</span></p>
                <p className="text-sm text-gray-600 mt-1">With 20% buffer: <span className="font-semibold">1.44M souls</span></p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Level 2: Extended Network</div>
                <p>Each of 100 leads 10,000 people × 120 souls each = <span className="text-green-600 font-bold">1.2M souls</span></p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="font-bold text-lg mb-2">Level 3: Grassroots</div>
                <p>Each of 10,000 leads 10 people × 12 souls each = <span className="text-yellow-600 font-bold">1.2M souls</span></p>
              </div>
            </div>
            <p className="mt-6 text-center font-semibold text-lg">
              Principle: <span className="text-gradient">Multiplication through discipleship and delegation</span>
            </p>
          </div>
        </div>
      </section>

       {/* 🔥 NEW: Interactive Abuja Map */}
      <InteractiveAbujaMap />

      {/* Abuja Strategy Section */}
      <section id="abuja-strategy" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">Abuja Evangelism Strategy</h2>
          <div className="section-divider"></div>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Systematic, phase-by-phase approach to reach all 6 area councils, 70+ districts, and 6,000+ streets
          </p>

          {/* Area Councils */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-dominion-blue" />
              6 Area Councils of Abuja FCT
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaCouncils.map((council) => (
                <div key={council.id} className={`phase-card phase-card-${council.id} card-hover`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-lg">{council.shortName}</h4>
                    <span className={`badge badge-priority-${council.priorityLevel === 'immediate' || council.priorityLevel === 'highest' ? 'high' : council.priorityLevel === 'high' || council.priorityLevel === 'medium-high' ? 'medium' : 'low'}`}>
                      {council.priority}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span className="font-semibold">Population:</span>
                      <span>{(council.population / 1000000).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Streets:</span>
                      <span>{council.estimatedStreets.toLocaleString()}</span>
                    </div>
                    <p className="pt-2 text-gray-600 italic">{council.character}</p>
                    <div className="pt-2 border-t">
                      <span className="font-semibold text-dominion-blue">Approach:</span>
                      <p className="text-xs mt-1">{council.approach}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AMAC Phases */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Building className="w-7 h-7 text-dominion-blue" />
              AMAC: 5 Development Phases
            </h3>
            <div className="space-y-6">
              {amacPhases.map((phase) => (
                <div key={phase.id} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-dominion-blue">{phase.name}: {phase.subtitle}</h4>
                      <p className="text-gray-600">{phase.developmentStatus} • {phase.targetDemographic}</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                      <span className="text-3xl font-bold text-gradient">{(phase.population / 1000).toFixed(0)}K</span>
                      <span className="text-sm text-gray-600">{phase.estimatedStreets} streets</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-semibold mb-3">Districts ({phase.districts.length}):</h5>
                    <div className="flex flex-wrap gap-2">
                      {phase.districts.map((district, idx) => (
                        <span key={idx} className="district-tag">
                          {typeof district === 'string' ? district : district.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-dominion-blue">Strategy:</h5>
                    <p className="text-sm text-gray-700">{phase.approach}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* 🔥 NEW: Master Strategy Navigator */}
      <MasterStrategyNavigator />

      {/* Resources Section */}
      <section id="resources" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">Strategic Resources</h2>
          <div className="section-divider"></div>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Download comprehensive strategy documents, tracking tools, and action plans
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {downloadableResources.map((resource) => (
              <div key={resource.id} className="download-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-${resource.color}-100 flex items-center justify-center group-hover:scale-110 transition`}>
                    <FileText className={`w-6 h-6 text-${resource.color}-600`} />
                  </div>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{resource.format}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-gray-500">{resource.size}</span>
                  <a
                      href={resource.downloadLink} // uses the link from your data file
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dominion-blue font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Download <Download className="w-4 h-4" />
                    </a>

                </div>
              </div>
            ))}
          </div>

          {/* Prayer Points */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-dominion-blue">Prayer Points & Declarations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {prayerPoints.slice(0, 2).map((category, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-bold mb-4 text-dominion-gold">{category.category}</h4>
                  <div className="space-y-4">
                    {category.points.map((point, i) => (
                      <div key={i} className="prayer-card">
                        <p className="font-semibold mb-2 text-dominion-blue">{point.declaration}</p>
                       {"scripture" in point && "reference" in point && (
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{point.scripture}:</span> {point.reference}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Daily Confessions */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold mb-4 text-dominion-blue">Daily Confessions</h4>
              <div className="space-y-3">
                {prayerPoints[2].points.map((confession, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-800 font-medium">{confession.declaration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wisdom Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8">Wisdom from the Strategy</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wisdomFromStrategy.slice(0, 6).map((wisdom, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-dominion-gold hover:shadow-2xl transition">
                  <h4 className="font-bold text-lg mb-3 text-dominion-blue">{wisdom.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{wisdom.insight}</p>
                  <p className="text-xs text-gray-500 italic border-t pt-3">{wisdom.principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dominion-blue text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-dominion-gold rounded-lg flex items-center justify-center">
                  <Church className="w-7 h-7 text-dominion-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">{campaignInfo.church.name}</h3>
                  <p className="text-blue-200 text-sm">{campaignInfo.church.tagline}</p>
                </div>
              </div>
              <p className="text-blue-200 text-sm mb-4">
                Led by {campaignInfo.church.generalOverseer}, Dominion City is committed to raising leaders that transform society.
              </p>
              <p className="text-blue-200 text-sm">
                <MapPin className="w-4 h-4 inline mr-2" />
                Headquarters: {campaignInfo.church.headquarters}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-blue-200 hover:text-white transition">Home</button>
                <button onClick={() => scrollToSection('night-of-glory')} className="block text-blue-200 hover:text-white transition">Night of Glory</button>
                <button onClick={() => scrollToSection('100m-souls')} className="block text-blue-200 hover:text-white transition">100 Million Souls</button>
                <button onClick={() => scrollToSection('abuja-strategy')} className="block text-blue-200 hover:text-white transition">Abuja Strategy</button>
                <button onClick={() => scrollToSection('resources')} className="block text-blue-200 hover:text-white transition">Resources</button>
                <a href={campaignInfo.church.website} target="_blank" rel="noopener noreferrer" className="block text-blue-200 hover:text-white transition">
                  Church Website
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <a href={campaignInfo.church.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-200 hover:text-white transition">
                  <Globe className="w-5 h-5" />
                  <span>{campaignInfo.church.website}</span>
                </a>
                <div className="flex items-center gap-3 text-blue-200">
                  <MapPin className="w-5 h-5" />
                  <span>Abuja, Nigeria</span>
                </div>
              </div>
              <div className="mt-6 bg-white/10 rounded-lg p-4">
                <p className="text-sm mb-2">For inquiries about Night of Glory:</p>
                <p className="text-dominion-gold font-semibold">Contact your local branch or church headquarters</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-sm">
                © 2025 Dominion City. All rights reserved.
              </p>
              <p className="text-sm text-blue-200 text-center">
                "For the earth will be filled with the knowledge of the glory of the LORD as the waters cover the sea." - Habakkuk 2:14
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-dominion-blue text-white rounded-full shadow-2xl hover:bg-dominion-lightblue transition flex items-center justify-center z-40 no-print"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}
