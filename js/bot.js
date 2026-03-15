document.addEventListener("DOMContentLoaded", () => {
  const botWindow = document.querySelector(".bot-window");
  const botBody = document.querySelector(".bot-body");
  const botActionsContainer = document.querySelector(".bot-actions");
  const botSection = document.querySelector("#zubot-section");
  const onboardingButtons = document.querySelectorAll(
    'a[href="#zubot-section"].btn.btn-secondary, a[href="contact.html"].btn.btn-primary'
  );

  if (!botWindow || !botBody || !botActionsContainer || !window.ZUBOT_DATA) return;

  const data = window.ZUBOT_DATA;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const state = {
    onboardingActive: false,
    currentStepIndex: 0,
    answers: {},
    inlineInputEl: null,
  };

  function sanitizeText(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function scrollBotToBottom() {
    botWindow.scrollTo({
      top: botWindow.scrollHeight,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  function createMessage(text, type = "bot") {
    const message = document.createElement("div");
    message.className = type === "user" ? "bot-message user-message" : "bot-message";
    message.innerHTML = sanitizeText(text);
    return message;
  }

  function appendMessage(text, type = "bot") {
    const message = createMessage(text, type);
    botBody.insertBefore(message, botActionsContainer);
    scrollBotToBottom();
    return message;
  }

  function clearActions() {
    botActionsContainer.innerHTML = "";
  }

  function removeInlineInput() {
    if (state.inlineInputEl && state.inlineInputEl.parentNode) {
      state.inlineInputEl.parentNode.removeChild(state.inlineInputEl);
    }
    state.inlineInputEl = null;
  }

  function resetOnboardingState() {
    state.onboardingActive = false;
    state.currentStepIndex = 0;
    state.answers = {};
    removeInlineInput();
    clearActions();
  }

  function createActionButton(label, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function goToSection(link) {
    window.location.href = link;
  }

  function getGeneralReply(actionLabel) {
    if (data.generalReplies && data.generalReplies[actionLabel]) {
      return data.generalReplies[actionLabel];
    }

    return "I can guide you through the main Zubolaa sections, onboarding flow, academy path and participation direction.";
  }

  function renderQuickActions() {
    clearActions();

    (data.quickActions || []).forEach((actionLabel) => {
      const button = createActionButton(actionLabel, () => {
        appendMessage(actionLabel, "user");

        if (actionLabel === "Start Onboarding") {
          startOnboarding();
          return;
        }

        const reply = getGeneralReply(actionLabel);
        appendMessage(reply, "bot");

        if (actionLabel === "Explore Zubolaa") {
          appendMessage(
            "You can begin with About Zubolaa, move through Academy for clarity, then explore Participation or Digi Hub depending on your next step.",
            "bot"
          );
        }

        if (actionLabel === "Visit Academy") {
          appendMessage(
            "Academy is the best place to start if you want understanding before action. It helps reduce confusion before deeper movement across the ecosystem.",
            "bot"
          );
        }

        if (actionLabel === "KYC Information") {
          appendMessage(
            "KYC-related flows can be introduced in later phases with structured verification pathways, depending on the platform stage and access requirements.",
            "bot"
          );
        }
      });

      botActionsContainer.appendChild(button);
    });

    scrollBotToBottom();
  }

  function createInlineInput(step) {
    removeInlineInput();
    clearActions();

    const wrapper = document.createElement("div");
    wrapper.className = "bot-inline-input";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = step.placeholder || "Type here";
    input.setAttribute("aria-label", step.question);

    const submit = document.createElement("button");
    submit.type = "button";
    submit.textContent = "Submit";

    const submitHandler = () => {
      const value = input.value.trim();
      if (!value) return;

      appendMessage(value, "user");
      state.answers[step.key] = value;

      removeInlineInput();
      state.currentStepIndex += 1;
      continueOnboarding();
    };

    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        submitHandler();
      }
    });

    submit.addEventListener("click", submitHandler);

    wrapper.appendChild(input);
    wrapper.appendChild(submit);

    botBody.insertBefore(wrapper, botActionsContainer);
    state.inlineInputEl = wrapper;

    input.focus();
    scrollBotToBottom();
  }

  function renderChoiceOptions(step) {
    removeInlineInput();
    clearActions();

    (step.options || []).forEach((option) => {
      const button = createActionButton(option, () => {
        appendMessage(option, "user");
        state.answers[step.key] = option;
        state.currentStepIndex += 1;
        continueOnboarding();
      });

      botActionsContainer.appendChild(button);
    });

    scrollBotToBottom();
  }

  function getRecommendation() {
    const interest = state.answers.interest;
    const fallback = {
      label: "Explore About Zubolaa",
      link: "about.html",
      text: "A strong first step is to understand the platform vision, structure and how the ecosystem is being shaped."
    };

    if (!data.recommendations) return fallback;
    return data.recommendations[interest] || data.recommendations["General Exploration"] || fallback;
  }

  function showRecommendation() {
    const recommendation = getRecommendation();

    if (data.onboarding?.kycLine) {
      appendMessage(data.onboarding.kycLine, "bot");
    }

    appendMessage(recommendation.text, "bot");

    appendMessage(
      data.onboarding?.closing ||
        "You can now move toward the most relevant section or restart the guided flow anytime.",
      "bot"
    );

    clearActions();

    const pageButton = createActionButton(recommendation.label, () => {
      goToSection(recommendation.link);
    });

    const aboutButton = createActionButton("Explore About", () => {
      goToSection("about.html");
    });

    const academyButton = createActionButton("Open Academy", () => {
      goToSection("academy.html");
    });

    const restartButton = createActionButton("Restart Onboarding", () => {
      appendMessage("Restart Onboarding", "user");
      startOnboarding(true);
    });

    botActionsContainer.appendChild(pageButton);
    botActionsContainer.appendChild(aboutButton);
    botActionsContainer.appendChild(academyButton);
    botActionsContainer.appendChild(restartButton);

    state.onboardingActive = false;
    scrollBotToBottom();
  }

  function continueOnboarding() {
    const steps = data.onboarding?.steps || [];
    const step = steps[state.currentStepIndex];

    if (!step) {
      showRecommendation();
      return;
    }

    appendMessage(step.question, "bot");

    if (step.type === "text") {
      createInlineInput(step);
      return;
    }

    if (step.type === "choice") {
      renderChoiceOptions(step);
      return;
    }

    state.currentStepIndex += 1;
    continueOnboarding();
  }

  function startOnboarding(isRestart = false) {
    resetOnboardingState();

    state.onboardingActive = true;
    state.currentStepIndex = 0;
    state.answers = {};

    if (isRestart) {
      appendMessage("Welcome back. We can begin the guided onboarding path again.", "bot");
    } else {
      appendMessage("Welcome. Would you like to begin a guided onboarding path?", "bot");
    }

    continueOnboarding();
  }

  function initWelcomeMessage() {
    const firstStaticMessage = botBody.querySelector(".bot-message");
    if (!firstStaticMessage) return;

    const welcomeText =
      data.welcomeMessage ||
      "Welcome to Zubolaa. I can help you explore the ecosystem, understand onboarding and guide you to the right section.";

    firstStaticMessage.textContent = welcomeText;
  }

  function initPrimaryButtons() {
    onboardingButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const href = button.getAttribute("href");

        if (href === "#zubot-section" || href === "contact.html") {
          event.preventDefault();
          appendMessage("Start Guided Onboarding", "user");
          startOnboarding();

          if (botSection) {
            botSection.scrollIntoView({
              behavior: prefersReducedMotion ? "auto" : "smooth",
              block: "start",
            });
          }
        }
      });
    });
  }

  function initBot() {
    initWelcomeMessage();
    initPrimaryButtons();
    renderQuickActions();
  }

  initBot();
});
