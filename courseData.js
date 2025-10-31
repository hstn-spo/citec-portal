// Complete Course Data for MMA and IT Programs
const courseData = {
  MMA: {
    name: "Multi-Media Arts",
    description: "The Multi-Media Arts curriculum combines creative design, digital arts, and multimedia production across four years of comprehensive study.",
    courses: {
      "1st Year": {
        "First Semester": [
          { code: "RZL", title: "The Life and Works of Rizal", units: 3, description: "Study of Rizal's life, works, and writings and their impact on Philippine nationalism.", category: "theory" },
          { code: "ART", title: "Art Appreciation", units: 3, description: "Introduction to various art forms, styles, and their cultural significance.", category: "theory" },
          { code: "UTS", title: "Understanding the Self", units: 3, description: "Exploration of personal identity, self-awareness, and personal development.", category: "theory" },
          { code: "ENG", title: "English", units: 3, description: "Development of communication skills in English for academic and professional contexts.", category: "theory" },
          { code: "STS", title: "Science, Technology and Society", units: 3, description: "Examination of the relationship between science, technology, and society.", category: "theory" },
          { code: "GASPE", title: "Gender and Society in Peace Education", units: 3, description: "Understanding gender roles and promoting peace through education.", category: "theory" },
          { code: "PE1", title: "Physical Activity Towards Health and Fitness 1", units: 2, description: "Basic physical fitness and movement skills development.", category: "theory" },
          { code: "MMA111", title: "Introduction to Multimedia Arts", units: 3, description: "Foundational concepts in multimedia design and digital arts.", category: "programming" }
        ],
        "Second Semester": [
          { code: "PC", title: "Purposive Communication", units: 3, description: "Advanced communication strategies for various purposes and audiences.", category: "theory" },
          { code: "MMW", title: "Mathematics in the Modern World", units: 3, description: "Application of mathematical concepts in contemporary contexts.", category: "theory" },
          { code: "RPH", title: "Readings in Philippine History", units: 3, description: "Critical analysis of Philippine historical events and narratives.", category: "theory" },
          { code: "US", title: "Understanding the Self", units: 3, description: "Continued exploration of personal identity and self-development.", category: "theory" },
          { code: "RECV", title: "Christian Values", units: 3, description: "Study of Christian ethics and values in modern society.", category: "theory" },
          { code: "PE2", title: "Physical Activity Towards Health and Fitness 2", units: 2, description: "Advanced fitness training and exercise programming.", category: "theory" },
          { code: "MMA112", title: "Drawing 1", units: 3, description: "Fundamental drawing techniques and visual representation.", category: "programming" },
          { code: "MMA113", title: "History of Graphic Design", units: 3, description: "Evolution of graphic design from historical to contemporary periods.", category: "theory" }
        ]
      },
      "2nd Year": {
        "First Semester": [
          { code: "PHILPOP", title: "Philippine Pop Culture", units: 3, description: "Analysis of contemporary Philippine popular culture and media.", category: "theory" },
          { code: "FILBAS", title: "Batayan ng Sinag na Pagsilad", units: 3, description: "Foundation of Filipino language and communication.", category: "theory" },
          { code: "NSTP1", title: "National Service Training Program 1", units: 3, description: "Civic welfare and community service training.", category: "theory" },
          { code: "PE3", title: "Physical Activity Towards Health and Fitness 3", units: 2, description: "Specialized fitness and wellness activities.", category: "theory" },
          { code: "MMA211", title: "Elements of Graphic Design", units: 3, description: "Core principles of visual design and composition.", category: "programming" },
          { code: "MMA212", title: "Drawing 2", units: 3, description: "Advanced drawing techniques and artistic expression.", category: "programming" },
          { code: "MMA213", title: "Color Theory", units: 3, description: "Understanding color relationships and their application in design.", category: "programming" }
        ],
        "Second Semester": [
          { code: "TCW", title: "The Contemporary World", units: 3, description: "Analysis of global contemporary issues and interconnections.", category: "theory" },
          { code: "CONTEM", title: "Contemporary", units: 3, description: "Study of contemporary arts and cultural expressions.", category: "theory" },
          { code: "TEM", title: "English Proficiency for the Empowered Professionals", units: 3, description: "Advanced English skills for professional communication.", category: "theory" },
          { code: "NSTP2", title: "National Service Training Program 2", units: 3, description: "Advanced civic engagement and community development.", category: "theory" },
          { code: "PE4", title: "Physical Activity Towards Health and Fitness 4", units: 2, description: "Comprehensive fitness and lifestyle management.", category: "theory" },
          { code: "MMA214", title: "Writing for New Media", units: 3, description: "Content creation and writing for digital platforms.", category: "web" },
          { code: "MMAFreeElec-I", title: "Scriptwriting", units: 3, description: "Fundamentals of script development for various media.", category: "theory" }
        ]
      },
      "3rd Year": {
        "First Semester": [
          { code: "MMA311", title: "Digital Photography", units: 3, description: "Techniques and aesthetics of digital image creation.", category: "programming" },
          { code: "MMA312", title: "Motion Graphics", units: 3, description: "Animation and visual effects for multimedia projects.", category: "programming" },
          { code: "MMA314", title: "Typography and Layout", units: 3, description: "Advanced typographic design and page composition.", category: "programming" },
          { code: "MMA315", title: "Business Ventures in Multimedia", units: 3, description: "Entrepreneurship and business management in creative industries.", category: "theory" },
          { code: "MMRates", title: "Methods of Research", units: 3, description: "Research methodologies for multimedia and arts studies.", category: "theory" }
        ],
        "Second Semester": [
          { code: "MMA315", title: "3D Animation", units: 3, description: "Three-dimensional modeling and animation techniques.", category: "programming" },
          { code: "MMA316", title: "Interactive Media Design", units: 3, description: "User experience and interface design for interactive applications.", category: "web" },
          { code: "MMA317", title: "Digital Sound Production", units: 3, description: "Audio recording, editing, and production for multimedia.", category: "programming" },
          { code: "MMA318", title: "Portfolio Preparation and Exhibit", units: 3, description: "Professional portfolio development and presentation.", category: "theory" },
          { code: "MMAElec-I", title: "Digital Storyboarding", units: 3, description: "Visual planning and narrative development for media projects.", category: "programming" }
        ],
        "Summer": [
          { code: "MMAElec-II", title: "Web Programming", units: 3, description: "Front-end and back-end web development fundamentals.", category: "web" },
          { code: "MMAFreeElec-II", title: "New Media Culture", units: 3, description: "Cultural impact and theory of digital and social media.", category: "theory" },
          { code: "THESIS1", title: "Thesis/Capstone Project 1", units: 3, description: "Initial research and development of capstone project.", category: "theory" }
        ]
      },
      "4th Year": {
        "First Semester": [
          { code: "MMA411", title: "Fundamentals in Film and Video Production", units: 3, description: "Cinematography, directing, and video production techniques.", category: "programming" },
          { code: "MMA412", title: "Game Design", units: 3, description: "Principles of game mechanics and interactive entertainment design.", category: "programming" },
          { code: "MMAElec-III", title: "Brand Communications and Design", units: 3, description: "Strategic branding and visual identity development.", category: "programming" },
          { code: "MMAFreeElec-III", title: "Illustration and Publication", units: 3, description: "Editorial illustration and publication design.", category: "programming" },
          { code: "THESIS2", title: "Thesis/Capstone Project 2", units: 3, description: "Completion and defense of capstone project.", category: "theory" }
        ],
        "Second Semester": [
          { code: "PRACT", title: "Internship (250 hrs)", units: 3, description: "Professional internship in multimedia arts industry.", category: "theory" }
        ]
      }
    }
  },
  IT: {
    name: "Information Technology",
    description: "The Information Technology curriculum focuses on software development, systems administration, networking, and emerging technologies to prepare students for diverse IT careers.",
    courses: {
      "1st Year": {
        "First Semester": [
          { code: "CC102T", title: "Introduction to Computing", units: 3, description: "Fundamentals of computing, hardware, software, and digital systems.", category: "systems" },
          { code: "CC100T", title: "Computer Programming", units: 3, description: "Introduction to programming concepts and problem-solving fundamentals.", category: "programming" },
          { code: "RZL", title: "The Life and Works of Rizal", units: 3, description: "Study of Rizal's life, works, and writings and their impact on Philippine nationalism.", category: "theory" },
          { code: "GE 103", title: "Art Appreciation", units: 3, description: "Introduction to various art forms, styles, and their cultural significance.", category: "theory" },
          { code: "ETH", title: "Ethics", units: 3, description: "Ethical principles and their application in technology and society.", category: "theory" },
          { code: "STS", title: "Science, Technology and Society", units: 3, description: "Examination of the relationship between science, technology, and society.", category: "theory" },
          { code: "GASPE", title: "Gender and Society w/ Peace Education", units: 3, description: "Understanding gender roles and promoting peace through education.", category: "theory" },
          { code: "PE 1", title: "Physical Activity Towards Health and Fitness 1", units: 2, description: "Basic physical fitness and movement skills development.", category: "theory" }
        ],
        "Second Semester": [
          { code: "CC101T", title: "Computer Programming 2", units: 3, description: "Advanced programming concepts and data structures.", category: "programming" },
          { code: "DM", title: "Discrete Mathematics", units: 3, description: "Logic, sets, relations, and graph theory for computer science.", category: "theory" },
          { code: "PC", title: "Purposive Communication", units: 3, description: "Advanced communication strategies for various purposes and audiences.", category: "theory" },
          { code: "CMW", title: "Contemporary World", units: 3, description: "Analysis of global contemporary issues and interconnections.", category: "theory" },
          { code: "US", title: "Understanding the Self", units: 3, description: "Exploration of personal identity, self-awareness, and personal development.", category: "theory" },
          { code: "RPH", title: "Readings in Philippine History", units: 3, description: "Critical analysis of Philippine historical events and narratives.", category: "theory" },
          { code: "UDV", title: "UB Core Values", units: 3, description: "Study of core values and ethics in university and professional life.", category: "theory" },
          { code: "PE 2", title: "Physical Activity Towards Health and Fitness 2", units: 2, description: "Advanced fitness training and exercise programming.", category: "theory" }
        ]
      },
      "2nd Year": {
        "First Semester": [
          { code: "DSA", title: "Data Structures and Algorithms", units: 3, description: "Advanced data organization and algorithm design and analysis.", category: "programming" },
          { code: "PF101", title: "Object-Oriented Programming", units: 3, description: "OOP principles, design patterns, and software engineering best practices.", category: "programming" },
          { code: "PT301", title: "Platform Technologies", units: 3, description: "Study of various computing platforms and technology stacks.", category: "systems" },
          { code: "NT101", title: "Computer Networking 1", units: 3, description: "Network protocols, architecture, and communication systems fundamentals.", category: "systems" },
          { code: "NSTP1", title: "National Service Training Program 1", units: 3, description: "Civic welfare and community service training.", category: "theory" },
          { code: "PE 3", title: "Physical Activity Towards Health and Fitness 3", units: 2, description: "Specialized fitness and wellness activities.", category: "theory" },
          { code: "PHILPOP", title: "Philippine Pop Culture", units: 3, description: "Analysis of contemporary Philippine popular culture and media.", category: "theory" }
        ],
        "Second Semester": [
          { code: "CC103T", title: "Information Management", units: 3, description: "Information systems, data management, and organizational technology.", category: "database" },
          { code: "NET102", title: "Networking 2", units: 3, description: "Advanced networking concepts, routing, and network administration.", category: "systems" },
          { code: "MS102", title: "Modeling and Simulation", units: 3, description: "Mathematical modeling and computer simulation techniques.", category: "programming" },
          { code: "TCW", title: "The Contemporary World", units: 3, description: "Global issues, cultures, and contemporary world affairs.", category: "theory" },
          { code: "TEM", title: "The Entrepreneurial Mind", units: 3, description: "Entrepreneurship principles and business innovation.", category: "theory" },
          { code: "NSTP2", title: "National Service Training Program 2", units: 3, description: "Advanced civic engagement and community development.", category: "theory" },
          { code: "PE 4", title: "Physical Activity Towards Health and Fitness 4", units: 2, description: "Comprehensive fitness and lifestyle management.", category: "theory" },
          { code: "FPR", title: "English Proficiency for the Empowered", units: 3, description: "Advanced English skills for professional communication.", category: "theory" }
        ]
      },
      "3rd Year": {
        "First Semester": [
          { code: "HC101", title: "Introduction to Human Computer Interaction", units: 3, description: "UI/UX design principles, usability testing, and user-centered design.", category: "web" },
          { code: "CC106T", title: "Applications Development and Emerging Technologies", units: 3, description: "Modern application development with cutting-edge technologies.", category: "programming" },
          { code: "ITSEC II", title: "Technology", units: 3, description: "Advanced technology concepts and emerging tech trends.", category: "systems" },
          { code: "IAS102", title: "Information Assurance and Security 1", units: 3, description: "Cybersecurity fundamentals, risk management, and security principles.", category: "security" },
          { code: "SIA101", title: "System Integration and Architecture 1", units: 3, description: "System design, integration patterns, and enterprise architecture.", category: "systems" },
          { code: "ITELEC I", title: "Elective 1", units: 3, description: "Specialized IT elective course based on student interest.", category: "programming" }
        ],
        "Second Semester": [
          { code: "IAS102", title: "Information Assurance and Security 2", units: 3, description: "Advanced cybersecurity, cryptography, and security implementation.", category: "security" },
          { code: "SA101", title: "System Administration and Maintenance", units: 3, description: "Server administration, system maintenance, and IT operations.", category: "systems" },
          { code: "IM101", title: "Fundamentals of Database System", units: 3, description: "Database design, SQL, normalization, and data management.", category: "database" },
          { code: "IPT101", title: "Integrative Programming and Technologies 1", units: 3, description: "Integration of multiple technologies and programming paradigms.", category: "programming" },
          { code: "FREE ELEC I", title: "Free Elective 1", units: 3, description: "Open elective course for general education or specialization.", category: "theory" }
        ],
        "Summer": [
          { code: "WS101", title: "Web System and Technologies", units: 3, description: "Modern web development, frameworks, and web application architecture.", category: "web" },
          { code: "CAP101", title: "Capstone Project and Research 1", units: 3, description: "Initial research and development of capstone project.", category: "theory" },
          { code: "ITELEC II", title: "Elective 2", units: 3, description: "Advanced specialized IT elective course.", category: "programming" }
        ]
      },
      "4th Year": {
        "First Semester": [
          { code: "IPT102", title: "Integrative Programming and Technologies 2", units: 3, description: "Advanced integration techniques and full-stack development.", category: "programming" },
          { code: "CAP102", title: "Capstone Project and Research 2", units: 3, description: "Completion and defense of capstone project.", category: "theory" },
          { code: "ITELEC III", title: "Elective 3", units: 3, description: "Specialized advanced IT elective course.", category: "programming" },
          { code: "FREE ELEC II", title: "Free Elective 2", units: 3, description: "Open elective course for additional specialization.", category: "theory" },
          { code: "FREE ELEC III", title: "Free Elective 3", units: 3, description: "Open elective course for comprehensive skill development.", category: "theory" }
        ],
        "Second Semester": [
          { code: "PRAC101", title: "Practicum (486 hrs Internship)", units: 6, description: "Professional internship and on-the-job training in IT industry.", category: "theory" }
        ]
      }
    }
  }
};