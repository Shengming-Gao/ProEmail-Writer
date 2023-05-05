// Listen for a message from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "generate") {
        // Make a request to the OpenAI API to generate text
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                prompt: request.prompt,
                max_tokens: 2048,
                n: 1,
                stop: ["\n"]
            })
        })
        .then(response => response.json())
        .then(data => {
            // Send the generated text back to the popup
            sendResponse({text: data.choices[0].text});
            console.log(data.choices[0].text)
        })
        .catch(error => {
            console.error(error);
            sendResponse({text: "An error occurred while generating text."});
        });
        // Return true to indicate that the message handler will send a response asynchronously
        return true;
    }
});
