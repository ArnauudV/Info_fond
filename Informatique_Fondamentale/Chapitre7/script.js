// définition des réponses
const responses = {
    "bonjour": "Bonjour, comment puis-je vous aider ?",
    "bonsoir": "Bonsoir, comment puis-je vous aider ?",
    "ça va ?": "Je suis un robot, je n'ai pas de sentiments, mais merci de demander !",
    "quel temps fait-il aujourd'hui ?": "Vous pourriez tout simplement regarder par votre fenêtre, à moins que vous ne soyez à 100 mètre sous la terre",
    "comment vas-tu ?": "Je suis un robot, je n'ai pas de sentiments, mais merci de demander !",
    "comment ça marche ?": "Je ne marche pas, je suis une IA je n'ai même pas de jambes ... Ce qui pourrait me faire un point commun avec certains humains :)",
    "qui es-tu ?": "Je suis un chatbot, un robot conçu pour répondre aux questions.",
    "quelle est la réponse à la vie, l'univers et tout le reste ?": "La réponse est 42, bien sûr !",
    "quel est ton nom ?": "Je n'ai pas de nom, je suis simplement un chatbot.",
    "42": "Je suis sous le choc fasse à autant de connaissances de la part d'un simple humain",
  };
  
  // récupération des éléments HTML
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatOutput = document.getElementById("chat-output");
  
  // fonction pour ajouter un message dans la zone de chat
  function addMessage(message, isUser) {
    const messageContainer = document.createElement("div");
    const messageContent = document.createElement("p");
    messageContent.textContent = message;
    messageContainer.appendChild(messageContent);
    messageContainer.classList.add("chat-message");
    if (isUser) {
      messageContainer.classList.add("user-message");
    }
    chatOutput.appendChild(messageContainer);
  }
  
  // fonction pour récupérer la réponse du chatbot
  function getResponse(message) {
    message = message.toLowerCase();
    if (responses.hasOwnProperty(message)) {
      return responses[message];
    } else {
      return "Je suis désolé, je ne comprends pas votre question.";
    }
  }
  
  // fonction pour gérer la soumission du formulaire
  function handleSubmit(event) {
    event.preventDefault();
    const message = chatInput.value;
    addMessage(message, true);
    const response = getResponse(message);
    addMessage(response, false);
    chatInput.value = "";
  }
  
  // ajout d'un écouteur d'événement pour la soumission du formulaire
  chatForm.addEventListener("submit", handleSubmit);
  