console.log("Serwus!")

const foreignMoney = document.querySelector(".js-currency");
const polishMoney = document.querySelector(".js-exchangedPLN");
const formElement = document.querySelector(".js-form");
const calculatedOutput = document.querySelector(".js-output");

const USD = document.querySelector(".js-USD");
const EUR = document.querySelector(".js-EUR");
const GBP = document.querySelector(".js-GBP");

const USDrate = 4.46;
const EURrate = 4.72;
const GBPrate = 5.36;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = foreignMoney.value;
    const PLN = polishMoney.value;

    let rate;
    switch (currency) {
        case "USD":
            rate = USDrate;
            break;

        case "EUR":
            rate = EURrate;
            break;

        case "GBP":
            rate = GBPrate;
    }

    const output = PLN / rate;

    calculatedOutput.innerText = output.toFixed(2) + " " + currency;
});

formElement.addEventListener("reset", () => {
    calculatedOutput.innerText = "Wybierz walutę i wpisz kwotę do wymiany.";
});

USD.innerText = USDrate.toFixed(2) + ` zł`;
EUR.innerText = EURrate.toFixed(2) + ` zł`;
GBP.innerText = GBPrate.toFixed(2) + ` zł`;