async function crearUsuario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            email: email,
            password: password
        })
    });

    const usuario = await res.json();

    console.log("👤 Usuario recibido:", usuario);

    localStorage.setItem("usuarioId", usuario.id);
    localStorage.setItem("usuarioNombre", usuario.nombre);

    alert("Usuario creado correctamente");
}