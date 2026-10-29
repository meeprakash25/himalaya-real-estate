export interface PropertyImage {
  src: string
  alt: string
}

export interface PropertyAmenityGroup {
  category: string
  items: string[]
}

export interface PropertyQuestion {
  question: string
  answer: string
}

export interface PropertyQuickLink {
  label: string
  href: string
}

export interface PropertyTourDate {
  date: string
  label: string
}

export interface Property {
  id: string
  transaction: "buy" | "rent"
  image: string
  imageAlt: string
  price: string
  type: string
  title: string
  address: string
  details: string
  detail?: {
    location: string
    emiEstimate: string
    description: string
    seoDescription: string
    gallery: PropertyImage[]
    overview: {
      size: string
      bedrooms: number
      bathrooms: number
      roadAccess: string
      facing: string
      propertyType: string
      listingCode: string
    }
    agent: {
      name: string
      role: string
      phone: string
    }
    amenities: PropertyAmenityGroup[]
    questions: PropertyQuestion[]
    quickLinks: PropertyQuickLink[]
    tourDates: PropertyTourDate[]
  }
}

export const properties: Property[] = [
  {
    id: "mulpani-bungalow",
    transaction: "buy",
    image: "/properties/property-mulpani.jpg",
    imageAlt: "Two-story family bungalow with landscaped garden",
    price: "Rs 3.97 Cr",
    type: "Bungalow",
    title: "Bungalow For Sale in Greenhill City Housing - Mulpani",
    address: "Greenhill City Housing, Kageshwori Municipality",
    details: "Mulpani · Housing colony",
    detail: {
      location: "Greenhill City Housing, Kathmandu",
      emiEstimate: "EMI from Rs 3.0 Lakh/month",
      description:
        "Located within the secure gated community of Greenhill City Housing, this residential bungalow offers an ideal balance of modern living and convenience on a 4 Aana land plot. The home features 3 bedrooms, 4 bathrooms, a versatile basement, and a charming small private garden perfect for outdoor relaxation, along with dedicated parking available. Residents benefit from round-the-clock safety with 24/7 CCTV surveillance and security services.",
      seoDescription:
        "Bungalow for sale in Greenhill City Housing, Mulpani, with 6 bedrooms, 4 bathrooms, 4 Aana of land, and 22 ft road access.",
      gallery: [
        {
          src: "/properties/property-mulpani.jpg",
          alt: "Placeholder view of a bungalow with a landscaped lawn",
        },
        {
          src: "/properties/property-bhaisepaty01.jpeg",
          alt: "Placeholder view of a multi-storey home with a gated frontage",
        },
        {
          src: "/properties/property-mulpani01.jpg",
          alt: "Placeholder view of a modern house with balcony terraces",
        },
        {
          src: "/properties/property-kirtipur.jpg",
          alt: "Placeholder view of a white bungalow with a front garden",
        },
        {
          src: "/properties/property-bhaisepati.jpg",
          alt: "Placeholder view of a landscaped residential entrance",
        },
        {
          src: "/properties/property-tikathali.jpg",
          alt: "Placeholder view of a home surrounded by a garden",
        },
      ],
      overview: {
        size: "2100 sq ft",
        bedrooms: 6,
        bathrooms: 4,
        roadAccess: "22 ft",
        facing: "North",
        propertyType: "Bungalow",
        listingCode: "NCHH9900",
      },
      agent: {
        name: "Bunny Prakash Mishra",
        role: "Property Consultant",
        phone: "+977 9800000001",
      },
      amenities: [
        { category: "Main Features", items: ["Earthquake Resistant", "Marble", "Parquet"] },
        { category: "Utilities", items: ["Drainage", "Drinking Water", "Internet", "Reserve Tank", "Solar"] },
        {
          category: "Rooms",
          items: [
            "Basement",
            "Bathroom",
            "Bedroom",
            "Dining Room",
            "Drawing Room",
            "Guest Room",
            "Living Room",
            "Master Bedroom",
            "Puja Room",
            "Store Room",
          ],
        },
        { category: "Furnishing & Appliances", items: ["Modular Kitchen"] },
        {
          category: "Outdoor & Recreation",
          items: ["Balcony", "Fire Place", "Garden", "Kids Play Area", "Lawn", "Park", "Terrace"],
        },
        { category: "Community Features", items: ["Gym"] },
        { category: "Security & Safety", items: ["CC Camera"] },
        { category: "Parking & Transport", items: ["Parking"] },
        { category: "Additional Features", items: ["Bathtub", "Closet", "Compound Wall"] },
      ],
      questions: [
        { question: "What is the asking price?", answer: "The asking price is Rs 3.97 Cr." },
        { question: "How big is this property?", answer: "The property is on a 4 Aana land plot." },
        { question: "Where is this property located?", answer: "It is located in Greenhill City Housing, Kathmandu." },
        {
          question: "How many bedrooms and bathrooms does it have?",
          answer: "The overview lists 6 bedrooms and 4 bathrooms.",
        },
        {
          question: "Is this property still available?",
          answer: "Please contact the property consultant to confirm availability.",
        },
        {
          question: "Can I visit this property?",
          answer: "Please contact the property consultant to arrange a visit.",
        },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "#common-questions" },
        { label: "Properties for sale in Kageshwori Municipality", href: "/#property-search" },
        { label: "Home for rent in Kageshwori Municipality", href: "/#property-search" },
        { label: "House for sale", href: "/#property-search" },
      ],
      tourDates: [
        { date: "28", label: "Thu" },
        { date: "29", label: "Fri" },
        { date: "30", label: "Sat" },
        { date: "31", label: "Sun" },
        { date: "1", label: "Mon" },
        { date: "2", label: "Tue" },
      ],
    },
  },
  {
    id: "kirtipur-bungalow",
    transaction: "buy",
    image: "/properties/property-kirtipur.jpg",
    imageAlt: "Modern white bungalow with a landscaped front garden",
    price: "Rs 4.20 Cr",
    type: "Bungalow",
    title: "European Design Bungalow For Sale at Kirtipur",
    address: "Jakha, Kirtipur Municipality",
    details: "Kirtipur · European design",
    detail: {
      location: "Jakha, Kirtipur Municipality, Kathmandu",
      emiEstimate: "EMI from Rs 3.2 Lakh/month",
      description:
        "This elegant bungalow in Kirtipur combines European-inspired architecture with a practical family layout. Positioned on a spacious plot with a generous lawn, the home includes multiple living areas, well-lit bedrooms, and functional modern finishes that blend comfort with timeless styling.",
      seoDescription:
        "European design bungalow for sale in Kirtipur with 4 bedrooms, 3 bathrooms, and a landscaped garden in a quiet residential neighborhood.",
      gallery: [
        { src: "/properties/property-kirtipur.jpg", alt: "European-style bungalow exterior with a front lawn" },
        { src: "/properties/property-mulpani.jpg", alt: "Exterior of a contemporary two-story home" },
        { src: "/properties/property-bhaisepati.jpg", alt: "Elegant residential home with landscaped frontage" },
        { src: "/properties/property-tikathali.jpg", alt: "Beautiful suburban house with green surroundings" },
        { src: "/properties/property-bhaisepaty01.jpeg", alt: "Modern home with a neat garden and skyline view" },
        { src: "/properties/property-mulpani01.jpg", alt: "Contemporary home in a family-friendly neighborhood" },
      ],
      overview: {
        size: "5 Aana",
        bedrooms: 4,
        bathrooms: 3,
        roadAccess: "18 ft",
        facing: "East",
        propertyType: "Bungalow",
        listingCode: "KIRT9521",
      },
      agent: {
        name: "Nabin KC",
        role: "Senior Property Advisor",
        phone: "+977 9800000002",
      },
      amenities: [
        { category: "Main Features", items: ["European Design", "Modern Finish", "Natural Light"] },
        { category: "Utilities", items: ["Drainage", "Drinking Water", "Internet", "Backup Power"] },
        {
          category: "Rooms",
          items: ["Bedroom", "Dining Room", "Drawing Room", "Guest Room", "Living Room", "Master Bedroom"],
        },
        { category: "Outdoor & Recreation", items: ["Garden", "Front Lawn", "Terrace", "Children's Play Area"] },
        { category: "Security & Safety", items: ["CC Camera", "Boundary Wall"] },
        { category: "Parking & Transport", items: ["Parking"] },
        { category: "Additional Features", items: ["Closet", "Kitchen Cabinet", "Solar"] },
      ],
      questions: [
        { question: "What is the asking price?", answer: "The asking price is Rs 4.20 Cr." },
        { question: "How big is the plot?", answer: "The bungalow sits on a 5 Aana plot." },
        { question: "How many bedrooms does it have?", answer: "The property includes 4 bedrooms and 3 bathrooms." },
        { question: "Where is it located?", answer: "It is located in Jakha, Kirtipur Municipality." },
        {
          question: "Is a site visit available?",
          answer: "Please contact the property agent to arrange a guided viewing.",
        },
        {
          question: "Is it suitable for family living?",
          answer: "Yes, the home is designed with family comfort, modern finishes, and outdoor space in mind.",
        },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "#common-questions" },
        { label: "Properties for sale in Kirtipur", href: "/#property-search" },
        { label: "Bungalow for sale", href: "/#property-search" },
        { label: "Neighborhood homes", href: "/#property-search" },
      ],
      tourDates: [
        { date: "11", label: "Mon" },
        { date: "12", label: "Tue" },
        { date: "13", label: "Wed" },
        { date: "14", label: "Thu" },
        { date: "15", label: "Fri" },
        { date: "16", label: "Sat" },
      ],
    },
  },
  {
    id: "harmony-colony-bungalow",
    transaction: "buy",
    image: "/properties/property-bhaisepati.jpg",
    imageAlt: "Modern bungalow entrance surrounded by tropical greenery",
    price: "Rs 5.50 Cr",
    type: "Bungalow",
    title: "Bungalow for Sale – Harmony Colony",
    address: "Bhaisepati, Lalitpur",
    details: "4 beds · 7 Aana",
    detail: {
      location: "Harmony Colony, Bhaisepati, Lalitpur",
      emiEstimate: "EMI from Rs 4.2 Lakh/month",
      description:
        "Set in a sought-after community in Bhaisepati, this spacious bungalow features a thoughtful family-focused layout with a large front lawn, warm natural materials, and generous indoor living spaces. The property offers the convenience of gated living while retaining a tranquil residential atmosphere.",
      seoDescription:
        "Bungalow for sale in Harmony Colony, Bhaisepati, with 4 bedrooms, 3 bathrooms, and 7 Aana of land in Lalitpur.",
      gallery: [
        { src: "/properties/property-bhaisepati.jpg", alt: "Harmony Colony bungalow with tropical front landscaping" },
        { src: "/properties/property-kirtipur.jpg", alt: "Wide front view of a modern bungalow" },
        { src: "/properties/property-mulpani.jpg", alt: "Luxury bungalow exterior with green surroundings" },
        { src: "/properties/property-tikathali.jpg", alt: "Family home with landscaped exterior" },
        { src: "/properties/property-bhaisepaty01.jpeg", alt: "Contemporary house with a refined facade" },
        { src: "/properties/property-mulpani01.jpg", alt: "Home exterior in a peaceful residential block" },
      ],
      overview: {
        size: "7 Aana",
        bedrooms: 4,
        bathrooms: 3,
        roadAccess: "20 ft",
        facing: "South",
        propertyType: "Bungalow",
        listingCode: "HCBN1045",
      },
      agent: {
        name: "Sujan Shrestha",
        role: "Residential Property Specialist",
        phone: "+977 9800000003",
      },
      amenities: [
        { category: "Main Features", items: ["Modern Architecture", "Garden View", "Premium Interiors"] },
        { category: "Utilities", items: ["Drainage", "Water Supply", "Internet", "Generator Backup"] },
        {
          category: "Rooms",
          items: ["Bedroom", "Dining Space", "Living Room", "Puja Room", "Study Room", "Store Room"],
        },
        { category: "Outdoor & Recreation", items: ["Garden", "Balcony", "Parking", "Kids Play Area"] },
        { category: "Community Features", items: ["Clubhouse", "Park"] },
        { category: "Security & Safety", items: ["Gated Community", "Security Guard"] },
        { category: "Additional Features", items: ["Built-in Wardrobe", "Compound Wall", "Modular Kitchen"] },
      ],
      questions: [
        { question: "What is the asking price?", answer: "The asking price is Rs 5.50 Cr." },
        { question: "How big is the property?", answer: "The bungalow sits on a 7 Aana plot." },
        { question: "How many bedrooms are there?", answer: "The home includes 4 bedrooms and 3 bathrooms." },
        { question: "Where is it located?", answer: "It is located in Harmony Colony, Bhaisepati, Lalitpur." },
        {
          question: "Can I schedule a visit?",
          answer: "Yes, please contact the residential property specialist to book a viewing.",
        },
        {
          question: "Is this property ideal for a family?",
          answer: "Yes, it offers generously sized rooms, outdoor space, and low-traffic neighborhood living.",
        },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "#common-questions" },
        { label: "Office homes in Lalitpur", href: "/#property-search" },
        { label: "Bungalows for sale", href: "/#property-search" },
        { label: "Family homes", href: "/#property-search" },
      ],
      tourDates: [
        { date: "18", label: "Mon" },
        { date: "19", label: "Tue" },
        { date: "20", label: "Wed" },
        { date: "21", label: "Thu" },
        { date: "22", label: "Fri" },
        { date: "23", label: "Sat" },
      ],
    },
  },
  {
    id: "tikathali-house",
    transaction: "buy",
    image: "/properties/property-tikathali.jpg",
    imageAlt: "Contemporary suburban home surrounded by a green garden",
    price: "Rs 4 Cr",
    type: "House",
    title: "House For Sale At Tikathali United Colony",
    address: "Mahalaxmi Municipality",
    details: "6 beds · 4 baths · 5 Aana 2 Paisa 3 Daam",
    detail: {
      location: "Tikathali United Colony, Mahalaxmi Municipality",
      emiEstimate: "EMI from Rs 3.1 Lakh/month",
      description:
        "This spacious family residence in Tikathali offers a comfortable mix of modern design and practical functionality. With six bedrooms, multiple living rooms, and a large landscaped garden, the property is a strong choice for homebuyers looking for long-term value and flexible everyday living.",
      seoDescription:
        "House for sale in Tikathali United Colony with 6 bedrooms, 4 bathrooms, and a generous 5 Aana 2 Paisa 3 Daam plot.",
      gallery: [
        { src: "/properties/property-tikathali.jpg", alt: "Suburban family home exterior with a green lawn" },
        { src: "/properties/property-kirtipur.jpg", alt: "White bungalow with landscaped front drive" },
        { src: "/properties/property-bhaisepati.jpg", alt: "Home surrounded by a gentle tropical garden" },
        { src: "/properties/property-bhaisepaty01.jpeg", alt: "Modern multi-bedroom family house" },
        { src: "/properties/property-mulpani.jpg", alt: "Contemporary home front with greenery" },
        { src: "/properties/property-mulpani01.jpg", alt: "Residential property in a quiet neighborhood" },
      ],
      overview: {
        size: "5 Aana 2 Paisa 3 Daam",
        bedrooms: 6,
        bathrooms: 4,
        roadAccess: "20 ft",
        facing: "West",
        propertyType: "House",
        listingCode: "TIKA9017",
      },
      agent: {
        name: "Aashika Pandey",
        role: "Home Sales Consultant",
        phone: "+977 9800000004",
      },
      amenities: [
        { category: "Main Features", items: ["Spacious Living", "Modern Interiors", "Family-Oriented Layout"] },
        { category: "Utilities", items: ["Water Supply", "Drainage", "Internet", "Backup Power"] },
        {
          category: "Rooms",
          items: ["Bedroom", "Dining Area", "Drawing Room", "Guest Room", "Living Room", "Puja Room", "Study Room"],
        },
        { category: "Outdoor & Recreation", items: ["Garden", "Front Lawn", "Balcony", "Terrace"] },
        { category: "Community Features", items: ["Park", "Play Area"] },
        { category: "Security & Safety", items: ["Gate Access", "CC Camera"] },
        { category: "Parking & Transport", items: ["Parking", "Covered Carport"] },
      ],
      questions: [
        { question: "What is the price?", answer: "The asking price is Rs 4 Cr." },
        { question: "How many bedrooms does it have?", answer: "The house includes 6 bedrooms and 4 bathrooms." },
        { question: "What is the plot size?", answer: "The property measures 5 Aana 2 Paisa 3 Daam." },
        {
          question: "Where is it located?",
          answer: "It is located in Tikathali United Colony, Mahalaxmi Municipality.",
        },
        {
          question: "Can I arrange a viewing?",
          answer: "Yes, please contact the sales consultant for visit timings and scheduling.",
        },
        {
          question: "Is the community family-friendly?",
          answer: "Yes, the neighborhood is designed around comfortable family living and accessibility.",
        },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "#common-questions" },
        { label: "Properties in Mahalaxmi", href: "/#property-search" },
        { label: "House for sale", href: "/#property-search" },
        { label: "Family homes", href: "/#property-search" },
      ],
      tourDates: [
        { date: "25", label: "Mon" },
        { date: "26", label: "Tue" },
        { date: "27", label: "Wed" },
        { date: "28", label: "Thu" },
        { date: "29", label: "Fri" },
        { date: "30", label: "Sat" },
      ],
    },
  },
  {
    id: "bhaisepati-family-home",
    transaction: "buy",
    image: "/properties/property-bhaisepaty01.jpeg",
    imageAlt: "Modern family home surrounded by landscaped greenery",
    price: "Rs 6.25 Cr",
    type: "House",
    title: "Spacious Family Home for Sale in Bhaisepati",
    address: "Bhaisepati, Lalitpur",
    details: "5 beds · 4 baths · 8 Aana",
    detail: {
      location: "Bhaisepati, Lalitpur",
      emiEstimate: "EMI from Rs 4.8 Lakh/month",
      description:
        "This spacious family home in Bhaisepati offers premium living with a bright and airy interior, modern architecture, and a highly usable plot. With five bedrooms, multiple gathering spaces, and a well-kept landscape, it suits both growing families and those looking for a comfortable long-term residence.",
      seoDescription:
        "Family home for sale in Bhaisepati, Lalitpur with 5 bedrooms, 4 bathrooms, and an 8 Aana property in a prime location.",
      gallery: [
        { src: "/properties/property-bhaisepaty01.jpeg", alt: "Family home in Bhaisepati with landscaped greenery" },
        { src: "/properties/property-bhaisepati.jpg", alt: "Residential bungalow frontage in Lalitpur" },
        { src: "/properties/property-kirtipur.jpg", alt: "House exterior with strong curb appeal" },
        { src: "/properties/property-tikathali.jpg", alt: "Contemporary home with green surroundings" },
        { src: "/properties/property-mulpani.jpg", alt: "Modern property with landscaped front lawn" },
        { src: "/properties/property-mulpani01.jpg", alt: "Home in a well-established neighborhood" },
      ],
      overview: {
        size: "8 Aana",
        bedrooms: 5,
        bathrooms: 4,
        roadAccess: "25 ft",
        facing: "North",
        propertyType: "House",
        listingCode: "BHSP2281",
      },
      agent: {
        name: "Ranjit Maharjan",
        role: "Luxury Home Advisor",
        phone: "+977 9800000005",
      },
      amenities: [
        { category: "Main Features", items: ["Spacious Layout", "Premium Finishes", "Open Living"] },
        { category: "Utilities", items: ["Water Supply", "Drainage", "Internet", "Backup Generator"] },
        {
          category: "Rooms",
          items: ["Bedroom", "Dining Room", "Drawing Room", "Guest Room", "Master Bedroom", "Puja Room", "Study Room"],
        },
        { category: "Outdoor & Recreation", items: ["Garden", "Balcony", "Terrace", "Lawn"] },
        { category: "Security & Safety", items: ["Gate Security", "CC Camera", "Boundary Wall"] },
        { category: "Parking & Transport", items: ["Parking", "Covered Space"] },
        { category: "Additional Features", items: ["Walk-in Closet", "Modular Kitchen", "Bathtub"] },
      ],
      questions: [
        { question: "What is the asking price?", answer: "The property is listed at Rs 6.25 Cr." },
        { question: "How many rooms does it have?", answer: "It includes 5 bedrooms and 4 bathrooms." },
        { question: "How large is the plot?", answer: "The home sits on an 8 Aana plot." },
        { question: "Where is this home located?", answer: "It is located in Bhaisepati, Lalitpur." },
        {
          question: "Is the property suitable for a large family?",
          answer: "Yes, the layout is designed for family use with ample storage and gathering spaces.",
        },
        {
          question: "How can I book a viewing?",
          answer: "Please connect with the property advisor to schedule a visit.",
        },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "/#common-questions" },
        { label: "Luxury homes in Lalitpur", href: "/#property-search" },
        { label: "Family homes", href: "/#property-search" },
        { label: "Property consultations", href: "/#property-search" },
      ],
      tourDates: [
        { date: "1", label: "Mon" },
        { date: "2", label: "Tue" },
        { date: "3", label: "Wed" },
        { date: "4", label: "Thu" },
        { date: "5", label: "Fri" },
        { date: "6", label: "Sat" },
      ],
    },
  },
  {
    id: "mulpani-modern-home",
    transaction: "buy",
    image: "/properties/property-mulpani01.jpg",
    imageAlt: "Two-story modern home with a landscaped garden",
    price: "Rs 3.65 Cr",
    type: "House",
    title: "Modern House for Sale in Mulpani",
    address: "Mulpani, Kageshwori Manohara",
    details: "4 beds · 3 baths · 5 Aana",
    detail: {
      location: "Mulpani, Kageshwori Manohara, Kathmandu",
      emiEstimate: "EMI from Rs 2.8 Lakh/month",
      description:
        "This modern home in Mulpani blends contemporary styling with family practicality, offering a comfortable layout, landscaped exterior, and accessible neighborhood amenities. The residence is ideal for buyers seeking a balanced, low-maintenance home close to Kathmandu’s growing residential hubs.",
      seoDescription:
        "Modern house for sale in Mulpani with 4 bedrooms, 3 bathrooms, and a 5 Aana property in Kageshwori Manohara.",
      gallery: [
        { src: "/properties/property-mulpani01.jpg", alt: "Modern house in Mulpani with landscaped frontage" },
        { src: "/properties/property-mulpani.jpg", alt: "Contemporary bungalow exterior with neat landscaping" },
        { src: "/properties/property-bhaisepati.jpg", alt: "Property exterior with greenery and wide frontage" },
        { src: "/properties/property-kirtipur.jpg", alt: "Modern family home in a premium neighborhood" },
        { src: "/properties/property-bhaisepaty01.jpeg", alt: "Residential property with an elegant facade" },
        { src: "/properties/property-tikathali.jpg", alt: "Home surrounded by nature and a clear street view" },
      ],
      overview: {
        size: "5 Aana",
        bedrooms: 4,
        bathrooms: 3,
        roadAccess: "18 ft",
        facing: "East",
        propertyType: "House",
        listingCode: "MULP8124",
      },
      agent: {
        name: "Sagar Neupane",
        role: "Property Consultant",
        phone: "+977 9800000006",
      },
      amenities: [
        { category: "Main Features", items: ["Modern Design", "Bright Interiors", "Comfortable Layout"] },
        { category: "Utilities", items: ["Water Supply", "Drainage", "Internet", "Backup Power"] },
        {
          category: "Rooms",
          items: ["Bedroom", "Dining Room", "Drawing Room", "Guest Room", "Living Room", "Store Room"],
        },
        { category: "Outdoor & Recreation", items: ["Garden", "Balcony", "Front Lawn", "Parking"] },
        { category: "Security & Safety", items: ["Boundary Wall", "CC Camera", "Entry Gate"] },
        { category: "Parking & Transport", items: ["Parking", "Vehicle Access"] },
        { category: "Additional Features", items: ["Closet", "Kitchen Unit", "Modular Kitchen"] },
      ],
      questions: [
        { question: "What is the asking price?", answer: "The asking price is Rs 3.65 Cr." },
        { question: "How large is the property?", answer: "The house sits on a 5 Aana plot." },
        {
          question: "How many bedrooms and bathrooms does it have?",
          answer: "The home includes 4 bedrooms and 3 bathrooms.",
        },
        { question: "Where is it located?", answer: "It is located in Mulpani, Kageshwori Manohara." },
        {
          question: "Is this suitable for first-time buyers?",
          answer: "Yes, it offers a practical layout and a manageable price point for a family home.",
        },
        { question: "Can I view the home?", answer: "Please contact the property consultant to arrange a visit." },
      ],
      quickLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Amenities", href: "#amenities" },
        { label: "Common questions", href: "#common-questions" },
        { label: "Properties in Mulpani", href: "/#property-search" },
        { label: "Modern homes", href: "/#property-search" },
        { label: "House for sale", href: "/#property-search" },
      ],
      tourDates: [
        { date: "8", label: "Mon" },
        { date: "9", label: "Tue" },
        { date: "10", label: "Wed" },
        { date: "11", label: "Thu" },
        { date: "12", label: "Fri" },
        { date: "13", label: "Sat" },
      ],
    },
  },
  {
    id: "bhaisepati-apartment-rent",
    transaction: "rent",
    image: "/properties/property-bhaisepati.jpg",
    imageAlt: "Residential home entrance with landscaped greenery",
    price: "Rs 65,000/month",
    type: "Apartment",
    title: "Apartment for Rent in Bhaisepati",
    address: "Bhaisepati, Lalitpur",
    details: "3 beds · 2 baths · 4 Aana",
  },
]

export const propertySectionLinks = [
  { id: "overview", label: "Overview" },
  { id: "description", label: "Description" },
  { id: "amenities", label: "Amenities" },
  { id: "similar-properties", label: "Similar Properties" }
]
