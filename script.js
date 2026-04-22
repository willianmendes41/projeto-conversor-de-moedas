const convertButton = document.querySelector(".convert-button")


//Seletores de moeda//

const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")


//imagens das moedas//

const currencyNameFrom = document.getElementById("currency-name-from")
const currencyName = document.getElementById("currency-name")

const currencyImg = document.querySelector(".currency-img") // saída
const currencyImgFrom = document.querySelector(".currency-img-from")// entrada//


//Valores das moedas//

function convertValue() {
  const inputCurrencyValue = Number(document.querySelector(".input-currency").value)

  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
  const currencyValueConverted = document.querySelector(".currency-value")

  const dolar = 5.25
  const euro = 5.90
  const libra = 6.80
  const bitcoin = 120000

  let valorEmReal = inputCurrencyValue

if (currencySelectFrom.value === "real") {
  valorEmReal = inputCurrencyValue
}

  if (currencySelectFrom.value === "dolar") {
    valorEmReal = inputCurrencyValue * dolar
  }

  if (currencySelectFrom.value === "euro") {
    valorEmReal = inputCurrencyValue * euro
  }

  if (currencySelectFrom.value === "libra") {
    valorEmReal = inputCurrencyValue * libra
  }

  if (currencySelectFrom.value === "bitcoin") {
    valorEmReal = inputCurrencyValue * bitcoin
  }

  if (currencySelectTo.value == "real") {
    currencyValueConverted.innerHTML = valorEmReal.toFixed(2)
  }

  if (currencySelectTo.value == "dolar") {
    currencyValueConverted.innerHTML = (valorEmReal / dolar).toFixed(2)
  }

  if (currencySelectTo.value == "euro") {
    currencyValueConverted.innerHTML = (valorEmReal / euro).toFixed(2)
  }

  if (currencySelectTo.value == "libra") {
    currencyValueConverted.innerHTML = (valorEmReal / libra).toFixed(2)
  }

  if (currencySelectTo.value == "bitcoin") {
    currencyValueConverted.innerHTML = (valorEmReal / bitcoin).toFixed(6)
  }

  currencyValueToConvert.innerHTML = inputCurrencyValue.toFixed(2)
}


    //trocar imagens da moeda de entrada//

   function changeCurrencyFrom() {

    if (currencySelectFrom.value == "real") {
        currencyImgFrom.src = "./assets/brasil.png"
        currencyNameFrom.innerHTML = "Real Brasileiro"
    }

    if (currencySelectFrom.value == "dolar") {
        currencyImgFrom.src = "./assets/estados-unidos.png"
        currencyNameFrom.innerHTML = "Dólar Americano"
    }

    if (currencySelectFrom.value == "euro") {
        currencyImgFrom.src = "./assets/Euro.png"
        currencyNameFrom.innerHTML = "Euro"
    }

    if (currencySelectFrom.value == "libra") {
        currencyImgFrom.src = "./assets/libra.png"
        currencyNameFrom.innerHTML = "Libra Esterlina"
    }

    if (currencySelectFrom.value == "bitcoin") {
        currencyImgFrom.src = "./assets/bitcoin.png"
        currencyNameFrom.innerHTML = "Bitcoin"
    }

    convertValue()
}



function changeCurrency() {

    if (currencySelectTo.value == "real") {
        currencyImg.src = "./assets/brasil.png"
        currencyName.innerHTML = "Real Brasileiro"
    }

    if (currencySelectTo.value == "dolar") {
        currencyImg.src = "./assets/estados-unidos.png"
        currencyName.innerHTML = "Dólar Americano"
    }

    if (currencySelectTo.value == "euro") {
        currencyImg.src = "./assets/Euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (currencySelectTo.value == "libra") {
        currencyImg.src = "./assets/libra.png"
        currencyName.innerHTML = "Libra Esterlina"
    }

    if (currencySelectTo.value == "bitcoin") {
        currencyImg.src = "./assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }

    convertValue()
}




currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelectTo.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)


