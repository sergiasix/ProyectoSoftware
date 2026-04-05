const contenedor = document.getElementById("lista-reservas");

let reservas = JSON.parse(localStorage.getItem("reservas")) || [];

if (reservas.length === 0) {
    contenedor.innerHTML = "<p>No tienes reservas aún</p>";
} else {
    reservas.forEach(r => {
        const div = document.createElement("div");
        div.className = "reserva";

        div.innerHTML = `
            <strong>${r.operador}</strong><br>
            ${r.origen} → ${r.destino}<br>
            ${r.salida} - ${r.llegada}<br>
            Asiento: ${r.asiento}<br>
            <span class="precio">${r.precio.toFixed(2)}€</span><br>
            <small>${r.fecha}</small>
        `;

        contenedor.appendChild(div);
    });
}

function volver() {
    window.location.href = "index.html";
}