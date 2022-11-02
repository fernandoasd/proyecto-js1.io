var selected_js = document.getElementById("seleccion"); 
var total_pagar_js = document.getElementById("total_pagar"); 
var resumen_js = document.getElementById("btn_resumen"); 
var cantidad_js = document.getElementById("cantidad");
var borrar_js = document.getElementById("btn_borrar");
var nombre_js = document.getElementById("nombre");
var apellido_js = document.getElementById("apellido");
var mail_js = document.getElementById("mail");




document.getElementById('btn_resumen').addEventListener('click', function(){
    resumen(calculo_precio);
    ver();
}
);


document.getElementById('btn_borrar').addEventListener('click', borrar);

function calculo_precio(){
    switch (selected_js.value){
        case selected_js.value="1":
            total_pagar_js.value= "Total a Pagar: $" + 200*cantidad_js.value;
        break;
        case selected_js.value="2":
            total_pagar_js.value = "Total a Pagar: $" + 200*0.2*cantidad_js.value;
        break;
        case selected_js.value="3":
            total_pagar_js.value = "Total a Pagar: $" + 200*0.5*cantidad_js.value;
        break;
                case selected_js.value="4":
            total_pagar_js.value = "Total a Pagar: $" + 200*0.85*cantidad_js.value;
        break;
    }
}

function resumen (callback){
    form_ok = true
    
    if (nombre_js.value == ""){
        nombre_js.placeholder = "Debe ingresar un nombre"
        nombre_js.style.backgroundColor = "lightgrey"
        nombre_js.placeholder.color = "green"
        form_ok = false
    }; 
    if (apellido_js.value == ""){
        apellido_js.placeholder = "Debe ingresar un apellido"
        apellido_js.style.backgroundColor = "lightgrey"
        form_ok = false
    };
    
    if (mail_js.value == "" ){
        mail_js.value = null
        mail_js.placeholder = "Mail incorrecto"
        mail_js.style.backgroundColor = "lightgrey"
        form_ok = false
    };
    
    if (cantidad_js.value == "" || cantidad_js.value < 1){
        cantidad_js.placeholder = "Debe ingresar un numero mayor a cero"
        cantidad_js.style.backgroundColor = "lightgrey"
        form_ok = false
    }

    if (form_ok = true){
        callback()
    }
}



function ver (){ //función de control para consola
    console.log("seleccion= " + selected_js.value + " Total : " + total_pagar_js.value);
}

function borrar() {
    nombre_js.value= "";
    apellido_js.value= "";
    mail_js.value= "";
    cantidad_js.value= "";
    total_pagar_js.value = "Total a Pagar: $";
    nombre_js.style.backgroundColor = "white"
    apellido_js.style.backgroundColor = "white"
    mail_js.style.backgroundColor = "white"
    cantidad_js.style.backgroundColor = "white"
    nombre_js.placeholder = "Ingresar nombre"
    apellido_js.placeholder = "Iingresar apellido"
    mail_js.placeholder = "Mail"
    cantidad_js.placeholder = "Cantidad"
}