//app.js

const express =require('express')
require("dotenv").config

const estudiantesRoutes =require("./routes/estudiantes");

const app = express ()

//middleware

//rutas
app.use ("/api/routes/estudiantes",estudiantesRoutes);

const PORT = 3000 ||  process.env.PORT;

app.listen(PORT,()=> console.log(`servidor escuchando el puerto ${PORT} `));