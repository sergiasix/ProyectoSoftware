const contenedor = document.getElementById("lista-reservas");

const usuarioId = localStorage.getItem("usuarioId");

if (!usuarioId) {
    contenedor.innerHTML = "<p>Debes crear un usuario primero</p>";
} else {

    fetch(`http://localhost:8080/api/reservas/usuario/${usuarioId}`)
        .then(res => res.json())
        .then(reservas => {

            if (reservas.length === 0) {
                contenedor.innerHTML = "<p>No tienes reservas aún</p>";
                return;
            }

            reservas.forEach(r => {
                const div = document.createElement("div");
                div.className = "reserva";

                const qrId = "qr-" + Math.random().toString(36).substring(2, 9);

                div.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        
                        <div>
                            <strong>${r.operador}</strong><br>
                            📅 Ida: ${r.fechaIda}
                            ${r.fechaVuelta ? `📅 Vuelta: ${r.fechaVuelta}` : ""}
                            👤 ${r.pasajero}<br><br>

                            ${r.origen} → ${r.destino}<br>
                            ${r.salida} - ${r.llegada}<br>
                            Asiento: ${r.asiento}<br>

<span class="precio">${r.precio ? r.precio.toFixed(2) : "N/A"}€</span>                        </div>

                        <div id="${qrId}"></div>

                    </div>
                `;

                

                // 🔥 AQUÍ va el QR (y lo tienes bien)
                contenedor.appendChild(div);

setTimeout(() => {
    const qrElement = document.getElementById(qrId);

    if (!qrElement) {
        console.error("No se encontró el div del QR:", qrId);
        return;
    }

    //const qrData = `Reserva de ${r.pasajero} - ${r.origen} a ${r.destino}`;
    const qrData = JSON.stringify({
    id: r.id,
    usuario: usuarioId,
    asiento: r.asiento,
    hash: btoa(r.origen + r.destino + r.asiento)
});

    new QRCode(qrElement, {
        text: qrData,
        width: 100,
        height: 100
    });

}, 0);
            });

        }); // 👈 aquí se cierra bien el then
}

// 👇 fuera del else
function volver() {
    window.location.href = "index.html";
}