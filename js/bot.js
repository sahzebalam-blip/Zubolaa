document.addEventListener("DOMContentLoaded", () => {
  const botWindow = document.querySelector(".bot-window");
  const botBody = document.querySelector(".bot-body");
  const botActionsContainer = document.querySelector(".bot-actions");
  const botPrimaryCta = document.querySelector('a[href="contact.html"].btn.btn-primary');

  if (!botWindow || !botBody || !window.ZUBOT_DATA) return;

  const data = window.ZUBOT_DATA;

  const state = {
    onboardingActive: false,
    currentStepIndex: 0,
    answers: {},
  };

  function sanitizeText(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
  }

  function createMessage(text, type = "bot") {
    const message = document.createElement("div");
    message.className = type === "user" ? "bot-message user-message" : "bot-message";
    message.innerHTML = sanitizeText(text);
    return message;
  }

  function appendMessage(text, type = "bot") {
    const message = createMessage(text, type);
    botBody.insertBefore(message, botActionsContainer || null);
    scrollBotToBottom();
  }

  function clearActions() {
    if (botActionsContainer) {
      botActionsContainer.innerHTML = "";
    }
  }

  function scrollBotToBottom() {
    botWindow.scrollTo({
      top: botWindow.scrollHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }

  function createActionButton(label, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function renderQuickActions() {
    if (!botActionsContainer) return;

    clearActions();

    data.quickActions.forEach((actionLabel) => {
      const button = createActionButton(actionLabel, () => {
        appendMessage(actionLabel, "user");

        if (actionLabel === "Start Onboarding") {
          startOnboarding();
          return;
        }

        const reply =
          data.generalReplies[actionLabel] ||
          "I can currently guide you through the main sections of Zubolaa and help you find the right next step.";

        appendMessage(reply, "bot");
      });

      botActionsContainer.appendChild(button);
    });
  }

  function createInlineInput(step) {
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
      wrapper.remove();
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

    botBody.insertBefore(wrapper, botActionsContainer || null);
    input.focus();
    scrollBotToBottom();
  }

  function renderChoiceOptions(step) {
    clearActions();

    step.options.forEach((option) => {
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

  function showRecommendation() {
    const interest = state.answers.interest;
    const recommendation =
      data.recommendations[interest] || data.recommendations["General Exploration"];

    appendMessage(data.onboarding.kycLine, "bot");
    appendMessage(recommendation.text, "bot");
    appendMessage(data.onboarding.closing, "bot");

    clearActions();

    const pageButton = createActionButton(recommendation.label, () => {
      window.location.href = recommendation.link;
    });

    const contactButton = createActionButton("Go to Contact", () => {
      window.location.href = "contact.html";
    });

    const restartButton = createActionButton("Restart Onboarding", () => {
      resetOnboarding();
      appendMessage("Welcome back. We can begin the guided onboarding path again.", "bot");
      startOnboarding();
    });

    botActionsContainer.appendChild(pageButton);
    botActionsContainer.appendChild(contactButton);
    botActionsContainer.appendChild(restartButton);

    if (botPrimaryCta) {
      botPrimaryCta.textContent = "Continue with Guided Access";
    }
  }

  function continueOnboarding() {
    const step = data.onboarding.steps[state.currentStepIndex];

    if (!step) {
      state.onboardingActive = false;
      showRecommendation();
      return;
    }

    appendMessage(step.question, "bot");

    if (step.type === "text") {
      clearActions();
      createInlineInput(step);
      return;
    }

    if (step.type === "choice") {
      renderChoiceOptions(step);
    }
  }

  function startOnboarding() {
    state.onboardingActive = true;
    state.currentStepIndex = 0;
    state.answers = {};

    clearActions();
    appendMessage("Welcome. Would you like to begin a guided onboarding path?", "bot");
    continueOnboarding();
  }

  function resetOnboarding() {
    state.onboardingActive = false;
    state.currentStepIndex = 0;
    state.answers = {};
    clearActions();
  }

  function initBotUiEnhancements() {
    const firstStaticMessage = botBody.querySelector(".bot-message");
    if (firstStaticMessage && firstStaticMessage.textContent.trim() !== data.welcomeMessage) {
      firstStaticMessage.textContent = data.welcomeMessage;
    }

    if (botPrimaryCta) {
      botPrimaryCta.addEventListener("click", (event) => {
        event.preventDefault();
        appendMessage("Start Guided Onboarding", "user");
        startOnboarding();

        document.querySelector("#zubot-section")?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    }
  }

  initBotUiEnhancements();
  renderQuickActions();
});
