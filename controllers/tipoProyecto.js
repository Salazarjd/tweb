const TipoProyecto = require('../models/tipoProyecto')
const { request, response} = require('express')

// crear
const createTipoProyecto= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const tipoProyectoDB = await TipoProyecto.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(tipoProyectoDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const tipoProyecto = new TipoProyecto(data)
        await tipoProyecto.save()
        return res.status(201).json(tipoProyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getTipoProyectos = async (req = request, 
    res = response) => {
        try{
            // const { tipos } = req.query
            // const estadosDB = await Estado.find({estado})//select * from estados where estado=?
            const tipos = await TipoProyecto.find();//select * from estados where estado=?
            return res.json(tipos)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getTipoProyecto = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const tipo = await TipoProyecto.findById(id);
            return res.json(tipo)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const updateTipoProyectos = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const {nombre} = req.body;
            const fechaActualizacion = Date.now();
            const tipo = await TipoProyecto.findByIdAndUpdate(id, {nombre, fechaActualizacion}, { new: true });
            return res.json(tipo)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {
    createTipoProyecto, 
    getTipoProyectos,
    getTipoProyecto,
    updateTipoProyectos
}