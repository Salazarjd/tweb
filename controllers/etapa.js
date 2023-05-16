const Etapa = require('../models/etapa')
const { request, response} = require('express')

// crear
const createEtapa= async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapaDB = await Etapa.findOne({nombre})//select * from tipoEquipo where nombre=?
        
        if(etapaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre  // nombre: nombre
        }
        const etapa = new Etapa(data);
        await etapa.save();
        return res.status(201).json(etapa);
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getEtapas = async (req = request, 
    res = response) => {
        try{
            const etapas = await Etapa.find();
            return res.json(etapas)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const getEtapa = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const etapa = await Etapa.findById(id);
            return res.json(etapa)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const updateEtapa = async (req = request, 
    res = response) => {
        try{
            const {id} = req.params;
            const {nombre} = req.body;
            const fechaActualizacion = Date.now();
            const etapa = await Etapa.findByIdAndUpdate(id, {nombre, fechaActualizacion}, { new: true });
            return res.json(etapa)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

module.exports = {
    createEtapa, 
    getEtapas,
    getEtapa,
    updateEtapa
}