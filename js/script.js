let gem = document.querySelector('.gem-count');
let parsedGem = parseFloat(gem.innerHTML);

let clickSecond = document.querySelector('.click-per-second');
let parsedClickSecond = parseFloat(clickSecond.innerHTML);

let clickerCost = document.querySelector('.clicker-cost');
let parsedClickerCost = parseFloat(clickerCost.innerHTML);
let levelClicker = document.querySelector('.level-clicker');



let upgrade = document.getElementsByClassName('.upgrade');

let gpc = 1;

function addGem() {
    gem.innerHTML = Math.round(parsedGem += gpc);
}

function buyClicker() {
    if(parsedGem >= parsedClickerCost) {
        parsedGem -= parsedClickerCost;
        gem.innerHTML = Math.round(parsedGem)
        clickerCost.innerHTML = Math.round(parsedClickerCost *= 1.3);

        levelClicker.innerHTML ++;

        gpc *= 1.3;

    }
}


