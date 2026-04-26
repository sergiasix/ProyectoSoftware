async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const res = await fetch("http://localhost:8080/api/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            email: email,
            password: password
        })
    });

    if (!res.ok) {
        alert("Email o contraseña incorrectos");
        return;
    }

    const usuario = await res.json();

    localStorage.setItem("usuarioId", usuario.id);
    localStorage.setItem("usuarioNombre", usuario.nombre);

    alert("Sesión iniciada");

    window.location.href = "index.html";
}