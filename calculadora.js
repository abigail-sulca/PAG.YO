function mayor(){
    var numero1 = document.getElementById('num1').value;
    var numero2 = document.getElementById('num2').value;

    if(numero1>numero2){
        alert("El número "+numero1+" es mayor");
    }else{
        alert("El número "+numero2+" es mayor");
    }
}