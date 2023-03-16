{
    const formElement = document.querySelector(".js-form");
    const calculatedOutput = document.querySelector(".js-output");


    const welcome = () => {
        console.log("Serwus!")
    }
    welcome();


    const USDrate = 4.4126;
    const EURrate = 4.6836;
    const GBPrate = 5.3239;


    const currencyValue = () => {
        document.querySelector(".js-USD").innerText = USDrate.toFixed(2) + ` zł`;
        document.querySelector(".js-EUR").innerText = EURrate.toFixed(2) + ` zł`;
        document.querySelector(".js-GBP").innerText = GBPrate.toFixed(2) + ` zł`;
    }
    currencyValue();

    /* const currencyValue = () => {
         USD.innerText = USDrate.toFixed(2) + ` zł`;
         EUR.innerText = EURrate.toFixed(2) + ` zł`;
         GBP.innerText = GBPrate.toFixed(2) + ` zł`;
     }
     const USD = document.querySelector(".js-USD");
     const EUR = document.querySelector(".js-EUR");
     const GBP = document.querySelector(".js-GBP");
     currencyValue();*/


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

            calculatedOutput.innerText = output.toFixed(2) + " " + currency;
        });
    }

    countOutput();

    /*
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
    countOutput(); */


    const resetForm = () => {
        formElement.addEventListener("reset", () => {
            calculatedOutput.innerText = "Wybierz walutę i wpisz kwotę do wymiany.";
        });
    }
    resetForm();
}