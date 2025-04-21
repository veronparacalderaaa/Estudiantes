let imagenes = [];          // Arreglo con imágenes de 111 a 124
let indiceActual = -1;      // Índice inicial: -1 para mostrar primero 110.png
let imagenInicial;          // Imagen inicial (110.png)

function preload() {
  imagenInicial = loadImage("imagenes/110.png"); // Carga la imagen inicial

  for (let i = 111; i <= 124; i++) {
    imagenes.push(loadImage("imagenes/" + i + ".png")); // Carga imágenes en orden
  }
}

function setup() {
  let canvas = createCanvas(800, 600);           // Crea el canvas
  canvas.parent("canvas-container");             // Lo coloca dentro del div
  image(imagenInicial, 0, 0, width, height);     // Muestra 110 inicialmente
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && indiceActual < imagenes.length - 1) {
    indiceActual++;     // Avanza
  } else if (keyCode === LEFT_ARROW && indiceActual >= 0) {
    indiceActual--;     // Retrocede
  }
  mostrarImagenActual();
}

function mostrarImagenActual() {
  if (indiceActual === -1) {
    image(imagenInicial, 0, 0, width, height);    // Muestra 110
  } else {
    image(imagenes[indiceActual], 0, 0, width, height);  // Muestra la actual
  }
}
