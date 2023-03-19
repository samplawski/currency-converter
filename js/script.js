{
    const welcome = () => {
        console.log("Serwus!")
    }
    welcome();


    const formElement = document.querySelector(".js-form");
    const calculatedOutput = document.querySelector(".js-output");


    const USDrate = 4.4126;
    const EURrate = 4.6836;
    const GBPrate = 5.3239;


    const currencyValue = () => {
        document.querySelector(".js-USD").innerText = USDrate.toFixed(2) + ` zł`;
        document.querySelector(".js-EUR").innerText = EURrate.toFixed(2) + ` zł`;
        document.querySelector(".js-GBP").innerText = GBPrate.toFixed(2) + ` zł`;
    }
    currencyValue();


    const countOutput = () => {
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const currency = document.querySelector(".js-currency").value;
            const PLN = document.querySelector(".js-exchangedPLN").value;

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

            displayResult(output, currency);
        });
    }

    const displayResult = (output, currency) => {
        calculatedOutput.innerText = output.toFixed(2) + " " + currency;
    }
    countOutput();


    const resetForm = () => {
        formElement.addEventListener("reset", () => {
            calculatedOutput.innerText = "Wybierz walutę i wpisz kwotę do wymiany.";
        });
    }
    resetForm();
}