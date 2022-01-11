// en este archivo creamos funciones y las exportamos

const {response} = require ('express');


const usuariosGet = (req, res = response)=> {

    const { q, nombre= 'not name', apikey} = req.query;

    res.json({
        msg: 'get api- controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res = response)=> {

    const { id } = req.params;

    res.json({
        msg: 'put api- controlador',
        id
    });
}


const usuariosPost = (req, res = response)=> {

    const{ nombre , edad } = req.body; //toda la informacion que envien mediante el req del body en postman, la guardo en el body y la reflejo en la res

    res.json({
        msg: 'post api- controlador',
       nombre,
       edad
    });
}

const usuariosDelete = (req, res = response)=> {

    res.json({
        msg: 'delete api- controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
    
}