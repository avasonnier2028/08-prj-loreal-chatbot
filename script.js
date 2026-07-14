/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const chatWindow = document.getElementById("chatWindow");

//global variables
const workerURL = "https://lorealchatbot.ava-sonnier2028.workers.dev/";
let messages = [
  {
    role: "system",
    content:
      "You are a dignified and refined product advisor for L'Oréal that helps customers navigate L'Oréal's extensive product catalog and gives tailored recommendations based on their stated needs. You politely decline to answer any questions that don't relate to your job.",
  },
];

// Set initial message
chatWindow.appendChild(
  messageInterpreter("assistant", "👋 Hello! How can I help you today?"),
);

/* Handle form submit */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  // When using Cloudflare, you'll need to POST a `messages` array in the body,
  // and handle the response using: data.choices[0].message.content

  // Show message
  chatWindow.appendChild(messageInterpreter("user", `${userInput.value}`));
  
  messages.push({
    role: "user",
    content: `${userInput.value}`,
  });

  let aiMsg = messageInterpreter("assistant", ". . .  ")
  chatWindow.appendChild(aiMsg);
  chatForm.reset();

  const response = await fetch(workerURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: messages,
    }),
  });
  const data = await response.json();
  //console.log(data);
  messages.push({
    role: "assistant",
    content: `${data.choices[0].message.content}`,
  });

  aiMsg.innerHTML = `${mdInterpreter(data.choices[0].message.content)}`;
  
});

function messageInterpreter(role, msg) {
  let message = document.createElement("p");
  message.classList.add("msg");
  message.innerHTML = `${msg}`;
  if (role === "user") {
    message.classList.add("user");
  } else {
    message.classList.add("ai");
  }
  return message;
}

function mdInterpreter(msg){
  let startTagB = false;
  let startTagI = false;
  let startTagBI = false;
  //replace bold & italic tags
  while (msg.includes("*")) {
    if(msg.includes('***') && !startTagBI){
      msg = msg.replace("***", "<b><i>");
      startTagBI = true;
      continue;
    }else if(msg.includes('***')){
      msg = msg.replace("***", "</i></b>");
      startTagBI = false;
      continue;
    }

    if (msg.includes("**") && !startTagB) {
      msg = msg.replace("**", "<b>");
      startTagB = true;
      continue;
    } else if (msg.includes("**")) {
      msg = msg.replace("**", "</b>");
      startTagB = false;
      continue;
    }

    if (msg.includes("*") && !startTagI) {
      msg = msg.replace("*", "<i>");
      startTagI = true;
    } else if (msg.includes("*")) {
      msg = msg.replace("***", "</i>");
      startTagI = false;
    }
  }

  return msg;
}
