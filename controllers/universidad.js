const Universidad = require('../models/universidad')
const { request, response} = require('express')

// crear
const createUniversidad= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : '';
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const universidadDB = await Universidad.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(universidadDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            direccion,
            telefono
        }
        const universidad = new Universidad(data)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getUniversidades = async (req = request, 
    res = response) => {
        try{
            const universidades = await Universidad.find();//select * from estados where estado=?
            return res.json(universidades)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getUniversidad = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const universidad = await Universidad.findById(id);
            return res.json(universidad)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const updateUniversidad = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const {nombre, direccion, telefono} = req.body;
            const fechaActualizacion = Date.now();
            const universidad = await Universidad.findByIdAndUpdate(id, {nombre, direccion, telefono, fechaActualizacion}, { new: true });
            return res.json(universidad)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {
    createUniversidad, 
    getUniversidades,
    getUniversidad,
    updateUniversidad
}