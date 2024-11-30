/* 
    Genereeritud ChatGPTga, ise kohandatud vastavalt vajadusele.
*/

// Lisame piltidele hover-efekti
const smallImages = document.querySelectorAll(".small-image");
smallImages.forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.5)";
        image.style.transition = "transform 0.3s ease";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1.0)";
    });
});

// Valime vajalikud elemendid akna jaoks
const customAlert = document.getElementById("customAlert");
const closeAlert = document.getElementById("closeAlert");
const mainImage = document.getElementById("mainImage");

// Kuvame akna, kui klõpsatakse peamist pilti
mainImage.addEventListener("click", () => {
    customAlert.style.display = "block";
});

// Peidame akna, kui vajutatakse "OK" nupule
closeAlert.addEventListener("click", () => {
    customAlert.style.display = "none";
});
