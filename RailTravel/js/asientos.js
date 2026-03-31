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

const bus = document.getElementById("bus");

// generar 4x5 asientos
let asientoNum = 1;

for (let fila = 0; fila < 5; fila++) {

    const row = document.createElement("div");
    row.className = "row";

    // izquierda (2 asientos)
    for (let i = 0; i < 2; i++) {
        row.appendChild(crearAsiento(asientoNum++));
    }

    // pasillo
    const aisle = document.createElement("div");
    aisle.className = "aisle";
    row.appendChild(aisle);

    // derecha (2 asientos)
    for (let i = 0; i < 2; i++) {
        row.appendChild(crearAsiento(asientoNum++));
    }

    bus.appendChild(row);
}

// función para crear asiento
function crearAsiento(num) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.innerText = num;

    seat.onclick = () => {
        document.querySelectorAll(".seat").forEach(s => s.classList.remove("selected"));
        seat.classList.add("selected");
        asientoSeleccionado = num;
    };

    return seat;
}

function reservar() {
    if (!asientoSeleccionado) {
        alert("Selecciona un asiento");
        return;
    }

    alert(`Reserva confirmada\nAsiento: ${asientoSeleccionado}`);
}