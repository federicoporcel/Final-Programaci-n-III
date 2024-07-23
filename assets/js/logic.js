var cartas = new Array(
 {nombre: "1", src: "assets/images/messi.jpeg", seleccion: false},{nombre: "2", src:"assets/images/xavi.jfif", seleccion: false},
 {nombre: "3", src: "assets/images/cr7.jfif", seleccion: false},{nombre: "4", src:"assets/images/pele.jpg", seleccion: false},
 {nombre: "5", src: "assets/images/maradona.jfif", seleccion: false},{nombre: "6", src:"assets/images/zidane.jfif", seleccion: false},
 {nombre: "7", src: "assets/images/zenon.jfif", seleccion: false},{nombre: "8", src:"assets/images/roman.jpg", seleccion: false},
 {nombre: "1", src: "assets/images/messi.jpeg", seleccion: false},{nombre: "2", src:"assets/images/xavi.jfif", seleccion: false},
 {nombre: "3", src: "assets/images/cr7.jfif", seleccion: false},{nombre: "4", src:"assets/images/pele.jpg", seleccion: false},
 {nombre: "5", src: "assets/images/maradona.jfif", seleccion: false},{nombre: "6", src:"assets/images/zidane.jfif", seleccion: false},
 {nombre: "7", src: "assets/images/zenon.jfif", seleccion: false},{nombre: "8", src:"assets/images/roman.jpg", seleccion: false});

 var intentos = 0;
 var jugada1 = "";
 var jugada2 = "";
 var identificadorJ1 = "";
 var identificadorJ2 = "";

 function iniciarJuego() {
    var juego = document.getElementById("juego"); 
    juego.style.opacity = 1; //totalmente opaco

    cartas.sort(function(){return Math.random() - 0.5}); //function() es una funcion anónima (no tiene nombre)
    for(var i = 0; i < 16; i ++){
        var carta = cartas[i].nombre;
        var dato= document.getElementById("img" + i.toString());
        dato.dataset.valor = carta;
        dato.src="assets/images/yugiback.png";
    }
 }

 function resetearJuego() {
    var juego = document.getElementById("juego");
    juego.style.opacity = 1;
    cartas.sort(function(){return Math.random() -0.5});
    for(var i = 0; i < 16; i ++){
        var carta = cartas[i].nombre;
        var dato= document.getElementById("img" + i.toString());
        dato.dataset.valor = carta;
        dato.src="assets/images/yugiback.png";
    }
 }

 function voltearCarta() {
    var evento = window.event;
    jugada2 = evento.target.dataset.valor;
     
    identificadorJ2 = evento.target.id;
    identificadorJ2 = identificadorJ2.substring(3);
    
    var dato = document.getElementById("img" + identificadorJ2);

    if(jugada1 != "") {
        if(jugada1 == jugada2 && identificadorJ1 != identificadorJ2 &&  //caso de acierto
            cartas[parseInt(identificadorJ2)].seleccion != true &&
            cartas[parseInt(identificadorJ1)].seleccion != true) {
                cartas[parseInt(identificadorJ2)].seleccion = true;
                cartas[parseInt(identificadorJ1)].seleccion = true;
                dato.src=cartas[parseInt(identificadorJ2)].src;
                borrarVariables(); //vaciar las variables 
                comprobarJuego(); // comprobar si el juego termino
        }else if (identificadorJ1 != identificadorJ2) { //pasada 2
            dato.src = cartas[parseInt(identificadorJ2)].src;
            setTimeout(function() {
                dato.src = "assets/images/yugiback.png"; // tapé la segunda carta
                var dato2 = document.getElementById("img" + identificadorJ1);
                dato2.src = "assets/images/yugiback.png"; // tapé la primera carta
                borrarVariables(); //vaciar las variables
            },200);
        }
    }else if (jugada2 != "valor") {  //pasada 1
        dato.src = cartas[parseInt(identificadorJ2)].src;
        jugada1=jugada2;
        identificadorJ1=identificadorJ2;
    }
 }

 function borrarVariables() {
     jugada1 = "";
     jugada2 = "";
     identificadorJ1 = "";
     identificadorJ2 = "";
 }

 function comprobarJuego() {
     var aciertos = 0; //contador

     for (var i = 0;i < 16; i++) {
         if (cartas[i].seleccion == true) {
             aciertos++; //contar los aciertos 
         }
     }

     if (aciertos == 16) {
         window.alert("Ganaste el Juego!!!");
     }
 }