exports.obtenerEstudiantes =(req,res) =>{
    console.log("función de obtener estudiante")
    res.status(200).json({message:"lista de estudiantes"})
}

exports.crearEstudiante =(req,res)=>{
    console.log("crear estudiante",req.body)
    res.status(201).json({message:"Estudiante creado"})

}
exports.obtenerEstudiantePorID =(req,res)=>{
    const idEstudiante =req.params.idEstudiante
    console.log(`obtener el estudiante con ID:  ${idEstudiante}`)
    res.status(200)
}           