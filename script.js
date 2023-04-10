const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container') 
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startTheQuiz)

    



function startTheQuiz() {
    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}


function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])

}
function showQuestion(question){
    console.log(question)
questionElement.innerText = question.Questions
   document.getElementById ("choice1").textContent  = question.Answer[0].text
   document.getElementById ("choice2").textContent  = question.Answer[1].text
   document.getElementById ("choice3").textContent  = question.Answer[2].text
   document.getElementById ("choice4").textContent  = question.Answer[3].text
}
function selectAnswer() {
console.log('working')

}

const questions = [

    {
        Questions: "2+2?",
        Answer: [
            { text: '4', correct: true },
            { text: '22', correct: false },
            { text: '7', correct: false },
            { text: '10', correct: false },
        ]

    }

]

document.getElementById('answer-buttons').addEventListener('click', selectAnswer)



// radio ()