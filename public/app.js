// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgxjYpCOpcSpbwJ3LfdeMxq6qgwoOeZBQ",
  authDomain: "quiz-bcbc3.firebaseapp.com",
  databaseURL: "https://quiz-bcbc3-default-rtdb.firebaseio.com",
  projectId: "quiz-bcbc3",
  storageBucket: "quiz-bcbc3.appspot.com",
  messagingSenderId: "820908584730",
  appId: "1:820908584730:web:00eb557baaf92e128086a3",
  measurementId: "G-TSLCWYZY77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase()


function getData() {
    const refrence = ref(db, 'qustions/')
    onChildAdded(refrence, function (data) {
        console.log(data.val())
        questions.push(data.val())
    })
}
getData()






var questions = [
    {
        question: "Html Stands For ___",
        options: ["Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For ___",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For ___",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For ___",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For ___",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For ___",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];

var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var question = document.getElementById("question");
var parentAnswer = document.getElementById("parentAnswer");


var indexValue = 0
var score = 0


function render() {
    currentQuestion.innerHTML = indexValue + 1;
    totalQuestion.innerHTML = questions.length;
    var obj = questions[indexValue]

    question.innerHTML = obj.question;

    parentAnswer.innerHTML = ""

    for (var i = 0; i < obj.options.length; i++) {
        parentAnswer.innerHTML += `<div class="col-md-6" id="options">
        <div class="py-3">
            <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAns}')" class="btn btn-dark rounded-pill w-100 fs-4">${obj.options[i]}</button>
        </div>
    </div>`
    }

}
render()

window.nextQuestion = function () {
    indexValue++;
    render()
}

window.checkQuestion = function (a, b) {
    if (a == b) {
        score++
        console.log(score)
    }
    nextQuestion()
}