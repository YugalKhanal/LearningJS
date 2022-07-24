//firstProject
let count = 0
let total = 0
let countPeople = document.getElementById("count")


function increment(){
    count = count+1
    countPeople.innerText = count
}

function save(){
    let countStr = count + " - "
    passengerHistoryCount.textContent += countStr
    total = total + count
    totalPassengers.textContent = "Total: " + total
    count = 0
    countPeople.innerText = count
}

//secondProject
function purchase(){
    let errorMessage = document.getElementById("error")
    errorMessage.innerText = "Something went wrong, please try again"
}


//thirdProject
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
function add(){
    let result = num1 + num2
    document.getElementById("result").textContent = "Result: " + result
}
function subtract(){
    let result = num1 - num2
    document.getElementById("result").textContent = "Result: " + result
}
function divide(){
    let result = num1 / num2
    document.getElementById("result").textContent = "Result: " + result
}
function multiply(){
    let result = num1 * num2
    document.getElementById("result").textContent = "Result: " + result
}


//fourthProject
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let blackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.querySelector(".sum")
let cardsEl = document.getElementById("cards")



function startGame(){
    renderGame()
}



function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got blackjack!"
        blackjack = true
    } else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card")
    let card = 7
    sum += card
    renderGame()

}

