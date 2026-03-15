window.ZUBOT_DATA = {
  welcomeMessage:
    "Welcome to Zubolaa. I can help you explore the ecosystem, understand guided onboarding, discover the right section and move toward the next step with clarity.",

  quickActions: [
    "Explore Zubolaa",
    "Start Onboarding",
    "Visit Academy",
    "KYC Information",
    "Free Features",
    "Best Starting Point"
  ],

  generalReplies: {
    "Explore Zubolaa":
      "Zubolaa is being shaped as a premium digital ecosystem designed for guided access, structured discovery, digital learning, participation pathways and future-ready platform expansion.",

    "Visit Academy":
      "Zubolaa Academy is the knowledge layer of the ecosystem — built to create understanding first, reduce friction and support a more informed path before deeper movement.",

    "KYC Information":
      "As the platform evolves into later phases, structured verification and KYC-linked onboarding may become part of selected pathways depending on the platform layer and access requirement.",

    "Free Features":
      "At the current stage, Zubolaa can introduce guided onboarding, intelligent navigation, structured content discovery, learning direction, section-based assistance, UI-driven interaction and future-ready bot workflows without requiring heavy paid infrastructure in the first phase.",

    "Best Starting Point":
      "For most users, the best starting point is to first understand the ecosystem through About Zubolaa, then move into Academy for clarity, and after that continue toward Participation, Markets or Digi Hub depending on the need."
  },

  onboarding: {
    intro:
      "I’ll guide you through a short onboarding path so I can suggest the most relevant next section for you.",

    steps: [
      {
        key: "name",
        question: "May I have your name to continue?",
        type: "text",
        placeholder: "Enter your name"
      },
      {
        key: "contact",
        question: "Please share your email or preferred contact method.",
        type: "text",
        placeholder: "Email or WhatsApp"
      },
      {
        key: "interest",
        question: "Which area are you most interested in today?",
        type: "choice",
        options: [
          "Academy",
          "Markets",
          "Participation",
          "Digi Hub",
          "General Exploration"
        ]
      },
      {
        key: "experience",
        question: "How would you describe your current familiarity with digital platforms?",
        type: "choice",
        options: [
          "Beginner",
          "Intermediate",
          "Exploring Options"
        ]
      },
      {
        key: "goal",
        question: "What would help you most right now?",
        type: "choice",
        options: [
          "Understand the platform",
          "Get guided onboarding",
          "Explore learning first",
          "See practical tools",
          "Find the right next step"
        ]
      }
    ],

    kycLine:
      "As the platform evolves into later phases, structured verification, onboarding layers and selected access requirements may become part of the process for specific pathways.",

    closing:
      "You can continue through the website sections, restart the guided flow, or move to the contact page for direct communication."
  },

  recommendations: {
    Academy: {
      text:
        "Based on your interest, the Academy is the strongest next step. It is designed to create clarity before complexity and helps users move forward with stronger understanding.",
      link: "academy.html",
      label: "Go to Academy"
    },

    Markets: {
      text:
        "Based on your interest, the Markets section is the right next step. It is intended as a refined market-facing environment for discovery, orientation and future expansion.",
      link: "markets.html",
      label: "Go to Markets"
    },

    Participation: {
      text:
        "Based on your interest, the Participation pathway is the most relevant next step. It is structured to reduce uncertainty at entry and create a more guided movement forward.",
      link: "participation.html",
      label: "Go to Participation"
    },

    "Digi Hub": {
      text:
        "Based on your interest, Al Fattah Digi Hub is the right next step. It extends the ecosystem into practical digital utility, guided tools and automation-oriented experiences.",
      link: "digi-hub.html",
      label: "Go to Digi Hub"
    },

    "General Exploration": {
      text:
        "A broader ecosystem overview appears to be the best next step for you. Starting with About Zubolaa will help you understand the platform identity, structure and direction more clearly.",
      link: "about.html",
      label: "Explore About Zubolaa"
    }
  },

  freeCapabilities: [
    "Guided onboarding flows",
    "Section-based navigation assistance",
    "Learning pathway suggestions",
    "Quick reply interaction system",
    "Website-integrated assistant guidance",
    "Content discovery support",
    "Future-ready bot workflow structure"
  ],

  futureCapabilities: [
    "Voice-enabled interaction",
    "Deeper onboarding automation",
    "User-specific journey memory",
    "API-connected verification layers",
    "Structured support workflows",
    "Intelligent recommendation engine"
  ]
};
