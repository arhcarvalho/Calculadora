function calc(){ //criar a função
    var a = parseInt(document.querySelector("#valor1").value); //parseInt converter a string em inteiro
    var b = parseInt(document.querySelector("#valor2").value);
    var op = document.querySelector("#operator").value; //querySelector é para ir buscar o id ao html
    var calcular;

    if (op == "adi"){
        calcular = a + b;
    } else if (op == "sub"){
        calcular = a - b;
    } else if (op == "div"){
        calcular = a / b;
    } else if (op == "mul"){
        calcular = a * b;
    }

    document.querySelector("#result").innerHTML = calcular;
}