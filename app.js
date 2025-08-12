// Arreglo donde almaceno los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Validamos que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre antes de continuar.");
        return;
    }

    // Validamos que el nombre no esté duplicado (ignorando mayúsculas/minúsculas)
    if (amigos.some(a => a.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombreAmigo);

    // Limpiamos el campo de entrada
    inputAmigo.value = "";

    // Actualizamos la lista en el HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para el sorteo. Agrega al menos uno.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
