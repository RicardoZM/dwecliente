prompt("texto", "valor por defecto");
//Hay que guardar el resultado en una variable
//Devuelve el texto que se introduce en la caja de texto,hay que guardarlo en una variable
//Si se mete algun valor en "valor por defecto" cuando se inicia en la casilla aperecera ese caractecter

confirm("texto");//Mostar el resultado por pantalla
//Devuelve true o false Ejemplo una caja de texto con ACEPTAR y CANCELAR
//Hay que guardar el resultado en una variable

parseInt("texto");
//Convierte una cadena a un numero entero

parseFloat("texto");
//Convierte una cadena a un numero decimal


//FUNCIONES
//Indica de que tipo es la variable que se le pasa
typeof(nombreVariable);

//Esta expresion pregunta si no es un numero.Devuelve true si no es un numero o false si es un numero
isNaN(expresion);

document.getElementById("resultado").value = "El " + numero + " es par";/*con getElementById le da el valor a los que se le introduzca 
                    entre parentesis con el valor que se le indica despues del value*/
//Declaramos el div
//<div id="mi DIV"></div>
//innerHTML se utiliza para contenedores y si no se asigna con value
document.getElementById("mi DIV").innerHTML="<p>mi parrafo</p>";//Le asignamos al elemento div el codigo html
document.getElementById("mi DIV").innerHTML+="<p>mi parrafo</p>";//Lo que hacemos con += es concatenar, es decir añade otro parrafo despues del primero
document.getElementById("imagen").innerHTML = '<img src="fotos/foto2.jpg" width = "200" height="200"><br>foto2.jpg';//Insertar una imagen


//SENTECIAS DE USO
for(valor_inicial;expresion_condicion;incremento_o_decremento){
    Instrucciones
}