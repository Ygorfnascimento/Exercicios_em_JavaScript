function modulo(a = 15) {
    let par = a % 2 === 0; 

    if (par) {  
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}
modulo();  