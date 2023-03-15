{
    const welcome = () => {
        console.log("Serwus!")
    }
    welcome();


    const USDrate = 4.46;
    const EURrate = 4.72;
    const GBPrate = 5.36;

    const formElement = document.querySelector(".js-form");
    const calculatedOutput = document.querySelector(".js-output");


    const currencyValue = () => {
        const USD = document.querySelector(".js-USD");
        const EUR = document.querySelector(".js-EUR");
        const GBP = document.querySelector(".js-GBP");

        USD.innerText = USDrate.toFixed(2) + ` zł`;
        EUR.innerText = EURrate.toFixed(2) + ` zł`;
        GBP.innerText = GBPrate.toFixed(2) + ` zł`;
    }
    currencyValue();


    const countOutput = () => {
        const foreignMoney = document.querySelector(".js-currency");
        const polishMoney = document.querySelector(".js-exchangedPLN");

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
    }
    countOutput();


    const resetForm = () => {
        formElement.addEventListener("reset", () => {
            calculatedOutput.innerText = "Wybierz walutę i wpisz kwotę do wymiany.";
        });
    }
    resetForm();
}