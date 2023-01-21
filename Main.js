const express = require('express')

const app = express()

const port = 5000


var users = [
    {name : "Sana", old:"31",id:1},
    {name : "Riadh", old:"20",id:2},
    {name : "Youssef", old:"20",id:3},
    {name : "Amine", old:"26",id:4},
]

app.use(express.json())

app.get('/readUsers',(req,res)=>{
    res.send({Msg : 'List of users',users})
})


app.post('/addUser',(req,res)=>{
    users = [...users,req.body]
    res.send({Msg:'User Added',users})
})


app.delete('/deleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(el=> el.id != id)
    res.send({Msg:'User Deleted',users})
})

app.put('/updateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(el=> el.id == id ? {...el,...req.body} : el)
    res.send({Msg:'User Updated',users})
})



app.listen(port,console.log('Server is running'))