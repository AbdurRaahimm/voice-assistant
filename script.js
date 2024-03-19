import { readOutLoud } from "./takeCommand.js";

const btn = document.querySelector("button"),
    p = document.querySelector("p"),
    btnTxt = document.querySelector("#btn-txt");

export const speak = (txt) => {
    const message = new SpeechSynthesisUtterance();
    message.text = txt;
    speechSynthesis.speak(message);
}


// const name = prompt("Enter your name");

const wish = () => {
    const date = new Date();
    const hour = date.getHours();
    let message = "";
    if (hour < 12) {
        message = "Good Morning " + name;
    } else if (hour < 18) {
        message = "Good Afternoon " + name;
    } else {
        message = "Good Evening " + name;
    }
    p.textContent = message;
    speak(message);
}

document.addEventListener("DOMContentLoaded", () => {
    wish();
    speak("Im an Online Alexa, how can I help you?")
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    // console.log(event);
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    p.textContent = transcript;
    readOutLoud(transcript.toLowerCase());
}

btn.addEventListener("click", () => {
    recognition.start();
    btnTxt.innerHTML = "Listening...";

});

recognition.onend = () => {
    btnTxt.innerHTML = "Click here to speak";

}

