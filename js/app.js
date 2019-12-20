//Cargar datos en el boton "txtBtn"
document.getElementById('txtBtn').addEventListener('click', cargarTxt)

function cargarTxt() {
    fetch('datos.txt')
    .then(function(data) {      //Como quieres los datos
        return dataa.text();
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