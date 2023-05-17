const express = require('express')
const app = express()

const port = process.env.PORT || 8082;


app.get('/alumnos',(req,res)=>{
    //console.log(req.params.carrera)
    res.json({alumnos:"Acceso a la peticion Get de alumnos."})
    //res.json({alumnos:"Alumnos de la carrera de "+req.params.carrera})
})

app.get('/maestros',(req,res)=>{
     //console.log(req.params.control)
    res.json({maestro:"Acceso a la peticion Get de maestros."})
})

app.get('/administrativos',(req,res)=>{
    //console.log(req.body.nombre)
   res.json({admin:"Informacion personal administrativos , por peticion Get"})
})


app.listen(port,()=>{
    console.log("Servidor Express corriendo y escuchando en el puerto " + port)
})