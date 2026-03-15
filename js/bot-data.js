window.ZUBOT_DATA = {
  welcomeMessage:
    "Welcome to Zubolaa. I can help you explore the platform, understand onboarding and guide you to the right section.",

  quickActions: [
    "Explore Zubolaa",
    "Start Onboarding",
    "Visit Academy",
    "KYC Information",
  ],

  generalReplies: {
    "Explore Zubolaa":
      "Zubolaa is being shaped as a premium digital ecosystem designed for guided access, structured discovery and future-ready platform expansion.",
    "Visit Academy":
      "Zubolaa Academy is the knowledge layer of the ecosystem — built to create understanding, reduce friction and support a more informed user journey.",
    "KYC Information":
      "As the platform evolves into later phases, structured verification and KYC-linked onboarding may become part of selected pathways.",
  },

  onboarding: {
    steps: [
      {
        key: "name",
        question: "May I have your name to continue?",
        type: "text",
        placeholder: "Enter your name",
      },
      {
        key: "contact",
        question: "Please share your email or preferred contact method.",
        type: "text",
        placeholder: "Email or WhatsApp",
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
          "General Exploration",
        ],
      },
      {
        key: "experience",
        question: "How would you describe your current familiarity with digital platforms?",
        type: "choice",
        options: ["Beginner", "Intermediate", "Exploring Options"],
      },
    ],

    kycLine:
      "As the platform evolves into later phases, structured verification and onboarding layers may become part of the process for selected pathways.",

    closing:
      "You can continue through the website sections or reach out through the contact page for guided communication.",
  },

  recommendations: {
    Academy: {
      text: "Based on your interest, I recommend exploring the Academy section next.",
      link: "academy.html",
      label: "Go to Academy",
    },
    Markets: {
      text: "Based on your interest, I recommend exploring the Markets section next.",
      link: "markets.html",
      label: "Go to Markets",
    },
    Participation: {
      text: "Based on your interest, I recommend exploring the Market Participation section next.",
      link: "participation.html",
      label: "Go to Participation",
    },
    "Digi Hub": {
      text: "Based on your interest, I recommend exploring Al Fattah Digi Hub next.",
      link: "digi-hub.html",
      label: "Go to Digi Hub",
    },
    "General Exploration": {
      text: "A broader platform overview may be the best next step for you.",
      link: "about.html",
      label: "Explore About Zubolaa",
    },
  },
};
