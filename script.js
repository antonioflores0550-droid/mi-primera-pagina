function calcularPromedio() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const semestre = document.getElementById('semestre').value;
    
    const inputsNotas = document.querySelectorAll('.nota');
    let suma = 0;
    let todasLasNotasCompletas = true;

    inputsNotas.forEach(input => {
        const valor = parseFloat(input.value);
        if (isNaN(valor)) {
            todasLasNotasCompletas = false;
        } else {
            suma += valor;
        }
    });

    if (nombre === "" || apellido === "" || semestre === "" || !todasLasNotasCompletas) {
        alert("Por favor, complete todos los campos y las 6 calificaciones.");
        return;
    }

    const promedio = (suma / 6).toFixed(2);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = "block";
    resultadoDiv.style.backgroundColor = "#e8f5e9";
    resultadoDiv.style.color = "#2e7d32";
    resultadoDiv.style.border = "1px solid #c8e6c9";
    
    resultadoDiv.innerHTML = `El estudiante ${nombre} ${apellido} del ${semestre} tiene un promedio de: ${promedio}`;
}