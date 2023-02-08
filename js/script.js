{
    const toogleBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    };
    const resultOfCurrentModul = (currentModul,howMuch) => {
        const currentModul = document.querySelector(".currentModul").innerText;
        const howMuch = document.querySelector(".howMuch");
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
    }
    const init = () => {
        const button = document.querySelector(".button");
        button.addEventListener("click", toogleBackground);
        const welcome = () => {
            console.log("Witam, udanego czytania since-fiction!");
        }
        welcome();
    };
    init();
}


