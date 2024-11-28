const questions = [
    ["Kas sulle meeldib õues aega veeta?", "both"],
    ["Kas sulle meeldivad kehalised tegevused?", "iron"],
    ["Kas sa eelistad üksinda nikerdamist?", "photo"],
    ["Kas sulle meeldib hetkesid jäädvustada?", "photo"],
    ["Kas sa oled pigem introvert?", "photo"],
    ["Kas sa oled pigem ekstravert?", "iron"],
    ["Kas sa oled pigem rahulik?", "photo"],
    ["Kas sa oled pigem aktiivne?", "iron"],
    ["Kas sa oled pigem kohusetundlik?", "iron"],
    ["Kas sa oled pigem loov?", "photo"],
    ["Kas sa oled pigem impulsiivne?", "photo"],
    ["Kas sa eelistad pigem kodus olla?", "photo"],
    ["Kas sa eelistad pigem väljas käia?", "iron"],
    ["Kas sa eelistad pigem rutiini?", "iron"],
    ["Kas sa eelistad pigem spontaansust?", "photo"],
    ["Kas sa eelistad pigem planeerimist?", "iron"],
];

let questionlist = questions.sort(() => 0.5 - Math.random()).slice(0, 6);
let currentQuestionIndex = 0
let skoorid = {
    foto: 0,
    iron: 0
}
function alusta() {
    document.getElementById("start-container").style.display = "none";
    document.getElementById("question").innerText = questionlist[currentQuestionIndex][0];
    document.getElementById("question-container").style.display = "flex";
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
    document.getElementById("result-container").innerHTML = `
        <h3>Your Perfect Hobby is:</h3>
        <div id="result"></div>
    `;
    document.getElementById("result").appendChild(document.getElementById(tulemus));
}