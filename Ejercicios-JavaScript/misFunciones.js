/**
 * Conversion de unidades de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarunidades (id, valor) {
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)) {
        alert("Se ingreso un valor equivocado: " + id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        yarda = 0.0277778*valor;
        pie = 0.0833333*valor;
    }else if(id=="pie"){
        pie = valor;
        metro = 0.3048*valor;
        yarda = 0.333333*valor;
        pulgada = 12*valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = Math.round(yarda*100)/100;
}
function convertirgr(id) {
    var grad, rad;
    if (id == "grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id == "radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(valormo){
    if(valormo == "val_mostrar"){
        document.getElementById("divmo").style.display='block';
    }else if(valormo == "val_ocultar"){
        document.getElementById("divmo").style.display='none';
    }

}
function calcularsuma(){
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = num1 + Number(num2);
}
function calcularresta(){
    var num1, num2;

    num1=document.getElementById("numr1").value;
    num2=document.getElementById("numr2").value;
    document.getElementById("totalR").innerHTML = Number(num1) - Number(num2);
}
function calcularmultiplicacion(){
    var num1, num2;

    num1=document.getElementById("numm1").value;
    num2=document.getElementById("numm2").value;
    document.getElementById("totalM").innerHTML = Number(num1) * Number(num2);
}
function calculardivision(){
    var num1, num2;

    num1=document.getElementById("numd1").value;
    num2=document.getElementById("numd2").value;
    document.getElementById("totalD").innerHTML = Number(num1) / Number(num2);
}
function cargarweb (){
    var cant, unidad, urlcomp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaWeb.html#" + cant + "#" + "unidad";
    window.open(urlcomp)
}
function cargarresultado(){
    var can, un, urlcomp;

    urlcomp = window.location.href.split("/")[5];
    can = urlcomp.split("#")[1];
    un = urlcomp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}
function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open("2_web.html");
}
function cargarLocalStorage(){
    let cant, un;

    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}
function dibujarCirCuad(){
    var canvas= document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333889";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#8b4c99";
    ctx.fill();
}