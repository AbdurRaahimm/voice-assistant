export const commandList = [
    {
        "id": 1,
        "command": "how are you?",
        "output": "I'm good, how about you?",
    },
    {
        "id": 2,
        "command": "what is your name?",
        "output": "I'm an Online Alexa",
    },
    {
        "id": 3,
        "command": "who created you?",
        "output": "I was created by a human being",
    },
    {
        "id": 4,
        "command": "what is the time",
        "output": "It's " + new Date().getHours() + ":" + new Date().getMinutes() + " right now",
    },
    {
        "id": 5,
        "command": "open youtube",
        "output": "Opening YouTube",
        "url": "https://www.youtube.com/",
    },
    {
        "id": 6,
        "command": "open google",
        "output": "Opening Google",
        "url": "https://www.google.com/",
    },
    {
        "id": 7,
        "command": "open facebook",
        "output": "Opening Facebook",
        "url": "https://www.facebook.com/",
    },
    {
        "id": 8,
        "command": "open instagram",
        "output": "Opening Instagram",
        "url": "https://www.instagram.com/",
    },
    {
        "id": 9,
        "command": "open Twitter",
        "output": "Opening Twitter",
        "url": "https://www.twitter.com/",
    },
    {
        "id": 10,
        "command": "open linkedIn",
        "output": "Opening LinkedIn",
        "url": "https://www.linkedin.com/",
    },
    {
        "id": 11,
        "command": "open gitHub",
        "output": "Opening GitHub",
        "url": "https://www.github.com/",
    },
    {
        "id": 12,
        "command": "open Calculator",
        "output": "Opening Calculator",
        "url": "Calculator:///",
    },
    {
        "id": 13,
        "command": "Weather",
        "output": "see Weather",
        "url": "https://www.weather.com/",
    },
    {
        "id": 14,
        "command": "search google",
        "output": "see google",
        "url": `https://www.google.com/search?q=${message.replace(" ", "+")}, "_blank"`,
    }
]