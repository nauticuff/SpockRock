

//BEGIN HOME SCREEN
let userWeapon = "";
let isPVP 
let HomePage = document.getElementById('HomePage')

let PVP = document.getElementById('PVP').addEventListener('click', () => {
    ClearHome();
    DisplayRounds();
    isPVP = true;
})

let PVC = document.getElementById('PVC').addEventListener('click', () => {
    ClearHome();
    DisplayRounds();
    isPVP = false;
})

let oneRoundPicked 
let fiveRoundPicked
let sevenRoundPicked

function Rock(){
    if(oneRoundPicked == true && playerOneCount < playerTwoCount){
        LossMessage.innerText = "Uh oh, you lost against a computer :(";
        roundClicked.classList.add('disabled');
       
    }else if(oneRoundPicked == true && playerOneCount > playerTwoCount){
        WinMessage.innerText = "Hooray, you defeated the computer :D";
        roundClicked.classList.add('disabled');
       
    }else if(fiveRoundPicked == true && playerOneCount == 4){
        WinMessage.innerText = "Hooray, you defeated the computer :D";
        roundClicked.classList.add('disabled');
     
    }else if(fiveRoundPicked == true && playerTwoCount == 4){
        LossMessage.innerText = "Uh oh, you lost against a computer :(";
        roundClicked.classList.add('disabled');

    }else if(sevenRoundPicked = true && playerOneCount == 5){
        WinMessage.innerText = "Hooray, you defeated the computer :D";
        roundClicked.classList.add('disabled');

    }else if(sevenRoundPicked = true && playerTwoCount == 5){
        LossMessage.innerText = "Uh oh, you lost against a computer :(";
        roundClicked.classList.add('disabled');
    }
}

// function Paper(){
    
// }

// function Scissors(){

// }

// function Lizard(){

// }

// function Spock(){

// }

//BEGIN GAME WEAPON CHOICES

let rock = document.getElementById('rock').addEventListener('click', () => {
    userWeapon = "Rock";
    FetchWeapon();
    Compare();
    Rock();
    
})

let paper = document.getElementById('paper').addEventListener('click', () => {
    userWeapon = "Paper";
    FetchWeapon();
    Compare();
    Rock();
})

let scissors = document.getElementById('scissors').addEventListener('click', () => {
    userWeapon = "Scissors";
    FetchWeapon();
    Compare();
    Rock();
})

let lizard = document.getElementById('lizard').addEventListener('click', () => {
    userWeapon = "Lizard";
    FetchWeapon();
    Compare();
    Rock();
})

let spock = document.getElementById('spock').addEventListener('click', () => {
    userWeapon = "Spock";
    FetchWeapon();
    Compare();
    Rock();
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

let WinMessage = document.getElementById('WinMessage')
let LossMessage = document.getElementById('LossMessage')
let TieMessage = document.getElementById('TieMessage')

//BEGIN ALL FUNCTIONS (WILL ORGANIZE LATER PROBABLY)

function DisplayRounds(){
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

        let PVP = document.getElementById('PVP').addEventListener('click', () => {
            ClearHome();
            DisplayRounds();
            let isPVP = true;
        })
        
        let PVC = document.getElementById('PVC').addEventListener('click', () => {
            ClearHome();
            DisplayRounds();
            let isPVP = false;
        })

    })

}

function DisplayHome(){
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
        ClearHome();
        DisplayRounds();
    })
    
    let PVC = document.getElementById('PVC').addEventListener('click', () => {
        ClearHome();
        DisplayRounds();
    })
}

function ClearHome(){
    HomePage.className = "";
    HomePage.innerHTML = "";
}

function DisplaySVG(){
    roundClicked.classList.remove('weaponChoice');
    roundClicked.classList.add('displayWeaponChoice');
}

function DisplayResultPVP(){
    roundClicked.classList.add('weaponChoice');
    roundClicked.classList.remove('displayWeaponChoice');

}

function DisplayOptions(){
    colorsBox.classList.add('colors-display');
}

function RemoveOptions(){
    colorsBox.classList.remove('colors-display');
}

function ResetCounter(){
    playerOneCount = 0;
    playerTwoCount = 0;
    playerOneScore.innerText = playerOneCount;
    playerTwoScore.innerText = playerTwoCount;
    //userWins();
    //cpuWins();
    RemoveMessage();
    ResetMessages();
    
    //if(fiveRoundPicked)
}

function userWins(){
    playerOneScore.textContent = playerOneCount++;
}
userWins();

function  cpuWins(){
    playerTwoScore.textContent = playerTwoCount++;
}
cpuWins();

function refreshPage(){
    window.location.reload();
} 

function DisplayWinMessage(){
    WinMessage.classList.add('displayMessage');
}

function DisplayLossMessage(){
    LossMessage.classList.add('displayMessage')
}

function DisplayTieMessage(){
    TieMessage.classList.add('displayMessage')
}

function RemoveMessage(){
    WinMessage.classList.remove('displayMessage');
    LossMessage.classList.remove('displayMessage');
    TieMessage.classList.remove('displayMessage');
}

function ResetMessages(){
    WinMessage.innerText = "You Win. Keep going!";
    LossMessage.innerText = "You Lose. Don't give up!";
    TieMessage.innerText = "It's a Tie. Try again!";
}

//BEGIN FETCH

setTimeout(() => FetchWeapon(), 50);
function FetchWeapon(){
    fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(response => response.text()
    ).then(data => {
        cpuResponse = data
    })
}

function Compare(){
    if(userWeapon == "Rock" && (cpuResponse == "Lizard" || cpuResponse == "Scissors" )){
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    }else if(userWeapon == "Rock" && (cpuResponse == "Paper" || cpuResponse == "Spock")){
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
    }else if(userWeapon == "Rock" && cpuResponse == "Rock"){
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
    
    else if(userWeapon == "Paper" && (cpuResponse == "Rock" || cpuResponse == "Spock" )){
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    }else if(userWeapon == "Paper" && (cpuResponse == "Lizard" || cpuResponse == "Scissors")){
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
    }else if(userWeapon == "Paper" && cpuResponse == "Paper"){
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
    
    else if(userWeapon == "Scissors" && (cpuResponse == "Lizard" || cpuResponse == "Paper" )){
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    }else if(userWeapon == "Scissors" && (cpuResponse == "Rock" || cpuResponse == "Spock")){
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
        }else if(userWeapon == "Scissors" && cpuResponse == "Scissors"){
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
    
    else if(userWeapon == "Lizard" && (cpuResponse == "Spock" || cpuResponse == "Paper" )){
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    }else if(userWeapon == "Lizard" && (cpuResponse == "Rock" || cpuResponse == "Scissors")){
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
        }else if(userWeapon == "Lizard" && cpuResponse == "Lizard"){
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
    
    else if(userWeapon == "Spock" && (cpuResponse == "Rock" || cpuResponse == "Scissors" )){
        userWins();
        RemoveMessage();
        DisplayWinMessage();
        //console.log("You Win!");
    }else if(userWeapon == "Spock" && (cpuResponse == "Paper" || cpuResponse == "Lizard")){
        cpuWins();
        RemoveMessage();
        DisplayLossMessage();
        //console.log("You Lose!");
        }else if(userWeapon == "Spock" && cpuResponse == "Spock"){
        RemoveMessage();
        DisplayTieMessage();
        //console.log("It's a tie!")
    }
}


// BEGIN FETCHING

