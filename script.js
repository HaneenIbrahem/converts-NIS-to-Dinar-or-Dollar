var exchangeForm = document.querySelector(".exchangeForm")

exchangeForm.onsubmit = function(event){
    event.preventDefault()
    
    var amount = parseFloat(document.querySelector("#amount").value);
    var currency = document.querySelector("select[name='exgange']").value;
    var resultElement = document.querySelector(".result");

    console.log(resultElement)

    var conversionRates = {
        "Dollar": 3.5,
        "Dinar": 5.0
    };

    if (currency === "Dollar") {
        result = amount * conversionRates.Dollar;
        resultElement.textContent = `${amount} NIS is approximately ${result} Dollars.`;
    } else if (currency === "Dinar") {
        result = amount * conversionRates.Dinar;
        resultElement.textContent = `${amount} NIS is approximately ${result} Dinars.`;
    } else {
        resultElement.textContent = `${amount} NIS is ${amount} NIS.`;
    }
}