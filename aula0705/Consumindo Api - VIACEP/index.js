function pesquisarCEP() {
    //Criando uma variável para armazenar o valor do CEP no Input do HTML
    let procurarCEP = document.getElementById("cep").value
    //Função para consumir a API do viacep, colocando a variável "procurarCEP" no link da API
    fetch(`https://viacep.com.br/ws/${procurarCEP}/json/`)
        .then(response => response.json())
        .then(function (dados) { //Função para mostrar os dados da API em formato Json
            //Variáveis para armazenar as funções pedidas
            let endereco = dados.logradouro
            let bairro = dados.bairro
            let cidade = dados.localidade
            let uf = dados.uf
            let cep = dados.cep
            //Colocando os elementos no HTML pelo javascript
            document.getElementById("resultado").innerText = (`Endereço: ${endereco}\nBairro: ${bairro}\nCidade: ${cidade}\nUF: ${uf}\nCEP: ${cep}`)
        })
}
pesquisarCEP()
