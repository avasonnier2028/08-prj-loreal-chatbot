# Project 8: L'Oréal Chatbot

L’Oréal is exploring the power of AI, and your job is to showcase what's possible. Your task is to build a chatbot that helps users discover and understand L’Oréal’s extensive range of products—makeup, skincare, haircare, and fragrances—as well as provide personalized routines and recommendations.

## 🚀 Launch via GitHub Codespaces

1. In the GitHub repo, click the **Code** button and select **Open with Codespaces → New codespace**.
2. Once your codespace is ready, open the `index.html` file via the live preview.

## ☁️ Cloudflare Note

When deploying through Cloudflare, make sure your API request body (in `script.js`) includes a `messages` array and handle the response by extracting `data.choices[0].message.content`.

Enjoy building your L’Oréal beauty assistant! 💄

##

### Tasks

- L'Oréal Branding
  - [x] Logo
  - [x] Brand Colors
  - [x] Styling
- [x] Chatbot Configuration
- [x] AI Relevence
- [x] Secure Deployment
- [x] **(BONUS)** Conversation History
- [x] **(BONUS)** Display User Question
- [x] **(BONUS)** Chat UI

## 

### Rubric
|Criteria|Requirements|Pts|
| --- | --- | --- |
| L'Oréal Branding | L’Oréal logo is shown and the page uses official brand colors and styling | 10pts |
| Chatbot Configuration | Chatbot uses a system prompt, captures user input, sends it to OpenAI, and displays a response | 20pts |
| AI Relevance |Chatbot refuses unrelated questions and only answers queries about L’Oréal products and routines | 10pts |
| Secure Deployment | Chatbot requests are safely routed through Cloudflare Worker | 10pts |
| __(BONUS)__ Maintain Conversation History | Chatbot remembers details from earlier messages and responds with context awareness | 10pts |
| __(BONUS)__ Display User Question Above Response | Each user question is briefly shown above the AI response before resetting on next input | 5pts |
| __(BONUS)__ Chat Conversation UI | Messages from user and chatbot are styled in distinct chat bubbles with a clear layout | 10pts |
