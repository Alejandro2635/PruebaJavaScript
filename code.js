
var users = [];

class user{
    constructor(name, surname, age){
      this.name = name;
      this.surname = surname;
      this.age = age;
    }
}

function saveData(){
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var age = document.getElementById("age").value;
    var newUser = new user(name, surname, age);
    users.push(newUser);
}

function printData(){
    document.write("<table border='1'><tr><th>Nombre</th><th>Apellido</th><th>Edad</th></tr>");
    for(var i = 0; i < users.length; i++){
        document.write("<tr><td>"+users[i].name+"</td><td>"+users[i].surname+"</td><td>"+users[i].age+"</td></tr>");
    }
    document.write("</table>")
}