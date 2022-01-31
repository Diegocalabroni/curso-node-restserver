const { request } = require('express');
const { response } = require('express')

const getUsuarios = (req = request, res = response) =>  {

    const { q, nombre = "no name", apikey, apellido } = req.query; 
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        apellido
    });
};

const putUsuarios = (req, res) =>  {

    const id = req.params.id; 

    res.status(500).json({
        msg: 'put API - controlador',
        id
    });
};

const postUsuarios = (req, res) =>  {

    const {nombre, apellido} = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        apellido
    });
};

const deleteUsuarios = (req, res) =>  {
    res.json({
        msg: 'delete API - controlador'
    });
};

const patchUsuarios = (req, res) =>  {
    res.json({
        msg: 'patch API - controlador'
    });
};








module.exports = {
    putUsuarios,
    getUsuarios,
    postUsuarios,
    deleteUsuarios,
    patchUsuarios

}