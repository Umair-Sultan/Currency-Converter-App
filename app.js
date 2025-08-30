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

// populate the dropdown with countries

for(let select of dropdowns){

    for(let countryCode in countryList){

        let country = countryList[countryCode];

        let newoption = document.createElement("option");

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

    })
}

// function to update flag by selecting the country in fropdow

const updateFlag = (element) => {

    let currCode = countryList[element.value];

    let newSrc = `https://flagsapi.com/${currCode}/shiny/64.png`;

    let img = element.parentElement.querySelector("img");

    img.src = newSrc;

}

submit.addEventListener("click", (evt) => {
    evt.preventDefault();
  
    let fromCurrency = fromCurr.value;
    let toCurrency = toCurr.value;
  
    let URL = `${baseURL}/${fromCurrency.toLowerCase()}.json`;
  
    fetch(URL)

      .then(res => res.json())

      .then(data => {

        let rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()] * inputAmount.value;

        if (inputAmount.value >= 1111){

            formContainer.style.width = "25rem";

        }if (inputAmount.value >= 11111111){

            formContainer.style.width = "30rem";

        }if (inputAmount.value >= 11111111111111){

            formContainer.style.width = "35rem";

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

