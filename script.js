/**
 * Biodiversity Awareness & India's Wildlife Explorer
 * Production Optimized JavaScript with Map Embeds, Weather Clothing Advice & Booking Links
 */

const indiaWildlifeStats = {
    totalSpecies: 91000,
    wildlifeSanctuaries: 573,
    nationalParks: 108,
    endangered: 186,
    vulnerable: 152,
    leastConcern: 4700
};

const animals = [
    {
        name: "Bengal Tiger",
        scientificName: "Panthera tigris tigris",
        status: "Endangered",
        habitat: "Forests, grasslands, and mangrove ecosystems",
        image: "images/tiger.jpg",
        states: ["Madhya Pradesh", "Karnataka", "Uttarakhand", "Maharashtra", "Rajasthan", "West Bengal"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Ranthambore National Park", "Sundarbans National Park", "Kaziranga National Park", "Jim Corbett National Park", "Pench National Park"],
        description: "The Bengal tiger is India's iconic big cat and a powerful symbol of healthy forest ecosystems.",
        threats: "Habitat loss, poaching, prey decline, and human-wildlife conflict.",
        importance: "As an apex predator, the tiger regulates herbivore populations and maintains ecological balance."
    },
    {
        name: "Asian Elephant",
        scientificName: "Elephas maximus",
        status: "Endangered",
        habitat: "Forests, grasslands, and river valleys",
        image: "images/elephant.jpg",
        states: ["Karnataka", "Kerala", "Tamil Nadu", "Assam", "West Bengal"],
        nationalParks: ["Periyar National Park", "Kaziranga National Park", "Bandipur National Park", "Nagarhole National Park", "Mudumalai Tiger Reserve", "Nilgiri Biosphere Reserve"],
        description: "The Asian elephant is a highly intelligent social mammal that shapes forest habitats as an ecosystem engineer.",
        threats: "Habitat fragmentation, linear infrastructure, crop conflict, and shrinking corridors.",
        importance: "Elephants disperse seeds, open canopy pathways, and create water holes benefiting other wildlife."
    },
    {
        name: "Red Panda",
        scientificName: "Ailurus fulgens",
        status: "Endangered",
        habitat: "Temperate Himalayan forests with bamboo understory",
        image: "images/red panda.jpeg",
        states: ["Sikkim", "West Bengal", "Arunachal Pradesh"],
        nationalParks: ["Singalila National Park", "Khangchendzonga National Park", "Namdapha National Park", "Neora Valley National Park", "Pangolakha Wildlife Sanctuary"],
        description: "The red panda is a small arboreal mammal closely associated with cool, bamboo-rich mountain ecosystems.",
        threats: "Forest loss, fragmentation, livestock grazing pressure, and illegal wildlife trade.",
        importance: "Indicator species for the health of high-altitude Eastern Himalayan temperate ecosystems."
    },
    {
        name: "Indian Peacock",
        scientificName: "Pavo cristatus",
        status: "Least Concern",
        habitat: "Open forests, scrublands, agricultural borders, and village margins",
        image: "images/peacock.jpg",
        states: ["Uttar Pradesh", "Rajasthan", "Gujarat", "Madhya Pradesh", "Karnataka"],
        nationalParks: ["Keoladeo National Park", "Ranthambore National Park", "Gir National Park", "Kanha National Park"],
        description: "The Indian peacock is India's national bird, admired for its spectacular courtship display.",
        threats: "Pesticide contamination, localized poaching, and loss of scrub habitats.",
        importance: "Major seed disperser, small pest controller, and cornerstone of Indian cultural heritage."
    },
    {
        name: "Greater One-horned Rhinoceros",
        scientificName: "Rhinoceros unicornis",
        status: "Vulnerable",
        habitat: "Alluvial grasslands, floodplain wetlands, and riverine forests",
        image: "images/One Horned Rhinosores.jpg",
        states: ["Assam", "West Bengal", "Uttar Pradesh"],
        nationalParks: ["Kaziranga National Park", "Orang National Park", "Manas National Park", "Pobitora Wildlife Sanctuary", "Jaldapara National Park", "Dudhwa National Park"],
        description: "The Greater One-horned Rhinoceros is a powerful floodplain grazer and one of India's most recognizable conservation success stories.",
        threats: "Poaching for its horn, flood-related habitat pressure, and grassland conversion.",
        importance: "Its grazing helps maintain open floodplain habitats that support diverse wetland wildlife."
    },
    {
        name: "Ganges River Dolphin",
        scientificName: "Platanista gangetica gangetica",
        status: "Endangered",
        habitat: "Deep, slow-moving freshwater rivers and tidal channels",
        image: "images/Ganges River Dolphin.jpg",
        states: ["Assam", "West Bengal", "Uttar Pradesh", "Bihar"],
        nationalParks: ["Sundarbans National Park", "Kaziranga National Park", "Vikramshila Gangetic Dolphin Sanctuary", "National Chambal Sanctuary"],
        description: "The Ganges River Dolphin is a nearly blind freshwater cetacean that navigates India's rivers with echolocation.",
        threats: "Water pollution, fishing-net entanglement, dams, and reduced river flow.",
        importance: "A sensitive indicator of river health and a flagship for connected, living waterways."
    },
    {
        name: "Gharial",
        scientificName: "Gavialis gangeticus",
        status: "Critically Endangered",
        habitat: "Deep sandy rivers with quiet pools and nesting banks",
        image: "images/gharial.jpg",
        states: ["Assam", "Uttar Pradesh", "Rajasthan", "Madhya Pradesh"],
        nationalParks: ["National Chambal Sanctuary", "Katarniaghat Wildlife Sanctuary", "Son Gharial Sanctuary", "Kaziranga National Park"],
        description: "The gharial is a distinctive fish-eating crocodilian adapted to the deep rivers of the Indian subcontinent.",
        threats: "River modification, sand mining, fishing pressure, and loss of nesting banks.",
        importance: "Protecting gharial habitat safeguards free-flowing rivers and their wider aquatic communities."
    },
    {
        name: "Great Indian Bustard",
        scientificName: "Ardeotis nigriceps",
        status: "Critically Endangered",
        habitat: "Open arid grasslands, scrub, and semi-desert plains",
        image: "images/Great indian bustard.webp",
        states: ["Rajasthan", "Gujarat", "Maharashtra", "Karnataka"],
        nationalParks: ["Desert National Park", "Great Indian Bustard Sanctuary", "Kutch Bustard Sanctuary", "Rollapadu Wildlife Sanctuary"],
        description: "The Great Indian Bustard is a tall grassland bird whose survival depends on India's remaining open landscapes.",
        threats: "Power-line collisions, grassland conversion, disturbance, and low breeding success.",
        importance: "Conserving this flagship bird protects threatened grasslands and the communities that depend on them."
    },
    {
        name: "Sarus Crane",
        scientificName: "Antigone antigone",
        status: "Vulnerable",
        habitat: "Wetlands, flooded fields, marshes, and shallow lakes",
        image: "images/sarus-crane.jpg",
        states: ["Rajasthan", "Uttar Pradesh", "Gujarat", "Madhya Pradesh"],
        nationalParks: ["Keoladeo National Park", "Nalsarovar Bird Sanctuary", "Okhla Bird Sanctuary", "Sultanpur National Park"],
        description: "The Sarus Crane is the world's tallest flying bird and a symbol of healthy seasonal wetlands.",
        threats: "Wetland drainage, pesticide exposure, power lines, and disturbance during breeding.",
        importance: "Its presence reflects functioning wetlands that support birds, farmers, and flood resilience."
    }
];

const otherAnimalDetails = {
    "Leopard": {
        image: "images/Persian leopard.jpg",
        scientificName: "Panthera pardus",
        status: "Vulnerable",
        habitat: "Forests, grasslands, rocky terrain, and scrublands",
        states: ["Madhya Pradesh", "Karnataka", "Rajasthan", "Maharashtra", "West Bengal", "Himachal Pradesh", "Gujarat", "Kerala", "Uttarakhand"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Ranthambore National Park", "Gir National Park", "Periyar National Park", "Great Himalayan National Park"],
        description: "An adaptable big cat thriving across varied Indian landscapes.",
        threats: "Habitat degradation, prey depletion, and human-wildlife conflict.",
        importance: "Regulates intermediate prey and maintains territorial balance."
    },
    "Sloth Bear": {
        image: "images/Sloth Bear.jpg",
        scientificName: "Melursus ursinus",
        status: "Vulnerable",
        habitat: "Dry deciduous forests, scrublands, and grasslands",
        states: ["Madhya Pradesh", "Karnataka", "Rajasthan", "Maharashtra", "Gujarat"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Ranthambore National Park", "Gir National Park", "Daroji Sloth Bear Sanctuary"],
        description: "A specialized insectivorous bear endemic to the Indian subcontinent.",
        threats: "Habitat destruction and accidental encounters.",
        importance: "Controls termite/ant populations and assists forest seed dispersion."
    },
    "Sambar": {
        image: "images/Sambar Deer.jpg",
        scientificName: "Rusa unicolor",
        status: "Vulnerable",
        habitat: "Dense woodland, scrub, and areas with water bodies",
        states: ["Madhya Pradesh", "Rajasthan", "Kerala", "Gujarat", "Karnataka", "Uttarakhand"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Ranthambore National Park", "Periyar National Park", "Gir National Park", "Great Himalayan National Park"],
        description: "The largest deer species in India and primary prey for apex carnivores.",
        threats: "Habitat fragmentation and hunting pressure.",
        importance: "Essential prey base sustaining tiger and leopard populations."
    },
    "Chital": {
        image: "images/download (10).jpg",
        scientificName: "Axis axis",
        status: "Least Concern",
        habitat: "Open woodlands and grasslands",
        states: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Karnataka", "Maharashtra", "Uttar Pradesh"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Ranthambore National Park", "Gir National Park", "Sundarbans National Park", "Keoladeo National Park"],
        description: "Commonly known as the spotted deer, highly gregarious in nature.",
        threats: "Local habitat loss.",
        importance: "Core herbivore maintaining grass health and predator sustenance."
    },
    "Gaur": {
        image: "images/A Gaur from kabini forest (Karnataka, India).jpg",
        scientificName: "Bos gaurus",
        status: "Vulnerable",
        habitat: "Evergreen, semi-evergreen, and moist deciduous forests",
        states: ["Karnataka", "Kerala", "Madhya Pradesh", "Tamil Nadu", "Maharashtra"],
        nationalParks: ["Kanha National Park", "Bandhavgarh National Park", "Periyar National Park", "Nagarhole National Park", "Bandipur National Park"],
        description: "The largest bovine in the world, known for its massive stature.",
        threats: "Cattle-transmitted diseases and habitat encroachment.",
        importance: "Bulk grazer that prevents forest overgrowth."
    },
    "Wild Boar": {
        image: "images/wild boar.jpg",
        scientificName: "Sus scrofa",
        status: "Least Concern",
        habitat: "Forests, marshes, agricultural edges",
        states: ["Madhya Pradesh", "Rajasthan", "Assam", "Kerala", "Uttar Pradesh", "West Bengal", "Himachal Pradesh", "Gujarat"],
        nationalParks: ["Bandhavgarh National Park", "Periyar National Park", "Kaziranga National Park", "Keoladeo National Park", "Sundarbans National Park", "Gir National Park"],
        description: "A resilient omnivore found throughout diverse habitats.",
        threats: "Agricultural conflict.",
        importance: "Roots soil to aid nutrient recycling and plant germination."
    },
    "Asiatic Lion": {
        image: "images/Asiatic lion.jpg",
        scientificName: "Panthera leo persica",
        status: "Endangered",
        habitat: "Dry deciduous forest and thorn scrub",
        states: ["Gujarat"],
        nationalParks: ["Gir National Park"],
        description: "The Asiatic lion survives in the wild only in and around Gir National Park in Gujarat.",
        threats: "Limited range, disease risk in a single population, and human-wildlife conflict.",
        importance: "A flagship for dry-forest conservation and India's last wild lion population."
    }
};

const nationalParks = [
    {
        name: "Kanha National Park",
        state: "Madhya Pradesh",
        ecosystem: "Tropical deciduous forest",
        image: "images/kanha.jpg",
        gallery: [
            "images/kanha.jpg",
            "parks/Kanha-1.jpg",
            "parks/kanha-2.jpg",
            "parks/kanha-3.jpg",
            "parks/kanha-4.jpg"
        ],
        latitude: 22.3345,
        longitude: 80.6115,
        species: ["Bengal Tiger", "Indian Peacock"],
        otherAnimals: ["Leopard", "Sloth Bear", "Gaur", "Chital"],
        touristSpots: ["Kanha Museum", "Kisli Zone", "Bamni Dadar", "Kanha Meadows"],
        hotels: ["Kanha Jungle Lodge", "Kanha Village Eco Resort", "Mogli Resort"],
        importance: "Renowned for reviving the endangered hard-ground barasingha and core tiger reserves."
    },
    {
        name: "Bandhavgarh National Park",
        state: "Madhya Pradesh",
        ecosystem: "Tropical forest",
        image: "images/banghavgarh.jpg",
        gallery: [
            "images/banghavgarh.jpg",
            "parks/bandhavgarh-1.jpg",
            "parks/Bandhavgarh-2.jpg",
            "parks/bandhavgarh-3.jpg",
            "parks/Bandhavgarh-4.jpg"
        ],
        latitude: 23.7281,
        longitude: 80.9649,
        species: ["Bengal Tiger", "Leopard"],
        otherAnimals: ["Sloth Bear", "Gaur", "Chital", "Wild Boar", "Sambar"],
        touristSpots: ["Bandhavgarh Fort", "Tala Zone", "Magadhi Zone"],
        hotels: ["Bandhavgarh Jungle Lodge", "Nature Heritage Resort", "Bandhavgarh Meadows"],
        importance: "High tiger density and significant historical forest habitats."
    },
    {
        name: "Ranthambore National Park",
        state: "Rajasthan",
        ecosystem: "Dry deciduous forest",
        image: "images/Ranthambhore.jpg",
        gallery: [
            "images/Ranthambhore.jpg",
            "parks/ranthambore-1.jpg",
            "parks/Ranthambore-2.jpg",
            "parks/ranthambore-3.jpg",
            "parks/Ranthambore-4.jpg"
        ],
        latitude: 26.0173,
        longitude: 76.5026,
        species: ["Bengal Tiger", "Indian Peacock"],
        otherAnimals: ["Leopard", "Sloth Bear", "Sambar", "Chital"],
        touristSpots: ["Ranthambore Fort", "Surwal Lake", "Padam Talao"],
        hotels: ["Forest Rest House", "Ranthambore Heritage Haveli", "Tiger Den Resort"],
        importance: "Pivotal reserve protecting wildlife across semi-arid terrains."
    },
    {
        name: "Periyar National Park",
        state: "Kerala",
        ecosystem: "Western Ghats forest",
        image: "images/periyark.jpg",
        gallery: [
            "images/periyark.jpg",
            "parks/periyer-1.jpg",
            "parks/Periyar-2.jpg",
            "parks/Periyar-3.jpg",
            "parks/Periyar-4.jpg"
        ],
        latitude: 9.4625,
        longitude: 77.2361,
        species: ["Asian Elephant", "Gaur"],
        otherAnimals: ["Sambar", "Wild Boar", "Leopard"],
        touristSpots: ["Periyar Lake", "Thekkady", "Mangala Devi Temple"],
        hotels: ["Thekkady Jungle Camp", "Periyar Woods Resort"],
        importance: "Biodiversity hotspot conserving elephants, river catchments, and rainforest species."
    },
    {
        name: "Kaziranga National Park",
        state: "Assam",
        ecosystem: "Grasslands and wetlands",
        image: "images/kaziranga.jpg",
        gallery: [
            "images/kaziranga.jpg",
            "parks/kaziranga-1.jpg",
            "parks/kaziranga-2.jpg",
            "parks/Kaziranga-3.jpg",
            "parks/Kaziranga-4.jpg"
        ],
        latitude: 26.5775,
        longitude: 93.1711,
        species: ["Greater One-horned Rhinoceros", "Asian Elephant", "Ganges River Dolphin"],
        otherAnimals: ["Bengal Tiger", "Gharial", "Wild Boar"],
        touristSpots: ["Kohora Range", "Bagori Range", "Agaratoli Range"],
        hotels: ["Diphlu River Lodge", "IORA Retreat", "Kaziranga Eco Camp"],
        importance: "Global stronghold for the Great One-horned Rhinoceros and elephant herds."
    },
    {
        name: "Singalila National Park",
        state: "West Bengal",
        ecosystem: "Himalayan forest",
        image: "images/singalila.jpg",
        gallery: [
            "images/singalila.jpg",
            "parks/Singalila-1.jpg",
            "parks/singlila-2.jpg",
            "parks/Singalila-3.jpg",
            "parks/singlila-4.jpg"
        ],
        latitude: 27.1050,
        longitude: 88.0000,
        species: ["Red Panda", "Leopard"],
        otherAnimals: ["Wild Boar"],
        touristSpots: ["Sandakphu", "Phalut", "Tumling"],
        hotels: ["Singalila Nature Camp", "Mountain View Lodge"],
        importance: "Vital high-altitude habitat for red panda preservation."
    },
    {
        name: "Sundarbans National Park",
        state: "West Bengal",
        ecosystem: "Mangrove forest and tidal wetlands",
        image: "images/Sundarban national park.jpg",
        gallery: [
            "images/Sundarban national park.jpg",
            "parks/Sundarban-1.jpg",
            "parks/Sundarban-2.jpg",
            "parks/Sundarban-3.jpg",
            "parks/Sundarban-4.jpg"
        ],
        latitude: 21.9497,
        longitude: 88.8988,
        species: ["Bengal Tiger", "Ganges River Dolphin"],
        otherAnimals: ["Wild Boar", "Chital"],
        touristSpots: ["Sajnekhali Watchtower", "Sudhanyakhali Watchtower", "Dobanki Canopy Walk"],
        hotels: ["Sundarbans Tiger Camp", "Sajnekhali Tourist Lodge", "Sundarban Eco Village"],
        importance: "A globally important mangrove landscape that protects coastal communities while sheltering tigers and river wildlife."
    },
    {
        name: "Gir National Park",
        state: "Gujarat",
        ecosystem: "Dry deciduous forest and thorn scrub",
        image: "images/gir national park.jpg",
        gallery: [
            "images/gir national park.jpg",
            "parks/gir-1.jpg",
            "parks/Gir-2.jpg",
            "parks/Gir-3.jpg",
            "parks/gir-4.jpg"
        ],
        latitude: 21.1243,
        longitude: 70.8242,
        species: ["Asiatic Lion", "Indian Peacock", "Leopard"],
        otherAnimals: ["Chital", "Sambar", "Sloth Bear", "Wild Boar"],
        touristSpots: ["Sasan Gir", "Kankai Mata Temple", "Kamleshwar Dam"],
        hotels: ["Gir Forest Lodge", "The Gateway Hotel Gir", "Asiatic Lion Lodge"],
        importance: "The last natural stronghold of the Asiatic lion and a vital dry-forest refuge in western India."
    },
    {
        name: "Keoladeo National Park",
        state: "Rajasthan",
        ecosystem: "Seasonal freshwater wetland and grassland",
        image: "images/Keoladeo National Park.jpg",
        gallery: [
            "images/Keoladeo National Park.jpg",
            "parks/keoladeo-1.jpg",
            "parks/Keoladeo-2.jpg",
            "parks/Keoladeo-3.jpg",
            "parks/keoladeo-4.jpg"
        ],
        latitude: 27.1592,
        longitude: 77.5250,
        species: ["Sarus Crane", "Indian Peacock"],
        otherAnimals: ["Wild Boar", "Sambar", "Chital"],
        touristSpots: ["Keoladeo Ghana Bird Sanctuary", "Shanti Kutir", "Python Point"],
        hotels: ["Forest Lodge Bharatpur", "Laxmi Vilas Palace", "Hotel Sunbird"],
        importance: "A Ramsar wetland and major refuge for resident and migratory waterbirds in the Indo-Gangetic plain."
    },
    {
        name: "Great Himalayan National Park",
        state: "Himachal Pradesh",
        ecosystem: "Alpine meadows and temperate mountain forest",
        image: "images/great himalayan national park.jpg",
        gallery: [
            "images/great himalayan national park.jpg",
            "parks/The Great Himalayan-1.jpg",
            "parks/the great himalayan-2.jpg",
            "parks/the Great Himalayan-3.jpg",
            "parks/the great himaliyan-4.jpg"
        ],
        latitude: 31.7333,
        longitude: 77.5333,
        species: ["Leopard"],
        otherAnimals: ["Wild Boar", "Sambar"],
        touristSpots: ["Tirthan Valley", "Sainj Valley", "Raktisar Trek"],
        hotels: ["Tirthan Ecostay", "Great Himalayan Homestay", "Shangarh Forest Retreat"],
        importance: "A UNESCO World Heritage landscape protecting alpine biodiversity, mountain forests, and headwater catchments."
    }
];

const parkCosts = {
    "Kanha National Park": { hotelPerNight: 2500, foodPerDay: 800, ticket: 500, guide: 1000, activities: 1800 },
    "Bandhavgarh National Park": { hotelPerNight: 2800, foodPerDay: 900, ticket: 600, guide: 1200, activities: 2000 },
    "Ranthambore National Park": { hotelPerNight: 3000, foodPerDay: 900, ticket: 700, guide: 1200, activities: 2200 },
    "Periyar National Park": { hotelPerNight: 2500, foodPerDay: 800, ticket: 500, guide: 1000, activities: 1800 },
    "Kaziranga National Park": { hotelPerNight: 2200, foodPerDay: 700, ticket: 500, guide: 1000, activities: 1600 },
    "Singalila National Park": { hotelPerNight: 2000, foodPerDay: 700, ticket: 400, guide: 800, activities: 1200 },
    "Sundarbans National Park": { hotelPerNight: 2400, foodPerDay: 850, ticket: 500, guide: 1100, activities: 2000 },
    "Gir National Park": { hotelPerNight: 2600, foodPerDay: 800, ticket: 600, guide: 1000, activities: 1900 },
    "Keoladeo National Park": { hotelPerNight: 1800, foodPerDay: 650, ticket: 300, guide: 700, activities: 1000 },
    "Great Himalayan National Park": { hotelPerNight: 2000, foodPerDay: 750, ticket: 400, guide: 900, activities: 1400 }
};

// Official National Park Websites & Hotel Portals
const parkBookingLinks = {
    "Kanha National Park": {
        official: "https://forest.mponline.gov.in/",
        hotelQuery: "Kanha National Park Madhya Pradesh",
        maps: "https://maps.google.com/?q=Kanha+National+Park"
    },
    "Bandhavgarh National Park": {
        official: "https://forest.mponline.gov.in/",
        hotelQuery: "Bandhavgarh National Park Madhya Pradesh",
        maps: "https://maps.google.com/?q=Bandhavgarh+National+Park"
    },
    "Ranthambore National Park": {
        official: "https://fmdss.forest.rajasthan.gov.in/",
        hotelQuery: "Ranthambore Sawai Madhopur Rajasthan",
        maps: "https://maps.google.com/?q=Ranthambore+National+Park"
    },
    "Periyar National Park": {
        official: "https://www.periyartigerreserve.org/",
        hotelQuery: "Thekkady Periyar Kerala",
        maps: "https://maps.google.com/?q=Periyar+National+Park"
    },
    "Kaziranga National Park": {
        official: "https://kaziranga.assam.gov.in/",
        hotelQuery: "Kaziranga National Park Assam",
        maps: "https://maps.google.com/?q=Kaziranga+National+Park"
    },
    "Singalila National Park": {
        official: "https://wbfdc.net/",
        hotelQuery: "Singalila Manebhanjan Darjeeling",
        maps: "https://maps.google.com/?q=Singalila+National+Park"
    },
    "Sundarbans National Park": {
        official: "https://www.sundarbannationalpark.in/",
        hotelQuery: "Sundarbans National Park West Bengal",
        maps: "https://maps.google.com/?q=Sundarbans+National+Park"
    },
    "Gir National Park": {
        official: "https://girlion.gujarat.gov.in/",
        hotelQuery: "Gir National Park Sasan Gir Gujarat",
        maps: "https://maps.google.com/?q=Gir+National+Park"
    },
    "Keoladeo National Park": {
        official: "https://forest.rajasthan.gov.in/",
        hotelQuery: "Keoladeo National Park Bharatpur Rajasthan",
        maps: "https://maps.google.com/?q=Keoladeo+National+Park"
    },
    "Great Himalayan National Park": {
        official: "https://greathimalayannationalpark.org/",
        hotelQuery: "Great Himalayan National Park Kullu Himachal Pradesh",
        maps: "https://maps.google.com/?q=Great+Himalayan+National+Park"
    }
};

const parkRecommendationData = {
    "Kanha National Park": {
        animals: ["tiger", "deer", "birds"],
        ecosystem: "tropical",
        activities: ["safari", "photography"],
        bestSeason: "dry",
        highlights: ["Barasingha conservation", "Tiger sightings", "Lush Sal & bamboo meadows"]
    },
    "Bandhavgarh National Park": {
        animals: ["tiger", "deer"],
        ecosystem: "tropical",
        activities: ["safari", "photography"],
        bestSeason: "dry",
        highlights: ["High tiger density", "Ancient fort ruins", "Dynamic safari zones"]
    },
    "Ranthambore National Park": {
        animals: ["tiger", "birds", "deer"],
        ecosystem: "dry",
        activities: ["safari", "photography"],
        bestSeason: "dry",
        highlights: ["Historic fort backdrop", "Padam lake birding", "Dry deciduous landscape"]
    },
    "Periyar National Park": {
        animals: ["elephant", "birds", "deer"],
        ecosystem: "tropical",
        activities: ["boating", "trekking", "photography"],
        bestSeason: "any",
        highlights: ["Periyar Lake boat safaris", "Elephant herds", "Rich Western Ghats flora"]
    },
    "Kaziranga National Park": {
        animals: ["rhino", "elephant", "birds", "aquatic"],
        ecosystem: "grassland",
        activities: ["safari", "photography"],
        bestSeason: "dry",
        highlights: ["Great One-horned Rhinos", "Floodplain wetlands", "Migratory avifauna"]
    },
    "Singalila National Park": {
        animals: ["panda", "birds"],
        ecosystem: "mountain",
        activities: ["trekking", "photography"],
        bestSeason: "dry",
        highlights: ["Red Panda tracking", "Sandakphu trekking", "Panoramic Himalayan vistas"]
    },
    "Sundarbans National Park": {
        animals: ["tiger", "aquatic", "birds"],
        ecosystem: "grassland",
        activities: ["boating", "photography"],
        bestSeason: "dry",
        highlights: ["Mangrove boat cruise", "Royal Bengal Tigers", "Ganges River Dolphin sightings"]
    },
    "Gir National Park": {
        animals: ["lion", "deer", "birds"],
        ecosystem: "dry",
        activities: ["safari", "photography"],
        bestSeason: "dry",
        highlights: ["Asiatic Lions in the wild", "Teak forest landscapes", "Rich dry-zone birding"]
    },
    "Keoladeo National Park": {
        animals: ["birds", "deer"],
        ecosystem: "grassland",
        activities: ["trekking", "boating", "photography"],
        bestSeason: "dry",
        highlights: ["Sarus Crane breeding grounds", "UNESCO World Heritage wetland", "370+ migratory bird species"]
    },
    "Great Himalayan National Park": {
        animals: ["panda", "birds", "deer"],
        ecosystem: "mountain",
        activities: ["trekking", "photography"],
        bestSeason: "dry",
        highlights: ["High-altitude Himalayan trekking", "Western Tragopan & Red Panda habitat", "Alpine river valleys"]
    }
};

const quizQuestionBank = [
    { question: "Which animal is India's national animal?", options: ["Indian Elephant", "Bengal Tiger", "Indian Rhinoceros", "Snow Leopard"], answer: "Bengal Tiger" },
    { question: "Which bird is India's national bird?", options: ["Peacock", "Hornbill", "Great Indian Bustard", "Parrot"], answer: "Peacock" },
    { question: "Which national park is globally famous for the One-horned Rhinoceros?", options: ["Kanha", "Kaziranga", "Periyar", "Singalila"], answer: "Kaziranga" },
    { question: "Which species lives in cool Himalayan bamboo forests?", options: ["Red Panda", "Sloth Bear", "Gaur", "Bengal Tiger"], answer: "Red Panda" },
    { question: "In which state is Kanha National Park located?", options: ["Rajasthan", "Madhya Pradesh", "Kerala", "Assam"], answer: "Madhya Pradesh" },
    { question: "Which park is located in the Western Ghats of Kerala?", options: ["Bandhavgarh", "Periyar", "Ranthambore", "Kaziranga"], answer: "Periyar" },
    { question: "Which of these is an endangered flagship species in India?", options: ["Indian Peacock", "Asian Elephant", "Common Myna", "Wild Boar"], answer: "Asian Elephant" },
    { question: "Which park is famous for the revival of the swamp deer (Barasingha)?", options: ["Kanha", "Ranthambore", "Bandhavgarh", "Singalila"], answer: "Kanha" },
    { question: "What is the largest wild cattle species found in India?", options: ["Gaur", "Sambar", "Wild Boar", "Nilgiri Tahr"], answer: "Gaur" },
    { question: "Which park in Rajasthan is famous for tigers and its historic fort?", options: ["Kaziranga", "Ranthambore", "Periyar", "Kanha"], answer: "Ranthambore" },
    { question: "Which national park in Gujarat is the only remaining natural home of the Asiatic Lion?", options: ["Gir National Park", "Kanha National Park", "Sundarbans National Park", "Periyar National Park"], answer: "Gir National Park" },
    { question: "Which UNESCO World Heritage site in West Bengal is the world's largest mangrove forest?", options: ["Singalila National Park", "Sundarbans National Park", "Keoladeo National Park", "Kaziranga National Park"], answer: "Sundarbans National Park" },
    { question: "Which wetland sanctuary in Rajasthan is world-renowned for wintering Sarus Cranes and migratory waterbirds?", options: ["Keoladeo National Park", "Ranthambore National Park", "Gir National Park", "Bandhavgarh National Park"], answer: "Keoladeo National Park" },
    { question: "Which national park in Himachal Pradesh protects alpine meadows and high Himalayan wildlife?", options: ["Great Himalayan National Park", "Kaziranga National Park", "Periyar National Park", "Kanha National Park"], answer: "Great Himalayan National Park" },
    { question: "Which practically blind freshwater mammal uses echolocation to navigate Indian river basins?", options: ["Ganges River Dolphin", "Gharial", "Bengal Tiger", "Asian Elephant"], answer: "Ganges River Dolphin" },
    { question: "Which critically endangered crocodilian has a long, slender snout adapted for catching fish?", options: ["Gharial", "Mugger Crocodile", "Saltwater Crocodile", "Water Monitor"], answer: "Gharial" },
    { question: "Which critically endangered heavy bird inhabits open arid grasslands and scrub in Rajasthan and Gujarat?", options: ["Great Indian Bustard", "Sarus Crane", "Indian Peacock", "Hornbill"], answer: "Great Indian Bustard" },
    { question: "Which is the tallest flying bird in the world, often seen in pairs in India's agricultural wetlands?", options: ["Sarus Crane", "Great Indian Bustard", "Flamingo", "Painted Stork"], answer: "Sarus Crane" },
    { question: "Which ecosystem is most associated with the Sundarbans?", options: ["Mangrove forest", "Temperate grassland", "Alpine meadow", "Dry thorn scrub"], answer: "Mangrove forest" },
    { question: "Which animal is a keystone predator in the Indian forest food chain?", options: ["Bengal Tiger", "Indian Elephant", "Sambar", "Peacock"], answer: "Bengal Tiger" },
    { question: "Which park is famous for the hard-ground Barasingha?", options: ["Bandhavgarh", "Kanha", "Gir", "Kaziranga"], answer: "Kanha" },
    { question: "Which species is an apex grazer that helps maintain grassland balance in many Indian parks?", options: ["Gaur", "Ganges River Dolphin", "Indian Vulture", "Hoolock Gibbon"], answer: "Gaur" },
    { question: "Which mammal is known for living in the mangrove estuaries of the Sundarbans?", options: ["Bengal Tiger", "Blackbuck", "Snow Leopard", "Pangolin"], answer: "Bengal Tiger" },
    { question: "Which park is best known for elephants and the Periyar Lake ecosystem?", options: ["Periyar National Park", "Great Himalayan National Park", "Singalila National Park", "Keoladeo National Park"], answer: "Periyar National Park" },
    { question: "Which animal is the largest mammal in India?", options: ["Asian Elephant", "Gaur", "Rhinoceros", "Gharial"], answer: "Asian Elephant" },
    { question: "Which of these is a primary consumer in a forest food web?", options: ["Deer", "Tiger", "Leopard", "Crocodile"], answer: "Deer" },
    { question: "Why are mangroves important for coastal biodiversity?", options: ["They protect shorelines and provide nursery habitat", "They are only used for timber", "They stop all rainfall", "They reduce all wildlife diversity"], answer: "They protect shorelines and provide nursery habitat" },
    { question: "Which park is a UNESCO World Heritage Site for alpine biodiversity in the Himalayas?", options: ["Great Himalayan National Park", "Kaziranga National Park", "Kanha National Park", "Gir National Park"], answer: "Great Himalayan National Park" },
    { question: "Which Indian national park is known for the Asiatic lion population?", options: ["Gir National Park", "Dudhwa National Park", "Sundarbans National Park", "Periyar National Park"], answer: "Gir National Park" },
    { question: "Which species is a classic indicator of healthy grassland and wetland ecosystems?", options: ["Sarus Crane", "House Sparrow", "Nilgai", "Mugger Crocodile"], answer: "Sarus Crane" },
    { question: "Which animal is famous for using its trunk to move water and communicate socially?", options: ["Asian Elephant", "Wild Boar", "Cheetah", "Saltwater Crocodile"], answer: "Asian Elephant" },
    { question: "Which habitat best supports red pandas in India?", options: ["Himalayan bamboo forests", "Desert dunes", "Mangrove creeks", "Open grassland"], answer: "Himalayan bamboo forests" },
    { question: "Which of these animals is most closely associated with the grassland and wetland floodplains of Assam?", options: ["One-horned Rhinoceros", "Polar Bear", "Pangolin", "Snow Leopard"], answer: "One-horned Rhinoceros" },
    { question: "Which factor most directly causes habitat fragmentation?", options: ["Roads, fencing, and urban expansion", "Cloud cover", "Bird migration", "Tidal waves alone"], answer: "Roads, fencing, and urban expansion" },
    { question: "Which of these is an example of in-situ conservation?", options: ["Protecting a national park", "Keeping animals in a zoo only", "Growing trees in a nursery", "Captive breeding outside habitat"], answer: "Protecting a national park" },
    { question: "Which bird is strongly associated with wetlands and marshes in the Indo-Gangetic plains?", options: ["Sarus Crane", "Hornbill", "Eagle Owl", "Kingfisher"], answer: "Sarus Crane" },
    { question: "Which park is known for its high tiger density and ancient fort landscape?", options: ["Bandhavgarh National Park", "Kaziranga National Park", "Keoladeo National Park", "Great Himalayan National Park"], answer: "Bandhavgarh National Park" },
    { question: "Which animal is a flagship species of the Sundarbans ecosystem?", options: ["Royal Bengal Tiger", "Blue Bull", "Red Panda", "Sloth Bear"], answer: "Royal Bengal Tiger" },
    { question: "Which species depends on long, undisturbed river stretches and sandy nesting banks?", options: ["Gharial", "Asian Elephant", "Bengal Tiger", "Indian Peacock"], answer: "Gharial" },
    { question: "Which of the following best describes biodiversity?", options: ["Variety of life in an ecosystem", "Only the number of trees", "A single species in one place", "Rainfall amount only"], answer: "Variety of life in an ecosystem" },
    { question: "Which ecosystem is richest in species variety when protected well?", options: ["Tropical forest", "Concrete parking lot", "Desert without water", "Frozen glacier"], answer: "Tropical forest" },
    { question: "Which of these is a threatened species in India?", options: ["Great Indian Bustard", "Pigeon", "House Crow", "Common Sparrow"], answer: "Great Indian Bustard" },
    { question: "What is the main role of an apex predator in an ecosystem?", options: ["To regulate prey populations and maintain balance", "To absorb all sunlight", "To remove all plant life", "To increase pollution"], answer: "To regulate prey populations and maintain balance" },
    { question: "Which habitat is essential for migratory birds in winter?", options: ["Wetlands", "Dry rocks", "Mining pits", "Tundra only"], answer: "Wetlands" },
    { question: "Which park is famous for the Ganges River Dolphin?", options: ["Kaziranga National Park", "Kanha National Park", "Singalila National Park", "Gir National Park"], answer: "Kaziranga National Park" },
    { question: "Which animal is often called a 'living fossil' due to its ancient lineage?", options: ["Gharial", "Peacock", "Sambar", "Sloth Bear"], answer: "Gharial" },
    { question: "Which state is home to the Western Ghats biodiversity hotspot?", options: ["Kerala", "Punjab", "Haryana", "Bihar"], answer: "Kerala" },
    { question: "What is a food chain?", options: ["The transfer of energy from plants to herbivores to carnivores", "A list of roads", "Only the number of animals in a zoo", "A measure of rainfall"], answer: "The transfer of energy from plants to herbivores to carnivores" },
    { question: "Which of these is a herbivore?", options: ["Sambar", "Tiger", "Crocodile", "Leopard"], answer: "Sambar" },
    { question: "Which of these is a carnivore?", options: ["Leopard", "Deer", "Elephant", "Peacock"], answer: "Leopard" },
    { question: "Which of these mammals is most associated with Indian grasslands and open country?", options: ["Blackbuck", "Red Panda", "Ganges River Dolphin", "Orangutan"], answer: "Blackbuck" },
    { question: "Which factor is most harmful to biodiversity in forests?", options: ["Deforestation", "Rainfall", "Photosynthesis", "Soil microbes"], answer: "Deforestation" },
    { question: "Which conservation strategy is best for protecting a whole ecosystem?", options: ["National park protection", "Removing all predators", "Planting a single crop species", "Breaking migration routes"], answer: "National park protection" },
    { question: "Which bird is often seen in the marshes of Keoladeo and is culturally symbolic in India?", options: ["Sarus Crane", "Snow Goose", "Albatross", "Hornbill"], answer: "Sarus Crane" },
    { question: "Which animal plays a major role in seed dispersal in tropical forests?", options: ["Asian Elephant", "Pigeon", "Owl", "Frog"], answer: "Asian Elephant" },
    { question: "Which of these best preserves species movement between protected areas?", options: ["Wildlife corridors", "Concrete walls", "Industrial dumping", "Roadside lights"], answer: "Wildlife corridors" },
    { question: "Which park is known for boat safaris and rich wetland biodiversity?", options: ["Kaziranga", "Singalila", "Gir", "Kanha"], answer: "Kaziranga" },
    { question: "Which species is adapted to cold, bamboo-rich Himalayan forests?", options: ["Red Panda", "Indian Elephant", "Gharial", "Asiatic Lion"], answer: "Red Panda" },
    { question: "Which large mammal is a strong indicator of healthy, connected forests?", options: ["Asian Elephant", "Domestic goat", "Parrot", "Rat"], answer: "Asian Elephant" },
    { question: "Which habitat supports the greatest diversity of amphibians and insects?", options: ["Wetland", "Dry stone desert", "Paved city road", "Ice shelf"], answer: "Wetland" },
    { question: "Which of these is a sustainable wildlife tourism practice?", options: ["Following park rules and keeping distance from animals", "Feeding wildlife for photos", "Honk loudly near animals", "Leaving litter behind"], answer: "Following park rules and keeping distance from animals" },
    { question: "Why should visitors stay in their vehicle during a safari when wildlife is nearby?", options: ["It reduces stress on animals and keeps everyone safe", "It helps animals become more curious", "It encourages them to approach cars", "It is only a rule for beginners"], answer: "It reduces stress on animals and keeps everyone safe" },
    { question: "Which of these actions best supports conservation?", options: ["Respecting park regulations and reducing plastic use", "Ignoring fenced areas", "Using loud speakers in forests", "Collecting animal feathers"], answer: "Respecting park regulations and reducing plastic use" },
    { question: "Which Indian protected area is famous for its seasonal bird concentration?", options: ["Keoladeo National Park", "Kanha National Park", "Ranthambore National Park", "Bandhavgarh National Park"], answer: "Keoladeo National Park" },
    { question: "Which species is most closely linked with the dry deciduous forests of Gujarat?", options: ["Asiatic Lion", "Snow Leopard", "Red Panda", "Ganges River Dolphin"], answer: "Asiatic Lion" },
    { question: "Which of these is a major threat to wildlife in India?", options: ["Habitat loss", "Excessive rainfall only", "Fresh air", "Balanced wildlife corridors"], answer: "Habitat loss" },
    { question: "Which species is particularly vulnerable to poaching for its horn?", options: ["Greater One-horned Rhinoceros", "Indian Peafowl", "Gaur", "Wild Boar"], answer: "Greater One-horned Rhinoceros" },
    { question: "Which national park is known for breathtaking Himalayan views and trekking routes?", options: ["Singalila National Park", "Kaziranga National Park", "Gir National Park", "Periyar National Park"], answer: "Singalila National Park" },
    { question: "What is an ecosystem?", options: ["A community of living organisms and their environment", "A single animal species", "Only a mountain range", "A collection of roads"], answer: "A community of living organisms and their environment" },
    { question: "Which of these helps maintain forest regeneration?", options: ["Seed dispersal by elephants", "Concrete roads", "Noise pollution", "Removing all trees"], answer: "Seed dispersal by elephants" },
    { question: "Which of these is a wetland bird?", options: ["Sarus Crane", "Snow Leopard", "Gaur", "Bengal Tiger"], answer: "Sarus Crane" },
    { question: "Why is a healthy food chain important?", options: ["It keeps prey, predators, and plants in balance", "It removes nutrients from the soil", "It makes all species vanish", "It prevents animals from moving"], answer: "It keeps prey, predators, and plants in balance" },
    { question: "Which habitat is most likely to host crocodilians and freshwater dolphins?", options: ["Rivers and wetlands", "High mountains", "Dry dunes", "Urban rooftops"], answer: "Rivers and wetlands" },
    { question: "Which of these is a likely conservation action for a park?", options: ["Protecting habitats and controlling illegal hunting", "Removing all forest barriers", "Allowing open dumping", "Capturing all animals for zoos"], answer: "Protecting habitats and controlling illegal hunting" },
    { question: "Which animal has a strong cultural and ecological value in India and is celebrated as a national bird?", options: ["Indian Peacock", "House Sparrow", "Pigeon", "Crow"], answer: "Indian Peacock" },
    { question: "Which national park is recognized for its Himalayan forests and red panda habitat?", options: ["Singalila National Park", "Kanha National Park", "Kaziranga National Park", "Gir National Park"], answer: "Singalila National Park" },
    { question: "Which of these is the best way to avoid disturbing wildlife on a trail?", options: ["Walk quietly and stay on marked paths", "Use loud music", "Approach nests closely", "Throw food for animals"], answer: "Walk quietly and stay on marked paths" },
    { question: "Which habitat is most threatened by tidal flooding and sea-level rise?", options: ["Mangrove ecosystem", "Alpine meadow", "Pond near a city", "Barren mountain peak"], answer: "Mangrove ecosystem" },
    { question: "What is the role of wetlands in biodiversity?", options: ["They support fish, birds, and water-dependent species", "They stop all plant growth", "They create only sandy desert", "They reduce rainfall"], answer: "They support fish, birds, and water-dependent species" },
    { question: "Which park lies in the state of Assam?", options: ["Kaziranga National Park", "Ranthambore National Park", "Keoladeo National Park", "Gir National Park"], answer: "Kaziranga National Park" },
    { question: "Which of these animals is a herbivore that helps maintain grassland health?", options: ["Chital", "Tiger", "Crocodile", "Leopard"], answer: "Chital" },
    { question: "Which of these is an example of responsible wildlife tourism?", options: ["Using a licensed guide and following park rules", "Offering food to tigers", "Turning on bright flash near nesting birds", "Driving off-road to chase animals"], answer: "Using a licensed guide and following park rules" },
    { question: "Which of these species is vulnerable to illegal trade and habitat loss?", options: ["Red Panda", "Goat", "Cow", "Pig"], answer: "Red Panda" },
    { question: "Which grassland bird is famously associated with open arid landscapes of Rajasthan and Gujarat?", options: ["Great Indian Bustard", "Sarus Crane", "Woodpecker", "Mallard"], answer: "Great Indian Bustard" },
    { question: "Which action best reduces human-wildlife conflict?", options: ["Keeping waste covered and following local wildlife advice", "Leaving food outdoors", "Chasing animals from settlements", "Ignoring wildlife alerts"], answer: "Keeping waste covered and following local wildlife advice" },
    { question: "Which protected area is recognized for the last remaining wild lions of Asia?", options: ["Gir National Park", "Kanha National Park", "Ranthambore National Park", "Sundarbans National Park"], answer: "Gir National Park" },
    { question: "Which of these is a major function of forests in the water cycle?", options: ["They help retain moisture and maintain rivers", "They create deserts", "They stop clouds from forming", "They destroy wetlands"], answer: "They help retain moisture and maintain rivers" },
    { question: "Which park is best known for open grasslands, rhinos, and elephant herds?", options: ["Kaziranga National Park", "Singalila National Park", "Great Himalayan National Park", "Periyar National Park"], answer: "Kaziranga National Park" },
    { question: "Which factor helps increase plant diversity in a protected forest?", options: ["Healthy habitat with low disturbance", "Heavy construction", "Regular burning", "Removing all animals"], answer: "Healthy habitat with low disturbance" },
    { question: "Which ecosystem is crucial for coastal protection and storm buffering?", options: ["Mangrove forest", "Open desert", "Snowfield", "Suburban lawn"], answer: "Mangrove forest" }
];

const weatherCodeLabels = {
    0: "Clear Sky", 1: "Mainly Sunny", 2: "Partly Cloudy", 3: "Overcast",
    45: "Foggy", 48: "Depositing Rime Fog",
    51: "Light Drizzle", 53: "Moderate Drizzle", 55: "Dense Drizzle",
    61: "Slight Rain", 63: "Moderate Rain", 65: "Heavy Rain",
    80: "Slight Showers", 81: "Moderate Showers", 82: "Violent Showers",
    95: "Thunderstorm"
};

const reportState = {
    userName: "",
    parksExplored: [],
    favouritePark: "",
    quizScore: null,
    quizPercentage: null,
    threatResult: "",
    conservationActions: [],
    ecoScore: null,
    date: "",
    tripPark: "",
    tripVisitors: null,
    tripDuration: null,
    tripBudget: null
};

// Utilities
const byId = (id) => document.getElementById(id);
const escapeHtml = (str) => String(str || "").replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[m]);
const money = (val) => `INR ${Number(val).toLocaleString("en-IN")}`;
const statusClass = (status) => `status-${String(status).replace(/\s+/g, "-")}`;
const imageSrc = (path) => {
    if (!path) return "";
    const value = String(path);
    if (value.startsWith("data:")) return value;
    return encodeURI(value);
};
const IMAGE_FALLBACK = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480"><rect width="800" height="480" fill="#dfeef2"/><text x="400" y="250" text-anchor="middle" fill="#637168" font-family="Segoe UI, Arial, sans-serif" font-size="28">Image unavailable</text></svg>'
);
const imgTag = (src, alt, extra = "") =>
    `<img src="${imageSrc(src)}" alt="${escapeHtml(alt)}" ${extra} onerror="this.onerror=null;this.src='${IMAGE_FALLBACK}'">`;

function applyTheme(theme) {
    const validTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", validTheme);
    const themeToggle = byId("theme-toggle");
    if (themeToggle) {
        const isDark = validTheme === "dark";
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "🌙" : "☀️";
        themeToggle.querySelector(".theme-toggle-label").textContent = isDark ? "Dark" : "Light";
    }
    try { localStorage.setItem("biodiversity-theme", validTheme); } catch (e) {}
}

function initializeTheme() {
    let savedTheme = "light";
    try {
        savedTheme = localStorage.getItem("biodiversity-theme") || "light";
    } catch (e) {}
    applyTheme(savedTheme);
    byId("theme-toggle")?.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        applyTheme(current === "dark" ? "light" : "dark");
    });
}

function setMobileNavOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    const toggle = byId("nav-toggle");
    if (toggle) toggle.setAttribute("aria-expanded", String(isOpen));
}

function refreshWildlifeMapSize() {
    if (!wildlifeMap || typeof wildlifeMap.invalidateSize !== "function") return;
    requestAnimationFrame(() => {
        wildlifeMap.invalidateSize();
        setTimeout(() => wildlifeMap.invalidateSize(), 220);
    });
}

// Scroll Intersection Observer
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                if (entry.target.id === "states" || entry.target.querySelector?.("#wildlife-map")) {
                    refreshWildlifeMapSize();
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function getSafeJsString(value) {
    return String(value || "").replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

// SVG Map Pin Generator for Explore Section
function getParkMapImage(park) {
    const latitude = Number(park.latitude);
    const longitude = Number(park.longitude);
    const pinX = 48 + ((longitude - 68) / 29) * 504;
    const pinY = 36 + ((37 - latitude) / 29) * 198;
    const svgId = `mapBg-${String(park.name).replace(/[^a-zA-Z0-9]/g, "")}`;
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" role="img" aria-label="Map location for ${escapeHtml(park.name)}">
            <defs>
                <linearGradient id="${svgId}" x1="0" x2="1">
                    <stop offset="0%" stop-color="#ddf2dc"/>
                    <stop offset="100%" stop-color="#cfead7"/>
                </linearGradient>
            </defs>
            <rect width="600" height="300" fill="url(#${svgId})"/>
            <g opacity="0.25" stroke="#7aa388" stroke-width="1">
                <path d="M0 60 H600 M0 120 H600 M0 180 H600 M0 240 H600"/>
                <path d="M100 0 V300 M200 0 V300 M300 0 V300 M400 0 V300 M500 0 V300"/>
            </g>
            <g fill="#a9d5b9" opacity="0.8">
                <path d="M80 220 C120 170, 150 150, 180 190 C210 220, 220 250, 250 230 C280 210, 310 180, 340 195 C380 215, 420 205, 460 170 C500 135, 520 100, 560 90 L560 300 L80 300 Z"/>
            </g>
            <g>
                <circle cx="${Math.max(35, Math.min(565, pinX))}" cy="${Math.max(40, Math.min(240, pinY))}" r="18" fill="#2f7d51" opacity="0.25"/>
                <path d="M${Math.max(35, Math.min(565, pinX))} ${Math.max(42, Math.min(242, pinY))} C ${Math.max(35, Math.min(565, pinX)) - 14} ${Math.max(42, Math.min(242, pinY)) - 16}, ${Math.max(35, Math.min(565, pinX)) - 18} ${Math.max(42, Math.min(242, pinY)) - 42}, ${Math.max(35, Math.min(565, pinX))} ${Math.max(42, Math.min(242, pinY)) - 54} C ${Math.max(35, Math.min(565, pinX)) + 18} ${Math.max(42, Math.min(242, pinY)) - 42}, ${Math.max(35, Math.min(565, pinX)) + 14} ${Math.max(42, Math.min(242, pinY)) - 16}, ${Math.max(35, Math.min(565, pinX))} ${Math.max(42, Math.min(242, pinY))} Z" fill="#2f7d51"/>
                <circle cx="${Math.max(35, Math.min(565, pinX))}" cy="${Math.max(42, Math.min(242, pinY)) - 34}" r="7" fill="#ffffff"/>
            </g>
            <g fill="#1d422f" font-family="Segoe UI, Arial, sans-serif" font-size="18" font-weight="700">
                <text x="24" y="34">${escapeHtml(park.name)}</text>
                <text x="24" y="280">${latitude.toFixed(2)}°N, ${longitude.toFixed(2)}°E (${escapeHtml(park.state)})</text>
            </g>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderParkMapGrid() {
    const grid = byId("park-map-grid");
    if (!grid) return;

    grid.innerHTML = nationalParks.map((park) => `
        <article class="park-map-card">
            ${imgTag(getParkMapImage(park), `Map of ${park.name}`)}
            <div class="park-map-card-body">
                <h3>${escapeHtml(park.name)}</h3>
                <p>${escapeHtml(park.state)}</p>
                <span class="pill">${park.latitude.toFixed(2)}°N, ${park.longitude.toFixed(2)}°E</span>
            </div>
        </article>
    `).join("");
}

function focusParkOnMap(parkName) {
    const park = nationalParks.find((p) => p.name === parkName);
    if (!park) return;

    byId("states")?.scrollIntoView({ behavior: "smooth" });
    if (wildlifeMap) {
        wildlifeMap.setView([park.latitude, park.longitude], 8, { animate: true });
        displayParkInfo(park);
        refreshWildlifeMapSize();
    }
}

const parkGalleryTimers = {};

function getParkGalleryImages(park) {
    const gallery = Array.isArray(park.gallery) ? park.gallery.filter((img) => typeof img === "string" && img.trim()) : [];
    const images = [];

    if (park.image) images.push(park.image);
    gallery.forEach((img) => {
        if (img && img !== park.image && !images.includes(img)) images.push(img);
    });

    while (images.length < 5) {
        const fallback = park.image || "";
        if (fallback && !images.includes(fallback)) images.push(fallback);
        else break;
    }

    if (images.length > 5) {
        return images.slice(0, 5);
    }

    while (images.length < 5) {
        images.push(images[0] || "");
    }

    return images.slice(0, 5);
}

function renderParkGallery(park) {
    const galleryImages = getParkGalleryImages(park);
    const galleryId = `park-gallery-${String(park.name).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

    return `
        <div class="park-gallery" data-gallery-id="${escapeHtml(galleryId)}" data-park-name="${escapeHtml(park.name)}" aria-label="Image gallery for ${escapeHtml(park.name)}">
            <button class="park-gallery-btn prev" type="button" aria-label="Previous image for ${escapeHtml(park.name)}" data-gallery-action="prev">‹</button>
            <div class="park-gallery-viewport">
                <div class="park-gallery-track" data-gallery-track="${escapeHtml(galleryId)}">
                    ${galleryImages.map((img, index) => `
                        <div class="park-gallery-slide" aria-label="Image ${index + 1} of ${galleryImages.length} for ${escapeHtml(park.name)}">
                            ${imgTag(img, `${park.name} image ${index + 1}`, 'loading="lazy"')}
                        </div>
                    `).join("")}
                </div>
            </div>
            <button class="park-gallery-btn next" type="button" aria-label="Next image for ${escapeHtml(park.name)}" data-gallery-action="next">›</button>
        </div>
    `;
}

function changeParkGallery(galleryEl, direction) {
    if (!galleryEl) return;
    const track = galleryEl.querySelector(".park-gallery-track");
    const slides = Array.from(galleryEl.querySelectorAll(".park-gallery-slide"));
    const galleryId = galleryEl.dataset.galleryId;
    if (!track || !slides.length) return;

    const state = parkGalleryTimers[galleryId] || { index: 0, timer: null };
    const nextIndex = (state.index + direction + slides.length) % slides.length;
    state.index = nextIndex;
    parkGalleryTimers[galleryId] = state;
    track.style.transform = `translateX(-${nextIndex * 100}%)`;
}

function clearParkGalleryTimer(galleryId) {
    if (!galleryId || !parkGalleryTimers[galleryId]) return;
    if (parkGalleryTimers[galleryId].timer) {
        clearInterval(parkGalleryTimers[galleryId].timer);
    }
    delete parkGalleryTimers[galleryId];
}

function initializeParkGallery(galleryEl) {
    if (!galleryEl) return;
    const galleryId = galleryEl.dataset.galleryId;
    if (!galleryId) return;

    clearParkGalleryTimer(galleryId);
    const track = galleryEl.querySelector(".park-gallery-track");
    const slides = Array.from(galleryEl.querySelectorAll(".park-gallery-slide"));
    if (!track || !slides.length) return;

    const state = { index: 0, timer: null };
    parkGalleryTimers[galleryId] = state;
    track.style.transform = "translateX(0%)";

    const prevBtn = galleryEl.querySelector(".park-gallery-btn.prev");
    const nextBtn = galleryEl.querySelector(".park-gallery-btn.next");

    prevBtn?.addEventListener("click", () => changeParkGallery(galleryEl, -1));
    nextBtn?.addEventListener("click", () => changeParkGallery(galleryEl, 1));

    galleryEl.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") changeParkGallery(galleryEl, -1);
        if (event.key === "ArrowRight") changeParkGallery(galleryEl, 1);
    });

    state.timer = setInterval(() => changeParkGallery(galleryEl, 1), 4000);
    galleryEl.tabIndex = 0;
}

// Explore Park Details
function explorePark() {
    Object.keys(parkGalleryTimers).forEach((galleryId) => clearParkGalleryTimer(galleryId));

    const parkName = byId("park-select").value;
    const result = byId("park-result");
    if (!parkName) {
        result.innerHTML = "";
        return;
    }

    const park = nationalParks.find((p) => p.name === parkName);
    if (!park) return;

    registerParkExploration(park.name);
    const mapImg = getParkMapImage(park);

    const allSpecies = getAllSpecies();
    const keySpecies = (park.species || [])
        .map((name) => allSpecies.find((s) => s.name.toLowerCase() === name.toLowerCase()))
        .filter(Boolean);

    const keyNames = new Set(keySpecies.map((s) => s.name.toLowerCase()));
    const otherSpecies = (park.otherAnimals || [])
        .map((name) => allSpecies.find((s) => s.name.toLowerCase() === name.toLowerCase()))
        .filter((s) => s && !keyNames.has(s.name.toLowerCase()));

    result.innerHTML = `
        <article class="park-card">
            ${renderParkGallery(park)}
            <div class="park-content">
                <h2>${escapeHtml(park.name)}</h2>
                <div class="park-meta">
                    <span class="pill">${escapeHtml(park.state)}</span>
                    <span class="pill">${escapeHtml(park.ecosystem)}</span>
                    <span class="pill">${park.latitude.toFixed(2)}°N, ${park.longitude.toFixed(2)}°E</span>
                </div>

                <div class="park-map-wrap" style="position: relative; margin: 18px 0; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden;">
                    ${imgTag(mapImg, `Location Map of ${park.name}`, 'style="width:100%; height:260px; object-fit:cover;"')}
                    <div style="position: absolute; bottom: 12px; right: 12px; display: flex; gap: 8px;">
                        <button class="btn btn-primary" type="button" style="padding: 6px 14px; font-size: 12px;" onclick="focusParkOnMap('${getSafeJsString(park.name)}')">🗺️ View on Regional Map</button>
                    </div>
                </div>

                <h3>Why It Matters</h3>
                <p>${escapeHtml(park.importance)}</p>

                ${keySpecies.length ? `
                    <div class="park-species-section">
                        <h3>🦁 Key Species</h3>
                        <p class="park-species-subtitle">Flagship wildlife of ${escapeHtml(park.name)}. Open a card for the full species profile.</p>
                        <div class="park-key-species-row">
                            ${keySpecies.map((s) => `
                                <article class="animal-card">
                                    ${imgTag(s.image, s.name, 'loading="lazy"')}
                                    <div class="animal-card-body">
                                        <h3>${escapeHtml(s.name)}</h3>
                                        <p><em>${escapeHtml(s.scientificName)}</em></p>
                                        <span class="status-badge ${statusClass(s.status)}">${escapeHtml(s.status)}</span>
                                        <p>${escapeHtml(s.habitat)}</p>
                                        <button class="btn btn-primary" type="button" onclick="showAnimal('${getSafeJsString(s.name)}')">Learn more</button>
                                    </div>
                                </article>
                            `).join("")}
                        </div>
                    </div>
                ` : ""}

                ${otherSpecies.length ? `
                    <div class="park-other-species-section">
                        <h3>🐾 Other Species Found Here</h3>
                        <p class="park-species-subtitle">Additional wildlife recorded in this park. Click a species name to open its flashcard.</p>
                        <ul class="park-other-species-list">
                            ${otherSpecies.map((s) => `
                                <li>
                                    <button class="park-other-species-name" type="button" onclick="showAnimal('${getSafeJsString(s.name)}')">
                                        ${escapeHtml(s.name)}
                                    </button>
                                </li>
                            `).join("")}
                        </ul>
                    </div>
                ` : ""}

                <h3>Nearby Attractions</h3>
                <ul class="park-list">${park.touristSpots.map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ul>

                <h3>Nearby Accommodation</h3>
                <ul class="park-list">${park.hotels.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>

                <div class="tourism-park-actions">
                    <button class="btn btn-secondary" type="button" onclick="selectRecommendedPark('${getSafeJsString(park.name)}')">✈️ Plan a Trip to this Park</button>
                    <button class="btn btn-quiet" type="button" onclick="scrollToResponsibleTourism()">🌿 Responsible Visit Tips</button>
                </div>
            </div>
        </article>
    `;

    const galleryEl = result.querySelector(".park-gallery");
    if (galleryEl) initializeParkGallery(galleryEl);
}

// Smart Weather Clothing Recommendation Engine
function getClothingAdvice(temp, weatherCode, isRain, windSpeed) {
    const clothes = [];

    // Core Safari Wear
    clothes.push("🌲 Neutral-colored safari attire (Khaki, olive, brown - avoid bright/neon colors)");
    clothes.push("🥾 Sturdy closed-toe walking/trekking shoes");

    // Temperature Logic
    if (temp >= 32) {
        clothes.push("👕 Ultra-breathable loose cotton/linen clothing");
        clothes.push("🧢 Wide-brimmed safari sunhat & high SPF sunscreen");
        clothes.push("🕶️ Polarized UV sunglasses & extra hydration");
    } else if (temp >= 22) {
        clothes.push("👕 Comfortable cotton shirts and quick-dry cargo trousers");
        clothes.push("🧢 Sun cap & sunglasses");
    } else if (temp >= 14) {
        clothes.push("🧥 Light fleece jacket or sweater for chilly morning/evening open-jeep drives");
        clothes.push("🧣 Light scarf or bandana (protects against morning dust and wind)");
    } else {
        clothes.push("🧤 Thermal base layer, warm fleece & windproof outer jacket");
        clothes.push("🧣 Woollen beanie/cap, gloves & neck warmer for cold open-top safaris");
    }

    // Precipitation & Rain
    if (isRain || [51, 53, 55, 61, 63, 65, 80, 81, 82, 95].includes(weatherCode)) {
        clothes.push("🌧️ Waterproof rain jacket or heavy-duty rain poncho");
        clothes.push("🎒 Waterproof backpack cover & dry bags for cameras");
    }

    // Wind & Dust
    if (windSpeed >= 20) {
        clothes.push("💨 Dust mask or buff gaiter (essential for unpaved forest tracks)");
    }

    return clothes;
}

function formatSunTime(isoString) {
    if (!isoString) return "—";
    const date = new Date(isoString);
    if (Number.isNaN(date.getTime())) return "—";
    return date.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });
}

function formatForecastDay(isoDate) {
    if (!isoDate) return "—";
    const date = new Date(`${isoDate}T12:00:00`);
    if (Number.isNaN(date.getTime())) return isoDate;
    return date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
}

function getWildlifeActivityWarning(temp, weatherCode, isRain, precipitation, windSpeed) {
    if ([95].includes(weatherCode) || precipitation >= 4) {
        return "Thunderstorms or heavy rain will push wildlife into dense cover. Expect quieter trails and keep a safe distance from waterlogged tracks.";
    }
    if (isRain || [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) {
        return "Rain is forcing animals into thick cover. Sightings may be slower — scan forest edges after showers when deer and predators briefly reappear.";
    }
    if ([45, 48].includes(weatherCode)) {
        return "Fog is reducing visibility. Wildlife may still be active at dawn, but stay with your guide and listen for calls rather than relying on long-distance views.";
    }
    if (temp >= 35) {
        return "Extreme heat is driving animals to waterholes, especially from late morning. Avoid midday walking and watch from shade near water, not on open roads.";
    }
    if (temp >= 32) {
        return "Heat is pushing wildlife toward waterholes and shaded riverbanks. Morning and late-afternoon drives offer the best activity before animals rest.";
    }
    if (windSpeed >= 25) {
        return "Strong wind makes animals more alert and likely to stay in cover. Approach quietly and scan leeward forest edges.";
    }
    if (temp <= 14) {
        return "Cool conditions favour morning movement. Predators and ungulates are often more visible on open meadows just after first light.";
    }
    return "Mild conditions support steady wildlife activity. Early morning and evening remain the strongest windows for safari sightings.";
}

function getPackingChecklist(temp, isRain, precipitation) {
    const items = [];
    if (isRain || precipitation > 0) {
        items.push("Waterproof rain jacket or poncho");
        items.push("Dry bag / camera rain cover");
    } else if (temp >= 32) {
        items.push("Wide-brim hat & high-SPF sunscreen");
        items.push("Reusable water bottle (1L+)");
    } else if (temp <= 16) {
        items.push("Warm fleece or windproof jacket");
        items.push("Beanie / gloves for open-jeep drives");
    } else {
        items.push("Neutral cotton safari shirt & sun cap");
        items.push("Reusable water bottle");
    }

    if (temp >= 32 && (isRain || precipitation > 0)) {
        items.push("Electrolyte sachets & extra hydration");
    } else if (temp <= 16 && (isRain || precipitation > 0)) {
        items.push("Closed-toe waterproof trekking shoes");
    } else {
        items.push("Sturdy closed-toe walking shoes");
    }

    return items.slice(0, 3);
}

function getUvLabel(uvIndex) {
    if (uvIndex == null || Number.isNaN(uvIndex)) return "N/A";
    if (uvIndex >= 11) return `${uvIndex} (Extreme)`;
    if (uvIndex >= 8) return `${uvIndex} (Very High)`;
    if (uvIndex >= 6) return `${uvIndex} (High)`;
    if (uvIndex >= 3) return `${uvIndex} (Moderate)`;
    return `${uvIndex} (Low)`;
}

// Live Weather Request with Clothing Output
async function getWeather() {
    const parkName = byId("trip-park")?.value;
    const result = byId("weather-result");
    const btn = byId("weather-button");

    if (!result) return;

    if (!parkName) {
        result.innerHTML = `<div class="placeholder">Please select a national park above to check travel weather.</div>`;
        return;
    }

    const park = nationalParks.find((p) => p.name === parkName);
    if (!park) return;

    if (btn) {
        btn.disabled = true;
        btn.textContent = "Fetching live weather...";
    }

    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${park.latitude}&longitude=${park.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&daily=sunrise,sunset,uv_index_max,temperature_2m_max,temperature_2m_min&forecast_days=5&timezone=auto`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch weather");

        const data = await res.json();
        const curr = data.current;
        if (!curr || typeof curr.temperature_2m !== "number") throw new Error("Incomplete weather data");
        const daily = data.daily || {};
        const temp = Math.round(curr.temperature_2m);
        const feelsLike = Math.round(curr.apparent_temperature);
        const humidity = Math.round(curr.relative_humidity_2m);
        const windSpeed = Math.round(curr.wind_speed_10m);
        const precipitation = Number(curr.precipitation) || 0;
        const isRain = precipitation > 0;
        const condition = weatherCodeLabels[curr.weather_code] || "Clear / Mild";
        const uvMax = daily.uv_index_max && daily.uv_index_max[0] != null ? Math.round(daily.uv_index_max[0]) : null;

        const sunrise = formatSunTime(daily.sunrise && daily.sunrise[0]);
        const sunset = formatSunTime(daily.sunset && daily.sunset[0]);
        const wildlifeWarning = getWildlifeActivityWarning(temp, curr.weather_code, isRain, precipitation, windSpeed);
        const packing = getPackingChecklist(temp, isRain, precipitation);
        const clothing = getClothingAdvice(temp, curr.weather_code, isRain, windSpeed);

        const forecastDays = (daily.time || []).slice(0, 5);
        const forecastHtml = forecastDays.map((day, i) => {
            const high = daily.temperature_2m_max && daily.temperature_2m_max[i] != null ? Math.round(daily.temperature_2m_max[i]) : "—";
            const low = daily.temperature_2m_min && daily.temperature_2m_min[i] != null ? Math.round(daily.temperature_2m_min[i]) : "—";
            return `<div style="padding: 8px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); text-align: center;">
                <div style="font-size: 12px; color: var(--muted);">${escapeHtml(formatForecastDay(day))}</div>
                <div style="font-size: 13px; margin-top: 4px;"><strong>${high}°</strong> / ${low}°</div>
            </div>`;
        }).join("");

        const insightBox = "margin-top: 14px; padding: 12px; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);";
        const insightTitle = "color: var(--forest); display: block; margin-bottom: 6px;";

        result.innerHTML = `
            <div class="weather-result" style="animation: heroFadeUp 0.3s ease;">
                <h4>🌤️ Live Weather in ${escapeHtml(park.name)}</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 10px 0; font-size: 14px;">
                    <div>Temperature: <strong>${temp}°C</strong> (Feels: ${feelsLike}°C)</div>
                    <div>Condition: <strong>${condition}</strong></div>
                    <div>Humidity: <strong>${humidity}%</strong></div>
                    <div>Wind: <strong>${windSpeed} km/h</strong></div>
                    <div>Precipitation: <strong>${precipitation} mm</strong></div>
                    <div>UV Index (max): <strong>${escapeHtml(getUvLabel(uvMax))}</strong></div>
                </div>

                <div style="${insightBox}">
                    <strong style="${insightTitle}">🌅 Gate Timings</strong>
                    <p style="margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6;">
                        Morning window around <strong>sunrise (${sunrise})</strong> · Evening close around <strong>sunset (${sunset})</strong>.
                        Plan first-entry safaris near dawn and return before last light.
                    </p>
                </div>

                <div style="${insightBox}">
                    <strong style="${insightTitle}">🦌 Wildlife Activity Warning</strong>
                    <p style="margin: 0; color: var(--muted); font-size: 13px; line-height: 1.6;">${escapeHtml(wildlifeWarning)}</p>
                </div>

                <div style="${insightBox}">
                    <strong style="${insightTitle}">🧳 Packing Checklist</strong>
                    <ul style="margin: 0; padding-left: 18px; color: var(--muted); font-size: 13px; line-height: 1.6;">
                        ${packing.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                    </ul>
                </div>

                ${forecastHtml ? `
                <div style="${insightBox}">
                    <strong style="${insightTitle}">📅 5-Day Forecast (High / Low)</strong>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(72px, 1fr)); gap: 6px; margin-top: 8px; font-size: 13px;">
                        ${forecastHtml}
                    </div>
                </div>` : ""}

                <div style="${insightBox}">
                    <strong style="${insightTitle}">🎒 Recommended Clothing & Packing:</strong>
                    <ul style="margin: 0; padding-left: 18px; color: var(--muted); font-size: 13px; line-height: 1.6;">
                        ${clothing.map((c) => `<li>${c}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
    } catch (e) {
        result.innerHTML = `
            <div class="weather-result">
                <h4>🌤️ Travel Weather: ${escapeHtml(park.name)}</h4>
                <p>Live weather is unavailable right now. Standard seasonal conditions apply. Pack earth-toned safari wear, sun protection, and comfortable walking shoes.</p>
            </div>
        `;
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = "Check travel weather";
        }
    }
}

// Update Official Links & Hotel Booking Panel in Planner
function updateBookingLinks(selectedPark) {
    const bookingContainer = byId("booking-links");
    if (!bookingContainer) return;

    if (!selectedPark) {
        bookingContainer.innerHTML = "";
        return;
    }

    const links = parkBookingLinks[selectedPark];
    if (!links) {
        bookingContainer.innerHTML = "";
        return;
    }

    const hotelSearchUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(links.hotelQuery)}`;

    bookingContainer.innerHTML = `
        <div class="booking-links-panel" style="animation: heroFadeUp 0.3s ease; margin-top: 18px;">
            <h3>🔗 Booking & Travel Links for ${escapeHtml(selectedPark)}</h3>
            <p style="margin-bottom: 12px;">Official government safari portals and verified hotel reservations.</p>
            <div class="booking-link-actions" style="display: grid; gap: 10px;">
                <a class="btn btn-primary" href="${links.official}" target="_blank" rel="noopener noreferrer">
                    🎫 Official Safari & Permit Booking
                </a>
                <a class="btn btn-secondary" href="${hotelSearchUrl}" target="_blank" rel="noopener noreferrer">
                    🏨 Check Nearby Hotels & Jungle Resorts
                </a>
                <a class="btn btn-quiet" href="${links.maps}" target="_blank" rel="noopener noreferrer">
                    📍 Get Google Maps Directions
                </a>
            </div>
        </div>
    `;
}

function loadParkCosts() {
    const selected = byId("trip-park").value;
    updateBookingLinks(selected);

    const costs = parkCosts[selected];
    if (!costs) return;

    byId("hotel-cost").value = costs.hotelPerNight;
    byId("food-cost").value = costs.foodPerDay;
    byId("activity-cost").value = costs.activities;
    byId("ticket-cost").value = costs.ticket;
    byId("guide-cost").value = costs.guide;
}

function calculateTrip() {
    const park = byId("trip-park").value;
    const days = Math.max(1, Number(byId("days").value) || 1);
    const visitors = Math.min(50, Math.max(1, Number(byId("visitors").value) || 1));
    const transport = Math.max(0, Number(byId("transport-cost").value) || 0);
    const hotel = Math.max(0, Number(byId("hotel-cost").value) || 0);
    const food = Math.max(0, Number(byId("food-cost").value) || 0);
    const ticket = Math.max(0, Number(byId("ticket-cost").value) || 0);
    const guide = Math.max(0, Number(byId("guide-cost").value) || 0);
    const activity = Math.max(0, Number(byId("activity-cost").value) || 0);

    const result = byId("trip-result");
    updateBookingLinks(park);

    if (!park) {
        result.className = "result-container placeholder";
        result.textContent = "Please select a national park first.";
        return;
    }

    const roomCount = Math.max(1, Math.ceil(visitors / 2));
    const totalHotel = hotel * days * roomCount;
    const totalFood = food * days * visitors;
    const totalTicket = ticket * visitors;
    const grandTotal = transport + totalHotel + totalFood + totalTicket + guide + activity;

    reportState.tripPark = park;
    reportState.tripVisitors = visitors;
    reportState.tripDuration = days;
    reportState.tripBudget = grandTotal;
    registerParkExploration(park);
    registerConservationAction(`Estimated trip cost for ${park}`);

    result.className = "result-container";
    result.innerHTML = `
        <div class="trip-summary" id="trip-summary-card" style="animation: heroFadeUp 0.3s ease;">
            <div class="trip-summary-header">
                <h3>Estimated Cost for ${escapeHtml(park)}</h3>
                <button class="btn btn-secondary download-cost-btn" type="button" onclick="downloadTripSummaryImage()">Download cost image</button>
            </div>
            <div class="summary-item"><span>Number of Visitors</span><strong>${visitors}</strong></div>
            <div class="summary-item"><span>Duration</span><strong>${days} day(s)</strong></div>
            <div class="summary-item"><span>Transport</span><strong>${money(transport)}</strong></div>
            <div class="summary-item"><span>Accommodation (${days}n)</span><strong>${money(totalHotel)}</strong></div>
            <div class="summary-item"><span>Food (${days}d × ${visitors})</span><strong>${money(totalFood)}</strong></div>
            <div class="summary-item"><span>Entry Tickets (${visitors})</span><strong>${money(totalTicket)}</strong></div>
            <div class="summary-item"><span>Guide</span><strong>${money(guide)}</strong></div>
            <div class="summary-item"><span>Safari / Activities</span><strong>${money(activity)}</strong></div>
            <div class="total-expense"><span>Total Estimated Budget</span><strong>${money(grandTotal)}</strong></div>
        </div>
    `;
}

function downloadTripSummaryImage() {
    const summaryCard = byId("trip-summary-card");
    if (!summaryCard) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const width = 1000;
    const height = 780;
    const padding = 52;

    canvas.width = width;
    canvas.height = height;
    context.fillStyle = "#f3f8f4";
    context.fillRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#e6f4e8");
    gradient.addColorStop(1, "#ffffff");
    context.fillStyle = gradient;
    context.fillRect(30, 30, width - 60, height - 60);

    context.strokeStyle = "#cfe3d3";
    context.lineWidth = 2;
    context.strokeRect(30, 30, width - 60, height - 60);
    context.fillStyle = "#1d4d39";
    context.font = "700 42px 'Segoe UI', Arial, sans-serif";
    context.fillText("Biodiversity Explorer", 60, 120);
    context.fillStyle = "#1d422f";
    context.font = "700 34px 'Segoe UI', Arial, sans-serif";
    context.fillText("Trip Cost Summary", 60, 178);

    const rows = [...summaryCard.querySelectorAll(".summary-item, .total-expense")];
    let y = 240;
    rows.forEach((row) => {
        const label = row.querySelector("span")?.textContent?.trim() || "";
        const value = row.querySelector("strong")?.textContent?.trim() || "";
        const isTotal = row.classList.contains("total-expense");

        context.fillStyle = "#1d422f";
        context.font = "600 24px 'Segoe UI', Arial, sans-serif";
        context.fillText(label, 60, y + 8);
        context.fillStyle = isTotal ? "#ffffff" : "#0f3d2d";
        context.font = isTotal ? "800 30px 'Segoe UI', Arial, sans-serif" : "700 24px 'Segoe UI', Arial, sans-serif";
        const valueWidth = context.measureText(value).width;
        context.fillText(value, width - padding - valueWidth, y + 8);

        context.strokeStyle = isTotal ? "rgba(255,255,255,0.3)" : "#dfece3";
        context.beginPath();
        context.moveTo(60, y + 22);
        context.lineTo(width - 60, y + 22);
        context.stroke();
        y += 76;
    });

    const link = document.createElement("a");
    link.download = "wildlife-trip-cost-summary.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function getDistance() {
    const parkName = byId("trip-park")?.value;
    const status = byId("location-status");
    if (!status) return;
    if (!parkName) {
        status.textContent = "Please select a park first.";
        return;
    }
    if (!navigator.geolocation) {
        status.textContent = "Geolocation is not supported by your browser.";
        return;
    }
    status.textContent = "Locating...";
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const park = nationalParks.find((p) => p.name === parkName);
            if (park) {
                const dist = Math.round(calculateDistance(pos.coords.latitude, pos.coords.longitude, park.latitude, park.longitude));
                byId("distance").value = dist;
                status.textContent = `Approximate distance: ${dist} km`;
            }
        },
        () => { status.textContent = "Location permission denied."; }
    );
}

function findNearestPark() {
    const status = byId("location-status");
    if (!status) return;
    if (!navigator.geolocation) {
        status.textContent = "Geolocation not supported.";
        return;
    }
    status.textContent = "Finding nearest park...";
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const nearest = nationalParks.map((p) => ({
                ...p,
                distance: calculateDistance(pos.coords.latitude, pos.coords.longitude, p.latitude, p.longitude)
            })).sort((a, b) => a.distance - b.distance)[0];

            if (nearest) {
                byId("trip-park").value = nearest.name;
                loadParkCosts();
                byId("distance").value = Math.round(nearest.distance);
                status.textContent = `Nearest: ${nearest.name} (${Math.round(nearest.distance)} km away)`;
            }
        },
        () => { status.textContent = "Location permission denied."; }
    );
}

function selectRecommendedPark(parkName) {
    const tripPark = byId("trip-park");
    if (tripPark) {
        tripPark.value = parkName;
        loadParkCosts();
    }
    byId("planner")?.scrollIntoView({ behavior: "smooth" });
}

function getAllSpecies() {
    const extraSpecies = Object.entries(otherAnimalDetails).map(([name, details]) => ({
        name,
        scientificName: details.scientificName || "",
        status: details.status || "Vulnerable",
        habitat: details.habitat || "",
        image: details.image || "",
        states: details.states || [],
        nationalParks: details.nationalParks || [],
        description: details.description || "",
        threats: details.threats || "",
        importance: details.importance || ""
    }));
    return [...animals, ...extraSpecies];
}

function displayAnimals(list = getAllSpecies()) {
    const container = byId("animal-container");
    if (!container) return;

    if (!list.length) {
        container.innerHTML = `<div class="no-results"><h3>No species found</h3><p>Try clearing or adjusting filters.</p></div>`;
        return;
    }

    container.innerHTML = list.map((a) => `
        <article class="animal-card">
            ${imgTag(a.image, a.name, 'loading="lazy"')}
            <div class="animal-card-body">
                <h3>${escapeHtml(a.name)}</h3>
                <p><em>${escapeHtml(a.scientificName)}</em></p>
                <span class="status-badge ${statusClass(a.status)}">${escapeHtml(a.status)}</span>
                <p>${escapeHtml(a.habitat)}</p>
                <button class="btn btn-primary" type="button" onclick="showAnimal('${getSafeJsString(a.name)}')">Learn more</button>
            </div>
        </article>
    `).join("");
}

function filterAnimals() {
    const search = byId("animal-search");
    const statusEl = byId("status-filter");
    const habitatEl = byId("habitat-filter");
    if (!search || !statusEl || !habitatEl) return;

    const query = search.value.toLowerCase().trim();
    const status = statusEl.value;
    const state = habitatEl.value;

    const filtered = getAllSpecies().filter((a) => {
        const matchesName = !query || a.name.toLowerCase().includes(query) || a.scientificName.toLowerCase().includes(query);
        const matchesStatus = !status || a.status === status;
        const matchesState = !state || (a.states && a.states.includes(state));
        return matchesName && matchesStatus && matchesState;
    });

    displayAnimals(filtered);
}

function resetFilters() {
    byId("animal-search").value = "";
    byId("status-filter").value = "";
    byId("habitat-filter").value = "";
    displayAnimals();
}

function findExplorablePark(areaName) {
    const needle = String(areaName || "").trim().toLowerCase();
    if (!needle) return null;
    return nationalParks.find((p) => p.name.toLowerCase() === needle) || null;
}

function openParkExplorer(parkName) {
    const park = findExplorablePark(parkName);
    if (!park) return;

    closePopup();
    const select = byId("park-select");
    if (select) {
        select.value = park.name;
        explorePark();
    }
    byId("parks")?.scrollIntoView({ behavior: "smooth" });
}

function renderProtectedAreas(animal) {
    const areas = (animal.protectedAreas || animal.nationalParks || []).filter(Boolean);
    if (!areas.length) return "";

    const items = areas.map((name, index) => {
        const park = findExplorablePark(name);
        const label = escapeHtml(name);
        const sep = index < areas.length - 1
            ? `<span class="protected-area-sep" aria-hidden="true"> • </span>`
            : "";

        if (park) {
            return `<button type="button" class="protected-area-link" data-open-park="${escapeHtml(park.name)}">${label}</button>${sep}`;
        }
        return `<span class="protected-area-text">${label}</span>${sep}`;
    }).join("");

    return `
        <div class="protected-areas">
            <p><strong>Protected Areas:</strong></p>
            <div class="protected-area-list">${items}</div>
        </div>
    `;
}

function showAnimal(name) {
    const all = getAllSpecies();
    const animal = all.find((a) => a.name === name);
    if (!animal) return;

    const popup = byId("animal-popup");
    if (!popup) return;
    popup.innerHTML = `
        <article class="popup-content" role="dialog" aria-modal="true">
            <button class="close-button" type="button" onclick="closePopup()" aria-label="Close">&times;</button>
            ${imgTag(animal.image, animal.name)}
            <div class="popup-body">
                <h2>${escapeHtml(animal.name)}</h2>
                <p><em>${escapeHtml(animal.scientificName)}</em></p>
                <span class="status-badge ${statusClass(animal.status)}">${escapeHtml(animal.status)}</span>
                <p style="margin-top:12px;"><strong>Habitat:</strong> ${escapeHtml(animal.habitat)}</p>
                ${renderProtectedAreas(animal)}
                <p>${escapeHtml(animal.description)}</p>
                <h3>Key Threats</h3>
                <p>${escapeHtml(animal.threats)}</p>
                <h3>Conservation Importance</h3>
                <p>${escapeHtml(animal.importance)}</p>
            </div>
        </article>
    `;
    popup.querySelectorAll("[data-open-park]").forEach((button) => {
        button.addEventListener("click", () => openParkExplorer(button.dataset.openPark));
    });
    popup.classList.add("is-open");
    popup.setAttribute("aria-hidden", "false");
}

function closePopup() {
    const popup = byId("animal-popup");
    if (!popup) return;
    popup.classList.remove("is-open");
    popup.setAttribute("aria-hidden", "true");
}

function exploreBiodiversity() {
    byId("explore")?.scrollIntoView({ behavior: "smooth" });
}

function getRecommendation() {
    const selectedAnimals = Array.from(document.querySelectorAll('input[name="animal"]:checked')).map((el) => el.value);
    const selectedEcosystem = document.querySelector('input[name="ecosystem"]:checked')?.value;
    const selectedActivity = document.querySelector('input[name="activity"]:checked')?.value;
    const selectedSeason = document.querySelector('input[name="season"]:checked')?.value;

    if (!selectedAnimals.length || !selectedEcosystem || !selectedActivity || !selectedSeason) {
        alert("Please answer all questions to generate a tailored park recommendation.");
        return;
    }

    const animalLabels = {
        tiger: "Tigers",
        elephant: "Elephants",
        panda: "Red Pandas",
        rhino: "Rhinos",
        birds: "Rare Birds",
        deer: "Deer & Herbivores",
        aquatic: "River Wildlife",
        lion: "Asiatic Lions"
    };
    const ecosystemLabels = {
        tropical: "Tropical Forests",
        grassland: "Grasslands & Wetlands",
        mountain: "Mountain Forests",
        dry: "Dry Deciduous Forests"
    };
    const activityLabels = {
        safari: "Jeep Safari",
        trekking: "Trekking & Hiking",
        boating: "Boating & Lakes",
        photography: "Wildlife Photography"
    };

    let bestPark = null;
    let bestScore = -1;
    let reasons = [];
    const rankedParks = [];

    for (const [parkName, data] of Object.entries(parkRecommendationData)) {
        let score = 0;
        let parkReasons = [];

        const matchingAnimals = selectedAnimals.filter((a) => data.animals.includes(a));
        if (matchingAnimals.length > 0) {
            const animalScore = Math.min(45, 25 + matchingAnimals.length * 10);
            score += animalScore;
            const names = matchingAnimals.map((a) => animalLabels[a] || a).join(", ");
            parkReasons.push(`Hosts your chosen wildlife: ${names}.`);
        } else {
            score += 10;
        }

        if (data.ecosystem === selectedEcosystem) {
            score += 30;
            parkReasons.push(`Matches your preferred ${ecosystemLabels[selectedEcosystem] || selectedEcosystem} ecosystem.`);
        }

        if (data.activities.includes(selectedActivity)) {
            score += 15;
            parkReasons.push(`Ideal destination for ${activityLabels[selectedActivity] || selectedActivity}.`);
        }

        if (data.bestSeason === selectedSeason || selectedSeason === "any" || data.bestSeason === "any") {
            score += 10;
            parkReasons.push(`Great visiting conditions during your chosen season.`);
        }

        rankedParks.push({ parkName, score, parkReasons, matchingAnimals, data });

        if (score > bestScore) {
            bestScore = score;
            bestPark = parkName;
            reasons = parkReasons;
        }
    }

    rankedParks.sort((a, b) => b.score - a.score);

    const resultBox = byId("recommendation-result");
    const content = byId("recommendation-content");
    if (!resultBox || !content) return;
    const park = nationalParks.find((p) => p.name === bestPark);
    const relatedParks = rankedParks
        .filter((item) => item.parkName !== bestPark && (item.matchingAnimals.length > 0 || item.data.ecosystem === selectedEcosystem))
        .slice(0, 2);

    const selectedSummary = [
        ...selectedAnimals.map((a) => animalLabels[a]),
        ecosystemLabels[selectedEcosystem],
        activityLabels[selectedActivity]
    ].filter(Boolean);

    content.innerHTML = `
        <div class="reco-panel">
            <div class="reco-intro">
                <span class="reco-kicker">Recommended for you</span>
                <h3>Smart Recommendations</h3>
                <p>These parks and species were matched to your current selection, not a random list.</p>
                <div class="reco-summary" aria-label="Based on your selection">
                    <span class="reco-summary-label">Based on your selection</span>
                    ${selectedSummary.map((item) => `<span class="reco-chip">${escapeHtml(item)}</span>`).join("")}
                </div>
            </div>

            <div class="reco-block">
                <div class="reco-block-heading">
                    <h4>National Parks</h4>
                    <span class="reco-badge">Recommended for You</span>
                </div>
                ${renderRecommendedParkCard(park, reasons, bestScore, true)}
            </div>

            ${relatedParks.length ? `
                <div class="reco-block">
                    <div class="reco-block-heading">
                        <h4>More parks that fit</h4>
                        <span class="reco-badge reco-badge-soft">You May Also Like</span>
                    </div>
                    <div class="reco-card-grid">
                        ${relatedParks.map((item) => {
                            const relatedPark = nationalParks.find((p) => p.name === item.parkName);
                            return renderRecommendedParkCard(relatedPark, item.parkReasons, item.score, false);
                        }).join("")}
                    </div>
                </div>
            ` : ""}

            ${renderRecommendedSpeciesSection(selectedAnimals, selectedEcosystem, park)}
        </div>
    `;
    resultBox.style.display = "block";
    resultBox.scrollIntoView({ behavior: "smooth" });
}

function getSpeciesForInterests(selectedAnimals, selectedEcosystem) {
    const interestMap = {
        tiger: ["Bengal Tiger"],
        elephant: ["Asian Elephant"],
        panda: ["Red Panda"],
        rhino: ["Greater One-horned Rhinoceros"],
        deer: ["Chital", "Sambar", "Gaur"],
        aquatic: ["Ganges River Dolphin", "Gharial"],
        lion: ["Asiatic Lion"],
    };

    const names = [];
    selectedAnimals.forEach((tag) => {
        if (tag === "birds") {
            if (selectedEcosystem === "grassland") names.push("Sarus Crane", "Great Indian Bustard");
            else if (selectedEcosystem === "dry") names.push("Great Indian Bustard", "Indian Peacock");
            else if (selectedEcosystem === "mountain") names.push("Indian Peacock");
            else names.push("Indian Peacock", "Sarus Crane");
        } else {
            names.push(...(interestMap[tag] || []));
        }
    });

    const allSpecies = getAllSpecies();
    return [...new Set(names)]
        .map((name) => allSpecies.find((species) => species.name === name))
        .filter(Boolean)
        .slice(0, 4);
}

function getRelatedParkSpecies(park, excludeNames) {
    if (!park) return [];
    const excluded = new Set((excludeNames || []).map((name) => name.toLowerCase()));
    const allSpecies = getAllSpecies();
    const parkSpeciesNames = [...(park.species || []), ...(park.otherAnimals || [])];

    return [...new Set(parkSpeciesNames)]
        .map((name) => allSpecies.find((species) => species.name.toLowerCase() === name.toLowerCase()))
        .filter((species) => species && !excluded.has(species.name.toLowerCase()))
        .slice(0, 2);
}

function renderRecommendedParkCard(park, reasons, score, featured) {
    if (!park) return "";
    const reason = reasons[0] || park.importance;
    const highlight = (parkRecommendationData[park.name]?.highlights || [])[0];
    const cardClass = featured ? "reco-card reco-card-featured" : "reco-card";

    return `
        <article class="${cardClass}">
            <div class="reco-card-media">
                ${imgTag(park.image, park.name, 'loading="lazy"')}
            </div>
            <div class="reco-card-body">
                <h5>${escapeHtml(park.name)}</h5>
                <p class="reco-match">${score}% match</p>
                <p class="reco-reason">${escapeHtml(reason)}</p>
                <p class="reco-meta">${escapeHtml(park.ecosystem)} · ${escapeHtml(park.state)}</p>
                ${highlight ? `<p class="reco-meta">${escapeHtml(highlight)}</p>` : ""}
                <div class="reco-card-actions">
                    <button class="btn btn-primary" type="button" onclick="openParkExplorer('${getSafeJsString(park.name)}')">Explore</button>
                    ${featured ? `<button class="btn btn-secondary" type="button" onclick="selectRecommendedPark('${getSafeJsString(park.name)}')">Plan trip</button>` : ""}
                </div>
            </div>
        </article>
    `;
}

function renderRecommendedSpeciesCard(species, reason) {
    const protectedArea = (species.nationalParks || [])[0] || species.habitat;
    return `
        <article class="reco-card reco-card-species">
            <div class="reco-card-media">
                ${imgTag(species.image, species.name, 'loading="lazy"')}
            </div>
            <div class="reco-card-body">
                <h5>${escapeHtml(species.name)}</h5>
                <p class="reco-reason">${escapeHtml(reason)}</p>
                <p class="reco-meta">${escapeHtml(species.habitat)}</p>
                <p class="reco-meta">${escapeHtml(protectedArea)}</p>
                <div class="reco-card-actions">
                    <button class="btn btn-primary" type="button" onclick="showAnimal('${getSafeJsString(species.name)}')">Explore</button>
                </div>
            </div>
        </article>
    `;
}

function renderRecommendedSpeciesSection(selectedAnimals, selectedEcosystem, topPark) {
    const selectedSpecies = getSpeciesForInterests(selectedAnimals, selectedEcosystem);
    const relatedSpecies = getRelatedParkSpecies(topPark, selectedSpecies.map((species) => species.name));
    const reasonByName = {
        "Bengal Tiger": "Matches your interest in tigers.",
        "Asian Elephant": "Matches your interest in elephants.",
        "Red Panda": "Matches your interest in red pandas.",
        "Greater One-horned Rhinoceros": "Matches your interest in rhinos.",
        "Indian Peacock": "Suggested from your interest in rare birds.",
        "Great Indian Bustard": "Suggested from your interest in rare birds and open habitats.",
        "Sarus Crane": "Suggested from your interest in wetland and grassland birds.",
        "Chital": "Suggested from your interest in deer and herbivores.",
        "Sambar": "Suggested from your interest in deer and herbivores.",
        "Gaur": "Suggested from your interest in large herbivores.",
        "Ganges River Dolphin": "Matches your interest in river wildlife.",
        "Asiatic Lion": "Matches your interest in Asiatic lions.",
    };

    if (!selectedSpecies.length && !relatedSpecies.length) {
        if (selectedAnimals.includes("lion") && topPark) {
            return `
                <div class="reco-block">
                    <div class="reco-block-heading">
                        <h4>Species</h4>
                        <span class="reco-badge reco-badge-soft">Based on Your Selection</span>
                    </div>
                    <p class="reco-empty-note">Asiatic lions are best explored through ${escapeHtml(topPark.name)}, the last natural home of this species in our park guide.</p>
                </div>
            `;
        }
        return "";
    }

    return `
        <div class="reco-block">
            ${selectedSpecies.length ? `
                <div class="reco-block-heading">
                    <h4>Species</h4>
                    <span class="reco-badge reco-badge-soft">Based on Your Selection</span>
                </div>
                <div class="reco-card-grid">
                    ${selectedSpecies.map((species) => renderRecommendedSpeciesCard(
                        species,
                        reasonByName[species.name] || "Matched to your selected wildlife interests."
                    )).join("")}
                </div>
            ` : ""}
            ${relatedSpecies.length ? `
                <div class="reco-block-heading reco-block-heading-follow">
                    <h4>Wildlife in your top park</h4>
                    <span class="reco-badge reco-badge-soft">You May Also Like</span>
                </div>
                <div class="reco-card-grid">
                    ${relatedSpecies.map((species) => renderRecommendedSpeciesCard(
                        species,
                        `Also found in ${topPark.name}, your top park match.`
                    )).join("")}
                </div>
            ` : ""}
        </div>
    `;
}

// Threat Simulator
function buildForestScene() {
    const scene = byId("forest-scene");
    if (!scene || scene.dataset.ready === "true") return;

    for (let i = 0; i < 16; i++) {
        const tree = document.createElement("div");
        tree.className = "tree";
        tree.innerHTML = '<span class="trunk"></span><span class="crown"></span>';
        tree.style.left = `${(i * 19 + 8) % 94 + 3}%`;
        tree.style.bottom = `${18 + (i % 4) * 7}px`;
        tree.style.transform = `scale(${0.7 + (i % 5) * 0.12})`;
        scene.appendChild(tree);
    }
    scene.dataset.ready = "true";
}

function updateThreatSimulator() {
    const slider = byId("forest-slider");
    if (!slider) return;
    const coverage = Number(slider.value);
    const coverageEl = byId("forest-coverage-value");
    if (coverageEl) coverageEl.textContent = coverage;
    const compareForest = byId("compare-forest");
    if (compareForest) compareForest.textContent = `${coverage}%`;

    const label = coverage >= 75 ? "Healthy" : coverage >= 50 ? "Moderate" : coverage >= 25 ? "Major" : "Severe";
    const food = coverage >= 70 ? "Strong" : coverage >= 40 ? "Limited" : "Scarce";
    const stability = coverage >= 75 ? "Stable" : coverage >= 45 ? "Stressed" : "Unstable";
    const habitat = coverage >= 60 ? "Good" : "Degraded";
    const habitatPressure = coverage >= 60 ? "Low" : coverage >= 35 ? "Moderate" : "High";
    const recovery = coverage >= 60 ? "High" : coverage >= 30 ? "Medium" : "Low";

    const healthEl = byId("forest-health-value");
    if (healthEl) healthEl.textContent = `${label} (${coverage}%)`;
    const habitatEl = byId("habitat-value");
    if (habitatEl) habitatEl.textContent = `${habitat} (${Math.max(0, coverage - 10)}%)`;
    const foodEl = byId("food-value");
    if (foodEl) foodEl.textContent = food;
    const stabilityEl = byId("stability-value");
    if (stabilityEl) stabilityEl.textContent = stability;
    const compareHabitat = byId("compare-habitat");
    if (compareHabitat) compareHabitat.textContent = habitatPressure;
    const compareRecovery = byId("compare-recovery");
    if (compareRecovery) compareRecovery.textContent = recovery;

    reportState.threatResult = `${label} forest cover at ${coverage}%`;

    document.querySelectorAll(".impact-pill").forEach((pill) => {
        pill.classList.toggle("active", pill.textContent.trim() === label);
    });

    const trees = document.querySelectorAll(".tree");
    trees.forEach((tree, idx) => {
        const visible = idx < Math.max(2, Math.round((coverage / 100) * trees.length));
        const rot = (idx % 2 === 0 ? 1 : -1) * (100 - coverage) * 0.05;
        tree.style.opacity = visible ? String(0.4 + (coverage / 100) * 0.6) : "0.1";
        tree.style.transform = visible ? `scale(${0.7 + (coverage / 100) * 0.5}) rotate(${rot}deg)` : "scale(0.3)";
    });
}

function restoreForest() {
    const slider = byId("forest-slider");
    if (!slider) return;
    slider.value = String(Math.min(100, Number(slider.value) + 20));
    updateThreatSimulator();
    registerConservationAction("Simulated reforestation recovery");
}

// Quiz
let currentQuiz = [];

function startQuiz() {
    const shuffledBank = [...quizQuestionBank].sort(() => 0.5 - Math.random());
    currentQuiz = shuffledBank.slice(0, 10).map((q) => {
        const shuffledOptions = [...q.options].sort(() => 0.5 - Math.random());
        return { ...q, options: shuffledOptions };
    });

    const intro = byId("quiz-intro");
    const form = byId("quiz-form");
    const questions = byId("quiz-questions");
    const result = byId("quiz-result");
    if (!form || !questions) return;
    if (intro) intro.hidden = true;
    form.hidden = false;
    if (result) result.innerHTML = "";

    byId("quiz-questions").innerHTML = currentQuiz.map((q, i) => `
        <div class="quiz-question">
            <h3>Q${i + 1}. ${escapeHtml(q.question)}</h3>
            <div class="quiz-options">
                ${q.options.map((opt) => `
                    <label class="quiz-option">
                        <input type="radio" name="q-${i}" value="${escapeHtml(opt)}" required>
                        <span>${escapeHtml(opt)}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `).join("");
}

function submitQuiz() {
    const score = currentQuiz.reduce((acc, q, i) => {
        const selected = document.querySelector(`input[name="q-${i}"]:checked`);
        return acc + (selected && selected.value === q.answer ? 1 : 0);
    }, 0);

    reportState.quizScore = score;
    reportState.quizPercentage = score * 10;
    registerConservationAction(`Completed Quiz: ${score}/10`);

    const form = byId("quiz-form");
    const intro = byId("quiz-intro");
    const result = byId("quiz-result");
    if (form) form.hidden = true;
    if (intro) intro.hidden = false;
    if (!result) return;
    byId("quiz-result").innerHTML = `
        <div class="quiz-score-box">
            <h3>Quiz Completed!</h3>
            <p class="score-value">${score} / 10</p>
            <p class="score-percent">${score * 10}%</p>
            <button class="btn btn-primary" type="button" onclick="startQuiz()" style="margin-top: 14px;">Retake Quiz</button>
        </div>
    `;
}

// Report
function registerParkExploration(name) {
    if (!name) return;
    reportState.parksExplored = [...new Set([...reportState.parksExplored, name])];
    reportState.favouritePark = name;
}

function registerConservationAction(act) {
    if (!act) return;
    reportState.conservationActions = [...new Set([...reportState.conservationActions, act])];
}

function getResponsibleTourismActivitySnapshot() {
    const travelInput = document.querySelector('input[name="tourism-travel-mode"]:checked');
    const travelLabel = travelInput?.closest("label")?.querySelector(".tourism-choice-label")?.textContent.trim() || "";
    const travelData = travelInput ? tourismTravelModes[travelInput.value] : null;

    const checklistInputs = document.querySelectorAll('input[name="tourism-check"]');
    const checklistTotal = checklistInputs.length;
    const checklistDone = document.querySelectorAll('input[name="tourism-check"]:checked').length;

    const visitorCompleted = Boolean(byId("tourism-visitor-score")?.querySelector(".quiz-score-box"));
    const scenarioForm = byId("tourism-scenario-form");
    const scenariosInProgress = Boolean(scenarioForm && !scenarioForm.hidden);
    const scenariosAttempted = visitorCompleted
        ? tourismScenarios.length
        : scenariosInProgress
            ? tourismScenarioIndex + (tourismScenarioAnswered ? 1 : 0)
            : 0;
    const responsibleAnswers = (visitorCompleted || scenariosAttempted > 0) ? tourismScenarioScore : 0;
    const incorrectAnswers = Math.max(0, scenariosAttempted - responsibleAnswers);
    const visitorPercent = visitorCompleted
        ? Math.round((tourismScenarioScore / tourismScenarios.length) * 100)
        : null;

    const hasActivity = Boolean(travelInput) || checklistDone > 0 || visitorCompleted || scenariosAttempted > 0;

    return {
        hasActivity,
        travelLabel,
        travelData,
        checklistDone,
        checklistTotal,
        visitorCompleted,
        scenariosAttempted,
        responsibleAnswers,
        incorrectAnswers,
        visitorPercent
    };
}

function getResponsibleTourismReportLines(activity) {
    if (!activity.hasActivity) {
        return ["Not completed yet."];
    }

    const lines = [];

    if (activity.travelData && activity.travelLabel) {
        const travelLevel = getTourismVisitorLevel(activity.travelData.score);
        lines.push(`Travel Choice: ${activity.travelLabel}`);
        lines.push(`Responsible Travel Score: ${activity.travelData.score}/100 — ${travelLevel.level}`);
    } else {
        lines.push("Travel Choice: Not completed yet.");
        lines.push("Responsible Travel Score: Not completed yet.");
    }

    if (activity.visitorCompleted && activity.visitorPercent !== null) {
        const visitorLevel = getTourismVisitorLevel(activity.visitorPercent);
        lines.push(`Responsible Visitor Assessment: ${activity.visitorPercent}/100 — ${visitorLevel.level}`);
        lines.push(`Scenarios: ${activity.scenariosAttempted} completed`);
        lines.push(`Responsible choices: ${activity.responsibleAnswers}`);
        lines.push(`Incorrect choices: ${activity.incorrectAnswers}`);
    } else if (activity.scenariosAttempted > 0) {
        lines.push("Responsible Visitor Assessment: Not completed yet.");
        lines.push(`Scenarios attempted: ${activity.scenariosAttempted} of ${tourismScenarios.length}`);
        lines.push(`Responsible choices: ${activity.responsibleAnswers}`);
        lines.push(`Incorrect choices: ${activity.incorrectAnswers}`);
    } else {
        lines.push("Responsible Visitor Assessment: Not completed yet.");
        lines.push("Scenarios: Not completed yet.");
    }

    if (activity.checklistTotal) {
        const percent = Math.round((activity.checklistDone / activity.checklistTotal) * 100);
        lines.push(`Before You Visit Checklist: ${activity.checklistDone}/${activity.checklistTotal} completed — ${percent}%`);
    }

    return lines;
}

function openReportPreview() {
    const rawName = byId("report-user-name")?.value.trim() || "Wildlife Enthusiast";
    reportState.userName = rawName;
    reportState.date = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
    const tourismLines = getResponsibleTourismReportLines(getResponsibleTourismActivitySnapshot());

    const preview = byId("report-preview-content");
    preview.innerHTML = `
        <div class="report-header">
            <h3>Wildlife Conservation Report</h3>
            <p>Prepared for: <strong>${escapeHtml(reportState.userName)}</strong> (${reportState.date})</p>
        </div>
        <div class="report-grid">
            <div class="report-item"><span>Visited / Explored Parks</span><strong>${reportState.parksExplored.length ? reportState.parksExplored.map(escapeHtml).join(", ") : "Exploration in progress"}</strong></div>
            <div class="report-item"><span>Quiz Knowledge Score</span><strong>${reportState.quizScore !== null ? `${reportState.quizScore}/10 (${reportState.quizPercentage}%)` : "Not attempted"}</strong></div>
            <div class="report-item"><span>Threat Simulator</span><strong>${reportState.threatResult ? escapeHtml(reportState.threatResult) : "Not simulated"}</strong></div>
            <div class="report-item"><span>Trip Details</span><strong>${reportState.tripPark ? `${escapeHtml(reportState.tripPark)} • ${reportState.tripVisitors} visitor(s) • ${money(reportState.tripBudget)}` : "No trip planned"}</strong></div>
        </div>
        <div class="report-section-list">
            <h4>Actions & Milestones</h4>
            <ul>${reportState.conservationActions.length ? reportState.conservationActions.map((a) => `<li>${escapeHtml(a)}</li>`).join("") : "<li>Explored species biodiversity library</li>"}</ul>
        </div>
        <div class="report-section-list">
            <h4>Responsible Wildlife Tourism Activity</h4>
            <ul>${tourismLines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
        </div>
    `;
    byId("report-modal")?.classList.add("is-open");
    byId("report-modal")?.setAttribute("aria-hidden", "false");
}

function closeReportPreview() {
    const modal = byId("report-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
}

function downloadBiodiversityReport() {
    if (!window.jspdf || !window.jspdf.jsPDF) {
        window.print();
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    let y = 60;

    doc.setFillColor(18, 59, 41);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), 80, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Biodiversity Explorer - Activity Report", margin, 48);

    doc.setTextColor(23, 33, 27);
    doc.setFontSize(11);
    y = 120;

    const data = [
        ["User Name", reportState.userName || "Wildlife Enthusiast"],
        ["Date", reportState.date || new Date().toLocaleDateString()],
        ["Parks Explored", reportState.parksExplored.join(", ") || "General Overview"],
        ["Quiz Score", reportState.quizScore !== null ? `${reportState.quizScore}/10` : "N/A"],
        ["Trip Details", reportState.tripPark ? `${reportState.tripPark} • ${reportState.tripVisitors || 1} visitor(s) • ${money(reportState.tripBudget || 0)}` : "No trip planned"],
        ["Actions Taken", reportState.conservationActions.join("; ") || "Reviewed species library"],
        ["Threat Simulator", reportState.threatResult || "Not simulated"]
    ];

    data.forEach(([label, val]) => {
        doc.setFont("helvetica", "bold");
        doc.text(`${label}:`, margin, y);
        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(val, 360);
        doc.text(lines, margin + 120, y);
        y += Math.max(26, lines.length * 16 + 8);
    });

    const tourismLines = getResponsibleTourismReportLines(getResponsibleTourismActivitySnapshot());
    const pageHeight = doc.internal.pageSize.getHeight();
    if (y > pageHeight - 120) {
        doc.addPage();
        y = 50;
    } else {
        y += 18;
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text("Responsible Wildlife Tourism Activity", margin, y);
    y += 22;
    doc.setFontSize(11);
    tourismLines.forEach((line) => {
        const wrapped = doc.splitTextToSize(line, 515);
        const needed = wrapped.length * 16 + 6;
        if (y + needed > pageHeight - 40) {
            doc.addPage();
            y = 50;
        }
        doc.setFont("helvetica", "normal");
        doc.text(wrapped, margin, y);
        y += needed;
    });

    doc.save("biodiversity-report.pdf");
    closeReportPreview();
}

// Leaflet Map Initialization
let wildlifeMap = null;

function displayParkInfo(park) {
    const infoContent = byId("map-info-content");
    if (!infoContent) return;

    infoContent.innerHTML = `
        <div class="map-info-section">
            <h3>🌍 ${escapeHtml(park.name)}</h3>
            <p><strong>State:</strong> ${escapeHtml(park.state)} | <strong>Ecosystem:</strong> ${escapeHtml(park.ecosystem)}</p>
            <p><strong>Coordinates:</strong> ${park.latitude.toFixed(2)}°N, ${park.longitude.toFixed(2)}°E</p>
            <p>${escapeHtml(park.importance)}</p>
            <div class="tourism-park-actions" style="margin-top: 10px;">
                <button class="btn btn-primary" type="button" onclick="selectRecommendedPark('${getSafeJsString(park.name)}')">✈️ Plan a Visit</button>
                <button class="btn btn-quiet" type="button" onclick="scrollToResponsibleTourism()">🌿 Responsible Visit Tips</button>
            </div>
        </div>
    `;
}

function initializeWildlifeMap() {
    const el = byId("wildlife-map");
    if (!el) return;

    if (typeof window.L === "undefined") {
        el.innerHTML = `<div class="map-fallback">Interactive map could not load. Use National Parks Explorer below, or click a park in the trip planner.</div>`;
        return;
    }

    if (wildlifeMap) {
        refreshWildlifeMapSize();
        return;
    }

    el.innerHTML = "";

    wildlifeMap = window.L.map("wildlife-map").setView([21.5, 82.0], 5);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 18
    }).addTo(wildlifeMap);

    nationalParks.forEach((park) => {
        const marker = window.L.circleMarker([park.latitude, park.longitude], {
            radius: 8,
            fillColor: "#2f7d51",
            color: "#123b29",
            weight: 2,
            fillOpacity: 0.8
        }).addTo(wildlifeMap);

        marker.bindPopup(`<strong>${escapeHtml(park.name)}</strong><br>${escapeHtml(park.state)}<br><em>${escapeHtml(park.ecosystem)}</em>`);
        marker.on("click", () => {
            displayParkInfo(park);
        });
    });

    refreshWildlifeMapSize();
}

function updateBiodiversityStats() {
    const setText = (id, value) => {
        const el = byId(id);
        if (el) el.textContent = value;
    };
    setText("total-species", `${indiaWildlifeStats.totalSpecies.toLocaleString()}+`);
    setText("total-sanctuaries", indiaWildlifeStats.wildlifeSanctuaries.toLocaleString());
    setText("total-parks", indiaWildlifeStats.nationalParks.toLocaleString());
    setText("endangered-species", indiaWildlifeStats.endangered.toLocaleString());
    setText("vulnerable-species", indiaWildlifeStats.vulnerable.toLocaleString());
    setText("least-concern-species", indiaWildlifeStats.leastConcern.toLocaleString());
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    setupScrollObserver();
    displayAnimals();
    updateBiodiversityStats();
    renderParkMapGrid();
    initializeWildlifeMap();
    buildForestScene();
    updateThreatSimulator();

    // Mobile nav toggle
    byId("nav-toggle")?.addEventListener("click", () => {
        setMobileNavOpen(!document.body.classList.contains("nav-open"));
    });
    document.querySelectorAll(".nav-links a, .logo").forEach((link) => {
        link.addEventListener("click", () => setMobileNavOpen(false));
    });

    byId("animal-popup")?.addEventListener("click", (e) => {
        if (e.target.id === "animal-popup") closePopup();
    });
    byId("report-modal")?.addEventListener("click", (e) => {
        if (e.target.id === "report-modal") closeReportPreview();
    });

    window.addEventListener("resize", refreshWildlifeMapSize);
    window.addEventListener("load", refreshWildlifeMapSize);

    // Threat simulator events
    byId("forest-slider")?.addEventListener("input", updateThreatSimulator);
    byId("restore-forest")?.addEventListener("click", restoreForest);

    // Report modal triggers
    byId("generate-report-btn")?.addEventListener("click", openReportPreview);
    byId("report-download-btn")?.addEventListener("click", downloadBiodiversityReport);

    // Close overlays with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closePopup();
            closeReportPreview();
        }
    });

    initializeResponsibleTourism();
});

function scrollToResponsibleTourism() {
    byId("responsible-tourism")?.scrollIntoView({ behavior: "smooth" });
}

function getTourismVisitorLevel(score) {
    if (score >= 90) {
        return {
            level: "🌳 Conservation Champion",
            message: "Outstanding. You already treat wildlife encounters as a privilege, not a performance."
        };
    }
    if (score >= 75) {
        return {
            level: "🌿 Responsible Explorer",
            message: "Strong instincts. Keep choosing distance, quiet, and park rules on every visit."
        };
    }
    if (score >= 50) {
        return {
            level: "🐾 Wildlife Friend",
            message: "A solid start. Review the etiquette cards and practise giving animals more space."
        };
    }
    return {
        level: "🌱 Learn & Improve",
        message: "Every great naturalist began by learning. Try the scenarios again and use the checklist before you travel."
    };
}

const tourismTravelModes = {
    public: {
        score: 90,
        summary: "Trains and buses usually lower per-person impact and ease pressure on park approach roads."
    },
    shared: {
        score: 82,
        summary: "Sharing a vehicle reduces traffic near reserves and still keeps the journey practical."
    },
    private: {
        score: 58,
        summary: "A private car can be necessary, but car-pooling, slower driving, and parking only in approved areas help."
    },
    walk: {
        score: 95,
        summary: "Walking or cycling where the park allows it is low-impact — stay on permitted paths only."
    }
};

const tourismScenarios = [
    {
        prompt: "🐅 You spot a tiger near your safari vehicle. What should you do?",
        options: [
            { text: "Move closer for a better view", correct: false },
            { text: "Shout to attract it", correct: false },
            { text: "Stay quiet and maintain a safe distance", correct: true },
            { text: "Get out of the vehicle for a photograph", correct: false }
        ],
        correctWhy: "Tigers need space to hunt, rest, and move. Quiet, still visitors reduce stress and keep everyone safer.",
        incorrectWhy: "Closing in, calling, or leaving the vehicle can startle a tiger and break park safety rules.",
        recommended: "Remain seated, keep voices low, and let the tiger choose when to move on."
    },
    {
        prompt: "🐘 An elephant herd is feeding close to the track. What is the responsible choice?",
        options: [
            { text: "Drive between adults and calves for photos", correct: false },
            { text: "Stop at a safe distance, engine quiet, and wait", correct: true },
            { text: "Honk so they clear the road faster", correct: false },
            { text: "Offer fruit from the vehicle", correct: false }
        ],
        correctWhy: "Elephants are protective of calves. A calm halt at a distance lets the herd feed and cross without feeling trapped.",
        incorrectWhy: "Splitting a herd, noise, or food creates conflict and can provoke a charge.",
        recommended: "Keep the vehicle still, never separate adults from young, and follow your authorised guide."
    },
    {
        prompt: "🪺 You notice a bird sitting on a nest beside the trail. What should you do?",
        options: [
            { text: "Walk up to the nest for a close photograph", correct: false },
            { text: "Stay on the path, use zoom, and move on quickly", correct: true },
            { text: "Play a bird call to make it look at the camera", correct: false },
            { text: "Clear nearby branches for a better view", correct: false }
        ],
        correctWhy: "Nesting birds abandon eggs or chicks when people linger, play calls, or clear cover.",
        incorrectWhy: "Close approaches and playback are a form of disturbance, even if the bird does not fly immediately.",
        recommended: "Keep your distance, skip playback, and leave nesting cover untouched."
    },
    {
        prompt: "🐒 Monkeys approach your picnic area looking for food. What should you do?",
        options: [
            { text: "Feed them so they leave you alone", correct: false },
            { text: "Secure food, do not offer snacks, and give them space", correct: true },
            { text: "Chase them away by shouting and waving bags", correct: false },
            { text: "Take selfies while holding food out", correct: false }
        ],
        correctWhy: "Feeding makes monkeys aggressive, spreads disease, and teaches them to raid visitors.",
        incorrectWhy: "Food rewards and chasing both increase conflict around people and vehicles.",
        recommended: "Pack food away, do not tease with snacks, and let staff manage habituated animals."
    },
    {
        prompt: "🗑️ You see plastic wrappers near a waterhole used by wildlife. What should you do?",
        options: [
            { text: "Leave it — it is not your waste", correct: false },
            { text: "Pick up what is safe to collect and carry it out, or tell park staff", correct: true },
            { text: "Burn the litter at the waterhole", correct: false },
            { text: "Throw it into the water so animals cannot reach it", correct: false }
        ],
        correctWhy: "Litter injures animals and pollutes drinking water. Removing it safely, or reporting it, protects the habitat.",
        incorrectWhy: "Ignoring, burning, or dumping waste into water still harms wildlife and breaks leave-no-trace practice.",
        recommended: "Carry a small bag for recovered litter when it is safe, and never leave new waste behind."
    }
];

let tourismScenarioIndex = 0;
let tourismScenarioScore = 0;
let tourismScenarioAnswered = false;

function updateTourismTravelScore() {
    const selected = document.querySelector('input[name="tourism-travel-mode"]:checked');
    const box = byId("tourism-travel-score");
    if (!box) return;
    if (!selected) {
        box.innerHTML = "";
        return;
    }

    const result = tourismTravelModes[selected.value];
    if (!result) return;
    const level = getTourismVisitorLevel(result.score);

    box.innerHTML = `
        <h4>🌿 Responsible Travel Score</h4>
        <p class="tourism-score-level">${result.score}/100 — ${escapeHtml(level.level)}</p>
        <p>${escapeHtml(result.summary)}</p>
        <p class="tourism-score-note">This is an educational responsibility indicator, not an exact carbon-footprint calculation.</p>
    `;
}

function renderTourismScenario() {
    const question = byId("tourism-scenario-question");
    const feedback = byId("tourism-scenario-feedback");
    const scoreBox = byId("tourism-visitor-score");
    const submitBtn = byId("tourism-scenario-submit");
    const scenario = tourismScenarios[tourismScenarioIndex];
    if (!question || !scenario) return;

    tourismScenarioAnswered = false;
    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "tourism-feedback";
    }
    if (scoreBox) scoreBox.innerHTML = "";
    if (submitBtn) {
        submitBtn.hidden = false;
        submitBtn.textContent = "Check my choice";
    }

    question.innerHTML = `
        <div class="quiz-question">
            <h3>${escapeHtml(scenario.prompt)}</h3>
            <p class="tourism-block-copy">Scenario ${tourismScenarioIndex + 1} of ${tourismScenarios.length}</p>
            <div class="quiz-options">
                ${scenario.options.map((opt, i) => `
                    <label class="quiz-option">
                        <input type="radio" name="tourism-scenario-choice" value="${i}" required>
                        <span>${escapeHtml(opt.text)}</span>
                    </label>
                `).join("")}
            </div>
        </div>
    `;
}

function startTourismScenarios() {
    tourismScenarioIndex = 0;
    tourismScenarioScore = 0;
    tourismScenarioAnswered = false;

    const intro = byId("tourism-scenario-intro");
    const form = byId("tourism-scenario-form");
    const feedback = byId("tourism-scenario-feedback");
    const scoreBox = byId("tourism-visitor-score");
    if (intro) intro.hidden = true;
    if (form) form.hidden = false;
    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "tourism-feedback";
    }
    if (scoreBox) scoreBox.innerHTML = "";
    renderTourismScenario();
}

function showTourismVisitorScore() {
    const form = byId("tourism-scenario-form");
    const intro = byId("tourism-scenario-intro");
    const feedback = byId("tourism-scenario-feedback");
    const scoreBox = byId("tourism-visitor-score");
    const submitBtn = byId("tourism-scenario-submit");

    if (form) form.hidden = true;
    if (intro) intro.hidden = false;
    if (feedback) {
        feedback.innerHTML = "";
        feedback.className = "tourism-feedback";
    }
    if (submitBtn) submitBtn.hidden = false;

    const percent = Math.round((tourismScenarioScore / tourismScenarios.length) * 100);
    const level = getTourismVisitorLevel(percent);
    registerConservationAction(`Responsible visitor score: ${percent}/100`);

    if (!scoreBox) return;
    scoreBox.innerHTML = `
        <div class="quiz-score-box">
            <h3>🏆 Responsible Visitor Score</h3>
            <p class="score-value">${percent} / 100</p>
            <p class="score-percent">${escapeHtml(level.level)}</p>
            <p class="score-feedback">${escapeHtml(level.message)}</p>
            <button class="btn btn-primary" type="button" id="tourism-scenario-retry">Try Again</button>
        </div>
    `;
    byId("tourism-scenario-retry")?.addEventListener("click", startTourismScenarios);
}

function submitTourismScenario(event) {
    event.preventDefault();
    const scenario = tourismScenarios[tourismScenarioIndex];
    const selected = document.querySelector('input[name="tourism-scenario-choice"]:checked');
    const feedback = byId("tourism-scenario-feedback");
    const submitBtn = byId("tourism-scenario-submit");
    if (!scenario || !selected || !feedback) return;

    if (!tourismScenarioAnswered) {
        const choice = scenario.options[Number(selected.value)];
        const isCorrect = Boolean(choice && choice.correct);
        if (isCorrect) tourismScenarioScore += 1;
        tourismScenarioAnswered = true;

        feedback.className = `tourism-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
        feedback.innerHTML = `
            <h4>${isCorrect ? "Responsible choice" : "Not the most responsible choice"}</h4>
            <p>${escapeHtml(isCorrect ? scenario.correctWhy : scenario.incorrectWhy)}</p>
            <p><strong>Recommended behaviour:</strong> ${escapeHtml(scenario.recommended)}</p>
        `;

        if (submitBtn) {
            submitBtn.textContent = tourismScenarioIndex < tourismScenarios.length - 1
                ? "Next scenario"
                : "See my Responsible Visitor Score";
        }
        return;
    }

    if (tourismScenarioIndex < tourismScenarios.length - 1) {
        tourismScenarioIndex += 1;
        renderTourismScenario();
        return;
    }

    showTourismVisitorScore();
}

function updateTourismChecklistProgress() {
    const boxes = document.querySelectorAll('input[name="tourism-check"]');
    const checked = document.querySelectorAll('input[name="tourism-check"]:checked').length;
    const progress = byId("tourism-checklist-progress");
    if (progress) progress.textContent = `${checked} / ${boxes.length} completed`;
}

function initializeResponsibleTourism() {
    document.querySelectorAll('input[name="tourism-travel-mode"]').forEach((input) => {
        input.addEventListener("change", updateTourismTravelScore);
    });

    byId("tourism-scenario-start")?.addEventListener("click", startTourismScenarios);
    byId("tourism-scenario-form")?.addEventListener("submit", submitTourismScenario);

    document.querySelectorAll('input[name="tourism-check"]').forEach((input) => {
        input.addEventListener("change", updateTourismChecklistProgress);
    });
    updateTourismChecklistProgress();
}