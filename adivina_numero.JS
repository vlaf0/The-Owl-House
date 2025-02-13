/*
Instruction creation juego
1.Generate a random number (1-100)

2. Registrar el número del intento en el que el jugador se encuentre, empezando por el 1

3.Darle al jugador un formd de adivinar el número

4.Una vez que se ha introducido el número, registralrlo en alguna parte para que el jugador
puede ver sus intentos.

5. A continuacion, comprobar si es el numero es correcte

6. Si es corecto:
  -mostrat un mensaje de felicitacion
  -Hacer que el jugador no pueda introducir mas intentos
  -Mostrat un control que permita al jugador volver a empezar el juego
  
  7. Si es incorrecto y al jugador le quedan intentos


  -decirle al jugador que ha fallado
  -dejar que el jugador lo intente de nuevo
  -Incrementa el numero de intentos en 1

  8.si el jugador falla y no quedan intentos

-decirle al jugador que ha terminado (GameOver)
-Hacer que el jugador no pueda introducir mas intentos.
-Mostrat un control que permita al jugador empezar de nuevo

9. Una vez que el juego, se reincica asegurate de que logica del juego
y la interface de usuario (UI) se restablecen por completo, volver al paso 1


*/

//Generar número aleatorio

let randomNumber = Math.floor(Math.random() * 100) + 1;

// guaedar referencia a cada párrafo de información

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")

// guardar referencia al input y al botón enviar

const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

// Variables para los intentos 
// La segunda variable guarda la referencia al botón reset
let guessCount = 1;
let resetButton;
guessField.focus();
//functión para comprobar el nuḿero a adivinar 
function checkGuess(){
    // Guardamos el valor ingresado en el input y nos aseguramos
    // que es un numero, con number ()

    let userGuess = Number(guessField.value);

    //Comprobamos si estamos en el primer intento
    if (guessCount === 1){
        guesses.textContent = "Intentos Anteriores";
    }
    guesses.textContent += userGuess + "";

    //En este bloque comprobaremos los paso del 5 al 8
    if (userGuess === randomNumber){
        lastResult.textContent = "¡Felicidades!  ¡Lo adivinaste!";
        lastResult.style.backgroundcolor ="green";
        lowOrHi.textContent = "";
        setGameOver();

    } else if (guessCount === 10){
        lastResult.textContent = "¡Fin del Juego!";
        setGameOver();
    }else {
        lastResult.textContent = "¡Incorrecto!";
        lastResult.style.backgroundcolor = "red";
        if (userGuess <   randomNumber){
            lowOrHi.textContent = "¡El número es muy bajo!";
            }else if (userGuess > randomNumber){
                lowOrHi.textContent = "¡El número es muy grande!";
            }
        }
        //preparamos la variables para el siguiente intento
        //Vaciamos el valor del campo número (input)
        // Aplicamos el foco al input 
        guessCount++;
        guessField.value="";
        guessField.focus();
}

//Agregamos un listener al botón guessSubmit
guessSubmit.addEventListener("click", checkGuess)

//Declaramos la funcion gameover
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    //Creamos in botón para resetar el juego
    resetButton = document.createElement ("button");
    resetButton.textContent ="Iniciar Nuevo juego";
    document.body.append(resetButton);
    //Creamos un listenert al botón credo 
    resetButton.addEventListener("click",resetGame);

}

//Creamos la función reset game
function resetGame(){
    guessCount =1;
    
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = "";
    }
        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled =false;
        guessField.value = "";
        guessField.focus = "";

        lastResult.style.backgroundcolor = "black";

        randomNumber = Math.floor(Math.random() * 100)+1;
}