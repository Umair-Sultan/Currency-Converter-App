let baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"

// select the form container

let formContainer = document.querySelector(".form-container");

// select user input 

let inputAmount = document.querySelector("#input-amount");

// selct the drop-downs of from and to

let dropdowns = document.querySelectorAll("select");

// select result to show exchange rate

let result = document.querySelector("#result");

// select the button to submit form

let submit = document.querySelector("#submit");

// select the value of from currency

let fromCurr = document.querySelector(".from-dropdown select");

// select the value of to currency

let toCurr = document.querySelector(".to-dropdown select");

let fromCountryName = document.querySelector(".from-country-name");

let toCountryName = document.querySelector(".to-country-name");

// populate the dropdown with countries

for(let select of dropdowns){

    for(let countryCode in countryList){

        let country = countryList[countryCode];

        let newoption = document.createElement("option");

        newoption.style.color = "#333"; 

        newoption.style.backgroundColor = "#f0f0f0"; 

        newoption.style.fontWeight = "600";     

        newoption.style.fontFamily = "Arial, sans-serif"; 

        newoption.innerText = country;

        newoption.value = countryCode;

        if(select.name === "from" && countryCode === "USD"){

            newoption.selected = "selected";

        } else if (select.name === "to" && countryCode === "PKR"){

            newoption.selected = "selected";

        }

        select.append(newoption);

    }

    select.addEventListener("change", (evt) => {

        updateFlag(evt.target);

        updateCountryName(evt.target);

    })

}

// function to update flag by selecting the country in fropdow

const updateFlag = (element) => {

    let currCode = countryList[element.value];

    let newSrc = `https://flagsapi.com/${currCode}/shiny/64.png`;

    let img = element.parentElement.querySelector("img");

    img.src = newSrc;

}

const updateCountryName = (element) => {
    
    if (element.name === "from") {

        fromCountryName.innerText = countryName[element.value];

    }

    else if (element.name === "to") {

        toCountryName.innerText = countryName[element.value];

    }
};


submit.addEventListener("click", (evt) => {
    evt.preventDefault();
  
    let fromCurrency = fromCurr.value;
    let toCurrency = toCurr.value;
  
    let URL = `${baseURL}/${fromCurrency.toLowerCase()}.json`;
  
    fetch(URL)

      .then(res => res.json())

      .then(data => {

        let rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()] * inputAmount.value;

        if (inputAmount.value.length >= 3){

            formContainer.style.width = "25rem";

        }if (inputAmount.value.length >= 6){

            formContainer.style.width = "30rem";

        }if (inputAmount.value.length >= 9){

            formContainer.style.width = "35rem";

        }if (inputAmount.value.length >= 18){

            formContainer.style.width = "40rem";

        }

        if(inputAmount.value == ""){

            result.innerText = "Enter the Amount";

        }else{

        result.innerText = `${inputAmount.value} ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`

        }

      })

      .catch(err => console.error("Error fetching data:", err));


  });
  

  document.addEventListener("DOMContentLoaded", () => {

    inputAmount.addEventListener("input", () => {

        if (inputAmount.value.trim() === "") {

            formContainer.style.width = "20rem";

            result.innerText = "Enter the Amount";

        }
    });
});



