{
    const welcome = () => {
        console.log("Serwus!")
    }


    const formElement = document.querySelector(".js-form");
    const calculatedOutputElement = document.querySelector(".js-output");

    const USDrate = 4.2934;
    const EURrate = 4.6755;
    const GBPrate = 5.3107;


    const fillCurrenciesRates = () => {
        document.querySelector(".js-USD").innerText = USDrate.toFixed(2) + ` zł`;
        document.querySelector(".js-EUR").innerText = EURrate.toFixed(2) + ` zł`;
        document.querySelector(".js-GBP").innerText = GBPrate.toFixed(2) + ` zł`;
    };


    const getRate = (targetCurrency) => {
        switch (targetCurrency) {
            case "USD":
                return USDrate;

            case "EUR":
                return EURrate;

            case "GBP":
                return GBPrate;
        }
    };


    const countOutput = (amountPLN, targetCurrency) => {
        const rate = getRate(targetCurrency)
        return amountPLN / rate;
    };


    const displayResult = (output, targetCurrency) => {
        calculatedOutputElement.innerText = `${output.toFixed(2)} ${targetCurrency}`;
    }


    const resetForm = () => {
        formElement.addEventListener("reset", () => {
            calculatedOutputElement.innerText = `Wybierz walutę i wpisz kwotę do wymiany.`;
        });
    }
    resetForm();


    const init = () => {
        welcome();
        fillCurrenciesRates();
        getRate();

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const targetCurrency = document.querySelector(".js-currency").value;
            const amountPLN = document.querySelector(".js-exchangedPLN").value;

            const output = countOutput(amountPLN, targetCurrency)

            displayResult(output, targetCurrency);

        });

        countOutput();
    }

    init();
};


