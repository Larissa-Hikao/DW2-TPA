const express = require('express')
const bp = require('body-parser')

const app = express()

const ProfessoresRouter = require('./routes/professores')

app.set('view engine','ejs')
app.set('views','views')

app.use(bp.urlencoded({extended:false}))
app.use('/professores',ProfessoresRouter)

app.get('/', (req, res, next)=>{
    res.render('index', {
        nome: false
    })
});

app.post('/', (req, res, next)=>{
    res.render('index', {
        nome: req.body.nome
    })
});

app.listen(3000)
