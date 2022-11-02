var selected_js = document.getElementById("seleccion"); 
var total_pagar_js = document.getElementById("total_pagar"); 
var resumen_js = document.getElementById("btn_resumen"); 
var cantidad_js = document.getElementById("cantidad");
var borrar_js = document.getElementById("btn_borrar");
var nombre_js = document.getElementById("nombre");
var apellido_js = document.getElementById("apellido");
var mail_js = document.getElementById("mail");




document.getElementById('btn_resumen').addEventListener('click', resumen);
document.getElementById('btn_resumen').addEventListener('click', ver);
document.getElementById('btn_borrar').addEventListener('click', borrar);

function resumen(){
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

function ver (){ //función de control para consola
    console.log("seleccion= " + selected_js.value + " Total : " + total_pagar_js.value);
}

function borrar() {
    nombre_js.value= "";
    apellido_js.value= "";
    mail_js.value= "";
    cantidad_js.value= "";
    total_pagar_js.value = "Total a Pagar: $";
}