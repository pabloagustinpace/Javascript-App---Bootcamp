// Declaracion de la clase y el metodo solicitado por enunciado
class Clientes{
    constructor(nombre, apellido, dni, balance){
        this._name = nombre;
        this._surname = apellido;
        this._dni = dni;
        this._balance = balance;
    }
    compName(){
        return ("Mi nombre completo es: " + this._surname + "," + this._name);
    }
}

//Event listener
document.getElementById("trigger").addEventListener("click",eventHandler);

//Event handler
function eventHandler(event){
    
    event.preventDefault();

    var var1 = document.querySelector("#nombre").value;
    var var2 = document.querySelector("#apellido").value;
    var var3 = document.querySelector("#dni").value;
    var var4 = document.querySelector("#balance").value;
    
    var c = new Clientes(var1,var2,var3,var4);

    arrClie.push(c);

    var cStr = JSON.stringify(arrClie);
    
    localStorage.setItem("clientes", cStr);

    var son = document.createElement("li");
    son.innerHTML = c._surname + " , " + c._name;
    document.getElementById('listClients').appendChild(son);
    
    document.getElementById('data').reset();
}

//Codigo para mantener siempre los datos en la pagina a pesar de ser recargada
//Esto lo adicional que nos pidió Nahuel en el mail
var arrStr = localStorage.getItem('clientes');

if(arrStr != null){
var arrClie = JSON.parse(arrStr);
for(var i=0; i < arrClie.length; i++){
    var son = document.createElement("li");
    son.innerHTML = arrClie[i]._surname + " , " + arrClie[i]._name;
    document.getElementById('listClients').appendChild(son);
    }
}else{
    var arrClie = [];
    }
