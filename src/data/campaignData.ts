// Campaign Data - Core information for 100 Million Souls Campaign

export const campaignInfo = {
  church: {
    name: "Dominion City",
    tagline: "...raising leaders that transform society",
    generalOverseer: "Pastor David Ogbueli",
    headquarters: "Gudu, Abuja",
    website: "https://www.dominioncity.cc/",
    presence: {
      nigeria: "Almost all states",
      international: ["Parts of Africa", "North America"]
    }
  },
  nightOfGlory: {
    name: "Abuja Night of Glory",
    date: "November 28, 2025",
    day: "Friday",
    time: "5:00 PM",
    venue: "MKO Abiola National Stadium",
    venueAddress: "Constitution Avenue, Central Area, Abuja FCT",
    countdown: {
      start: "October 18, 2025",
      days: 41
    },
    targets: {
      attendance: {
        min: 50000,
        max: 70000,
        goal: 70000
      },
      salvations: 10000,
      flyers: 50000,
      banners: 50,
      buses: 200,
      volunteers: 500,
      evangelists: 500,
      mediaPartnerships: 5
    },
    budget: {
      min: 50000000,
      max: 80000000,
      currency: "NGN",
      breakdown: {
        stadiumLogistics: 15000000,
        transportation: 20000000,
        marketing: 15000000,
        printing: 8000000,
        soundLightsMedia: 10000000,
        securityMedical: 5000000,
        volunteerSupplies: 3000000,
        contingency: 4000000
      }
    },
    ministersLineup: [
      "Dr. David Ogbueli",
      "Apst. Ikechukwu Nnajiofor" ,
      "Dr. Charles Ndifon",
      "Evang. Daniel Scott",
      "Evang. Andres Bisonni",
      "Ebuka Songs",
      "Theophilus Sunday",
      "Nathaniel Bassey",
      "Min. GUC",
      "Anthony Kani"
    ]
  },
  hundredMillion: {
    vision: "Win 100 Million Souls for Jesus Christ",
    timeline: "2026-2030",
    approach: "Online and Physical",
    buffer: "20% added to all targets (Pastor David's wisdom)",
    years: [
      {
        year: 2026,
        phase: "Year 1",
        focus: "Abuja Saturation",
        target: 4000000,
        cumulative: 4000000,
        strategies: [
          "Every street, every soul campaign",
          "5,000 soul winners trained",
          "100 house fellowships established",
          "Open-air crusades in all 6 councils"
        ]
      },
      {
        year: 2027,
        phase: "Year 2",
        focus: "FCT + Neighboring States",
        states: ["Niger", "Nasarawa", "Kaduna", "Kogi", "Plateau"],
        target: 10000000,
        cumulative: 14000000,
        strategies: [
          "Satellite churches in state capitals",
          "Monthly crusades per state",
          "Radio and TV evangelism",
          "Regional partnerships"
        ]
      },
      {
        year: 2028,
        phase: "Year 3",
        focus: "Northern Nigeria",
        states: "All 19 Northern States",
        target: 25000000,
        cumulative: 39000000,
        strategies: [
          "State-by-state crusades",
          "Unreached people groups focus",
          "Literature in local languages",
          "Strategic partnerships"
        ]
      },
      {
        year: 2029,
        phase: "Year 4",
        focus: "Nationwide Nigeria",
        states: "All 36 States + FCT",
        target: 35000000,
        cumulative: 74000000,
        strategies: [
          "Simultaneous nationwide crusades",
          "National TV broadcast",
          "Mass media campaigns",
          "Every state mobilized"
        ]
      },
      {
        year: 2030,
        phase: "Year 5",
        focus: "Africa & Diaspora",
        regions: ["West Africa", "East Africa", "Southern Africa", "Europe", "Americas"],
        target: 26000000,
        cumulative: 100000000,
        strategies: [
          "Continental expansion",
          "Diaspora churches activated",
          "Global digital evangelism",
          "100 MILLION ACHIEVED!"
        ]
      }
    ],
    goMultiplicationModel: {
      description: "Pastor David Ogbueli's 20% Buffer Strategy",
      structure: {
        level1: {
          people: 100,
          targetPerPerson: 12000,
          total: 1200000,
          withBuffer: 1440000 // 20% added
        },
        level2: {
          under: "Each of the 100",
          people: 10000,
          targetPerPerson: 120,
          total: 1200000
        },
        level3: {
          under: "Each of the 10,000",
          people: 10,
          targetPerPerson: 12,
          total: 1200000
        }
      },
      totalWithBuffer: 1440000,
      principle: "Multiplication through discipleship and delegation"
    }
  },
  abujaOverview: {
    population2025: 4200000,
    growthRate: "4-5% annually",
    status: "Fastest-growing city in Africa",
    structure: {
      areaCouncils: 6,
      developmentPhases: 5,
      districts: "70+",
      estimatedStreets: "5,100-6,200"
    },
    spiritualClimate: "Multi-religious (Christianity, Islam, Traditional)",
    strategicAdvantage: "Nigeria's capital - influence spreads nationwide"
  }
}

export const areaCouncils = [
  {
    id: 1,
    name: "Abuja Municipal Area Council (AMAC)",
    shortName: "AMAC",
    population: 1800000,
    estimatedStreets: 3000,
    priority: "HIGHEST",
    priorityLevel: "immediate",
    character: "Political and Economic Center",
    coverage: "Federal Capital City (FCC) - Phases 1-5",
    strategicImportance: "Government workers, business executives, diplomats",
    approach: "Professional/workplace evangelism, estate-by-estate",
    phases: 5,
    districts: 70,
    headquarters: "Area 10, Central District"
  },
  {
    id: 2,
    name: "Gwagwalada",
    shortName: "Gwagwalada",
    population: 800000,
    estimatedStreets: 900,
    priority: "HIGH",
    priorityLevel: "high",
    character: "University community, semi-urban",
    keyAssets: [
      "University of Abuja (Main Campus) - 40,000+ students",
      "Gwagwalada Teaching Hospital",
      "Gwagwalada Market",
      "Zuma Rock area"
    ],
    strategicImportance: "Youth and student population",
    approach: "Campus ministry, hospital evangelism, market blitzes",
    targetStudents: 20000
  },
  {
    id: 3,
    name: "Kuje",
    shortName: "Kuje",
    population: 450000,
    estimatedStreets: 550,
    priority: "MEDIUM",
    priorityLevel: "medium",
    character: "Agricultural hub - 'Food basket of Abuja'",
    keyAssets: [
      "Farmlands and rural communities",
      "Kuje Prison (correctional outreach opportunity)",
      "Growing residential areas"
    ],
    strategicImportance: "Growing residential area, agricultural community",
    approach: "Farmers' associations, rural crusades, prison ministry"
  },
  {
    id: 4,
    name: "Bwari",
    shortName: "Bwari",
    population: 600000,
    estimatedStreets: 650,
    priority: "MEDIUM-HIGH",
    priorityLevel: "medium-high",
    character: "Educational institutions, residential",
    keyAssets: [
      "Multiple tertiary institutions",
      "Traditional Gbagyi communities",
      "Residential estates"
    ],
    strategicImportance: "Student outreach potential",
    approach: "School/campus outreach, traditional leaders engagement, youth rallies"
  },
  {
    id: 5,
    name: "Kwali",
    shortName: "Kwali",
    population: 350000,
    estimatedStreets: 450,
    priority: "MEDIUM",
    priorityLevel: "medium",
    character: "Cultural heritage, traditional",
    keyAssets: [
      "Pottery industry (Kwali Pottery)",
      "Agricultural communities",
      "Cultural festivals"
    ],
    strategicImportance: "Traditional communities",
    approach: "Cultural engagement, festival evangelism, rural outreach"
  },
  {
    id: 6,
    name: "Abaji",
    shortName: "Abaji",
    population: 200000,
    estimatedStreets: 350,
    priority: "MEDIUM",
    priorityLevel: "medium",
    character: "Most rural, distant from city center",
    keyAssets: [
      "Agricultural communities",
      "Border location",
      "Untapped territory"
    ],
    strategicImportance: "Untapped harvest field",
    approach: "Pioneer teams, extended campaigns (2-3 days), mobile evangelism"
  }
]

export const totalFCTStats = {
  totalPopulation: 4200000,
  totalStreets: "5,100-6,200",
  totalCouncils: 6,
  totalPhases: 5,
  totalDistricts: 70,
  averagePeoplePerStreet: 680
}

export const statistics = {
  nightOfGlory: [
    { label: "Days Until Event", value: 41, icon: "Calendar", color: "blue" },
    { label: "Target Attendance", value: 70000, icon: "Users", color: "green", suffix: "+" },
    { label: "Expected Salvations", value: 10000, icon: "Heart", color: "red", suffix: "+" },
    { label: "Buses to Deploy", value: 200, icon: "Bus", color: "yellow", suffix: "+" },
    { label: "Flyers to Distribute", value: 50000, icon: "FileText", color: "purple" },
    { label: "Volunteers Needed", value: 500, icon: "UserPlus", color: "indigo", suffix: "+" }
  ],
  hundredMillion: [
    { label: "Total Target", value: 100000000, icon: "Target", color: "blue", suffix: "M" },
    { label: "Timeline", value: 5, icon: "Clock", color: "green", suffix: " Years" },
    { label: "Year 1 Target (Abuja)", value: 4000000, icon: "MapPin", color: "red", suffix: "M" },
    { label: "Digital Followers Goal", value: 70000000, icon: "Smartphone", color: "purple", suffix: "M" },
    { label: "New Churches", value: 200, icon: "Church", color: "yellow", suffix: "+" },
    { label: "States to Reach", value: 36, icon: "Map", color: "indigo" }
  ],
  abuja: [
    { label: "Abuja Population", value: 4200000, icon: "Users", color: "blue", suffix: "M" },
    { label: "Area Councils", value: 6, icon: "MapPin", color: "green" },
    { label: "Total Streets", value: 6000, icon: "Map", color: "red", suffix: "+" },
    { label: "Districts", value: 70, icon: "Building", color: "yellow", suffix: "+" }
  ]
}

export const busPickupPoints = [
  {
    category: "AMAC Phase 1",
    points: [
      "Central Area (Secretariat)",
      "Central Area (FCDA)",
      "Wuse Market",
      "Garki Area 11",
      "Maitama Junction"
    ]
  },
  {
    category: "AMAC Phase 2",
    points: [
      "Jabi Lake Mall",
      "Utako Junction",
      "Gudu Junction",
      "Wuye Market",
      "Jahi District Gate"
    ]
  },
  {
    category: "AMAC Phase 3",
    points: [
      "Gwarinpa Junction (Main)",
      "Gwarinpa 1st Avenue",
      "Gwarinpa Estate Gate",
      "Life Camp Gate",
      "Lokogoma Junction"
    ]
  },
  {
    category: "AMAC Phase 4-5",
    points: [
      "Lugbe Junction (Airport Road)",
      "Lugbe Market",
      "Karsana",
      "Idu Industrial",
      "Kagini"
    ]
  },
  {
    category: "Suburban Districts",
    points: [
      "Kubwa Village Market",
      "Kubwa Phase 1",
      "Kubwa Phase 4",
      "Nyanya Market",
      "Nyanya Junction",
      "Karu Main Road",
      "Karu Site",
      "Jikwoyi Junction"
    ]
  },
  {
    category: "Other Councils",
    points: [
      "Gwagwalada University Gate",
      "Gwagwalada Town Center",
      "Kuje Market",
      "Bwari Town",
      "Bwari University Area",
      "Kwali Center",
      "Abaji Main Town"
    ]
  }
]

export const transportationStrategy = {
  totalBuses: 200,
  pickupPoints: 30,
  startTime: "3:00 PM",
  eventTime: "5:00 PM",
  returnTime: "9:30 PM",
  partners: [
    {
      name: "Abuja Urban Mass Transit Company Limited",
      role: "Primary partner for metropolitan buses",
      oversight: "FCTA"
    },
    {
      name: "Private Bus Operators",
      role: "Supplementary buses",
      commitment: "Rentals and sponsorships"
    },
    {
      name: "Transport Unions",
      role: "Free/subsidized transport initiative",
      benefit: "Community goodwill"
    }
  ],
  logistics: {
    busCapacity: "Average 50 persons per bus",
    totalCapacity: 10000,
    trips: "Multiple trips if needed",
    coordination: "WhatsApp groups per pickup point",
    captains: "Bus captains for each route"
  }
}
