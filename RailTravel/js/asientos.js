const params = new URLSearchParams(window.location.search);
const dataParam = params.get("data");

let data = null;
if (dataParam) {
    data = JSON.parse(decodeURIComponent(dataParam));
document.getElementById("info-viaje").innerHTML = `
    <h3>${data.operador} | ${data.origen} → ${data.destino}</h3>
    <p>${data.salida} - ${data.llegada} | ${data.precio.toFixed(2)}€</p>
`;
}
let asientoSeleccionado = null;
let asientoNum = 1;
const MAX_ASIENTOS = 48;

for (let fila = 0; fila < 20; fila++) { // ponemos muchas filas, luego cortamos

    if (asientoNum > MAX_ASIENTOS) break;

    const row = document.createElement("div");
    row.className = "row";

    // izquierda (2 asientos)
    for (let i = 0; i < 2; i++) {
        if (asientoNum <= MAX_ASIENTOS) {
            row.appendChild(crearAsiento(asientoNum++));
        }
    }

    // pasillo
    const aisle = document.createElement("div");
    aisle.className = "aisle";
    row.appendChild(aisle);

    // derecha (2 asientos)
    for (let i = 0; i < 2; i++) {
        if (asientoNum <= MAX_ASIENTOS) {
            row.appendChild(crearAsiento(asientoNum++));
        }
    }

    bus.appendChild(row);
}
// función para crear asiento
function crearAsiento(num) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.innerText = num;

    const ocupado = Math.random() < 0.2;

    if (ocupado) {
        seat.classList.add("ocupado");
    } else {
        seat.onclick = () => {
            document.querySelectorAll(".seat").forEach(s => s.classList.remove("selected"));
            seat.classList.add("selected");
            asientoSeleccionado = num;
        };
    }

    return seat;
}

function reservar() {
    if (!asientoSeleccionado) {
        alert("Selecciona un asiento");
        return;
    }

    const reserva = {
        asiento: asientoSeleccionado,
        operador: data.operador,
        origen: data.origen,
        destino: data.destino,
        salida: data.salida,
        llegada: data.llegada,
        precio: data.precio,
        fecha: new Date().toLocaleString()
    };

    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // redirigir a historial
    window.location.href = "reservas.html";
}