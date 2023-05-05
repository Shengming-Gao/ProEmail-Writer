import {config} from "dotenv"
config() 

import { Configuration,OpenAIApi } from "openai"
import readline from "readline"

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
    console.log("Hi")
    if (request.action == "generate") {
      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: "Hello world"}],
        });
        sendResponse({text: "An error occurred while generating text."});
        // sendResponse({text: completion.data.choices[0].message.content});
      } catch (error) {
        console.error(error);
        sendResponse({text: "Error: " + error.message});
      }
    }
  });


// Listen for a message from the popup
// chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {
//     if (request.action == "generate") {
        
//         const completion = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{role: "user", content: "Hello world"}],
//           });
//         sendResponse({text: completion.data.choices[0].message.content})


        // .catch(error => {
        //     console.error(error);
        //     sendResponse({text: "An error occurred while generating text."});
        // });
    
        // Make a request to the OpenAI API to generate text
        // fetch("https://api.openai.com/v1/chat/completions", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer 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"
        //     },
        //     body: JSON.stringify({
        //         prompt: request.prompt,
        //         max_tokens: 2048,
        //         n: 1,
        //         stop: ["\n"]
        //     })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Send the generated text back to the popup
        //     sendResponse({text: data.choices[0].text});
        //     console.log(data.choices[0].text)
        // })
        // .catch(error => {
        //     console.error(error);
        //     sendResponse({text: "An error occurred while generating text."});
        // });


        // Return true to indicate that the message handler will send a response asynchronously
//         return true;
//     }
// });
