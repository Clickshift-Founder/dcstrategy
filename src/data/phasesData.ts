// AMAC Phases Detailed Breakdown

export const amacPhases = [
  {
    id: 1,
    name: "Phase 1",
    subtitle: "THE PRESTIGE CORE",
    population: 600000,
    estimatedStreets: 700,
    developmentStatus: "Fully Developed",
    priorityLevel: "IMMEDIATE",
    priority: "highest",
    targetDemographic: "Government officials, diplomats, business executives",
    approach: "Corporate/professional outreach, workplace evangelism",
    averagePeoplePerStreet: 850,
    districts: [
      { name: "Central Area (CBD)", population: 80000, character: "Government/Business hub", features: ["Federal Secretariats", "Three Arms Zone", "Ministries"] },
      { name: "Maitama", population: 70000, character: "Diplomatic/Elite", features: ["Embassies", "High Commissions", "Ministers' residences"] },
      { name: "Asokoro", population: 65000, character: "Government Officials", features: ["State Lodges", "Presidential Villa proximity"] },
      { name: "Wuse", population: 90000, character: "Commercial/Youth hub", features: ["Wuse Market", "Shopping centers", "Entertainment"] },
      { name: "Wuse II", population: 75000, character: "Premium Commercial", features: ["Upscale offices", "Hotels", "Fine dining"] },
      { name: "Garki", population: 85000, character: "Residential/Business", features: ["Civil servants", "Established families"] },
      { name: "Garki II", population: 60000, character: "Mixed Development", features: ["Residential estates", "Commercial areas"] },
      { name: "Guzape I", population: 40000, character: "Upper Middle Class", features: ["Luxury estates", "Private developments"] },
      { name: "Guzape II", population: 35000, character: "Developing Luxury", features: ["New estates", "Growing infrastructure"] }
    ],
    keyTargets: [
      "Federal Secretariats (5 locations)",
      "Wuse Market (50,000+ traders)",
      "CBN Headquarters",
      "NNPC Towers",
      "Diplomatic missions"
    ],
    strategy: {
      week1: "Central Area & Federal Secretariats",
      week2: "Wuse & Wuse II markets",
      week3: "Maitama & Asokoro estates",
      week4: "Garki & Guzape residential",
      ongoing: "Daily workplace evangelism"
    }
  },
  {
    id: 2,
    name: "Phase 2",
    subtitle: "THE VIBRANT EXPANSION",
    population: 550000,
    estimatedStreets: 900,
    developmentStatus: "Well Developed",
    priorityLevel: "HIGH",
    priority: "high",
    targetDemographic: "Young professionals, expatriates, traders",
    approach: "Community evangelism, marketplace ministry",
    averagePeoplePerStreet: 650,
    districts: [
      { name: "Jabi", population: 60000, character: "Modern/Youth-oriented", features: ["Jabi Lake Mall", "Expatriate community"] },
      { name: "Utako", population: 50000, character: "Commercial hub", features: ["Utako Market", "High foot traffic"] },
      { name: "Gudu", population: 35000, character: "Dense residential", features: ["Middle-class families", "Estate communities"] },
      { name: "Durumi", population: 40000, character: "Residential", features: ["Dense housing", "Family-oriented"] },
      { name: "Gaduwa", population: 38000, character: "Growing residential", features: ["New estates", "Young families"] },
      { name: "Wuye", population: 40000, character: "Mixed development", features: ["Shopping areas", "Residential estates"] },
      { name: "Mabushi", population: 45000, character: "Residential estates", features: ["Middle to upper class", "Good infrastructure"] },
      { name: "Kado", population: 32000, character: "Growing commercial", features: ["Business centers", "Markets"] },
      { name: "Katampe", population: 42000, character: "Expanding residential", features: ["New developments", "Estate housing"] },
      { name: "Kaura", population: 30000, character: "Residential communities", features: ["Established neighborhoods"] },
      { name: "Kukwaba", population: 28000, character: "Developing area", features: ["Growing infrastructure"] },
      { name: "Jahi", population: 48000, character: "Modern residential/commercial", features: ["Upscale estates", "Business centers"] },
      { name: "Dakibiyu", population: 25000, character: "Residential area", features: ["Family communities"] },
      { name: "Duboyi", population: 22000, character: "Mixed residential", features: ["Housing estates"] },
      { name: "Apo-Dutse", population: 25000, character: "Border community", features: ["Growing population"] }
    ],
    keyTargets: [
      "Jabi Lake Mall (weekend crowds)",
      "Utako Market (60,000+ daily visitors)",
      "Gudu District markets",
      "Wuye Shopping District",
      "Jahi Estate communities"
    ],
    strategy: {
      saturdays: "Market evangelism (Utako, Wuye, Kado)",
      weekends: "Jabi Lake and recreational areas",
      weekdays: "Estate-by-estate house visits",
      ongoing: "Youth rallies and community events"
    }
  },
  {
    id: 3,
    name: "Phase 3",
    subtitle: "THE RISING FRONTIER",
    population: 400000,
    estimatedStreets: 1100,
    developmentStatus: "Developing",
    priorityLevel: "MEDIUM-HIGH",
    priority: "medium-high",
    targetDemographic: "Middle-class families, young couples",
    approach: "Estate-by-estate, house fellowship model",
    averagePeoplePerStreet: 400,
    districts: [
      { name: "Gwarinpa", population: 150000, character: "LARGEST DISTRICT", features: ["Multiple estates", "Gwarinpa 1 & 2", "Massive reach potential"], special: true },
      { name: "Life Camp", population: 40000, character: "Established estates", features: ["Middle-class families", "Good infrastructure"] },
      { name: "Lokogoma", population: 35000, character: "Growing residential", features: ["New estates", "Young families"] },
      { name: "Karmo", population: 30000, character: "Mixed residential/commercial", features: ["Markets", "Residential areas"] },
      { name: "Kafe", population: 25000, character: "Developing area", features: ["Growing communities"] },
      { name: "Galadimawa", population: 28000, character: "Mixed residential", features: ["Housing estates"] },
      { name: "Nbora", population: 22000, character: "Growing community", features: ["New developments"] },
      { name: "Dakwo", population: 20000, character: "Residential development", features: ["Expanding area"] },
      { name: "Dape", population: 18000, character: "New residential", features: ["Fresh estates"] },
      { name: "Kabusa", population: 15000, character: "Expanding community", features: ["Growth area"] },
      { name: "Bunkoro", population: 12000, character: "Developing district", features: ["Infrastructure growing"] },
      { name: "Industrial Area", population: 8000, character: "Workers/businesses", features: ["Factories", "Warehouses"] },
      { name: "Wupa", population: 10000, character: "Growing residential", features: ["New estates"] },
      { name: "Wumba", population: 8000, character: "New development", features: ["Emerging area"] },
      { name: "Pyakasa", population: 7000, character: "Satellite community", features: ["Growing"] },
      { name: "Okanje", population: 6000, character: "Developing area", features: ["New settlements"] },
      { name: "Saraji", population: 6000, character: "New residential", features: ["Fresh development"] }
    ],
    keyTargets: [
      "Gwarinpa (MUST FOCUS - 150K people!)",
      "Life Camp estates",
      "Lokogoma residential areas",
      "Karmo market and estates"
    ],
    strategy: {
      gwarinpa: "Dedicate entire month, host mini-crusade, estate-by-estate",
      lifeCamp: "House fellowship establishment",
      lokogoma: "Family-oriented outreach",
      general: "Weekend house-to-house campaigns"
    },
    gwarinpaStrategy: {
      importance: "CRITICAL - Largest single district in Abuja",
      population: 150000,
      approach: "Intensive month-long campaign",
      activities: [
        "Estate-by-estate systematic coverage",
        "Central location mini-crusade",
        "Community center partnerships",
        "School gate evangelism",
        "Market day blitzes"
      ],
      goal: "Reach 100,000+ residents",
      timeline: "4 weeks intensive focus"
    }
  },
  {
    id: 4,
    name: "Phase 4",
    subtitle: "THE UNTAPPED HARVEST",
    population: 150000,
    estimatedStreets: 800,
    developmentStatus: "Under Development",
    priorityLevel: "MEDIUM",
    priority: "medium",
    targetDemographic: "Emerging communities, affordable housing residents",
    approach: "Pioneer church planting, community centers",
    averagePeoplePerStreet: 200,
    districts: [
      "Karsana North", "Karsana South", "Karsana East", "Karsana West",
      "Idu Industrial", "Kagini", "Gwagwa", "Sheretti", "Kaba", "Kodo",
      "Ketti", "Kpoto", "Mamusa", "Bude", "Burun", "Chafe",
      "Gidari Bahagwo", "Gwari", "Idogwari", "Jaite", "Parfun",
      "Sabo Gida", "Tasha", "Waru-Pozema"
    ],
    characteristics: {
      development: "Sparse infrastructure",
      housing: "Affordable, growing",
      opportunity: "High - pioneer territory",
      challenges: "Limited roads, basic amenities"
    },
    strategy: {
      approach: "Long-term investment",
      focus: "Establish house fellowships first",
      timeline: "6-12 months per district cluster",
      goal: "Plant 5-10 new churches by 2027"
    }
  },
  {
    id: 5,
    name: "Phase 5",
    subtitle: "THE GATEWAY",
    population: 100000,
    estimatedStreets: 300,
    developmentStatus: "Satellite Expansion",
    priorityLevel: "MEDIUM",
    priority: "medium",
    targetDemographic: "Airport corridor residents, transit population",
    approach: "Transit evangelism, airport ministry",
    averagePeoplePerStreet: 350,
    districts: [
      { name: "Lugbe", population: 70000, character: "Airport road community", features: ["Mixed population", "Transit hub", "Markets"] },
      { name: "Kyami", population: 30000, character: "Airport vicinity", features: ["Developing area", "Strategic location"] }
    ],
    keyTargets: [
      "Lugbe Market",
      "Airport Road corridor",
      "Transit points",
      "New estates"
    ],
    strategy: {
      lugbe: "Market days and estate evangelism",
      airport: "Strategic positioning for travelers",
      future: "Gateway to Abuja for many visitors"
    }
  }
]

export const suburbanDistricts = {
  name: "Suburban Districts",
  subtitle: "THE HIDDEN HARVEST",
  population: 700000,
  estimatedStreets: 1200,
  developmentStatus: "Mixed Development",
  priorityLevel: "HIGH",
  priority: "high",
  character: "High-density, working-class majority, underserved",
  approach: "Mass crusades, market takeovers, intensive campaigns",
  averagePeoplePerStreet: 600,
  areas: [
    {
      name: "Kubwa",
      population: 300000,
      status: "LARGEST SUBURB - CRITICAL",
      phases: ["Multiple phases", "Kubwa Village", "Kubwa 1-4"],
      keyTargets: ["Kubwa Village Market", "Estate communities", "Multiple phases"],
      strategy: "3-day mega crusade, estate-by-estate, market evangelism",
      recommendation: "MUST REACH - Highest suburban priority"
    },
    {
      name: "Nyanya",
      population: 200000,
      status: "Dense commercial/residential",
      features: ["Major market area", "Transit hub", "High foot traffic"],
      keyTargets: ["Nyanya Market", "Bus parks", "Residential estates"],
      strategy: "Daily market evangelism, bus park outreach, estate visits"
    },
    {
      name: "Karu",
      population: 150000,
      status: "Border community",
      features: ["High-density housing", "Military/police communities", "Mixed population"],
      keyTargets: ["Karu Site", "Military barracks", "Main road markets"],
      strategy: "Estate evangelism, security forces outreach, community rallies"
    },
    {
      name: "Jikwoyi",
      population: 30000,
      status: "Growing residential",
      features: ["Residential estates", "Family communities"],
      strategy: "House fellowship model, estate outreach"
    },
    {
      name: "Mpape",
      population: 15000,
      status: "Traditional community",
      features: ["Indigenous settlements", "Quarry area", "Cultural heritage"],
      strategy: "Traditional leaders engagement, community meetings"
    },
    {
      name: "Dawaki",
      population: 5000,
      status: "Small growing residential",
      features: ["New developments", "Emerging area"],
      strategy: "Pioneer house fellowships"
    },
    {
      name: "Other suburban settlements",
      population: 0,
      note: "Various smaller communities around AMAC"
    }
  ]
}

export const allPhases = [...amacPhases, suburbanDistricts]
