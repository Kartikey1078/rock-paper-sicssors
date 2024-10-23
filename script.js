var countMyWin = localStorage.getItem("kartikey") ? parseInt(localStorage.getItem("kartikey")) : 0;
var countComputerWin = localStorage.getItem("computer") ? parseInt(localStorage.getItem("computer")) : 0;

document.getElementById('myScore').innerText = countMyWin;
document.getElementById('computerScore').innerText = countComputerWin;

function CheckResult(val) {
    debugger
    let hideContainerDiv = document.getElementById("containerID").style.display = "none";
    var getValueSelected = val
    let ValueForComputer = ['paper','rock','scissors'];
    let getComputerValue = ValueForComputer[(Math.floor(Math.random() * ValueForComputer.length))]

    if (getValueSelected == getComputerValue) {
        document.getElementById("containerSame").style.display = "flex"
        document.getElementById("ShowMyTie").style.display = "flex"
        document.getElementById("btnReplay").style.display = "flex"
        if (getValueSelected == "rock") {
            document.getElementById("ShowRockWins").style.display = "flex"
        }
        else if (getValueSelected == "paper") {
            document.getElementById("PhowPaperWins").style.display = "flex"
        }
        else {
            document.getElementById("SShowSicciorsWins").style.display = "flex"
            document.getElementById("SShowSicciorsWins").style.justifyContent = "space-around"
        }
    }
    else if (getValueSelected === 'rock' && getComputerValue === 'scissors'
        || getValueSelected === 'paper' && getComputerValue === 'rock'
        || getValueSelected === 'scissors' && getComputerValue === 'paper'
    ) {
        document.getElementById("ShowMyWin").style.display = "flex"
        document.getElementById("winDiv").style.display = "flex"
        document.getElementById("btn").style.display = "flex"

        if (getValueSelected == "rock") {
            document.getElementById("RWin").style.display = "flex";
        } if (getValueSelected == "paper") {
            document.getElementById("PWin").style.display = "flex";
        } if (getValueSelected == "scissors") {
            document.getElementById("SWin").style.display = "flex";
        } if (getComputerValue == 'scissors') {
            document.getElementById("SWin").style.display = "flex";
        }
        if (getComputerValue == 'rock') {
            document.getElementById("RWin").style.display = "flex";
        } if (getComputerValue == 'paper') {
            document.getElementById("PWin").style.display = "flex";
        }

        ++countMyWin
        localStorage.setItem("kartikey", countMyWin)
        document.getElementById('myScore').innerText = countMyWin;
    }
    else {
        document.getElementById("ShowMyLoos").style.display = "flex"
        document.getElementById("btn").style.display = "flex"
        document.getElementById("winDiv").style.display = "flex"
        if (getComputerValue === "rock") {
            document.getElementById("RWin").style.display = "flex";
        } if (getComputerValue === "paper") {
            document.getElementById("PWin").style.display = "flex";
        } if (getComputerValue === "scissors") {
            document.getElementById("SWin").style.display = "flex";
        } if (getValueSelected === "rock") {
            document.getElementById("RWin").style.display = "flex";
        } if (getValueSelected === "paper") {
            document.getElementById("PWin").style.display = "flex";
        } if (getValueSelected === "scissors") {
            document.getElementById("SWin").style.display = "flex";

        }

        countComputerWin++;
        localStorage.setItem("computer", countComputerWin);
        document.getElementById('computerScore').innerText = countComputerWin;
    }
}

function playAgain() {
    debugger
    document.getElementById("containerSame").style.display = "none"
    document.getElementById("winDiv").style.display = "none"
    document.getElementById("containerID").style.display = "flex"
    document.getElementById("btnReplay").style.display = "none"
    document.getElementById("btn").style.display = "none"
    document.getElementById("ShowMyLoos").style.display = "none"
    document.getElementById("ShowMyWin").style.display = "none"
    document.getElementById("ShowMyTie").style.display = "none"
}
function playAgainReplay() {
    document.getElementById("containerSame").style.display = "none"
    document.getElementById("winDiv").style.display = "none"
    document.getElementById("containerID").style.display = "flex"
    document.getElementById("btnReplay").style.display = "none"
    document.getElementById("btn").style.display = "none"
    document.getElementById("ShowMyLoos").style.display = "none"
    document.getElementById("ShowMyWin").style.display = "none"
    document.getElementById("ShowMyTie").style.display = "none"
}

function showgameRule() {
    let gameRuleElement = document.getElementById("gameRuleShow");

    if (gameRuleElement.style.display === "none" || gameRuleElement.style.display === "") {
        gameRuleElement.style.display = "block"; // Show the element
    } else {
        gameRuleElement.style.display = "none";  // Hide the element
    }
}


    function next() {
        document.getElementById("parent").style.display = 'none'
        document.getElementById("HurrayShow").style.display = 'block'
        document.getElementById("imgHurray").style.display = 'block'
        document.getElementById("imgStar").style.display = 'block'
        document.getElementById("ptag").style.display = 'block'
        document.getElementById("playAgainGame").style.display = 'block'
    }



function playAgainHurray() {
    document.getElementById("HurrayShow").style.display = "none"
    document.getElementById("parent").style.display = "block"
}
