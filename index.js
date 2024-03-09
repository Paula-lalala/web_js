

const titulo = document.getElementById('tituloH1');
console.log(titulo);
titulo.innerText='hola Pepe!!!!';


// function myMetodo(){

// }
// const myMetodo = (a,b,c)=>{
//     return a+b+c;
// }
// myMetodo(2,3,4);

document.getElementById('saludarBtn').addEventListener('click', ()=>{
    const formSaludo=document.forms['formSaludo'];
    const nombre= formSaludo['nombre'].value;
    console.log(formSaludo);
    console.log(nombre);
    const tituloDos = document.getElementById('saludoH2');
    if(!nombre){
        tituloDos.classList.remove('mostrarSaludo');
        alert('Debe ingresar el nombre');
    }else{
        tituloDos.innerText = 'hola '+nombre+'!!!!';
        tituloDos.classList.add('mostrarSaludo');
        tituloDos.style.color= '#ff0f80';
    }
});
