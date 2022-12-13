// FUNCIÓN PARA PASAR DE PANTALLA LOGIN A PANTALLA MAIN
function login(form) {
  if (form.user.value == "Lalo") {
    if (form.passw.value == "101010") {
      document.querySelector(".rectangulo").style.backgroundColor = "#2e2e2e";
      document.querySelector(".cargando").textContent = "CARGANDO...";
      document.querySelector(".pantallaLogin").style.visibility = "hidden";
      document.querySelector(".intermitenteRojo").style.visibility = "hidden";
      setTimeout(function () {
        window.location.href = "main.html";
      }, 3000);
    } else {
      alert("Password error.");
    }
  } else {
    alert("User error.");
  }
}

document.querySelector("#saldoDisponible").defaultValue = "21500";

//FUNCION RETIRAR
function retirar() {
  if (
    parseInt(document.querySelector("#retiro").value) <=
    parseInt(document.querySelector("#saldoDisponible").defaultValue)
  ) {
    document.querySelector("#saldoDisponible").defaultValue =
      parseInt(document.querySelector("#saldoDisponible").defaultValue) -
      parseInt(document.querySelector("#retiro").value);
    // Evento pantalla
    document.querySelector(".pantallaRetirar").style.visibility = "hidden";
    document.querySelector(
      ".cargandoB"
    ).textContent = `Retiro exitoso por la cantidad de $ ${retiro.value}. Nuevo disponible: $ ${saldoDisponible.defaultValue}`;
    document.querySelector(".rectangulo").style.backgroundColor = "#2e2e2e";

    setTimeout(function () {
      window.location.href = "main.html";
    }, 5000);
  } else {
    alert("Cantidad incorrecta.\n-NO excedas tu saldo disponible.");
  }
}

//FUNCION DEPOSITAR
function depositar() {
  if (parseInt(document.querySelector("#deposito").value) < parseInt("5001")) {
    saldoDisponible.defaultValue =
      parseInt(document.querySelector("#saldoDisponible").defaultValue) +
      parseInt(document.querySelector("#deposito").value);
    // Evento pantalla
    document.querySelector(".pantallaDepositar").style.visibility = "hidden";
    document.querySelector(
      ".cargandoB"
    ).textContent = `Depósito exitoso por la cantidad de $ ${deposito.value}. Nuevo disponible: $ ${saldoDisponible.defaultValue}`;
    document.querySelector(".rectangulo").style.backgroundColor = "#2e2e2e";
    setTimeout(function () {
      window.location.href = "main.html";
    }, 5000);
  } else {
    alert("Monto máximo para depósitos =$5000. Intenta otra cantidad menor.");
  }
}
