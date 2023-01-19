let PVP = document.getElementById('PVP').addEventListener('click', () => {
    DisplayHome();
    DisplayRounds();
})

let PVC = document.getElementById('PVC').addEventListener('click', () => {
    DisplayHome();
    DisplayRounds();
})

let roundsMain = document.getElementById('roundsMain')

let rock = document.getElementById('rock').addEventListener('click', () => {
    DisplayResultPVP();
})

let paper = document.getElementById('paper').addEventListener('click', () => {
    DisplayResultPVP();
})

let scissors = document.getElementById('scissors').addEventListener('click', () => {
    DisplayResultPVP();
})

let lizard = document.getElementById('lizard').addEventListener('click', () => {
    DisplayResultPVP();
})

let spock = document.getElementById('spock').addEventListener('click', () => {
    DisplayResultPVP();
})

 

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

    roundsMain.appendChild(roundsSub);
    roundsMain.appendChild(backBtn);
    
    let oneRound = document.getElementById('oneRound').addEventListener('click', () => {
        DisplayHome();
        DisplaySVG();
        DisplayOptions();
    })

    let fiveRound = document.getElementById('fiveRound').addEventListener('click', () => {
        DisplayHome();
        DisplaySVG();
        DisplayOptions();
    })

    let sevenRound = document.getElementById('sevenRound').addEventListener('click', () => {
        DisplayHome();
        DisplaySVG();
        DisplayOptions();
    })

    backBtn.addEventListener('click', () => {
        DisplayHome();
        Back();

        let PVP = document.getElementById('PVP').addEventListener('click', () => {
            DisplayHome();
            DisplayRounds();
        })
        
        let PVC = document.getElementById('PVC').addEventListener('click', () => {
            DisplayHome();
            DisplayRounds();
        })
    })

}

function Back(){
    roundsMain.className = "row home-select";
    
    let pvpInject = document.createElement('div');
    pvpInject.id = "PVP";
    pvpInject.className = "col-6 text-center";
    pvpInject.textContent = "Player vs Player";

    let pvcInject = document.createElement('div');
    pvcInject.id = "PVC";
    pvcInject.className = "col-6 text-center";
    pvcInject.textContent = "Player vs CPU";

    roundsMain.appendChild(pvpInject);
    roundsMain.appendChild(pvcInject);
}

function DisplayHome(){
    roundsMain.className = "";
    roundsMain.innerHTML = "";
}

function DisplaySVG(){
    roundClicked.classList.remove('choice');
    roundClicked.classList.add('choice-one');
}

function DisplayResultPVP(){
    roundClicked.classList.add('choice');
    roundClicked.classList.remove('choice-one');

    //Create
}

function DisplayResultPVC(){

}

function DisplayOptions(){
    colorsBox.classList.add('colors-display');
}


// BEGIN FETCHING

