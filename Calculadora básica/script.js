let num;
let num2;
let oper;
let result;

document.getElementById("button").onclick = function(){
    num = document.getElementById("input").value;
    num = Number(num);
    console.log(num);
    num2 = document.getElementById("input2").value;
    num2 = Number(num2);
    console.log(num2);
    oper = document.getElementById("input3").value;
    console.log(oper);
    if (oper == "+")
    {
    result = num + num2;
    }
    else if (oper == "-")
    {
    result = num - num2;
    }
    else if (oper == "*")
    {
    result = num*num2;
    }
    else if (oper == "/")
    {
    result = num / num2;
    }
    console.log(result);
    document.getElementById("result").innerHTML = "O resultado da operação é: " + result;
}