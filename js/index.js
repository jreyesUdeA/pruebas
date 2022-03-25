let secciones = [];
let botones = [];
window.onload = init;

function init() {
    secciones[1] = document.getElementById("seccion_1");
    secciones[2] = document.getElementById("seccion_2");
    secciones[3] = document.getElementById("seccion_3");
    secciones[4] = document.getElementById("seccion_4");
    secciones[5] = document.getElementById("seccion_5");
    secciones[6] = document.getElementById("seccion_6");
    secciones[7] = document.getElementById("seccion_7");
    secciones[8] = document.getElementById("seccion_8");
    secciones[9] = document.getElementById("seccion_9");
    secciones[10] = document.getElementById("seccion_10");
    secciones[11] = document.getElementById("seccion_11");
    secciones[12] = document.getElementById("seccion_12");
    secciones[13] = document.getElementById("seccion_13");
    secciones[14] = document.getElementById("seccion_14");
    secciones[15] = document.getElementById("seccion_15");
    secciones[16] = document.getElementById("seccion_16");

    botones[1] = document.getElementById("btn_1");
    botones[2] = document.getElementById("btn_2");
    botones[3] = document.getElementById("btn_3");
    botones[4] = document.getElementById("btn_4");
    botones[5] = document.getElementById("btn_5");
    botones[6] = document.getElementById("btn_6");
    botones[7] = document.getElementById("btn_7");
    botones[8] = document.getElementById("btn_8");
    botones[9] = document.getElementById("btn_9");
    botones[10] = document.getElementById("btn_10");
    botones[11] = document.getElementById("btn_11");
    botones[12] = document.getElementById("btn_12");
    botones[13] = document.getElementById("btn_13");
    botones[14] = document.getElementById("btn_14");
    botones[15] = document.getElementById("btn_15");
}
function ocultar() {
    for (let i = 1; i < secciones.length; i++) {
        secciones[i].classList.add("ocultar");
    }
}
function removerSeleccion() {
    for (i in botones) {
        botones[i].classList.remove("seleccionado")
    }
}
function seleccionar(seccion_id) {
    removerSeleccion();
    botones[seccion_id].classList.add("seleccionado");
}
function cambiarSeccion(target) {
    let id = target.id.split("_")[1];
    ocultar();
    seleccionar(id);
    secciones[id].classList.remove("ocultar");
    ordenar();
    ordenar2();
    ordenar3();
}
function cambiarSeccionC(id) {
    ocultar();
    seleccionar(id);
    secciones[id].classList.remove("ocultar");
    ordenar();
    ordenar2();
    ordenar3();
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sleep() {
    //console.log('Taking a break...');
    setTimeout(console.log.bind(null, 'Two second later'), 1000);
}

//--Nivel 1--//
let numViaje_1 = 0;
let suertef = 0;
let numIntento_1 = 0;
function ordenar() {
    numViaje_1 = numIntento_1 + 1;
    document.getElementById("t_1").innerHTML="VIAJE "+numViaje_1;
    //console.log("El viaje número" + numViaje_1);
    if (numViaje_1 == 1) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#8EF467";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#91FF72";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 2 && numIntento_1 == 1) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#FBBE59";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#FFCB58";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 3 && numIntento_1 == 2) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#E84249";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#EB5E50";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 4 && numIntento_1 == 3) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#F460F4";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#FF72F3";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 5 && numIntento_1 == 4) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#3F33E2";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#6644E2";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 6 && numIntento_1 == 5) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#8E53BC";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#A55FD3";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 7 && numIntento_1 == 6) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#7AAD6C";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#64A357";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 8 && numIntento_1 == 7) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#F4EE7F ";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#EAE775";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
    else if (numViaje_1 == 9 && numIntento_1 == 8) {
        suerte = getRandomInt(1, 28);
        //console.log(suerte);
        suertef = "n1_" + suerte;
        //console.log("El elegido es " + suertef);
        document.getElementById(suertef).style.background = "#874646";
        for (i = 1; i < 29; i++) {
            if (i != suerte) {
                j = "n1_" + i;
                //console.log(j);
                document.getElementById(j).style.background = "#995955";
            }
            else {
                //console.log("Coincidieron");
            }
        }
    }
}
function verificar(id) {
    if (id == suertef) {
        if (numIntento_1 == 9) {
            numIntento_1 = 0;
            ocultar();
            seleccionar("10");
            secciones["10"].classList.remove("ocultar");
        }
        else{
            numIntento_1++;
            ocultar();
            seleccionar("3");
            secciones["3"].classList.remove("ocultar");
        }
        
    }
    else {
        //console.log("perdio");
        numIntento_1 = 0;
        ocultar();
        seleccionar("4");
        secciones["4"].classList.remove("ocultar");
    }
}
//-Nivel 1--//

//--Nivel 2--//
let numIntento_2 = 0;
let numViaje_2 = 0;
let suerte2 = 0, suertef2 = 0;
function ordenar2() {
    numViaje_2 = numIntento_2 + 1;
    document.getElementById("t_2").innerHTML="VIAJE "+numViaje_2;
    posiciones2 = [];
    contador = 0;
    //console.log("numero de viaje " + numViaje_2);
    if (numViaje_2 == 1) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-1.png";
        letras = ['0', 'V', 'J', 'H', 'Z', 'T', 'I', 'E', 'Y', 'F']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "L";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 2) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-2.png";
        letras = ['0', 'V', 'J', 'H', 'Z', 'T', 'I', 'E', 'L', 'F']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "Y";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 3) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-3.png";
        letras = ['0', 'V', 'J', 'H', 'Z', 'T', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "F";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 4) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-4.png";
        letras = ['0', 'V', 'J', 'H', 'Z', 'F', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "T";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 5) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-5.png";
        letras = ['0', 'V', 'J', 'T', 'Z', 'F', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "H";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 6) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-6.png";
        letras = ['0', 'V', 'J', 'T', 'H', 'F', 'Z', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "I";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 7) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-7.png";
        letras = ['0', 'V', 'J', 'T', 'H', 'F', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "Z";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 8) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-8.png";
        letras = ['0', 'Z', 'J', 'T', 'H', 'F', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "V";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 9) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-9.png";
        letras = ['0', 'V', 'Z', 'T', 'H', 'F', 'I', 'E', 'L', 'Y']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "J";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
    if (numViaje_2 == 10) {
        // Letra L
        document.getElementById("im2_1").src = "img/Recursos Intermedio/2i-10.png";
        letras = ['0', 'V', 'J', 'T', 'H', 'F', 'I', 'E', 'L', 'Z']
        suerte2 = getRandomInt(1, 10);
        suertef2 = "n2_" + suerte2;
        //console.log(suertef2);
        //console.log("El elegido es " + suertef2);
        document.getElementById(suertef2).value = "Y";
        for (i = 1; i < 11; i++) {
            j = "n2_" + i;
            suerte2_1 = getRandomInt(1, 10);
            if (i != suerte2) {
                if (posiciones2.indexOf(suerte2_1) < 0) {
                    // console.log("Llenó " + j + " con " + letras[suerte2_1]);
                    document.getElementById(j).value = letras[suerte2_1];
                    posiciones2.push(suerte2_1);
                    //console.log(posiciones2);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 500) i = i - 1;
                    contador++;
                }
            }

        }
    }
}
function verificar2(id) {
    if (id == suertef2) {
        if (numIntento_2 == 9) {
            numIntento_2 = 0;
            ocultar();
            seleccionar("10");
            secciones["10"].classList.remove("ocultar");
        }
        else {
            numIntento_2++;
            ocultar();
            seleccionar("7");
            secciones["7"].classList.remove("ocultar");
        }

    }
    else {
        numIntento_2 = 0;
        ocultar();
        seleccionar("4");
        secciones["4"].classList.remove("ocultar");
    }
}
//--Nivel 2--//

//--Nivel 3--//
let numIntento_3 = 0;
let numViaje_3 = 0;
let numFill = 0;
let suertef3 = 0;
let colores = ['#87F086', '#C399F0 ', '#7D8DFF', '#FFD270', '#FF8170', '#FC7CF0', '#57FFE3', '#8AD12C', '#D9F246', '#FF3B61'];
function fillCir() {
    //console.log("entra");
    if (numFill == 0) {
        document.getElementById('n3_0').style.background = colores[0];
    }
    else if (numFill == 1) {
        document.getElementById('n3_0').style.background = colores[1];
    }
    else if (numFill == 2) {
        document.getElementById('n3_0').style.background = colores[2];
    }
    else if (numFill == 3) {
        document.getElementById('n3_0').style.background = colores[3];
    }
    else if (numFill == 4) {
        document.getElementById('n3_0').style.background = colores[4];
    }
    else if (numFill == 5) {
        document.getElementById('n3_0').style.background = colores[5];
    }
    else if (numFill == 6) {
        document.getElementById('n3_0').style.background = colores[6];
    }
    else if (numFill == 7) {
        document.getElementById('n3_0').style.background = colores[7];
    }
    else if (numFill == 8) {
        document.getElementById('n3_0').style.background = colores[8];
    }
    else if (numFill == 9) {
        document.getElementById('n3_0').style.background = colores[9];
    }
}
function ordenar3() {
    numViaje_3 = numIntento_3 + 1;
    document.getElementById("t_3").innerHTML="VIAJE "+numViaje_3;
    //console.log("El viaje número" + numViaje_3);
    fillCir();
    if (numViaje_3 == 1) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#48EA3F', '#70FF6C', '#50B548', '#369633', '#5FB55D', '#61CE5B', '#77BC75', '#ACF9AA'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            // console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }

    if (numViaje_3 == 2) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#D4C2EF', '#C7B5E2', '#D2B6FF', '#B781FC', '#9D79CC', '#986DD1', '#C6B6DB', '#AD83E5'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }

    if (numViaje_3 == 3) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#B6C9FF', '#95A0C6', '#6378E0', '#8491CE', '#6C7FDD', '#556EE5', '#526FFF', '#4A5DBC'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }

    if (numViaje_3 == 4) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#FFD997', '#E2BB76', '#FFC550', '#EFBF60', '#FFC05C', '#FFC34A', '#F7D59A', '#EFA937'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 5) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#EF9F97', '#FF6555', '#F4897D', '#E5655E', '#FF8170', '#FF5E52', '#E04B3F', '#FF6464'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 6) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#F29EEE', '#E88EE3', '#FFA1FB', '#D354D3', '#F96EF9', '#E075DB', '#FF5AF7', '#FC8DF7'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 7) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#4DEFD0', '#70E8D1', '#95FCE8', '#00FFCE', '#49CEB4', '#61E0C7', '#54EACE', '#0FEFC4'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 8) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#9FD845', '#B3E84D', '#93E800', '#9FDD3E', '#90E012', '#8BBF3A', '#9BC634', '#98CC46'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 9) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#D2E046', '#E9FC38', '#E2E249', '#DBED35', '#E2EF60', '#D9F246', '#D6E541', '#D7E831'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
    if (numViaje_3 == 10) {
        var contador = 0;
        suerte3 = getRandomInt(1, 9);
        //console.log("El nfill es " + numFill)
        suertef3 = "n3_" + suerte3;
        //console.log("El elegido es " + suertef3);
        document.getElementById(suertef3).style.background = colores[numFill];
        relleno = ['#0000', '#FF5082', '#F74B74', '#EA3963', '#F43D69', '#F7436D', '#F72658', '#ED4575', '#FF275B'];
        posiciones = [];
        //posiciones.push(suerte3);
        //console.log(posiciones);
        for (i = 1; i < 10; i++) {
            j = "n3_" + i;
            suerte3_1 = getRandomInt(1, 9);
            //console.log("Suerte31 es " + suerte3_1);
            //console.log("j es " + j);
            if (i != suerte3) {
                if (posiciones.indexOf(suerte3_1) < 0) {
                    //console.log("Llenó " + j + " con " + relleno[suerte3_1]);
                    document.getElementById(j).style.background = relleno[suerte3_1];
                    posiciones.push(suerte3_1);
                    //console.log(posiciones);
                }
                else {
                    //console.log("encontró uno existente");
                    if (contador < 200) i = i - 1;
                    contador++;
                }
            }
            //else console.log("i es igual");
        }
    }
}
function verificar3(id) {
    if (id == suertef3) {
        if (numIntento_3 == 9) {
            numFill = 0;
            numIntento_3 = 0;
            ocultar();
            seleccionar("10");
            secciones["10"].classList.remove("ocultar");
        }
        else {
            numFill++;
            numIntento_3++;
            ocultar();
            seleccionar("9");
            secciones["9"].classList.remove("ocultar");
        }
    }
    else {
        numIntento_3 = 0;
        numFill = 0;
        ocultar();
        seleccionar("4");
        secciones["4"].classList.remove("ocultar");
    }
}
//--Nivel 3--//

