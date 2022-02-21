let points = 0;
let value = 1

function addPoint() {
    points += value;
    console.log(value + '|' + points);
    document.querySelector("#points").textContent = "Points: " + points;
    checkShop();
}

function checkShop() {
    if (points >= 10) {
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
    }
    if (points >= 15) {
        document.getElementById("addModelButton").classList.remove("disabledButton");
        document.getElementById("addModel").innerHTML = `
        <button id="addModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add model
                        <span class="btn-overlay">
                            buy
                        </span></button>
        `;
        document.getElementById("addModelButton").classList.add("enabledButton");
    }

    if (points >= 20) {
        document.getElementById("addSuperModelButton").classList.remove("disabledButton");
        document.getElementById("addSuperModel").innerHTML = `
        <button id="addSuperModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add supermodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        document.getElementById("addSuperModelButton").classList.add("enabledButton");
    }

    if (points >= 25) {
        document.getElementById("addMegaModelButton").classList.remove("disabledButton");
        document.getElementById("addMegaModel").innerHTML = `
        <button id="addMegaModelButton"><span class="fa fa-certificate"></span>
                        &nbsp;
                        add megamodel
                        <span class="btn-overlay">
                        buy
                        </span></button>
        `;
        document.getElementById("addMegaModelButton").classList.add("enabledButton");
    }
}

function doubleClicks() {
    alert("hello");
    if (document.getElementById("doubleButton").className === "enabledButton") {
        if (value === 1) {
            value++
        } else {
            value *= 2;
        }
    }
}