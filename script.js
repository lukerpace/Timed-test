const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const submitButtom =document.getElementById('submit')

const myQuestions = [
    {
        question: "The white spot behind an orcas dorsal fin is called what?",
        answers: {
            a: "White spot",
            b: "Dorsal patch",
            c: "Saddle patch",
            d: "Birthmark"
        },
        correctAnswer: "c"
    },
    {
        question: "Orcas are classified as?",
        answers: {
            a: "Whale",
            b: "Dolphin",
            c: "Fish",
            d: "Human"
        },
        correctAnswer: "b"
    },
    {
        question: "sea otters have how many hairs per squar inch of their body?",
        answers: {
            a: "1000",
            b: "10,000",
            c: "100,000",
            d: "1,000,000"
        },
        correctAnswer: "d"
    },
    {
        question: "the largest whale in the world is?",
        answers: {
            a: "Sperm Whale",
            b: "Blue Whale",
            c: "Fin Whale",
            d: "Whale Shark"
        },
        correctAnswer: "b"
    },
    {
        question: "How long can blue whales hold their breath",
        answers: {
            a: "90 Minutes",
            b: "1 Hour",
            c: "30 Minutes",
            d: "Whales dont breath air"
        },
        correctAnswer: "a"
    },
    {
        question: "Dall's porpoise can swim how fast?",
        answers: {
            a: "15 mph",
            b: "50mph",
            c: "35 mph",
            d: "5mph"
        },
        correctAnswer: "c"
    },
    {
        question: "how long do male orcas stay with their mothers",
        answers: {
            a: "2 years",
            b: "until they find a mate",
            c: "forever",
            d: "10 years"
        },
        correctAnswer: "c"
    },
]



function buildQuiz(){}

function showResults(){}

buildQuiz()

submitButtom.addEventlistener('click', showResults)






