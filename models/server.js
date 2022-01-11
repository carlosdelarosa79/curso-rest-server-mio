const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares son funciones que siempre se va a ejecutarse cuando levantemos nuestro servidor
        this.middlewares();
        // rutas de mi aplicacion
        this.routes();

    }

    middlewares(){

      this.app.use( cors());

      //parseo y lectura del body de postman
      this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios'));
        
          
          
    }

    listen(){
        
        this.app.listen(this.PORT, ()=>{
            console.log('servidor corriendo en el puerto', this.PORT);
        });
        
    }

}






module.exports= Server;