const Cliente = require('../models/cliente')
const { request, response} = require('express')

// crear
const createCliente= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : '';
        const email = req.body.email;
        const clienteDB = await Cliente.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(clienteDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            email  // nombre: nombre
        }
        const cliente = new Cliente(data)
        await cliente.save()
        return res.status(201).json(cliente)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getClientes = async (req = request, 
    res = response) => {
        try{
            const clientes = await Cliente.find();//select * from estados where estado=?
            return res.json(clientes)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getCliente = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const cliente = await Cliente.findById(id);
            return res.json(cliente)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const updateCliente = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const {nombre} = req.body;
            const fechaActualizacion = Date.now();
            const cliente = await Cliente.findByIdAndUpdate(id, {nombre, fechaActualizacion}, { new: true });
            return res.json(cliente)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {
    createCliente, 
    getClientes,
    getCliente,
    updateCliente
}