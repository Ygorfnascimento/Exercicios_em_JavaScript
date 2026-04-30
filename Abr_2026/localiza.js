// Verificando se o recurso está disponível
/* if ("geolocation" in navigator){
    console.log("Disponível")
} else {
    console.log("Indisponível")
}

// Capturando a localização
navigator.geolocation.getCurrentPosition((posicao)=>{
    console.log("Latitide", posicao.coords.latitude);
    console.log("Longitude", posicao.coords.longitude);
    },
    (erro)=>{
        console.log("Erro: ",erro.message);
    }
) */

const btn = document.getElementById("btn");
const link = document.getElementById("link");
const resultado = document.getElementById("resultado");

let lat, lon; 

btn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((posicao) => {
        lat = posicao.coords.latitude;
        lon = posicao.coords.longitude;
        resultado.innerText = "Localização capturada com sucesso!";
    });
});

link.addEventListener("click", () => {
    if (lat && lon) {
        window.location.href = `https://www.google.com/maps?q=${lat},${lon}`;
    } else {
        resultado.innerText = "Clique primeiro em 'Obter localização'!";
    }
});