let points = 8000;
let value = 1
var pointContent = document.getElementById("points");

var doubleClickContent = document.getElementById("doubleClick");
var addModelContent = document.getElementById("addModel");
var addSuperModelContent = document.getElementById("addSuperModel");
var addMegaModelContent = document.getElementById("addMegaModel");

checkShop.doubleButton = document.getElementById("doubleButton");
checkShop.addModelButton = document.getElementById("addModelButton");
checkShop.addSuperModelButton = document.getElementById("addSuperModelButton");
checkShop.addMegaModelButton = document.getElementById("addMegaModelButton");

function addPoint() {
    points += value;
    pointContent.textContent = "Points: " + points;
    checkShop();
    for (let i = 0; i < value; i++) {
        pointAnimation()
    }
}

function checkShop() {
    console.log(doubleButton);
    if (points >= 500) {
        doubleButton.classList.remove("disabledButton");

        document.getElementById("doubleClick").innerHTML = `
        <button onclick="doubleClicks()" id="doubleButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        double clicks
                        <span class="btn-overlay">
                            buy
                        </span></button>
        `;
        doubleButton.classList.add("enabledButton");
    } else {
        document.getElementById("doubleClick").innerHTML = `
        <button onclick="doubleClicks()" id="doubleButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        double clicks
                        <span class="btn-overlay">
                        500 Points
                        </span></button>
        `;
        doubleButton.classList.add("disabledButton");
    }
    if (points >= 1000) {
        addModelButton.classList.remove("disabledButton");
        addModelContent.innerHTML = `
        <button onclick="addModel()" id="addModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add model
                        <span class="btn-overlay">
                            buy
                        </span></button>
        `;
        addModelButton.classList.add("enabledButton");
    } else {
        addModelContent.innerHTML = `
        <button onclick="addModel()" id="addModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add model
                        <span class="btn-overlay">
                        1000 Points
                        </span></button>
        `;
        addModelButton.classList.add("disabledButton");
    }

    if (points >= 2500) {
        addSuperModelButton.classList.remove("disabledButton");
        addSuperModelContent.innerHTML = `
        <button onclick="addSuperModel()" id="addSuperModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add supermodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        addSuperModelButton.classList.add("enabledButton");
    } else {
        addSuperModelContent.innerHTML = `
        <button onclick="addSuperModel()" id="addSuperModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add supermodel
                        <span class="btn-overlay">
                        2500 Points
                        </span></button>
        `;
        addSuperModelButton.classList.add("disabledButton");
    }

    if (points >= 5000) {
        addMegaModelButton.classList.remove("disabledButton");
        addMegaModelContent.innerHTML = `
        <button onclick="addMegaModel()" id="addMegaModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add megamodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        addMegaModelButton.classList.add("enabledButton");
    } else {
        addMegaModelContent.innerHTML = `
        <button onclick="addMegaModel()" id="addMegaModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add megamodel
                        <span class="btn-overlay">
                        5000 Points
                        </span></button>
        `;
        addMegaModelButton.classList.add("disabledButton");
    }

}

function doubleClicks() {
    if (doubleButton.className === "enabledButton") {
        value === 1 ? value++ : value *= 2;
        buy(500);
    }
}

function addModel() {
    if (addModelButton.className === "enabledButton") {
        setInterval(function() {
            points++;
            pointContent.textContent = "Points: " + points;
            pointAnimation();
            checkShop();
        }, 1000);
        buy(1000);
    }
}

function addSuperModel() {
    if (addSuperModelButton.className === "enabledButton") {
        setInterval(function() {
            points += 2;
            pointContent.textContent = "Points: " + points;
            for (let i = 0; i < 2; i++) {
                pointAnimation();
            }
            checkShop();
        }, 1000);
        buy(2500);
    }
}

function addMegaModel() {
    if (addMegaModelButton.className === "enabledButton") {
        setInterval(function() {
            points += 5;
            pointContent.textContent = "Points: " + points;
            for (let i = 0; i < 5; i++) {
                pointAnimation();
            }
            checkShop();
        }, 1000);
        buy(5000);
    }
}

function buy(costs) {
    points -= costs;
    pointContent.textContent = "Points: " + points;
    checkShop();
}

function pointAnimation() {
    let click = document.createElement("p");
    let clickText = document.createTextNode("★");
    click.appendChild(clickText);
    click.style = "position:absolute; left:" + Math.random() * 90 + "%; top:" + Math.random() * 90 + "%;";
    document.querySelector(".Clicker").appendChild(click);
    setTimeout(() => {
        document.querySelector(".Clicker").removeChild(click);
    }, 1000);
}