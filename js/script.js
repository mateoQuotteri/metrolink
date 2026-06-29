// MetroLink - JavaScript

// =============================
// FORMULARIO DE CONTACTO
// =============================

function enviarMensaje(evento) {
  evento.preventDefault();

  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || email === "" || mensaje === "") {
    alert("Por favor, completá todos los campos.");
    return;
  }

  // Mostrar mensaje de éxito
  document.getElementById("mensajeEnviado").classList.remove("oculto");

  // Limpiar el formulario
  document.querySelector(".formulario").reset();

  // Ocultar el mensaje después de 4 segundos
  setTimeout(function() {
    document.getElementById("mensajeEnviado").classList.add("oculto");
  }, 4000);
}


// =============================
// CONSULTA DE VIAJES
// =============================

// Datos simulados de las estaciones
var datosEstaciones = {
  "Plaza de Mayo": { linea: "A", anden: "Andén 1" },
  "Moreno": { linea: "A", anden: "Andén 1" },
  "San Pedrito": { linea: "A", anden: "Andén 1" },
  "L. N. Alem": { linea: "B", anden: "Andén 2" },
  "Carlos Pellegrini": { linea: "B", anden: "Andén 2" },
  "J. M. Rosas": { linea: "B", anden: "Andén 2" },
  "Retiro": { linea: "C", anden: "Andén 3" },
  "Av. de Mayo": { linea: "C", anden: "Andén 3" },
  "Constitución": { linea: "C", anden: "Andén 3" },
  "Catedral": { linea: "D", anden: "Andén 4" },
  "9 de Julio": { linea: "D", anden: "Andén 4" },
  "Congreso de Tucumán": { linea: "D", anden: "Andén 4" },
  "Bolívar": { linea: "E", anden: "Andén 5" },
  "Plaza de los Virreyes": { linea: "E", anden: "Andén 5" },
  "Facultad de Medicina": { linea: "H", anden: "Andén 6" },
  "Caseros": { linea: "H", anden: "Andén 6" },
  "Hospitales": { linea: "H", anden: "Andén 6" }
};


function consultarViaje() {
  var origen = document.getElementById("origen").value;
  var destino = document.getElementById("destino").value;
  var mensajeError = document.getElementById("mensajeError");
  var resultado = document.getElementById("resultadoViaje");

  // Esconder resultado y error anteriores
  resultado.classList.add("oculto");
  mensajeError.classList.add("oculto");

  // Validaciones
  if (origen === "" || destino === "") {
    mensajeError.textContent = "Por favor, elegí una estación de origen y destino.";
    mensajeError.classList.remove("oculto");
    return;
  }

  if (origen === destino) {
    mensajeError.textContent = "El origen y el destino no pueden ser iguales.";
    mensajeError.classList.remove("oculto");
    return;
  }

  // Obtener datos de las estaciones
  var datosOrigen = datosEstaciones[origen];
  var datosDestino = datosEstaciones[destino];

  // Calcular el transporte
  var transporte = "";
  var tiempo = 0;
  var costo = 0;

  if (datosOrigen.linea === datosDestino.linea) {
    // Misma línea, viaje directo
    transporte = "Línea " + datosOrigen.linea + " (viaje directo)";
    tiempo = 15;
    costo = 1157.20;
  } else {
    // Diferente línea, requiere combinación
    transporte = "Línea " + datosOrigen.linea + " con combinación a Línea " + datosDestino.linea;
    tiempo = 28;
    costo = 1157.20;
  }

  // Mostrar el resultado
  document.getElementById("resOrigen").textContent = origen;
  document.getElementById("resDestino").textContent = destino;
  document.getElementById("resTransporte").textContent = transporte;
  document.getElementById("resAnden").textContent = datosOrigen.anden + " (salida)";
  document.getElementById("resTiempo").textContent = tiempo + " minutos aproximadamente";
  document.getElementById("resCosto").textContent = "$" + costo.toFixed(2);

  resultado.classList.remove("oculto");
}


// =============================
// CHATBOT SIMPLE (servicios)
// =============================

function responderChat() {
  var pregunta = document.getElementById("preguntaChat").value.toLowerCase();
  var respuesta = "";
  var contenedor = document.getElementById("respuestaChat");
  var textoResp = document.getElementById("textoRespuesta");

  if (pregunta === "") {
    alert("Por favor, escribí una pregunta.");
    return;
  }

  // Buscar palabras clave en la pregunta
  if (pregunta.indexOf("baño") !== -1 || pregunta.indexOf("bano") !== -1) {
    respuesta = "🚻 Los baños están en planta baja y primer piso. Disponibles las 24 horas.";
  } else if (pregunta.indexOf("comida") !== -1 || pregunta.indexOf("comer") !== -1 || pregunta.indexOf("restaurante") !== -1) {
    respuesta = "🍔 El patio de comidas está en el primer piso, abierto de 07:00 a 23:00 todos los días.";
  } else if (pregunta.indexOf("estacionamiento") !== -1 || pregunta.indexOf("auto") !== -1) {
    respuesta = "🅿️ El estacionamiento está en el subsuelo, con horario de 05:30 a 00:00.";
  } else if (pregunta.indexOf("información") !== -1 || pregunta.indexOf("info") !== -1) {
    respuesta = "ℹ️ La oficina de información está en planta baja, en el sector central. Atiende de 06:00 a 23:00.";
  } else if (pregunta.indexOf("wifi") !== -1 || pregunta.indexOf("internet") !== -1) {
    respuesta = "📶 Tenemos WiFi gratuito en toda la terminal. Conectate a la red 'MetroLink-Free'.";
  } else if (pregunta.indexOf("sube") !== -1 || pregunta.indexOf("tarjeta") !== -1) {
    respuesta = "🎫 Podés cargar tu tarjeta SUBE en cualquier acceso, de 06:00 a 23:00.";
  } else if (pregunta.indexOf("ascensor") !== -1 || pregunta.indexOf("accesib") !== -1) {
    respuesta = "♿ La terminal tiene ascensores, rampas y baños accesibles en todos los sectores.";
  } else if (pregunta.indexOf("hola") !== -1 || pregunta.indexOf("buenas") !== -1) {
    respuesta = "¡Hola! ¿En qué te puedo ayudar? Probá preguntar por baños, comida, WiFi, SUBE, etc.";
  } else {
    respuesta = "No encontré una respuesta directa. Te invito a visitar nuestras preguntas frecuentes o escribirnos por contacto.";
  }

  textoResp.textContent = respuesta;
  contenedor.classList.remove("oculto");
}


// =============================
// PREGUNTAS FRECUENTES (FAQ)
// =============================

function abrirPregunta(elemento) {
  // Si ya está abierta, la cerramos
  if (elemento.classList.contains("abierta")) {
    elemento.classList.remove("abierta");
    var iconos = elemento.getElementsByTagName("span");
    if (iconos.length > 0) {
      iconos[0].textContent = "+";
    }
  } else {
    elemento.classList.add("abierta");
    var iconos = elemento.getElementsByTagName("span");
    if (iconos.length > 0) {
      iconos[0].textContent = "-";
    }
  }
}


// =============================
// BUSCADOR DE HORARIOS
// =============================

function buscarHorario() {
  var busqueda = document.getElementById("buscarLinea").value.toLowerCase();

  if (busqueda === "") {
    alert("Por favor, escribí una línea o estación para buscar.");
    return;
  }

  var filas = document.querySelectorAll("#tablaHorarios tr");
  var encontradas = 0;

  for (var i = 0; i < filas.length; i++) {
    var texto = filas[i].textContent.toLowerCase();
    if (texto.indexOf(busqueda) !== -1) {
      filas[i].style.display = "";
      encontradas++;
    } else {
      filas[i].style.display = "none";
    }
  }

  if (encontradas === 0) {
    alert("No se encontraron resultados para: " + busqueda);
    // Mostrar todas de nuevo
    for (var i = 0; i < filas.length; i++) {
      filas[i].style.display = "";
    }
  }
}
