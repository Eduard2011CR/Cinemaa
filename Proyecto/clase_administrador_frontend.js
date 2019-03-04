     
            
        class _Pelicula {
   constructor(_id, 
NOMBRE,
    DURACIONMINUTOS,
    GENERO,
    IDIOMAAUDIO,
    IDIOMASUB,
    SINOPSIS,
    CLASIFICACION,
    PRECIO,
    HORAINICIO,
    FECHA,
    MINUTOINICIO,
    ASIENTOS,
    IMAGEN,
    ESTADO
            ) {
       this._id=_id;
this.NOMBRE =NOMBRE;
    this.DURACIONMINUTOS=DURACIONMINUTOS;
    this.GENERO=GENERO;
    this.IDIOMAAUDIO=IDIOMAAUDIO;
    this.IDIOMASUB=IDIOMASUB;
    this.SINOPSIS=SINOPSIS;
    this.CLASIFICACION=CLASIFICACION;
    this.PRECIO=PRECIO;
    this.HORAINICIO=HORAINICIO;
    this.FECHA=FECHA;
    this.MINUTOINICIO=MINUTOINICIO;
    this.ASIENTOS=ASIENTOS;
    this.IMAGEN=IMAGEN;
    this.ESTADO=ESTADO;
   }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevoadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Login() {
  
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/loginadm');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
   
        function botonguardarclick() //esta funcionlle na el formulario de pelicula y lo almacena tomando el html y las variables
            {
                var peliculainstanciada = new _Pelicula(0,
                document.getElementById("Nombre").value,
                 document.getElementById("duracion").value,
                document.getElementById("genero").value,
               document.getElementById("idiomaaudio").value,
                document.getElementById("idiomasub").value,
              document.getElementById("sinopsis").value,
              document.getElementById("clasificacion").value,
              document.getElementById("precio").value,
            document.getElementById("hora").value,
            document.getElementById("fecha").value,
           document.getElementById("minuto").value,
         asientos,
          imagenenbase64,
         document.getElementById("estado").value
                );
                                                        
                peliculainstanciada.Guardar().then(function(response) { //almacena los datos y lanza un alert que indica un guardado exitoso
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error); // indica un fallo en el proceso
             alert("Error " + error);
           
});                                       
                                                        
            }
