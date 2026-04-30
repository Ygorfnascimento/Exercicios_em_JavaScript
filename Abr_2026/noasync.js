console.log("Inicio");

function esperarSincono(ms){
    const datainico = Date.now();
    while(Date.now() - datainico < ms){
    }
}

esperarSincono(5000);
console.log("Fim");