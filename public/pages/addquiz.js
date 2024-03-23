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


var question = document.getElementById("question")
var option = document.getElementById("option")
var optionsParent = document.getElementById("optionsParent")
var correctAnswerElem = document.getElementById("correctAnswer")

var options = []
var correctAnswer;

function renderOptions() {

    optionsParent.innerHTML = ""

    for (var i = 0; i < options.length; i++) {
        optionsParent.innerHTML += `<li  onclick"setCorrectAnswer('${options[i]}')"  class = "p-2 bg-light fs-5 rounded shadow my-2">${options[i]}</li>  `
    }
}


window.addOption = function () {
    options.push(option.value)
    console.log(options)
    renderOptions()
}

window.setCorrectAnswer = function (a) {
    correctAnswer = a
    correctAnswerElem.innerHTML = correctAnswer
}

window.submitQuestion = function () {
    var obj = {
        question: question.value,
        options: options,
        // correctAnswer: correctAnswer,
    }
    obj.id = push(ref(db, "questions/")).key


    const refrence = ref(db, `questions/${obj.id}`)
    set(refrence, obj)







    console.log(obj)
}