let baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd/pkr.json"

// select user input 

let inputAmount = document.querySelector("#input-amount");

// selct the drop-downs of from and to

let dropdowns = document.querySelectorAll("select");

// select result to show exchange rate

let result = document.querySelector("#result");

// select the button to submit form

let submit = document.querySelector("#submit");

// populate the dropdown with countries

for(let select of dropdowns){

    for(let countryCode in countryList){

        let country = countryList[countryCode];

        let newoption = document.createElement("option");

        newoption.innerText = country;

        newoption.value = country;

        if(select.name === "from" && countryCode === "USD"){

            newoption.selected = "selected";

        } else if (select.name === "to" && countryCode === "PKR"){

            newoption.selected = "selected";

        }

        select.append(newoption);

    }

    select.addEventListener("change", (evt) => {

        updateFlag(evt.target);

    })
}

// function to update flag by selecting the country in fropdow

const updateFlag = (element) => {

    let currCode = element.value;

    let newSrc = `https://flagsapi.com/${currCode}/shiny/64.png`;

    let img = element.parentElement.querySelector("img");

    img.src = newSrc;

}

submit.addEventListener("click", (evt) => {

    evt.preventDefault();

    let amountVal = inputAmount.value;

    if(amountVal == " " || amountVal <= 0){

        amountVal = 1;

        inputAmount.value = "1";

    }


})







