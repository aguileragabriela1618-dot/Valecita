// Frases que se mostrarán con efecto máquina de escribir
const frases = [
  "Gracias por ser esa luz que me hace olvidar lo malo ✨. Por ser una persona tan dulce, tan hermosa, que sin importar que tan cansada, da un poco de su tiempo para nosotros. Hoy que no es solo día del amor también es día de la amistad. Un bello momento para compartir y expresar todo lo bello que tenemos cada uno en nuestra vida"
];

let indiceFrase = 0;
let indiceLetra = 0;

function escribirFrase() {
  const mensajeDiv = document.getElementById("mensaje");
  if (indiceLetra < frases[indiceFrase].length) {
    mensajeDiv.textContent += frases[indiceFrase].charAt(indiceLetra);
    indiceLetra++;
    setTimeout(escribirFrase, 85); // velocidad de escritura
  } else {
    // Esperar un poco y pasar a la siguiente frase
    setTimeout(() => {
      mensajeDiv.textContent = "";
      indiceFrase++;
      indiceLetra = 0;
      if (indiceFrase < frases.length) {
        escribirFrase();
      } else {
        escribirFinal();
      }
    }, 2000);
  }
}

function escribirFinal() {
  const finalDiv = document.getElementById("final");
  const mensajeFinal = "Te quiero mucho mi Valecita, no lo olvides 💖. Me siento orgullosa por todo lo que haces, como te esfuerzas. Sigue así, no permitas que por más difícil sea la vida, no te rindas, hay que seguir luchando, como lo haces siempre✨";
  let i = 0;

  function escribir() {
    if (i < mensajeFinal.length) {
      finalDiv.textContent += mensajeFinal.charAt(i);
      i++;
      setTimeout(escribir, 80);
    }
  }
  escribir();
}

// Iniciar animación
escribirFrase();

// Corazones flotando
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.textContent = "❤️";
  corazon.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 5000);
}
setInterval(crearCorazon, 800);

