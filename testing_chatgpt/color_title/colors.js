//Most of this code was prompted through ChatGPT-3

// Set your OpenAI API key
const apiKey = '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';

// Set the endpoint URL
const endpointUrl = 'https://api.openai.com/v1/engines/davinci-002/completions';

// Prompt the user to enter multiple color names
const colorNames = [];
const userInput = document.getElementById('user-input');
const submitButton = document.getElementById('submit-button');

// Add an event listener to the button element
submitButton.addEventListener('click', function() {
  // Retrieve the value of the user input
  const inputText = userInput.value;
  colorNames.push(inputText);
});

// Create a prompt based of use input
const prompts = colorNames.map(colorName => `Video game title and sequel title based on the color ${colorName}:`);

// Define the request body with the prompts list
const requestBody = {
  'prompt': prompts,
  'max_tokens': 20,
  'temperature': 0.7,
  'stop': '\n',
};

// Define the request headers
const requestHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

// Send the POST request
fetch(endpointUrl, {
  method: 'POST',
  body: JSON.stringify(requestBody),
  headers: requestHeaders,
})
.then(response => response.json())
.then(data => {
  // Handle the response from the model
  const generatedTitles = data.choices.map(choice => choice.text.trim());
  document.getElementById("gpt-response").innerHTML = generatedTitles;
})
.catch(error => {
  // Handle any errors that occur
  
});
