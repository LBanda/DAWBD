console.log('Ejercicios Lab5');

console.info('1:Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida');

const numero = window.prompt('Escribe un numero entero y positivo');

document.write('1:Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida <br>');

document.write("<table>");
    for(let i = 1; i <= numero; i++){
        document.write("<tr>"+"<td>"+ i + "</td>"+"<td>"+ i*i + "</td>"+"<td>"+ i*i*i + "</td>"+"</tr>");
    }
document.write("</table>");

 

console.info('2:Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta.');

let S = new Date().getSeconds();
let x = Math.round(Math.random()*10);
let y = Math.round(Math.random()*10);

let suma = x + y;

const resultado = window.prompt('Escribe el resultado de la suma de ' + x + ' + ' + y);

document.write('2:Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta. <br>');

    if(resultado == suma){
        document.write("Correcto  Tiempo: " + S + " segundos <br>");
    }
    
    else{
        document.write("Incorrecto  Tiempo: " + S + " segundos <br>");
    }

document.write('3:Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0s, y la cantidad de valores mayores a 0 en el arreglo.<br>');


function parametros() {

	let arrnum = new Array();
    for(j = 0; j < 6; j++){
        arrnum[j] = window.prompt('Escribe un numero para el arreglo');
    }
	let neg = 0, pos = 0, ceros = 0;
	for(i = 0; i < arrnum.length; i++) {
		if(arrnum[i] < 0) {
			neg++;
		}
		else if(arrnum[i] > 0) {
			pos++;
		}
		else {
			ceros++;
		}

        document.write('['+arrnum[i]+']');
	}
	document.write('Numero negativos en el arreglo ' + neg +' positivos ' + pos + ' ceros ' + ceros + '<br>');
}

parametros();

document.write('4:Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.<br>');


function promedio(){
	let sp = 0;
	let arrp = [[1,2,3],[4,5,6],[7,8,9]];

	for(i=0; i < 3; i++){
		for(j=0; j < 3; j++){
			sp += arrp[i][j];
		}
		sp = sp/3;
		document.write('Promedio renglon ' + i + ': ' + sp + '<br>');
		sp = 0;
	}
	
}

promedio();