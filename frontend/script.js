function conexionConServicio(consulta){
    //Averigura cómo funciona. Devolverá el resultado en un string.
    return "El resultado de tu consulta '"+consulta+"' es ........";
}

function enviarConsulta(){
    const formulario = document.querySelector('.formulario');
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        // console.log('Hola');
        const consulta = document.getElementById("consulta");
        console.log(consulta);
        const respuesta = document.getElementById("resultado");
        const url = '127.0.0.1:5000/ipaddress/';
        const http = new XMLHttpRequest();

        http.open("POST", url);
        http.setRequestHeader("Content-Type","application/json");

        http.onreadystatechange = function(){
            if(this.readyState == 4){
                console.log(http.status);
                console.log(http.responseText);
               // var resultado = JSON.parse(this.responseText)
               // console.log(resultado.name)
            }
        }
        var data = `{
            "IP": "10.0.2.4"
          }`;
        http.send(data)
       //  respuesta.textContent=conexionConServicio(consulta.value);
    })
}
