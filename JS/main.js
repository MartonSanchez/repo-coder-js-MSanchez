// let valorCuenta;
// let porcentajePropina;
// let propina;
// let total;

// function calculadoraPropina(monto, porcentaje) {
//     return (monto * porcentaje) / 100;
// }

// document.getElementById("boton1").addEventListener("click", function (){
    
//     let valorCuenta = parseFloat (prompt("Por favor, ingresa el valor de la cuenta: "));
    
//     if (valorCuenta < 0) {
//         alert("Refresque la pagina e ingrese datos válidos")}

//     else{
//        let porcentajePropina = parseFloat (prompt("Por favor, ingrea el porcentaje de propina que quieres dejar (agrega solo números):"));
    
//         if (porcentajePropina > 0) {
//          let propina = calculadoraPropina (valorCuenta, porcentajePropina);
        
//             let total = valorCuenta + propina;

//         alert("El " + porcentajePropina + "% de la cuenta ($" + valorCuenta + ") es: $" + propina + " y el total a abonar por su consumisión es $ " + total)
//         }
//     }


// })

let valorCuenta;
let porcentajePropina;
let propina;
let total;
let historial = [];

function calculadoraPropina(monto, porcentaje) {
    return (monto * porcentaje) / 100;
}

document.getElementById("boton1").addEventListener("click", function () {
    let valorCuenta = parseFloat(prompt("Por favor, ingresa el valor de la cuenta: "));

    if (valorCuenta < 0) {
        alert("Refresque la página e ingrese datos válidos.");
    } else {
        let porcentajePropina = parseFloat(prompt("Por favor, ingresa el porcentaje de propina que quieres dejar (solo números):"));

        if (porcentajePropina > 0) {
            let propina = calculadoraPropina(valorCuenta, porcentajePropina);
            let total = valorCuenta + propina;

            // guardar en el historial
            historial.push(`Cuenta: $${valorCuenta.toFixed(2)} | Propina: ${porcentajePropina}% ($${propina.toFixed(2)}) | Total: $${total.toFixed(2)}`);

            alert(
                "El " + porcentajePropina + "% de la cuenta ($" + valorCuenta + ") es: $" + propina.toFixed(2) +
                "\nTotal a pagar: $" + total.toFixed(2)
            );

            console.log("Historial actual de cálculos:");
            console.log(historial); // mostrar el historial en la consola
        } else {
            alert("Por favor ingresa un porcentaje válido.");
        }
    }
});

