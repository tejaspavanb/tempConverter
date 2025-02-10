tempinput=document.getElementById("tempinput");
Celcius=document.getElementById("Celcius");
Fah=document.getElementById("Fah");
result=document.getElementById("result");
function convert(){
    if(Celcius.checked==true){
        result.textContent=(tempinput.value-32)*5/9;
    }
    else if(Fah.checked==true){
        result.textContent=(tempinput.value*9/5)+32;
    }
}