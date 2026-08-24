/**
 * Robotrac RT Series & Agricultural Implements Master Database
 */

const PRODUCTS_DATA = [
  // --- TRACTORS ---
  {
    id: "rt-120",
    name: "Robotrac RT 120 Compact Tractor",
    shortName: "RT 120",
    type: "tractor",
    category: "tractors",
    targetAudience: "Small & Marginal Farmers",
    trackWidth: "2.5 ft (760 mm)",
    hp: "25 HP Class",
    price: 492000,
    priceFormatted: "₹ 4.92 Lakh",
    tag: "Small Holdings Specialist",
    badge: "Popular",
    rating: 4.8,
    reviewsCount: 34,
    image: "images/tractor-rt120.jpg",
    gallery: [
      "images/tractor-rt120.jpg",
      "images/hero-tractor-banner.jpg",
      "images/smart-autonomy-tech.jpg"
    ],
    inStock: true,
    shortDesc: "Ultra-compact smart tractor engineered specifically for narrow orchard rows, vineyards, inter-cultivation, and small farm plots with full autonomy readiness.",
    specs: {
      "Engine / Power": "25 HP High-Torque Water-Cooled Diesel",
      "Track Width": "2.5 ft (760 mm Narrow Track)",
      "Transmission": "9 Forward + 3 Reverse SyncShuttle",
      "PTO Power & RPM": "21.5 HP @ 540 / 540E Dual Speed",
      "Hydraulic Lift Capacity": "750 kg at lower link ends",
      "Sensor Architecture": "Autonomy-Ready Pods & CAN Bus 2.0B",
      "Turning Radius": "2.1 meters (Brake Assisted)",
      "Fuel Tank Capacity": "26 Litres",
      "Manufacturing Location": "MIDC Paithan, Maharashtra",
      "Warranty": "2 Years / 2000 Hours Comprehensive"
    },
    features: [
      "2.5 ft ultra-narrow track width fits between dense vegetable & fruit rows",
      "Autonomy-ready electrical harness with sensor pod mounting points",
      "Low center of gravity prevents tipping on slopes and uneven terrain",
      "High fuel efficiency with targeted sub-₹5 Lakh ex-showroom pricing",
      "Eligible for PM Kisan Mechanization & Maharashtra State Subsidies up to 50%"
    ],
    compatibleImplements: ["rotary-tiller", "plough", "cultivator", "sprayer", "trailer", "auger"]
  },
  {
    id: "rt-180",
    name: "Robotrac RT 180 Versatile Smart Tractor",
    shortName: "RT 180",
    type: "tractor",
    category: "tractors",
    targetAudience: "Medium Farmers & Cash Crop Producers",
    trackWidth: "3.0 ft (915 mm)",
    hp: "38 HP Class",
    price: 670000,
    priceFormatted: "₹ 6.70 Lakh",
    tag: "Best Seller • Most Versatile",
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 68,
    image: "images/tractor-rt180.jpg",
    gallery: [
      "images/tractor-rt180.jpg",
      "images/hero-tractor-banner.jpg",
      "images/smart-autonomy-tech.jpg"
    ],
    inStock: true,
    shortDesc: "The undisputed workhorse of the RT Series. Balanced power, optimal 3.0 ft track width for sugarcane, cotton, soybean and heavy tillage operations.",
    specs: {
      "Engine / Power": "38 HP 3-Cylinder Turbocharged Diesel",
      "Track Width": "3.0 ft (915 mm Standard Multi-Crop)",
      "Transmission": "12 Forward + 12 Reverse Synchromesh Shuttle",
      "PTO Power & RPM": "33.5 HP @ 540 / 750 / 1000 RPM",
      "Hydraulic Lift Capacity": "1,200 kg with ADDC Sensing",
      "Sensor Architecture": "Autonomy-Ready with Dual Camera + LiDAR Mounts",
      "Turning Radius": "2.4 meters",
      "Fuel Tank Capacity": "38 Litres",
      "Manufacturing Location": "MIDC Paithan, Maharashtra",
      "Warranty": "2 Years / 2000 Hours Comprehensive"
    },
    features: [
      "Perfect track width for sugarcane ratoon management, cotton & potato",
      "Integrated electronic steer-by-wire capability for precision guidance",
      "Robust cast-iron front axle with heavy planetary final drives",
      "Deluxe suspension seat with ergonomic side-shift levers & digital dashboard",
      "Subsidies applicable with fast-track direct bank clearance"
    ],
    compatibleImplements: ["rotary-tiller", "plough", "disc-harrow", "cultivator", "reaper", "potato-digger", "mulch-layer", "sprayer", "trailer", "front-loader", "generator"]
  },
  {
    id: "rt-270",
    name: "Robotrac RT 270 Heavy-Duty Smart Tractor",
    shortName: "RT 270",
    type: "tractor",
    category: "tractors",
    targetAudience: "Large Holdings & Custom Hiring Centers",
    trackWidth: "3.5 ft (1065 mm)",
    hp: "52 HP Class",
    price: 925000,
    priceFormatted: "₹ 9.25 Lakh",
    tag: "Maximum Power & Traction",
    badge: "High Power",
    rating: 5.0,
    reviewsCount: 42,
    image: "images/tractor-rt270.jpg",
    gallery: [
      "images/tractor-rt270.jpg",
      "images/hero-tractor-banner.jpg",
      "images/smart-autonomy-tech.jpg"
    ],
    inStock: true,
    shortDesc: "High capacity, high traction powerhouse with 3.5 ft track width for heavy deep plowing, combine harvesting, large trailers, and commercial custom hiring.",
    specs: {
      "Engine / Power": "52 HP High-Torque CRDi Intercooled Engine",
      "Track Width": "3.5 ft (1065 mm Broad Track)",
      "Transmission": "16 Forward + 8 Reverse Dual Clutch PowerShift",
      "PTO Power & RPM": "46 HP Independent Electro-Hydraulic PTO",
      "Hydraulic Lift Capacity": "1,850 kg Heavy Duty Category-II Hitch",
      "Sensor Architecture": "Autonomy Level 2 Ready (Auto-Steer + Obstacle Avoidance)",
      "Turning Radius": "2.8 meters",
      "Fuel Tank Capacity": "55 Litres",
      "Manufacturing Location": "MIDC Paithan, Maharashtra",
      "Warranty": "2 Years / 2500 Hours Comprehensive"
    },
    features: [
      "Handles heavy soil preparation and high-tonnage transport easily",
      "Full drive-by-wire throttle, steering, and electro-hydraulic hitch controls",
      "Reinforced chassis rated for continuous commercial custom hiring usage",
      "Dual auxiliary remote hydraulic valves with quick couplers as standard",
      "Priority manufacturing and dedicated field service engineer support"
    ],
    compatibleImplements: ["rotary-tiller", "plough", "disc-harrow", "cultivator", "reaper", "potato-digger", "mulch-layer", "trailer", "tanker", "front-loader", "forklift", "flail-mower", "front-blade", "generator"]
  },
  {
    id: "rt-270-ev",
    name: "Robotrac RT 270 EV Electric Multi-Utility Concept",
    shortName: "RT 270 EV",
    type: "tractor",
    category: "tractors",
    targetAudience: "Zero-Emission Farms, Greenhouses & Estates",
    trackWidth: "3.2 ft (975 mm)",
    hp: "45 HP Equivalent (Peak 60 kW)",
    price: 1450000,
    priceFormatted: "₹ 14.50 Lakh",
    tag: "Next-Gen Zero Emissions",
    badge: "EV Innovation",
    rating: 4.9,
    reviewsCount: 19,
    image: "images/rt270ev.jpg",
    gallery: [
      "images/rt270ev.jpg",
      "images/smart-autonomy-tech.jpg",
      "images/hero-tractor-banner.jpg"
    ],
    inStock: true,
    shortDesc: "Next-generation 100% electric agricultural platform with modular swap battery, instant electric torque, ultra-low operating cost (₹35/hr), and quiet indoor operation.",
    specs: {
      "Powertrain": "60 kW Peak High-Efficiency Permanent Magnet Motor",
      "Battery Pack": "42 kWh Liquid-Cooled LFP Battery with Fast Charging",
      "Operating Time": "6 to 8 hours continuous field work per charge",
      "Fast Charging": "20% to 80% in 55 mins via DC Fast Charger",
      "PTO Drive": "Direct Electric Drive (0-1000 RPM Variable Stepless)",
      "Hydraulic Lift": "1,500 kg Electric Hydraulic Power Unit",
      "Running Cost": "₹ 35 - 45 / hour (80% savings vs diesel)",
      "Connectivity": "4G IoT Telematics + Cloud Farm Management app",
      "Warranty": "5 Years Battery & Motor Warranty"
    },
    features: [
      "Zero exhaust emissions ideal for indoor greenhouses, vineyards & clean farms",
      "Instant 280 Nm electric torque from 0 RPM for unmatched anti-stall pulling",
      "Mobile power-station function provides 230V/415V AC electricity for farm tools",
      "Near-zero maintenance with no engine oil, filters, belts, or clutch wear",
      "Remote diagnostics and over-the-air firmware upgrades"
    ],
    compatibleImplements: ["rotary-tiller", "plough", "disc-harrow", "sprayer", "finishing-mower", "trailer", "auger"]
  },

  // --- IMPLEMENTS: SOIL PREPARATION ---
  {
    id: "rotary-tiller",
    name: "Heavy-Duty Rotary Tiller (Rotavator)",
    shortName: "Rotary Tiller",
    type: "implement",
    category: "soil-prep",
    price: 145000,
    priceFormatted: "₹ 1.45 Lakh",
    priceRange: "₹ 1.15 – 1.85 Lakh",
    badge: "Top Seller",
    rating: 4.9,
    reviewsCount: 52,
    image: "images/rotary-tiller.jpg",
    gallery: ["images/rotary-tiller.jpg"],
    shortDesc: "Multi-speed boron steel rotary tiller providing optimal seedbed preparation in single pass with heavy-duty oil-bath gear drive.",
    specs: {
      "Working Width": "1.2 m to 1.8 m (Matching RT Series track)",
      "No. of Blades": "36 / 42 / 48 L & C-type Boron Steel Blades",
      "Gearbox": "Multi-speed heavy cast-iron oil bath gearbox",
      "Drive": "Side gear drive with sealed bearings",
      "Tractor Power Required": "25 – 55 HP",
      "Weight": "320 – 410 kg"
    },
    features: [
      "L-type and C-type boron steel blades for superior pulverization",
      "Adjustable trailing board for smooth soil leveling",
      "Shear bolt & slip clutch PTO shaft for tractor gearbox protection"
    ],
    inStock: true
  },
  {
    id: "plough",
    name: "2-Bottom Reversible MB Plough",
    shortName: "2-Bottom Plough",
    type: "implement",
    category: "soil-prep",
    price: 35000,
    priceFormatted: "₹ 35,000",
    priceRange: "₹ 28,000 – 42,000",
    badge: "Essential",
    rating: 4.8,
    reviewsCount: 29,
    image: "images/plough.jpg",
    gallery: ["images/plough.jpg"],
    shortDesc: "High-grade alloy steel mouldboard plough designed for deep primary tillage, weed inversion, and soil aeration.",
    specs: {
      "Bottoms": "2 Bottoms (Replaceable wear points)",
      "Working Depth": "200 – 300 mm adjustable",
      "Frame": "Heavy box section structural steel",
      "Tractor Power Required": "25 – 45 HP",
      "Hitch Category": "Cat-I / Cat-II 3-Point Linkage"
    },
    features: [
      "Hardened wear-resistant shear points and mouldboard wings",
      "Adjustable cross shaft for perfect line-of-draft alignment"
    ],
    inStock: true
  },
  {
    id: "disc-harrow",
    name: "Heavy-Duty Offset Disc Harrow",
    shortName: "Disc Harrow",
    type: "implement",
    category: "soil-prep",
    price: 58000,
    priceFormatted: "₹ 58,000",
    priceRange: "₹ 45,000 – 75,000",
    badge: "Durable",
    rating: 4.7,
    reviewsCount: 21,
    image: "images/disc-harrow.jpg",
    gallery: ["images/disc-harrow.jpg"],
    shortDesc: "Notched boron steel disc harrow for breaking hard clods, burying crop stubble, and preparing seedbeds in tough soils.",
    specs: {
      "Discs": "12 to 16 Notched & Plain High Carbon Discs",
      "Disc Diameter": "20 inch (510 mm)",
      "Gang Angle": "Adjustable 0° to 20°",
      "Bearings": "Heavy-duty sealed spool bearings with grease nipples",
      "Tractor Power Required": "30 – 55 HP"
    },
    features: [
      "Heat-treated boron steel discs maintain sharp cutting edge",
      "Easy gang angle adjustment for varying soil hardness"
    ],
    inStock: true
  },
  {
    id: "cultivator",
    name: "Rigid Multi-Tyne Cultivator / Ridger",
    shortName: "Cultivator / Ridger",
    type: "implement",
    category: "soil-prep",
    price: 29000,
    priceFormatted: "₹ 29,000",
    priceRange: "₹ 22,000 – 38,000",
    badge: "Economical",
    rating: 4.8,
    reviewsCount: 38,
    image: "images/cultivator.jpg",
    gallery: ["images/cultivator.jpg"],
    shortDesc: "Multi-purpose 7/9-tyne cultivator with interchangeable reversible shovels and optional ridging attachments.",
    specs: {
      "Tynes": "7 / 9 Heavy-duty forged spring steel tynes",
      "Shovels": "Reversible carbon steel shovels",
      "Frame": "Reinforced channel chassis with dual mounting points",
      "Tractor Power Required": "20 – 45 HP"
    },
    features: [
      "Dual spring loaded protection prevents tyne damage from underground rocks",
      "Easily converts to ridger for potato, ginger, and sugarcane planting"
    ],
    inStock: true
  },

  // --- SOWING, PLANTING & HARVEST ---
  {
    id: "reaper",
    name: "Front / Rear Multi-Crop Harvester Reaper",
    shortName: "Multi-Crop Reaper",
    type: "implement",
    category: "planting-harvest",
    price: 98000,
    priceFormatted: "₹ 98,000",
    priceRange: "₹ 85,000 – 1.25 Lakh",
    badge: "High Yield",
    rating: 4.9,
    reviewsCount: 44,
    image: "images/reaper.jpg",
    gallery: ["images/reaper.jpg"],
    shortDesc: "Precision crop cutter and windrower for paddy, wheat, soybean, and pulses with 5-blade cutter bar.",
    specs: {
      "Cutter Bar Width": "4.0 to 5.0 ft",
      "Harvesting Capacity": "1 to 1.5 acres / hour",
      "Crops": "Wheat, Paddy, Soybean, Mustard, Pulses",
      "Conveyor": "Twin heavy canvas conveyer belt with star wheels",
      "Tractor Power Required": "25 – 45 HP"
    },
    features: [
      "Leaves neat windrows for fast and easy bundle collection",
      "Minimal grain loss (<1%) with sharp reciprocating cutter knife"
    ],
    inStock: true
  },
  {
    id: "potato-digger",
    name: "Automated Elevator Potato Digger",
    shortName: "Potato Digger",
    type: "implement",
    category: "planting-harvest",
    price: 68000,
    priceFormatted: "₹ 68,000",
    priceRange: "₹ 55,000 – 85,000",
    badge: "Specialist",
    rating: 4.8,
    reviewsCount: 18,
    image: "images/potato-digger.jpg",
    gallery: ["images/potato-digger.jpg"],
    shortDesc: "High-efficiency single & dual row root crop harvester with vibrating rod conveyor for clean tuber separation.",
    specs: {
      "Rows": "1 or 2 Rows adjustable width",
      "Digging Depth": "Up to 250 mm",
      "Conveyor": "Rubber-coated steel rod conveyor to prevent bruising",
      "Tractor Power Required": "25 – 45 HP"
    },
    features: [
      "99% clean tuber pickup with zero skin damage",
      "Adjustable shaking frequency for wet or clayey soil conditions"
    ],
    inStock: true
  },
  {
    id: "mulch-layer",
    name: "Plastic Mulch Film & Drip Line Layer",
    shortName: "Plastic Mulch Layer",
    type: "implement",
    category: "planting-harvest",
    price: 148000,
    priceFormatted: "₹ 1.48 Lakh",
    priceRange: "₹ 1.20 – 1.80 Lakh",
    badge: "Horticulture",
    rating: 4.9,
    reviewsCount: 23,
    image: "images/mulch-layer.jpg",
    gallery: ["images/mulch-layer.jpg"],
    shortDesc: "Simultaneously lays plastic mulch film, embeds drip irrigation tube, and seals film edges with soil in one tractor pass.",
    specs: {
      "Film Width": "Up to 1.2 meters (3 to 4 ft)",
      "Functions": "Bed shaping, drip laying, mulch unrolling & edge burying",
      "Drip Reel Capacity": "Standard 500 m / 1000 m roll",
      "Tractor Power Required": "25 – 40 HP"
    },
    features: [
      "Cuts horticulture labor by 85% on vegetable, tomato and melon fields",
      "Precision tension rollers prevent film tearing or loose edges"
    ],
    inStock: true
  },
  {
    id: "broadcaster",
    name: "Centrifugal Fertilizer & Seed Broadcaster",
    shortName: "Fertilizer Broadcaster",
    type: "implement",
    category: "planting-harvest",
    price: 24000,
    priceFormatted: "₹ 24,000",
    priceRange: "₹ 18,000 – 32,000",
    badge: "Fast Spreading",
    rating: 4.6,
    reviewsCount: 31,
    image: "images/broadcaster.jpg",
    gallery: ["images/broadcaster.jpg"],
    shortDesc: "High capacity hopper with PTO-driven stainless steel spreading disc for uniform distribution of fertilizer, urea, and seed.",
    specs: {
      "Hopper Capacity": "350 to 500 Litres (Polyethylene/Steel)",
      "Spreading Width": "6 to 14 meters adjustable",
      "Spreading Disc": "Stainless steel 4-vane spreader",
      "Tractor Power Required": "18 – 40 HP"
    },
    features: [
      "Corrosion-proof UV stabilized heavy poly hopper",
      "Calibrated metering lever for precise kg/acre application"
    ],
    inStock: true
  },

  // --- TRANSPORT & UTILITY ---
  {
    id: "trailer",
    name: "Heavy-Duty 3-Ton Hydraulic Tipping Trailer",
    shortName: "Agricultural Trailer",
    type: "implement",
    category: "utility-transport",
    price: 125000,
    priceFormatted: "₹ 1.25 Lakh",
    priceRange: "₹ 95,000 – 1.60 Lakh",
    badge: "Heavy Duty",
    rating: 4.9,
    reviewsCount: 56,
    image: "images/trailer.jpg",
    gallery: ["images/trailer.jpg"],
    shortDesc: "Tough structural channel frame agricultural trailer with hydraulic telescopic tipping cylinder and drop-down side panels.",
    specs: {
      "Capacity": "3 Ton / 5 Ton Payload",
      "Tipping Mechanism": "Hydraulic single-stage telescopic ram",
      "Body Sheet": "10 Gauge heavy steel floor and corrugated walls",
      "Axle": "Heavy forged steel beam axle with tapered roller bearings",
      "Tires": "9.00-16 High-Lug Tractor Trailer Tires"
    },
    features: [
      "Removable side and tail gates for easy pallet and grain transport",
      "Heavy swivel towing hitch with safety chain"
    ],
    inStock: true
  },
  {
    id: "tanker",
    name: "3000L Agricultural Water & Liquid Fertilizer Tanker",
    shortName: "Water Tanker",
    type: "implement",
    category: "utility-transport",
    price: 138000,
    priceFormatted: "₹ 1.38 Lakh",
    priceRange: "₹ 1.10 – 1.75 Lakh",
    badge: "Utility",
    rating: 4.7,
    reviewsCount: 15,
    image: "images/tanker.jpg",
    gallery: ["images/tanker.jpg"],
    shortDesc: "Heavy epoxy-coated MS / SS water tanker trailer designed for orchard irrigation, construction, spraying, and farm water transport.",
    specs: {
      "Capacity": "2,000 / 3,000 / 5,000 Litres",
      "Tank Material": "3.5 mm Mild Steel with internal anti-surge baffle plates",
      "Pump Option": "PTO driven high volume centrifugal pump optional",
      "Tractor Power Required": "25 – 50 HP"
    },
    features: [
      "Internal wave surge baffles prevent tractor jerking during transit",
      "Large top manhole and bottom brass drainage ball valve"
    ],
    inStock: true
  },
  {
    id: "front-loader",
    name: "Quick-Attach Hydraulic Front End Loader",
    shortName: "Front End Loader",
    type: "implement",
    category: "utility-transport",
    price: 225000,
    priceFormatted: "₹ 2.25 Lakh",
    priceRange: "₹ 1.80 – 2.80 Lakh",
    badge: "Multitasker",
    rating: 4.9,
    reviewsCount: 27,
    image: "images/front-loader.jpg",
    gallery: ["images/front-loader.jpg"],
    shortDesc: "Heavy loader arms with joystick hydraulic control and quick-attach bucket for manure, silage, gravel, and grain handling.",
    specs: {
      "Bucket Capacity": "0.4 to 0.6 cu.m (450 – 700 kg payload)",
      "Max Lift Height": "2.8 meters (Dump height 2.2 m)",
      "Hydraulic Valves": "Single joystick valve with float position",
      "Tractor Power Required": "35 – 55 HP (RT 180 / RT 270)"
    },
    features: [
      "Quick detach frame allows removal in 5 minutes when not needed",
      "Double acting hydraulic cylinders with hardened chrome rods"
    ],
    inStock: true
  },
  {
    id: "forklift",
    name: "Tractor Rear-Mounted Mast Forklift",
    shortName: "Mounted Forklift",
    type: "implement",
    category: "utility-transport",
    price: 185000,
    priceFormatted: "₹ 1.85 Lakh",
    priceRange: "₹ 1.50 – 2.40 Lakh",
    badge: "Logistics",
    rating: 4.8,
    reviewsCount: 14,
    image: "images/forklift.jpg",
    gallery: ["images/forklift.jpg"],
    shortDesc: "3-point linkage mounted hydraulic duplex mast forklift for lifting crop crates, fruit bins, and palletized fertilizers.",
    specs: {
      "Lift Capacity": "800 – 1,200 kg",
      "Lift Height": "2.5 to 3.2 meters duplex mast",
      "Fork Length": "1,070 mm forged adjustable pallet forks",
      "Tractor Power Required": "30 – 55 HP"
    },
    features: [
      "Hydraulic tilt and side-shift controls for tight orchard loading",
      "Foldable forks for road safety during transport"
    ],
    inStock: true
  },

  // --- CROP CARE & LANDSCAPING ---
  {
    id: "sprayer",
    name: "Tractor-Mounted 400L Air-Assisted Boom Sprayer",
    shortName: "Boom Sprayer",
    type: "implement",
    category: "crop-care",
    price: 82000,
    priceFormatted: "₹ 82,000",
    priceRange: "₹ 65,000 – 1.10 Lakh",
    badge: "Crop Protection",
    rating: 4.9,
    reviewsCount: 39,
    image: "images/sprayer.jpg",
    gallery: ["images/sprayer.jpg"],
    shortDesc: "High pressure diaphragm pump boom sprayer with Italian brass anti-drip nozzles for orchards, vineyards, and field crops.",
    specs: {
      "Tank Capacity": "400 / 600 Litres UV Polyethylene",
      "Boom Width": "8 to 12 meters with break-back safety spring",
      "Pump": "High pressure triple diaphragm pump (50 bar / 70 L/min)",
      "Nozzles": "Ceramic cone & fan nozzles with individual shutoff",
      "Tractor Power Required": "25 – 45 HP"
    },
    features: [
      "Uniform droplet micron size ensures 100% leaf canopy coverage",
      "Freshwater hand wash tank and chemical induction hopper included"
    ],
    inStock: true
  },
  {
    id: "flail-mower",
    name: "Heavy-Duty Flail Mower & Mulcher Shredder",
    shortName: "Flail Mower",
    type: "implement",
    category: "crop-care",
    price: 175000,
    priceFormatted: "₹ 1.75 Lakh",
    priceRange: "₹ 1.40 – 2.20 Lakh",
    badge: "Heavy Shredder",
    rating: 4.8,
    reviewsCount: 22,
    image: "images/flail-mower.jpg",
    gallery: ["images/flail-mower.jpg"],
    shortDesc: "Hammer flail mulcher for shredding cotton stalks, sugarcane trash, orchard prunings, and heavy grass into organic compost.",
    specs: {
      "Working Width": "1.3 m to 1.75 m",
      "Flail Hammers": "Forged steel hammer blades (800g each)",
      "Rotor Speed": "2,200 RPM dynamically balanced rotor",
      "Tractor Power Required": "30 – 55 HP"
    },
    features: [
      "Pulverizes branches up to 50 mm thick into rich soil humus",
      "Hydraulic side-shift option for mowing under tree canopies"
    ],
    inStock: true
  },
  {
    id: "finishing-mower",
    name: "Rear 3-Spindle Estate Finishing Mower",
    shortName: "Finishing Mower",
    type: "implement",
    category: "crop-care",
    price: 118000,
    priceFormatted: "₹ 1.18 Lakh",
    priceRange: "₹ 95,000 – 1.55 Lakh",
    badge: "Precision Cut",
    rating: 4.7,
    reviewsCount: 16,
    image: "images/finishing-mower.jpg",
    gallery: ["images/finishing-mower.jpg"],
    shortDesc: "Triple-blade rear finishing mower for precision turf care, golf courses, resort lawns, and highway median grass management.",
    specs: {
      "Cutting Width": "1.5 to 1.8 meters",
      "Blades": "3 High-lift heat treated alloy steel blades",
      "Cutting Height": "25 mm to 100 mm via 4 caster wheels",
      "Tractor Power Required": "20 – 40 HP"
    },
    features: [
      "Floating 3-point hitch follows ground contours without scalping",
      "Rear discharge with chain safety guard"
    ],
    inStock: true
  },
  {
    id: "front-blade",
    name: "Hydraulic Front Dozer & Land Leveling Blade",
    shortName: "Front Blade",
    type: "implement",
    category: "crop-care",
    price: 95000,
    priceFormatted: "₹ 95,000",
    priceRange: "₹ 75,000 – 1.25 Lakh",
    badge: "Land Prep",
    rating: 4.8,
    reviewsCount: 19,
    image: "images/front-blade.jpg",
    gallery: ["images/front-blade.jpg"],
    shortDesc: "Front mounted heavy leveling blade with dual hydraulic cylinders for bund forming, farm road maintenance, and earth scraping.",
    specs: {
      "Blade Width": "1.8 to 2.2 meters",
      "Cutting Edge": "Reversible high-carbon steel cutting edge",
      "Angle Control": "Hydraulic angle (+/- 25°) & tilt adjustment",
      "Tractor Power Required": "35 – 55 HP"
    },
    features: [
      "Rigid under-tractor subframe prevents tractor frame stress",
      "Heavy skid shoes control digging depth precisely"
    ],
    inStock: true
  },

  // --- SPECIALIZED ATTACHMENTS ---
  {
    id: "auger",
    name: "Heavy-Duty Hydraulic Post Hole Digger (Auger)",
    shortName: "Post Hole Digger",
    type: "implement",
    category: "specialized",
    price: 72000,
    priceFormatted: "₹ 72,000",
    priceRange: "₹ 55,000 – 95,000",
    badge: "Fencing & Planting",
    rating: 4.9,
    reviewsCount: 33,
    image: "images/auger.jpg",
    gallery: ["images/auger.jpg"],
    shortDesc: "Planetary gear PTO / hydraulic auger drill for rapid plantation pits, solar structure fencing, and tree sapling planting.",
    specs: {
      "Auger Diameters": "9\", 12\", 18\", and 24\" interchangeable bits",
      "Drilling Depth": "Up to 1.0 m to 1.2 meters depth",
      "Gearbox": "Oil bath bevel gear drive with shear pin safety",
      "Drill Speed": "120 – 150 RPM at 540 PTO",
      "Tractor Power Required": "25 – 50 HP"
    },
    features: [
      "Digs a clean 3-foot tree pit in less than 45 seconds",
      "Replaceable tungsten carbide drill tip and cutting knives"
    ],
    inStock: true
  },
  {
    id: "generator",
    name: "Tractor PTO-Driven Emergency Power Generator",
    shortName: "PTO Generator Set",
    type: "implement",
    category: "specialized",
    price: 64000,
    priceFormatted: "₹ 64,000",
    priceRange: "₹ 45,000 – 85,000",
    badge: "Farm Power",
    rating: 4.8,
    reviewsCount: 25,
    image: "images/generator.jpg",
    gallery: ["images/generator.jpg"],
    shortDesc: "Tractor 3-point mounted 15 kVA / 25 kVA brushless alternator providing reliable 3-phase farm power for tube-wells and cold rooms during outages.",
    specs: {
      "Output Capacity": "15 kVA (Single/3-Phase) or 25 kVA (3-Phase)",
      "Output Voltage": "230V Single Phase / 415V 3-Phase 50 Hz",
      "Gearbox": "Step-up speed multiplier gearbox (540 to 1500 RPM)",
      "Alternator": "100% Copper wound brushless AVR regulated",
      "Tractor Power Required": "25 – 45 HP"
    },
    features: [
      "Operates deep bore-well submersible pumps during grid power cuts",
      "Integrated control panel with voltmeter, frequency meter & MCBs"
    ],
    inStock: true
  }
];

// Master Blog Posts
const BLOG_POSTS = [
  {
    id: "subsidy-guide-2026",
    title: "How to Avail 50% Tractor & Implement Subsidies under PM Kisan Mechanization in 2026",
    category: "Govt Subsidies",
    date: "Aug 18, 2026",
    readTime: "6 min read",
    author: "Agronomy Advisory Desk",
    image: "images/farmer-testimonial.jpg",
    excerpt: "Complete step-by-step guide to applying for Maharashtra MahaDBT and Central SMAM subsidies for compact tractors and smart implements.",
    content: `Government agricultural mechanization subsidies have been expanded to encourage the adoption of smart compact tractors and high-precision implements. For small and marginal farmers, subsidies cover between 40% and 50% of the ex-showroom price.`
  },
  {
    id: "track-width-selection-guide",
    title: "2.5 ft vs 3.0 ft vs 3.5 ft: Choosing the Right Tractor Track Width for Your Farm",
    category: "Machinery Guide",
    date: "Aug 10, 2026",
    readTime: "8 min read",
    author: "Robotrac R&D Team",
    image: "images/tractor-rt180.jpg",
    excerpt: "Why fixed track width tractors damage crops and how RT Series track-width options maximize yield in sugarcane, cotton, and orchards.",
    content: `Indian crop row spacing varies drastically: vineyards and pomegranate orchards require 2.5 ft narrow clearance, while cotton and sugarcane rows flourish best with 3.0 ft spacing. Choosing the correct track width eliminates root soil compaction and prevents crop damage.`
  },
  {
    id: "autonomy-future-indian-farming",
    title: "Autonomy-Ready Tractors: How RT Series Prepares Indian Farms for 24/7 Field Operations",
    category: "Smart Farming",
    date: "Jul 28, 2026",
    readTime: "5 min read",
    author: "Ashok Argade (CEO)",
    image: "images/smart-autonomy-tech.jpg",
    excerpt: "Exploring our phased path to auto-steer, row following, and daytime/nighttime autonomous tillage at MIDC Paithan.",
    content: `Autonomy in agriculture is not science fiction—it is the answer to seasonal farm labor shortages and precision resource optimization. Every Robotrac tractor leaves our Paithan factory with integrated compute harnesses and sensor pods.`
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    name: "Rameshwar Patil",
    location: "Chhatrapati Sambhajinagar (Aurangabad), MH",
    crop: "Sugarcane & Pomegranate (14 Acres)",
    tractor: "Robotrac RT 180 Owner",
    rating: 5,
    quote: "The 3.0 ft track width on my RT 180 tractor enters sugarcane rows easily without crushing new shoots. We saved over ₹45,000 on spraying and inter-tillage labor in just one season!",
    image: "images/farmer-testimonial.jpg"
  },
  {
    name: "Balasaheb Jadhav",
    location: "Nashik, Maharashtra",
    crop: "Table Grapes & Onion (8 Acres)",
    tractor: "Robotrac RT 120 Owner",
    rating: 5,
    quote: "Finding a 2.5 ft tractor under ₹5 Lakh was impossible until Robotrac launched. Paithan factory team delivered within 2 weeks, and the rotary tiller gives a powder-like seedbed for onion seedlings.",
    image: "images/farmer-testimonial.jpg"
  },
  {
    name: "Dr. Sandeep Deshmukh",
    location: "Paithan MIDC Agro Center",
    crop: "Custom Hiring Center Operator (65 Acres)",
    tractor: "Robotrac RT 270 + Loader Fleet",
    rating: 5,
    quote: "We operate commercial hiring for local farmers. The RT 270 has logged 900+ hours with zero downtime. The heavy hydraulic lift easily handles 3-bottom ploughs and tipping trailers.",
    image: "images/farmer-testimonial.jpg"
  }
];
