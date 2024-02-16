
const tamañoMatriz = document.getElementById("tamaño");
tamañoMatriz.addEventListener("change",()=>{
    let valortamaño= tamañoMatriz.value

    sessionStorage.setItem("tamaño",valortamaño)})

const name1= document.getElementById("nombre1");
const name2= document.getElementById("nombre2");
const name3= document.getElementById("nombre3");
const name4= document.getElementById("nombre4");

sessionStorage.setItem("nombre1",name1);
sessionStorage.setItem("nombre2",name2);
sessionStorage.setItem("nombre3",name3);
sessionStorage.setItem("nombre4",name4);





    




