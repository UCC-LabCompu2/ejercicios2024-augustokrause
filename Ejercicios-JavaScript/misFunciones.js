/**
 * Conversion de unidades de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param {string} id - El id de los inputs de metros, yardas, pies y pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies y pulgadas.
 * @return
 */
function cambiarunidades (id, valor) {
    if(isNaN(valor)){
        alert("Se ingreso un valor equivocado");
        metro = "";
        pulgada = "";
        pie = "";
        yarda= "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.701*valor;
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
    document.lasunidades.unid_metro.value = metro;
    document.lasunidades.unid_pulgada.value = pulgada;
    document.lasunidades.unid_pie.value = pie;
    document.lasunidades.unid_yarda.value = yarda;
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
    document.getElementsByName("sum_total")[0].value = num1 + Number(num2);
}
function calcularresta(){
    var num1, num2;

    num1=document.getElementById("numr1").value;
    num2=document.getElementById("numr2").value;
    document.getElementById("totalR").value = Number(num1) - Number(num2);
}
function calcularmultiplicacion(){
    var num1, num2;

    num1=document.getElementById("numm1").value;
    num2=document.getElementById("numm2").value;
    document.getElementById("totalM").value = Number(num1) * Number(num2);
}
function calculardivision(){
    var num1, num2;

    num1=document.getElementById("numd1").value;
    num2=document.getElementById("numd2").value;
    document.getElementById("totalD").value = Number(num1) / Number(num2);
}

