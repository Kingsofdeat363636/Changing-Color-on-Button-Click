const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red", "blue", "green", "pink"];
button.addEventListener("click", deneme);

function deneme() {
    // Rastgele Renk Seçmek
    const deneme1 = Math.floor(Math.random() * colors.length);
    const deneme2 = colors[deneme1];
    body.style.backgroundColor = deneme2;
}