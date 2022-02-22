let points = 0;
let value = 1

function addPoint() {
    points += value;
    document.querySelector("#points").textContent = "Points: " + points;
    checkShop();
    let click = document.createElement("p");
    let clickText = document.createTextNode("+1");
    click.appendChild(clickText);
    click.style = "position:absolute; left:" + Math.random() * 90 + "%; top:" + Math.random() * 90 + "%;";
    document.querySelector(".Clicker").appendChild(click);
    setTimeout(() => {
        document.querySelector(".Clicker").removeChild(click);
    }, 1000);
}

function checkShop() {
    if (points >= 500) {
        document.getElementById("doubleButton").classList.remove("disabledButton");

        document.getElementById("doubleClick").innerHTML = `
        <button onclick="doubleClicks()" id="doubleButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        double clicks
                        <span class="btn-overlay">
                            buy
                        </span></button>
        `;
        document.getElementById("doubleButton").classList.add("enabledButton");
    } else {
        document.getElementById("doubleButton").classList.add("disabledButton");
    }
    if (points >= 1000) {
        document.getElementById("addModelButton").classList.remove("disabledButton");
        document.getElementById("addModel").innerHTML = `
        <button onclick="addModel()" id="addModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add model
                        <span class="btn-overlay">
                            buy
                        </span></button>
        `;
        document.getElementById("addModelButton").classList.add("enabledButton");
    } else {
        document.getElementById("addModelButton").classList.add("disabledButton");
    }

    if (points >= 2500) {
        document.getElementById("addSuperModelButton").classList.remove("disabledButton");
        document.getElementById("addSuperModel").innerHTML = `
        <button onclick="addSuperModel()" id="addSuperModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add supermodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        document.getElementById("addSuperModelButton").classList.add("enabledButton");
    } else {
        document.getElementById("addSuperModelButton").classList.add("disabledButton");
    }

    if (points >= 5000) {
        document.getElementById("addMegaModelButton").classList.remove("disabledButton");
        document.getElementById("addMegaModel").innerHTML = `
        <button onclick="addMegaModel()" id="addMegaModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add megamodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        document.getElementById("addMegaModelButton").classList.add("enabledButton");
    } else {
        document.getElementById("addMegaModelButton").classList.add("disabledButton");
    }

}

function doubleClicks() {
    if (document.getElementById("doubleButton").className === "enabledButton") {
        value === 1 ? value++ : value *= 2;
        buy(500);
    }
}

function addModel() {
    if (document.getElementById("addModelButton").className === "enabledButton") {
        setInterval(function() {
            points++;
            document.querySelector("#points").textContent = "Points: " + points;
        }, 1000);
        buy(1000);
    }
}

function addSuperModel() {
    if (document.getElementById("addModelButton").className === "enabledButton") {
        setInterval(function() {
            points += 2;
            document.querySelector("#points").textContent = "Points: " + points;
        }, 1000);
        buy(2500);
    }
}

function addMegaModel() {
    if (document.getElementById("addModelButton").className === "enabledButton") {
        setInterval(function() {
            points += 5;
            document.querySelector("#points").textContent = "Points: " + points;
        }, 1000);
        buy(5000);
    }
}

function buy(costs) {
    points -= costs;
    document.querySelector("#points").textContent = "Points: " + points;
    checkShop();
}