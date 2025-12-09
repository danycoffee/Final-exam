const nameInput = document.querySelector('#name');
const greetButton = document.querySelector('#greet-btn');
const greetingMessage = document.querySelector('#greeting-message');

greetButton.addEventListener('click', () => {
    const name = nameInput.value; 

    if (name) {
        greetingMessage.textContent = "Welcome, " + name;
    } else {
        greetingMessage.textContent = "Please, enter your name.";
    }
});


//TextContent inserts plain text, while innerHTML interprets the string.//
//Using innerHTML is dangerous because a malicious user could inject scripts.//