/* 
    Lasin copilotil genereerida koodi, 
    kus on vajalikud htmli-mudimise funktsioonid (mida ma peast ei tea),
    edasi programmeerisin korralikku loogikat ise edasi.
*/


const questions = [
    ["Kas sulle meeldib õues aega veeta?", "photo"],
    ["Kas sulle meeldivad kehalised tegevused?", "iron"],
    ["Kas sa eelistad üksinda nikerdamist?", "photo"],
    ["Kas sulle meeldib hetkeid jäädvustada?", "photo"],
    ["Kas sa oled pigem introvert?", "photo"],
    ["Kas sa oled pigem rahulik?", "photo"],
    ["Kas sa oled pigem aktiivne?", "iron"],
    ["Kas sa oled pigem kohusetundlik?", "iron"],
    ["Kas sa oled pigem loov?", "photo"],
    ["Kas sa oled pigem impulsiivne?", "photo"],
    ["Kas sa eelistad pigem kodus olla?", "photo"],
    ["Kas sa eelistad pigem väljas käia?", "iron"],
    ["Kas sa eelistad pigem rutiini?", "iron"],
    ["Kas sa eelistad pigem spontaansust?", "photo"],
    ["Kas sa eelistad pigem mõelda?", "photo"],
];

let questionlist = questions.sort(() => 0.5 - Math.random()).slice(0, 6);
let currentQuestionIndex = 0
let skoorid = {
    photo: 0,
    iron: 0
}
function alusta() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("question").innerText = questionlist[currentQuestionIndex][0];
    document.getElementById("question-container").style.display = "flex";
    document.querySelector('.game').scrollIntoView({ behavior: 'smooth' });
}
function vasta(answer) {
    if (answer === "jah") {
        liitja = 1
    } else {
        liitja = -1
    }
    skoorid[questionlist[currentQuestionIndex][1]] += liitja;
    currentQuestionIndex++;
    if (currentQuestionIndex < questionlist.length) {
        document.getElementById("question").innerText = questionlist[currentQuestionIndex][0];
    } else {
        tulemus();
    }
}

function tulemus() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "flex";
    const tulemus = skoorid.photo > skoorid.iron ? "photobutt" : "ironmanbutt";
    // copy the element with the id tulemus
    const tulemusElement = document.getElementById(tulemus).cloneNode(true);
    document.getElementById("result").appendChild(tulemusElement);
    document.querySelector('#gamesec').scrollIntoView({ behavior: 'smooth' });

}
