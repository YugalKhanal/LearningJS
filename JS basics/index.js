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
    console.log("hello")
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


//!fourthProject
let player = {
    Name: "Yugal",
    Chips: 100
}

player.sayHello()

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message")
let sumEl = document.querySelector(".sum")
let cardsEl = document.getElementById("cards")


let playerEl = document.getElementById("player")

playerEl.textContent = player.Name + ": " + "£" + player.Chips

function randomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        randomCard = 11
    }
    else if (randomCard > 10) {
        randomCard = 10;
    }
    return randomCard
}
function startGame(){
    isAlive = true;
    let firstCard = randomCard()
    let secondCard = randomCard()
    let cards = [firstCard, secondCard]
    let sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        message = "You got blackjack!"
    } else{
        isAlive = false
        message = "You're out of the game!"
    }
    messageEl.textContent = message
}

function newCard(){
    let card = randomCard();
    if (!hasBlackjack && isAlive) {
        cards.push(card)
        sum += card
        renderGame()
    }
}



