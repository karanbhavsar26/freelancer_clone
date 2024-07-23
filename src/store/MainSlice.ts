import { createSlice } from "@reduxjs/toolkit";

export const projectData= [
  {
    "id": 1,
    "durations": "6 days left",
    "title": "PHP (Yii 2) and Vue.js Developer for E-commerce Site",
    "description": "About the Project: We're seeking a skilled and passionate Full-Stack Developer to build the MVP of V.I.K.I. - a web application designed to streamline Telegram account management and automate engagement tasks. Our target users are marketers, social media managers, and businesses looking to enhance their Telegram presence. MVP Features: User Authentication/Authorization: Secure user registration",
    "tags": ["html", "css", "php"],
    "price": 1000,
    "currency": "Rs"
  },
  {
    "id": 2,
    "durations": "10 days left",
    "title": "React Native Mobile App Developer Needed",
    "description": "We're looking for an experienced React Native developer to join our team in building a cross-platform mobile application. The app will be focused on delivering educational content to users.",
    "tags": ["react", "javascript", "mobile"],
    "price": 1500,
    "currency": "Rs"
  },
  {
    "id": 3,
    "durations": "4 days left",
    "title": "WordPress Website Redesign",
    "description": "We need a WordPress expert to redesign our current website. The goal is to improve the user experience, modernize the design, and optimize for better performance.",
    "tags": ["wordpress", "html", "css"],
    "price": 800,
    "currency": "Rs"
  },
  {
    "id": 4,
    "durations": "8 days left",
    "title": "Python Django Developer for CRM System",
    "description": "We require a Python Django developer to create a custom CRM system for our sales team. The system should have features for managing leads, tracking interactions, and generating reports.",
    "tags": ["python", "django", "crm"],
    "price": 1200,
    "currency": "Rs"
  },
  {
    "id": 5,
    "durations": "12 days left",
    "title": "Node.js Backend Developer for Real-time Chat Application",
    "description": "We're building a real-time chat application and need a Node.js developer to create the backend system. The application should support multiple chat rooms, private messaging, and file sharing.",
    "tags": ["nodejs", "javascript", "chat"],
    "price": 1400,
    "currency": "Rs"
  },
  {
    "id": 6,
    "durations": "5 days left",
    "title": "Graphic Designer for Branding Project",
    "description": "Looking for a talented graphic designer to create branding materials for our new startup. This includes designing a logo, business cards, and social media graphics.",
    "tags": ["graphicdesign", "branding", "illustrator"],
    "price": 700,
    "currency": "Rs"
  },
  {
    "id": 7,
    "durations": "7 days left",
    "title": "Frontend Developer for React.js Web Application",
    "description": "We're developing a web application using React.js and need a frontend developer to implement the user interface based on provided designs.",
    "tags": ["react", "javascript", "frontend"],
    "price": 1000,
    "currency": "Rs"
  },
  {
    "id": 8,
    "durations": "9 days left",
    "title": "Shopify Developer for E-commerce Store Customization",
    "description": "Seeking a Shopify developer to customize our e-commerce store. Tasks include theme customization, adding new features, and optimizing for conversions.",
    "tags": ["shopify", "ecommerce", "liquid"],
    "price": 900,
    "currency": "Rs"
  },
  {
    "id": 9,
    "durations": "6 days left",
    "title": "Data Analyst for Market Research Project",
    "description": "We're conducting market research and need a data analyst to analyze survey data, market trends, and customer behavior to provide insights and recommendations.",
    "tags": ["dataanalysis", "research", "statistics"],
    "price": 1100,
    "currency": "Rs"
  },
  {
    "id": 10,
    "durations": "11 days left",
    "title": "Unity Game Developer for Mobile Game Project",
    "description": "Looking for a Unity game developer to create a mobile game. The game concept involves puzzle-solving and requires integration with in-app purchases and ads.",
    "tags": ["unity", "gamedev", "mobile"],
    "price": 1300,
    "currency": "Rs"
  }
]

const MainSlice = createSlice({
  name: "MainSlice",
  initialState: {
    count: 0,
    projectData: [
      {
        "id": 1,
        "durations": "6 days left",
        "title": "PHP (Yii 2) and Vue.js Developer for E-commerce Site",
        "description": "About the Project: We're seeking a skilled and passionate Full-Stack Developer to build the MVP of V.I.K.I. - a web application designed to streamline Telegram account management and automate engagement tasks. Our target users are marketers, social media managers, and businesses looking to enhance their Telegram presence. MVP Features: User Authentication/Authorization: Secure user registration",
        "tags": ["html", "css", "php"],
        "price": 1000,
        "currency": "Rs"
      },
      {
        "id": 2,
        "durations": "10 days left",
        "title": "React Native Mobile App Developer Needed",
        "description": "We're looking for an experienced React Native developer to join our team in building a cross-platform mobile application. The app will be focused on delivering educational content to users.",
        "tags": ["react", "javascript", "mobile"],
        "price": 1500,
        "currency": "Rs"
      },
      {
        "id": 3,
        "durations": "4 days left",
        "title": "WordPress Website Redesign",
        "description": "We need a WordPress expert to redesign our current website. The goal is to improve the user experience, modernize the design, and optimize for better performance.",
        "tags": ["wordpress", "html", "css"],
        "price": 800,
        "currency": "Rs"
      },
      {
        "id": 4,
        "durations": "8 days left",
        "title": "Python Django Developer for CRM System",
        "description": "We require a Python Django developer to create a custom CRM system for our sales team. The system should have features for managing leads, tracking interactions, and generating reports.",
        "tags": ["python", "django", "crm"],
        "price": 1200,
        "currency": "Rs"
      },
      {
        "id": 5,
        "durations": "12 days left",
        "title": "Node.js Backend Developer for Real-time Chat Application",
        "description": "We're building a real-time chat application and need a Node.js developer to create the backend system. The application should support multiple chat rooms, private messaging, and file sharing.",
        "tags": ["nodejs", "javascript", "chat"],
        "price": 1400,
        "currency": "Rs"
      },
      {
        "id": 6,
        "durations": "5 days left",
        "title": "Graphic Designer for Branding Project",
        "description": "Looking for a talented graphic designer to create branding materials for our new startup. This includes designing a logo, business cards, and social media graphics.",
        "tags": ["graphicdesign", "branding", "illustrator"],
        "price": 700,
        "currency": "Rs"
      },
      {
        "id": 7,
        "durations": "7 days left",
        "title": "Frontend Developer for React.js Web Application",
        "description": "We're developing a web application using React.js and need a frontend developer to implement the user interface based on provided designs.",
        "tags": ["react", "javascript", "frontend"],
        "price": 1000,
        "currency": "Rs"
      },
      {
        "id": 8,
        "durations": "9 days left",
        "title": "Shopify Developer for E-commerce Store Customization",
        "description": "Seeking a Shopify developer to customize our e-commerce store. Tasks include theme customization, adding new features, and optimizing for conversions.",
        "tags": ["shopify", "ecommerce", "liquid"],
        "price": 900,
        "currency": "Rs"
      },
      {
        "id": 9,
        "durations": "6 days left",
        "title": "Data Analyst for Market Research Project",
        "description": "We're conducting market research and need a data analyst to analyze survey data, market trends, and customer behavior to provide insights and recommendations.",
        "tags": ["dataanalysis", "research", "statistics"],
        "price": 1100,
        "currency": "Rs"
      },
      {
        "id": 10,
        "durations": "11 days left",
        "title": "Unity Game Developer for Mobile Game Project",
        "description": "Looking for a Unity game developer to create a mobile game. The game concept involves puzzle-solving and requires integration with in-app purchases and ads.",
        "tags": ["unity", "gamedev", "mobile"],
        "price": 1300,
        "currency": "Rs"
      }
    ]
    
    
  },
  reducers: {
    updateCount: (state, action) => {
      state.count = action.payload;
    },
    setFilteredProjects:(state, action) => {
      state.projectData = action.payload;
    },
  },
});

export const { updateCount,setFilteredProjects } = MainSlice.actions;
export default MainSlice.reducer;
