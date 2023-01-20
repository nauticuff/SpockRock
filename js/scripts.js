
//BEGIN PVP PORTION

//END PVP PORTION


//BEGIN HOME SCREEN
let userWeapon = "";
let isPVP
let HomePage = document.getElementById('HomePage')

let PVP = document.getElementById('PVP').addEventListener('click', () => {
    isPVP = true;
    ClearHome();
    DisplayRounds();
})

let PVC = document.getElementById('PVC').addEventListener('click', () => {
    isPVP = false;
    ClearHome();
    DisplayRounds();

})

let oneRoundPicked
let fiveRoundPicked
let sevenRoundPicked

function ScoreCompare() {
    if (oneRoundPicked == true && playerOneCount < playerTwoCount) {
        DisplayLossMessage();
        if (isPVP == false) {
            createLoss.textContent = "Uh oh, you lost against a computer :(";
        } else if (isPVP == true) {
            createLoss.textContent = "Player 2 wins the match!";
        }
       
        roundClicked.classList.add('disabled');

    } else if (oneRoundPicked == true && playerOneCount > playerTwoCount) {
        DisplayWinMessage();
        if (isPVP == false) {
            createWin.textContent = "Hooray, you defeated the computer :D";
        } else if (isPVP == true) {
            createWin.textContent = "Player 1 wins the match!";
        }
       
        roundClicked.classList.add('disabled');

    } else if (fiveRoundPicked == true && playerOneCount == 4) {
        DisplayWinMessage();
        if (isPVP == false) {
            createWin.textContent = "Hooray, you defeated the computer :D";
        } else if (isPVP == true) {
            createWin.textContent = "Player 1 wins the match!";
        }
       
        roundClicked.classList.add('disabled');

    } else if (fiveRoundPicked == true && playerTwoCount == 4) {
        DisplayLossMessage();
        if (isPVP == false) {
            createLoss.textContent = "Uh oh, you lost against a computer :(";
        } else if (isPVP == true) {
            createLoss.textContent = "Player 2 wins the match!";
        }
     
        roundClicked.classList.add('disabled');

    } else if (sevenRoundPicked = true && playerOneCount == 5) {
        DisplayWinMessage();
        if (isPVP == false) {
            createWin.textContent = "Hooray, you defeated the computer :D";
        } else if (isPVP == true) {
            createWin.textContent = "Player 1 wins the match!";
        }
        roundClicked.classList.add('disabled');

    } else if (sevenRoundPicked = true && playerTwoCount == 5) {
        DisplayLossMessage();
        if (isPVP == false) {
            createLoss.textContent = "Uh oh, you lost against a computer :(";
        } else if (isPVP == true) {
            createLoss.textContent = "Player 2 wins The Match!";
        }
        roundClicked.classList.add('disabled');
    }
}


//BEGIN GAME WEAPON CHOICES

let firstPlayerTurn = true;

let rock = document.getElementById('rock').addEventListener('click', () => {
    if (isPVP == false) {
        userWeapon = "Rock";
        FetchWeapon();
        Compare();
        ScoreCompare();
    } else if (isPVP == true && firstPlayerTurn == true) {
        userWeapon = "Rock";
        firstPlayerTurn = false;
    } else if (isPVP = true && firstPlayerTurn == false) {
        cpuResponse = "Rock";
        Compare();
        ScoreCompare();
    }
})

let paper = document.getElementById('paper').addEventListener('click', () => {
    if (isPVP == false) {
        userWeapon = "Paper";
        FetchWeapon();
        Compare();
        ScoreCompare();
    }
    else if (isPVP == true && firstPlayerTurn == true) {
        userWeapon = "Paper";
        firstPlayerTurn = false;
    } else if (isPVP = true && firstPlayerTurn == false) {
        cpuResponse = "Paper";
        Compare();
        ScoreCompare();
    }
})

let scissors = document.getElementById('scissors').addEventListener('click', () => {
    if (isPVP == false) {
        userWeapon = "Scissors";
        FetchWeapon();
        Compare();
        ScoreCompare();
    } else if (isPVP == true && firstPlayerTurn == true) {
        userWeapon = "Scissors";
        firstPlayerTurn = false;
    } else if (isPVP = true && firstPlayerTurn == false) {
        cpuResponse = "Scissors";
        Compare();
        ScoreCompare();
    }
})

let lizard = document.getElementById('lizard').addEventListener('click', () => {
    if (isPVP == false) {
        userWeapon = "Lizard";
        FetchWeapon();
        Compare();
        ScoreCompare();
    } else if (isPVP == true && firstPlayerTurn == true) {
        userWeapon = "Lizard";
        firstPlayerTurn = false;
    } else if (isPVP = true && firstPlayerTurn == false) {
        cpuResponse = "Lizard";
        Compare();
        ScoreCompare();
    }
})

let spock = document.getElementById('spock').addEventListener('click', () => {
    if (isPVP == false) {
        userWeapon = "Spock";
        FetchWeapon();
        Compare();
        ScoreCompare();
    } else if (isPVP == true && firstPlayerTurn == true) {
        userWeapon = "Spock";
        firstPlayerTurn = false;
    } else if (isPVP = true && firstPlayerTurn == false) {
        cpuResponse = "Spock";
        Compare();
        ScoreCompare();
    }
})

// BEGIN GAME OPTION BUTTONS

let GameGoBackBtn = document.getElementById('GameGoBackBtn').addEventListener('click', () => {
    DisplayRounds();
    DisplayResultPVP();
    RemoveOptions();
    RemoveMessage();
    ResetCounter();
    roundClicked.classList.remove('disabled');
    cpuWins();
    userWins();

})

let GameResetBtn = document.getElementById('GameResetBtn').addEventListener('click', () => {
    firstPlayerTurn = true;
    ResetCounter();
    roundClicked.classList.remove('disabled');
    cpuWins();
    userWins();
})

let GameHomeBtn = document.getElementById('GameHomeBtn').addEventListener('click', () => {
    refreshPage()
    roundClicked.classList.remove('disabled');
})

//BEGIN COUNTER VARIABLES

let playerOneScore = document.getElementById('playerOneScore');
let playerOneCount = 0;
playerOneScore.innerText = playerOneCount;


let playerTwoScore = document.getElementById('playerTwoScore');
let playerTwoCount = 0;

//BEGIN FETCH VARIABLES

let cpuResponse = "";

//BEGIN WIN, LOSS, TIE MESSAGE VARIABLES

let wltMessage = document.getElementById('wltMessage')

//BEGIN ALL FUNCTIONS (WILL ORGANIZE LATER PROBABLY)

function DisplayRounds() {
    let r1 = document.createElement('div');
    r1.textContent = "1 Round";
    r1.id = "oneRound";

    let r2 = document.createElement('div');
    r2.textContent = "5 Rounds";
    r2.id = "fiveRound";

    let r3 = document.createElement('div');
    r3.textContent = "7 Rounds";
    r3.id = "sevenRound";

    let roundsSub = document.createElement('div');
    roundsSub.className = "rounds text-center";

    let backBtn = document.createElement('p')
    backBtn.className = "back";
    backBtn.id = "backBtn";
    backBtn.textContent = "Back";


    roundsSub.appendChild(r1);
    roundsSub.appendChild(r2);
    roundsSub.appendChild(r3);

    HomePage.appendChild(roundsSub);
    HomePage.appendChild(backBtn);

    console.log(isPVP);

    let oneRound = document.getElementById('oneRound').addEventListener('click', () => {
        ClearHome();
        DisplaySVG();
        DisplayOptions();
        oneRoundPicked = true;
        fiveRoundPicked = false;
        sevenRoundPicked = false;
    })

    let fiveRound = document.getElementById('fiveRound').addEventListener('click', () => {
        ClearHome();
        DisplaySVG();
        DisplayOptions();
        fiveRoundPicked = true;
        oneRoundPicked = false;
        sevenRoundPicked = false;

    })

    let sevenRound = document.getElementById('sevenRound').addEventListener('click', () => {
        ClearHome();
        DisplaySVG();
        DisplayOptions();
        sevenRoundPicked = true;
        fiveRoundPicked = false;
        oneRoundPicked = false;

    })

    backBtn.addEventListener('click', () => {
        ClearHome();
        DisplayHome();
    })

}

function DisplayHome() {
    HomePage.className = "row home-select";

    let pvpInject = document.createElement('div');
    pvpInject.id = "PVP";
    pvpInject.className = "col-6 text-center";
    pvpInject.textContent = "Player vs Player";

    let pvcInject = document.createElement('div');
    pvcInject.id = "PVC";
    pvcInject.className = "col-6 text-center";
    pvcInject.textContent = "Player vs CPU";

    HomePage.appendChild(pvpInject);
    HomePage.appendChild(pvcInject);

    let PVP = document.getElementById('PVP').addEventListener('click', () => {
        isPVP = true;
        ClearHome();
        DisplayRounds();
    })

    let PVC = document.getElementById('PVC').addEventListener('click', () => {
        isPVP = false;
        ClearHome();
        DisplayRounds();
    })
}

function ClearHome() {
    HomePage.className = "";
    HomePage.innerHTML = "";
}

function DisplaySVG() {
    roundClicked.classList.remove('weaponChoice');
    roundClicked.classList.add('displayWeaponChoice');
}

function DisplayResultPVP() {
    roundClicked.classList.add('weaponChoice');
    roundClicked.classList.remove('displayWeaponChoice');

}

function DisplayOptions() {
    colorsBox.classList.add('colors-display');
}

function RemoveOptions() {
    colorsBox.classList.remove('colors-display');
}

function ResetCounter() {
    playerOneCount = 0;
    playerTwoCount = 0;
    playerOneScore.innerText = playerOneCount;
    playerTwoScore.innerText = playerTwoCount;
    RemoveMessage();
}

function userWins() {
    playerOneScore.textContent = playerOneCount++;
}
userWins();

function cpuWins() {
    playerTwoScore.textContent = playerTwoCount++;
}
cpuWins();

function refreshPage() {
    window.location.reload();
}

let createWin = document.createElement('div');
function DisplayWinMessage() {

    createWin.classList = "message";
    createWin.textContent = "You win. Keep going!";

    if (isPVP == true) {
        createWin.textContent = "Player 1 won that round!";
    }

    wltMessage.appendChild(createWin);
    firstPlayerTurn = true;
}

let createLoss = document.createElement('div');
function DisplayLossMessage() {

    createLoss.classList = 'message';
    createLoss.textContent = "You lose. Don't give up!";

    if (isPVP == true) {
        createLoss.textContent = "Player 2 won that round!";
    }

    wltMessage.appendChild(createLoss);
    firstPlayerTurn = true;
}

let createTie = document.createElement('div');
function DisplayTieMessage() {

    createTie.classList = 'message';
    createTie.textContent = "It's a tie. Try again!";
    wltMessage.appendChild(createTie);
    firstPlayerTurn = true;
}

function RemoveMessage() {
    wltMessage.innerHTML = "";
}

//BEGIN FETCH

setTimeout(() => FetchWeapon(), 50);
function FetchWeapon() {
    fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(response => response.text()
    ).then(data => {
        cpuResponse = data
    })
}

function Compare() {
    if (userWeapon == "Rock" && (cpuResponse == "Lizard" || cpuResponse == "Scissors")) {
        userWins();
        RemoveMessage();
        DisplayWinMessage();
    } else if (userWeapon == "Rock" && (cpuResponse == "Paper" || cpuResponse == "Spock")) {
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
    } else if (userWeapon == "Rock" && cpuResponse == "Rock") {
        RemoveMessage();
        DisplayTieMessage();
    }

    else if (userWeapon == "Paper" && (cpuResponse == "Rock" || cpuResponse == "Spock")) {
        userWins();
        RemoveMessage();
        DisplayWinMessage();
    } else if (userWeapon == "Paper" && (cpuResponse == "Lizard" || cpuResponse == "Scissors")) {
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
    } else if (userWeapon == "Paper" && cpuResponse == "Paper") {
        RemoveMessage();
        DisplayTieMessage();
    }

    else if (userWeapon == "Scissors" && (cpuResponse == "Lizard" || cpuResponse == "Paper")) {
        userWins();
        RemoveMessage();
        DisplayWinMessage();
    } else if (userWeapon == "Scissors" && (cpuResponse == "Rock" || cpuResponse == "Spock")) {
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
    } else if (userWeapon == "Scissors" && cpuResponse == "Scissors") {
        RemoveMessage();
        DisplayTieMessage();
    }

    else if (userWeapon == "Lizard" && (cpuResponse == "Spock" || cpuResponse == "Paper")) {
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    } else if (userWeapon == "Lizard" && (cpuResponse == "Rock" || cpuResponse == "Scissors")) {
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
    } else if (userWeapon == "Lizard" && cpuResponse == "Lizard") {
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }

    else if (userWeapon == "Spock" && (cpuResponse == "Rock" || cpuResponse == "Scissors")) {
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    } else if (userWeapon == "Spock" && (cpuResponse == "Paper" || cpuResponse == "Lizard")) {
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
    } else if (userWeapon == "Spock" && cpuResponse == "Spock") {
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
}

// BEGIN FETCHING

