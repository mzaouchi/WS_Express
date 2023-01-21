const express = require('express')

const app = express()

const port = 5000

const middleware=(req,res,next)=>{
    console.log('Youssef')
    next()
}

app.use(middleware)

// app.get('/test',middleware,(req,res)=>{
//     res.send('Notre premier test')
// })

// app.get('/balise',(sana,riadh)=>{
//     riadh.send('<h1>Sana</h1>')
// })

// app.get('/home',(req,res)=>{
//     res.sendFile(__dirname+'/public/Home.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/public/style.css')
// })

// app.get('/bousbi',(req,res)=>{
//     res.sendFile(__dirname+'/public/')
// })

app.use(express.static('public'))


app.listen(port, console.log('Server is running'))