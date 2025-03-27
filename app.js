//imprimir un mensaje de bienvenida en la consola
console.log("Sistema EBAC de registro de alumnos");

//se define un areglo de registro con datos de alumnos en EBAC
var registro = [

    //se muetrs lista de alumnos por medio de objetos
    { nombre: "Astrid Franco", edad: "23", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End de cero a pro", email: "perham2@hotmail.com"},
    { nombre: "Jordan Segovia", edad: "34", zonaResidencia: "Valparaiso", nombrePrograma: "Desarrollador back end", email: "jordan.segovia@gmail.com"},
    { nombre: "Blanca Franco", edad: "50", zonaResidencia: "Puebla", nombrePrograma: "Diseño gráfico", email: "blanca.franco@gmail.com"},
    { nombre: "Camila Guzman", edad: "38", zonaResidencia: "Michoacán", nombrePrograma: "Interiorismo", email: "camille@gmail.com"},
    { nombre: "Carlos Andrade", edad: "42", zonaResidencia: "Monterrey", nombrePrograma: "Photoshop de cero a pro", email: "Andrade.00@gmail.com"},
   ];
   
   //función que permite agregar un nuevo alumno al areglo de registro
function agregarAlumno(){

    //Se le solicita informaciób al usuario para el registro de un nuevo alumno
var nombre = prompt("Ingresa el nombre del nuevo alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno");
var edad = prompt("Indica la edad del alumno");
var nombrePrograma = prompt("Ingresa el programa a estudiar del alumno");
var email = prompt("ingresa el correo electrónico del alumno"); 


//Crea un objeto que se llama nuevoAlumno con los datos ingresados
var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};


//Agrega la infoirmación nuevoAlumno al arreglo
registro.push(nuevoAlumno);

}

//función para consultar los registros de los alumnos
function consultarRegistros(){

    //este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

        //esta linda de console.log permite ver al usuario el registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia:  " + registro[i].zonaResidencia);
        console.log("Nombre del programa:  " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
    };    

}

//Esta función permite generar un nuevo arreglo que no contenga la información del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el metódo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}

//Ciclo do while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
do{

// Variable que toma la elección del usuario para ejecutar la función indicada
var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de los nuevos alumnos \n3. Eliminar registro \n4. Salir ");

//Se declara este if para dar a elegir al usuario la opción que quiera
if (opcion === "1") {
    agregarAlumno()
}else if (opcion === "2"){
    consultarRegistros();
}else if (opcion === "3"){
    eliminarAlumno();
}else if ("Salida"){
alert (" Salir del sistema");
}else{
    alert("Opción inválida, elige otra");
}

//Esta variable nos permite eligir si hacemos otra acción o cerramos el ciclo
var continuar = prompt("¿Deseas hacer otra acción? (S/N)");

//while que se encarga de cerrar el ciclo
}while(continuar === "s");


console.log("prueba");