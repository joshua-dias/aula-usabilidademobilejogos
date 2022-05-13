const URL_BASE = "https://api.wheretheiss.at/v1/satellites/25544";

const TILES_URL = "https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png";
const ATRIBUICAO_COPYRIGHT = '&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

const MAPA_ISS = L.map('mapa-iss').setView([0, 0], 2);
const MARCADOR = L.marker([0, 0]).addTo(MAPA_ISS);

window.addEventListener('load', () =>{

    let tiles = L.tileLayer(TILES_URL, {
        attribution: ATRIBUICAO_COPYRIGHT
    });

    tiles.addTo(MAPA_ISS);
    setInterval(getISS, 1000);
});

async function getISS(){

    let resposta = await fetch(URL_BASE);
    let dados = await resposta.json();

    //console.table(dados);

    let { latitude, longitude } = dados;
    MARCADOR.setLatLng([latitude, longitude]);
}