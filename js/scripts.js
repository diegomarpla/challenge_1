
//TAREA 1= ENCRIPTAR ---- TAREA 2=DESENCRIPTAR
var tarea =1;

//ELEGIR LA TAREA, ENCRIPTAR UN MENSAJE O DESENCRIPTAR UN MENSAJE RECIBIDO
function eligeTarea(){
    limpiar(); //VACIAR LOS TEXTAREAS
    tarea = document.getElementById("seleccion").value;
    //console.log(tarea);
    if (tarea==1){ 
        tarea=1; //ENCRIPTAR - CAMBIA LOS TEXTOS DE LABELS Y BOTONES
        document.getElementById("lblAconvertir").innerHTML="Ingrese el texto a encriptar";
        document.getElementById("lblConvertido").innerHTML="Texto encriptado";
        document.getElementById("btnAccionAconvertir").innerHTML="Encriptar";      
    }else{
        tarea=2; //DESENCRIPTAR - CAMBIA LOS TEXTOS DE LABELS Y BOTONES
        document.getElementById("lblAconvertir").innerHTML="Ingrese el texto a desencriptar";
        document.getElementById("lblConvertido").innerHTML="Texto desencriptado";
        document.getElementById("btnAccionAconvertir").innerHTML="Desencriptar";       
    }
} 

function convertir(){
    if (tarea==1){ //OPCION PARA ENCRIPTAR UN MENSAJE
        if(document.getElementById("txtAconvertir").value!=""){
            var textoAencriptar=document.getElementById("txtAconvertir").value;
            textoAencriptar=textoAencriptar.replaceAll("e","enter");
            textoAencriptar=textoAencriptar.replaceAll("i","imes");
            textoAencriptar=textoAencriptar.replaceAll("a","ai");
            textoAencriptar=textoAencriptar.replaceAll("o","ober");
            textoAencriptar=textoAencriptar.replaceAll("u","ufat");
            document.getElementById("txtConvertido").value=textoAencriptar;
            document.getElementById("txtAconvertir").value="";
        }else{
            alert("Debe ingresar un texto a encriptar/desencriptar");
        }
    }else{ //OPCION PARA DESENCRIPTAR UN MENSAJE
        if(document.getElementById("txtAconvertir").value!=""){
            var textoAdesencriptar=document.getElementById("txtAconvertir").value;
            textoAdesencriptar=textoAdesencriptar.replaceAll("ufat","u");
            textoAdesencriptar=textoAdesencriptar.replaceAll("ober","o");
            textoAdesencriptar=textoAdesencriptar.replaceAll("ai","a");
            textoAdesencriptar=textoAdesencriptar.replaceAll("imes","i");
            textoAdesencriptar=textoAdesencriptar.replaceAll("enter","e");        
            document.getElementById("txtConvertido").value=textoAdesencriptar;
            document.getElementById("txtAconvertir").value="";
        }else{
            alert("Debe ingresar un texto a encriptar/desencriptar");
        }
    }    
}

function revertir(){
    if (tarea==1){ //OPCION PARA REVERTIR UN MENSAJE ENCRIPTADO
        if(document.getElementById("txtConvertido").value!=""){
            var textoAdesencriptar=document.getElementById("txtConvertido").value;
            textoAdesencriptar=textoAdesencriptar.replaceAll("ufat","u");
            textoAdesencriptar=textoAdesencriptar.replaceAll("ober","o");
            textoAdesencriptar=textoAdesencriptar.replaceAll("ai","a");
            textoAdesencriptar=textoAdesencriptar.replaceAll("imes","i");
            textoAdesencriptar=textoAdesencriptar.replaceAll("enter","e");        
            document.getElementById("txtAconvertir").value=textoAdesencriptar;
            document.getElementById("txtConvertido").value="";
        }else{
            alert("No hay nungún texto encriptado para revertir");
        }
    }else{ //OPCION PARA REVERTIR UN MENSAJE DESENCRIPTADO
        if(document.getElementById("txtConvertido").value!=""){
            var textoAencriptar=document.getElementById("txtConvertido").value;
            textoAencriptar=textoAencriptar.replaceAll("e","enter");
            textoAencriptar=textoAencriptar.replaceAll("i","imes");
            textoAencriptar=textoAencriptar.replaceAll("a","ai");
            textoAencriptar=textoAencriptar.replaceAll("o","ober");
            textoAencriptar=textoAencriptar.replaceAll("u","ufat");
            document.getElementById("txtAconvertir").value=textoAencriptar;
            document.getElementById("txtConvertido").value="";
        }else{
            alert("No hay nungún texto desencriptado para revertir");
        }
    }    
}
//COPIA EL MENSAJE ENCRIPTADO O DESENCRIPTADO AL CLIPBOARD, VACÍA EL TEXTAREA Y AVISA QUE FUÉ COPIADO
function copiar(){ 
    var textoAcopiar = document.getElementById("txtConvertido").value;
    navigator.clipboard.writeText(textoAcopiar);
    document.getElementById("txtConvertido").value="";
    alert("Su mensaje fué copiado!");

}


//CONTROLO EL INGRESO DE MAYUSCULAS CONVIRTIENDOLAS EN MINUSCULAS EN TIEMPO REAL Y NORMALIZO EL TEXTO
function convierteAminuscula(e){  
    var frase=document.getElementById("txtAconvertir").value;
    frase=normalizaTexto(frase); //NORMALIZO EL TEXTO
    document.getElementById("txtAconvertir").value=frase.toLowerCase();//CONVIERTO EL TEXTO NORMALIZADO A MINUSCULAS    
}

//NORMALIZO TEXTO QUITANDO ACENTOS Y CARACTERES ESPECIALES
function normalizaTexto(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//LIMPIO LOS TEXTAREAS Y PONGO EL FOCO EN EL CUADRO A CONVERTIR
function limpiar(){
    document.getElementById("txtAconvertir").value="";
    document.getElementById("txtConvertido").value="";    
    document.getElementById("txtAconvertir").focus();   
    
}