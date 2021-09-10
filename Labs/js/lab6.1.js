let  cant_prod1 = 0;
let cant_prod2  = 0;
let cant_prod3 = 0;
let prod_total = 0;
let iva = 0;
let subtotal = 0;
let total = 0;
let c1 = 0;
let c2 = 0;
let c3 = 0;


function elegir1l(){
	document.getElementById("img_ac").src = "img/ACV1.jpg";
}


function elegir2(){
	document.getElementById("img_ac").src = "img/ACV2.jpg";
}
function elegir3(){
	document.getElementById("img_ac").src = "img/ACV3.jpg";
}


function totalP1(){   
    let compra_p1 = parseInt(document.getElementById("cant_prod1").value);
    let dif_prod1 = compra_p1 - c1;
    prod_total += dif_prod1;
    subtotal += (dif_prod1 * 1100);
    iva += (dif_prod1 *.16 * 1100);
    total += (dif_prod1 * 1100) + (dif_prod1 *.16 * 1100);
    
    if(compra_p1 > 0){
        document.getElementById("acv").innerHTML = "AC Valhalla: " + compra_p1 + " piezas";
    }
    else{
        document.getElementById("acv").innerHTML = "";
    }
    

    document.getElementById("cantidad").innerHTML = "Cantidad: " + prod_total;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    c1 = compra_p1;
}

function totalP2(){   
    let compra_p2 = parseInt(document.getElementById("cant_prod2").value);
    let dif_prod2 = compra_p2 - c2;
    prod_total += dif_prod2;
    subtotal += (dif_prod2 * 800);
    iva += (dif_prod2 *.16 * 800);
    total += (dif_prod2 * 800) + (dif_prod2 *.16 * 800);
    
    if(compra_p2 > 0){
        document.getElementById("ace").innerHTML = "AC The Ezio Collection: " + compra_p2 + " piezas";
    }
    else{
        document.getElementById("ace").innerHTML = "";
    }
    

    document.getElementById("cantidad").innerHTML = "Cantidad: " + prod_total;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    c2 = compra_p2;
}

function totalP3(){   
    let compra_p3 = parseInt(document.getElementById("cant_prod2").value);
    let dif_prod3 = compra_p3 - c3;
    prod_total += dif_prod3;
    subtotal += (dif_prod3 * 600);
    iva += (dif_prod3 *.16 * 600);
    total += (dif_prod3 * 600) + (dif_prod3 *.16 * 600);
    
    if(compra_p3 > 0){
        document.getElementById("acb").innerHTML = "AC Black Flag: " + compra_p3 + " piezas";
    }
    else{
        document.getElementById("acb").innerHTML = "";
    }
    

    document.getElementById("cantidad").innerHTML = "Cantidad: " + prod_total;
    document.getElementById("subtotal").innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("iva").innerHTML = "IVA: $" + iva;
    document.getElementById("total_iva").innerHTML = "TOTAL: $" + total;
    c3 = compra_p3;
}


document.getElementById("cantidad").innerHTML = "Cantidad: 0";
document.getElementById("subtotal").innerHTML = "Subtotal: $0";
document.getElementById("iva").innerHTML = "IVA: $0";
document.getElementById("total_iva").innerHTML = "TOTAL: $0";

//document.getElementById("prod1_shop").onclick = totalP1;
//document.getElementById("prod2_shop").onclick = totalP2;
//document.getElementById("prod3_shop").onclick = totalP3;

document.getElementById("cant_prod1").onclick;
document.getElementById("cant_prod2").onclick;
document.getElementById("cant_prod3").onclick;