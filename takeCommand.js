import { speak } from "./script.js";
// import { commandList } from "./commandList.js";
const p = document.querySelector("p");


// export const readOutLoud = (message) => {
//     commandList.forEach((item) => {
//         if (message.includes(item.command.toLocaleLowerCase())) {
//             p.textContent = item.output;
//             speak(item.output);
//             if (item.url) {
//                 window.open(item.url, "_blank");
//             }
//         } 
//     });
//     // p.textContent = "I'm sorry, I don't understand that";
//     speak("I'm sorry, I don't understand that");
// };


export const readOutLoud = (message) => {
    if (message.includes("how are you")) {
        speak("I'm good, how about you?");
    }
    else if (message.includes("what is your name?")) {
        const txt = "I'm an Online Alexa";
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("who created you?")) {
        const txt = "I was created by a human being";
        p.textContent = txt;
        speak(txt);
    }
    // else if (message.includes("what is the time")) {
    //     const txt = "It's " + new Date().getHours() + ":" + new Date().getMinutes() + " right now";
    //     p.textContent = txt;
    //     speak(txt);
    // }
    else if (message.includes("open")) {
        speak("Opening " + message.replace("open", ""));
        window.open(`https://www.${message.replace("open", "").replace(" ", "")}.com/`, "_blank");
    }
    else if (message.includes("open calculator")) {
        speak("Opening Calculator");
        window.open("Calculator:///");
    }
    else if (message.includes("weather")) {
        speak("Opening " + message.replace("search", ""));
        const txt = message.replace("search", "")
        window.open(`https://www.google.com/search?q=${txt.replace(" ", "+")}`, "_blank");
    }
    else if (message.includes("search google")) {
        speak("searching " + message.replace("search", ""));

        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    }
    else if (message.includes("search wikipedia")) {
        speak("searching " + message.replace("search", ""));
        window.open(`https://en.wikipedia.org/wiki/${message.replace(" ", "_")}`, "_blank");
    }
    else if (message.includes("search youtube")) {
        speak("searching " + message.replace("search", ""));
        window.open(`https://www.youtube.com/results?search_query=${message.replace(" ", "+")}`, "_blank");
    }
    else if (message.includes("date")){
        const txt = "Today's date is " + new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("day")){
        const txt = "Today is " + new Date().toLocaleString('en-us', {  weekday: 'long' });
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("month")){
        const txt = "This month is " + new Date().toLocaleString('en-us', {  month: 'long' });
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("year")){
        const txt = "This year is " + new Date().getFullYear();
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("time")){
        const txt = "It's " + new Date().getHours() + ":" + new Date().getMinutes() + " right now";
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("bye")){
        const txt = "Good Bye, Have a nice day!";
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("add")){
        // add Add Three And Four convert to add 3 and 4  
    }
    else if (message.includes("subtract")){}
    else if (message.includes("multiply")){
        const num1 = parseInt(message.match(/\d+/g)[0]);
        const num2 = parseInt(message.match(/\d+/g)[1]);
        const txt = `The Multiplication Of `+ num1 +` and ` +num2 +` Is `+ (num1+num2);
        p.textContent = txt;
        speak(txt);
    }
    else if (message.includes("divide")){}
    else {
        speak("I'm sorry, I didn't understand that command. Please try again. or see the google for more information.");
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    }

};