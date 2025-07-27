// Cambia el estado del ramo entre aprobado, en curso y sin estado
function toggleEstado(element) {
  if (element.classList.contains("aprobado")) {
    element.classList.remove("aprobado");
    element.classList.add("en-curso");
  } else if (element.classList.contains("en-curso")) {
    element.classList.remove("en-curso");
  } else {
    element.classList.add("aprobado");
  }
}

// Muestra mensajes motivadores aleatorios
function mostrarMotivacion() {
  const mensajes = [
    "Mi princesa, usted es capaz de esto y mucho más 💖",
    "Por cada ramo aprobado… mil besitos para usted jeje (premio para mí por hacerle esto) 😘",
    "Confío en usted, mi amorcito. Usted puede con todo 🩷",
    "Usted brilla como ninguna otra estrella, mi princesa ✨",
    "Nada es imposible para una reina como usted 👑",
    "Mi cielo, cada paso que da me llena de orgullo 🥹",
    "Siga adelante, usted está hecha para cosas grandes 🌸",
    "Estoy aquí siempre, admirando su esfuerzo y fortaleza 💪🏼",
    "Mi princesa hermosa, no olvide descansar también (aun que es bien buena para tuto wawa) 😴💗",
    "Aunque el camino sea difícil, siempre estaré aquí para usted 💫",
    "Su inteligencia y dulzura la llevaran muy lejos mi vida 🧠💞",
    "Cada ramo aprobado es una corona más para su cabeza *guiño guiño* 👸🏻",
    "Nunca dude de su valor, porque yo nunca lo hago 💕",
    "Estudiar es duro, pero usted es más fuerte muajajja 💪🏻✨",
    "Usted está haciendo historia, mi reina hermosita y juntos construiremos la nuesttra 📚💎",
    "Siéntase orgullosa, mi amor. Usted lo está logrando y yo soy su fan numero 1 🌷",
    "Para mí, usted ya es la mejor enfermera del mundo y la mujer de mi vida y mis ojitos 🩺💝",
    "Hoy y siempre, le acompaño en alma y corazón 💌",
    "Sus logros son mi alegría, mi princesa, su sonrisa mi razón pa vivir ohsi 💘"
  ];

  const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
  document.getElementById("mensaje").innerText = mensaje;
}

// --- Calculadora ponderada dinámica ---

// Agrega una fila con inputs para nota y peso
function agregarNota(nota = '', peso = '') {
  const container = document.getElementById('notas-container');
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'nota-row';

  div.innerHTML = `
    Nota: <input type="number" step="0.01" min="0" max="100" class="input-nota" value="${nota}" />
    Peso: <input type="number" step="0.01" min="0" max="100" class="input-peso" value="${peso}" />
    <button type="button" onclick="quitarNota(this)">Quitar</button>
  `;

  container.appendChild(div);
}

// Quita una fila de nota y peso
function quitarNota(boton) {
  const div = boton.parentElement;
  div.remove();
}

// Calcula el promedio ponderado de todas las notas ingresadas
function calcularPromedio() {
  const notasInputs = document.querySelectorAll('.input-nota');
  const pesosInputs = document.querySelectorAll('.input-peso');

  let sumaPesos = 0;
  let sumaNotasPonderadas = 0;

  for (let i = 0; i < notasInputs.length; i++) {
    const nota = parseFloat(notasInputs[i].value);
    const peso = parseFloat(pesosInputs[i].value);

    if (isNaN(nota) || nota < 0 || nota > 100) {
      mostrarMensajeError(`Nota inválida en la fila ${i + 1} 💔`);
      return;
    }
    if (isNaN(peso) || peso < 0) {
      mostrarMensajeError(`Peso inválido en la fila ${i + 1} 💔`);
      return;
    }

    sumaPesos += peso;
    sumaNotasPonderadas += nota * peso;
  }

  if (sumaPesos === 0) {
    mostrarMensajeError("La suma de pesos no puede ser cero 💔");
    return;
  }

  const promedioPonderado = (sumaNotasPonderadas / sumaPesos).toFixed(2);
  mostrarMensaje(`Su promedio ponderado es: ${promedioPonderado} 💕`);
}

// Muestra un mensaje normal en el resultado
function mostrarMensaje(texto) {
  const resultado = document.getElementById("resultadoPromedio");
  if (resultado) {
    resultado.style.color = "black";
    resultado.innerText = texto;
  }
}

// Muestra un mensaje de error en rojo
function mostrarMensajeError(texto) {
  const resultado = document.getElementById("resultadoPromedio");
  if (resultado) {
    resultado.style.color = "red";
    resultado.innerText = texto;
  }
}

// Inicializa agregando una fila vacía al cargar la página
window.onload = () => {
  agregarNota();
  mostrarMotivacion();
};
