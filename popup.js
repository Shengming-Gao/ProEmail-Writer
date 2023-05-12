// When the Generate button is clicked, send a message to the background script
// to generate text and display it in the popup
document.getElementById("generate-btn").addEventListener("click", function() {
    var prompt = document.getElementById("input").value;
    console.log("button-clicked!"); // Reached
    chrome.runtime.sendMessage(
        "foo",
        function(response){
            console.log("help!");
            console.log(response);
        }
    )
    chrome.runtime.sendMessage({action: "generate", prompt: prompt}, function(response) {
        console.log("help2!")
        if (response && response.text) {
            console.log("help3!")

            document.getElementById("output").innerText = response.text;
        } else {
            console.log("help4!")

            console.error("Error: Invalid response from background script");
        }
    });
});
