// When the Generate button is clicked, send a message to the background script
// to generate text and display it in the popup
document.getElementById("generate-btn").addEventListener("click", function() {
    var prompt = document.getElementById("input").value;
    chrome.runtime.sendMessage({action: "generate", prompt: prompt}, function(response) {
        if (response && response.text) {
            document.getElementById("output").innerText = response.text;
        } else {
            console.error("Error: Invalid response from background script");
        }
    });
});
