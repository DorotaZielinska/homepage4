console.log("Witam, udanego czytania since-fiction!");

let js__button = document.querySelector(".js__button");
let body = document.querySelector(".body");
let js__themeName = document.querySelector(".js__themeName");
let currentModul = document.querySelector(".currentModul").innerText;
let howMuch = document.querySelector(".howMuch");

js__button.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    js__themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
})

switch (currentModul) {
    case "1":
    case "2":
    case "3":
    case "4":
        howMuch.innerText = "pierwszy kwartał";
        break;
    case "5":
    case "6":
    case "7":
    case "8":
        howMuch.innerText = "drugi kwartał";
        break;
    case "9":
    case "10":
    case "11":
    case "12":
        howMuch.innerText = "trzeci kwartał";
        break;
    case "13":
    case "14":
    case "15":
        howMuch.innerText = "czwarty kwartał";
        break;
    case "16":
        howMuch.innerText = "ukończenie kursu";
}


