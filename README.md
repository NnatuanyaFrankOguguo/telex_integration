# Writers Revise Integration

Writers Revise is an innovative backend integration designed to enhance student essay writing by providing automated summarization, editing, and word count analysis. Leveraging Hugging Face's advanced NLP models, this integration processes input text to generate concise summaries and detailed word counts, making it a valuable tool for students and educators alike.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Description

Writers Revise intercepts and processes user-submitted essays or messages to provide:
- **Automated Summarization:** Uses Hugging Face’s summarization API to condense text.
- **Word Count Analysis:** Calculates both the original and summarized word counts.
- **Integration Specification:** Exposes configuration details via a dedicated endpoint.

This integration is ideal for applications like Telex channels, where it can automatically refine long messages, ensuring clarity and brevity for international audiences.

## Features

- **Automated Summarization:**  
  Processes text using the "facebook/bart-large-cnn" model to create a concise summary.
  
- **Word Count Analysis:**  
  Calculates and returns word counts for both the original and summarized texts.
  
- **Webhook Support:**  
  Accepts POST requests for dynamic text processing and integration with external systems.
  
- **Integration Configuration Endpoint:**  
  Exposes the integration configuration via the `/integration-spec` endpoint.
  
- **Environment-Driven:**  
  Utilizes environment variables (via dotenv) for sensitive settings like API keys and port numbers.

## Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- A valid Hugging Face API key
- TypeScript installed globally (if not already)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/writers-revise.git
   cd writers-revise
Install Dependencies:

bash
Copy
Edit
npm install
Environment Variables:

Create a .env file in the project root and add:

ini
Copy
Edit
PORT=4000
HUGGING_FACE_SECRETS=your_huggingface_api_key_here
Compile TypeScript Code:

bash
Copy
Edit
npm run build
Testing
To test the integration locally:

Start in Development Mode:

bash
Copy
Edit
npm run dev
This command uses ts-node and nodemon to run the server with hot-reloading.

Manual Testing:

Summarization Endpoint: Open a browser or use Postman to navigate to:

perl
Copy
Edit
http://localhost:4000/test/Your%20sample%20text%20here
Webhook Endpoint: Send a POST request to:

bash
Copy
Edit
http://localhost:4000/webhook
with a JSON payload like:

json
Copy
Edit
{
  "message": "This is your essay text to be summarized and analyzed.",
  "settings": {}
}
Integration Specification: Visit:

bash
Copy
Edit
http://localhost:4000/integration-spec
to view integration configuration details.

Deployment
When deploying on platforms like Render, set your build and start commands as follows:

Build Command:

bash
Copy
Edit
npm install && npm run build
Start Command:

bash
Copy
Edit
npm start
These commands ensure that your TypeScript code is compiled into JavaScript in the dist folder and then executed from there.

Usage
Writers Revise is designed to be integrated with platforms like Telex channels. Here’s how you can use it:

Integrate the Webhook:
Configure your Telex channel to send messages to the /webhook endpoint.

Receive Enhanced Output:
The integration will return a summarized version of the message along with both original and summarized word counts.

Display in Telex:
Use the output to display a refined message in the Telex channel, improving clarity and reducing information overload.

Screenshots
Below are sample screenshots showcasing the integration working in a Telex channel:


Figure 1: Telex channel displaying a summarized message with word count details.


Figure 2: The integration configuration details available at the /integration-spec endpoint.

(Replace these placeholder images with actual screenshots from your deployment.)

License
This project is licensed under the MIT License.
