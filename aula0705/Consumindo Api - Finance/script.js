function fazerGet() {
    let url = "https://api.hgbrasil.com/finance?format=json-cors&key=ab262bcb"

    fetch(url).then(response => response.json())
    .then(dados => {
        let valorDigitado = document.getElementById("valor").value
        let valorEmDolar = valorDigitado / dados.results.currencies.USD.buy
        let valorEmEuro = valorDigitado / dados.results.currencies.EUR.buy
        document.getElementById("resultado").innerText = (`Valor Em Dólar: ${valorEmDolar}\nValor em Euro: ${valorEmEuro}`)
    })
}

fazerGet()