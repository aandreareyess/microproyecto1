const tamañito = sessionStorage.getItem("tamaño");

let name1= sessionStorage.getItem("nombre1");
let name2= sessionStorage.getItem("nombre2");
let name3= sessionStorage.getItem("nombre3");
let name4= sessionStorage.getItem("nombre4");
let botonnum = document.querySelector("masnum");
let numerito = document.getElementById("numerito");
let conteoClicks = 0;


    function generarNumeroAleatorio() {

        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        conteoClicks++;
        document.getElementById("resultado").innerText = `${numeroAleatorio}`;
        document.getElementById("contador").innerText = `Turnos jugados: ${conteoClicks}`;
    }


    document.addEventListener('DOMContentLoaded', function() {

        let matriz = generarMatriz(tamañito, tamañito, 1, 50);
    
      
        mostrarMatriz(matriz, 'matriz1');
    
        var celdas = document.querySelectorAll('#matriz1 td');
        
        celdas.forEach(function(celda) {
            celda.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    });
    
    function generarMatriz(filas, columnas, min, max) {
        var matriz = [];
        for (var i = 0; i < filas; i++) {
            matriz[i] = [];
            for (var j = 0; j < columnas; j++) {
                var numAleatorio;
                do {
                    numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                } while (existeEnMatriz(matriz, numAleatorio)); // Verifica si el número ya existe en la matriz
                matriz[i][j] = numAleatorio;
            }
        }
        return matriz;
    }
    
    function existeEnMatriz(matriz, numero) {
        for (var i = 0; i < matriz.length; i++) {
            for (var j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === numero) {
                    return true;
                }
            }
        }
        return false; 
    }
    function mostrarMatriz(matriz, idTabla) {
        var tabla = document.getElementById(idTabla);
        for (var i = 0; i < matriz.length; i++) {
            var fila = document.createElement('tr');
            for (var j = 0; j < matriz[i].length; j++) {
                var celda = document.createElement('td');
                celda.textContent = matriz[i][j];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        let matriz = generarMatriz(tamañito, tamañito, 1, 50);
      
        mostrarMatriz(matriz, 'matriz2');
    
        var celdas = document.querySelectorAll('#matriz2 td');
        celdas.forEach(function(celda) {
            celda.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    });
    
    function generarMatriz(filas, columnas, min, max) {
        var matriz = [];
        for (var i = 0; i < filas; i++) {
            matriz[i] = [];
            for (var j = 0; j < columnas; j++) {
                var numAleatorio;
                do {
                    numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                } while (existeEnMatriz(matriz, numAleatorio)); // Verifica si el número ya existe en la matriz
                matriz[i][j] = numAleatorio;
            }
        }
        return matriz;
    }
    
    function existeEnMatriz(matriz, numero) {
        for (var i = 0; i < matriz.length; i++) {
            for (var j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === numero) {
                    return true; 
                }
            }
        }
        return false;
    }
    
    function mostrarMatriz(matriz, idTabla) {
        var tabla = document.getElementById(idTabla);
        for (var i = 0; i < matriz.length; i++) {
            var fila = document.createElement('tr');
            for (var j = 0; j < matriz[i].length; j++) {
                var celda = document.createElement('td');
                celda.textContent = matriz[i][j];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        let matriz = generarMatriz(tamañito, tamañito, 1, 50);
      
        mostrarMatriz(matriz, 'matriz3');
    
        var celdas = document.querySelectorAll('#matriz3 td');
        celdas.forEach(function(celda) {
            celda.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    });
    
    function generarMatriz(filas, columnas, min, max) {
        var matriz = [];
        for (var i = 0; i < filas; i++) {
            matriz[i] = [];
            for (var j = 0; j < columnas; j++) {
                var numAleatorio;
                do {
                    numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                } while (existeEnMatriz(matriz, numAleatorio)); 
                matriz[i][j] = numAleatorio;
            }
        }
        return matriz;
    }
    
    function existeEnMatriz(matriz, numero) {
        for (var i = 0; i < matriz.length; i++) {
            for (var j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === numero) {
                    return true; 
                }
            }
        }
        return false; 
    }
    
    function mostrarMatriz(matriz, idTabla) {
        var tabla = document.getElementById(idTabla);
        for (var i = 0; i < matriz.length; i++) {
            var fila = document.createElement('tr');
            for (var j = 0; j < matriz[i].length; j++) {
                var celda = document.createElement('td');
                celda.textContent = matriz[i][j];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        let matriz = generarMatriz(tamañito, tamañito, 1, 50);
      
        mostrarMatriz(matriz, 'matriz4');
    
        // Añado el click parra tachar
        let celdas = document.querySelectorAll('#matriz4 td');
        celdas.forEach(function(celda) {
            celda.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
    });
    
    function generarMatriz(filas, columnas, min, max) {
        let matriz = [];
        for (let i = 0; i < filas; i++) {
            matriz[i] = [];
            for (let j = 0; j < columnas; j++) {
                let numAleatorio;
                do {
                    numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
                } while (existeEnMatriz(matriz, numAleatorio)); 
                matriz[i][j] = numAleatorio;
            }
        }
        return matriz;
    }
    
    function existeEnMatriz(matriz, numero) {
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] === numero) {
                    return true; 
                }
            }
        }
        return false; 
    }
    
    function mostrarMatriz(matriz, idTabla) {
        let tabla = document.getElementById(idTabla);
        for (let i = 0; i < matriz.length; i++) {
            let fila = document.createElement('tr');
            for (let j = 0; j < matriz[i].length; j++) {
                let celda = document.createElement('td');
                celda.textContent = matriz[i][j];
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }
    }

    
    