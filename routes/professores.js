const express = require('express')

const router = express.Router()

const professores = []

router.get('/', (req,res,next)=>{
    res.render('professores/listaProfessores', {
        professores: professores,
    })
})

router.post('/', (req,res,next)=>{
    professores.push({
        nome: req.body.nome
    })

    res.render('professores/listaProfessores', {
        professores: professores,
    })
})

module.exports = router