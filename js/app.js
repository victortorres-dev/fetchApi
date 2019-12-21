/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FetchAPI: Cargando datos con formato txt

//Cargar datos en el boton "txtBtn"
document.getElementById('txtBtn').addEventListener('click', cargarTxt)

function cargarTxt() {
    fetch('datos.txt')
    .then(function(data) {      //Como quieres los datos
        return data.text();
    })
    .then(function(printtext) { //Ahora manipulas los datos
        console.log(printtext);
        document.getElementById('resultado').innerHTML = printtext;
    })
    .catch (function(err) {
        //Manipulando el error llamando desde este punto al código que va a hacer uso del error:
        let error = err;
        useError(error);

        //Manipulando el error desde dentro de fetch
        //document.getElementById('error').innerHTML = `Definición del error: ${err.message}`;
    })
}

//Manipulando el error: Codifo/funcion que hace uso del valor(error)
function useError(e) {
    console.log(e)
    document.getElementById('error').innerHTML = `Definición del error: ${e.message}`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FetchAPI: Cargando datos con formato JSON

//Cargar datos en el boton "txtBtn"
document.getElementById('jsonBtn').addEventListener('click', cargarJson);

function cargarJson() {
    fetch('empleados.json')
    .then(function(datajson){
        return datajson.json();
    })
    .then(function(jsondata) {
        let html = '';
        jsondata.forEach(function(empleado) {
            html += `<li>${empleado.nombre}, ${empleado.puesto}</li>`            
        });   
        document.getElementById('resultado').innerHTML = html;     
    })
    .catch(function(err) {
        document.getElementById('error').innerHTML = `Definición del error: ${err.message}`;
    })
}

