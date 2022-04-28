function cambiar_parrafo(){
    document.getElementById("edit").style.display="block";
    let texto= document.getElementById("texto").innerText;
    console.log(texto);
}

function myfuncion(valor) {
    document.getElementById("texto").innerText=valor;
}

function LogMessage(message) {
    console.log(message+"<br>");
}

//controla si se presiono un enter
let textarea=document.getElementById("edit");
textarea.addEventListener('keyup', (e) => {
    LogMessage(`Key "${e.key}" released [event: keyup]`);
    if (e.key=="Enter"){
    document.getElementById("edit").style.display="none"
    }   
});

//carga el contenido de un archivo de tecto
//y lo muestra en el parrafo
function showFile(input) {
    let file = input.files[0];
    alert(`File name: ${file.name}`); // e.g my. png
    alert( `Last modified: ${file.lastModified}`); // e.g 1552830408824

    let reader = new FileReader ();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        document.getElementById("texto").innerText=reader.result;
    };

    reader.onerror = function() {
        console.log(reader.error);
};
}

//funcion para añadir un div al dom 
function foo() {
    var undefined
    2; // bad idea!
    console.log(undefined*2);
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hola!¿Qué tal?");
    newDiv.appendChild(newContent); //añade texto al div creado.
    // añade el elemento creado y su contenido al DOM
    document.getElementById("1");
    document.body.insertBefore(newDiv, currentbiv);
    var currentDiv=document.getElementById("1");
}
    foo();
    
    
 