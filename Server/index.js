const http = require('http').createServer();
const socket = require ("socket.io")
const io = socket(http,{
    cors:{origin:'*'}
})

io.on('connection',(socket)=>{
    console.log( "client Connected " , socket.id)
    socket.on('message',(data)=>{
        console.log(data)
        io.emit('message',data)
    })
})

const PORT =3030;
http.listen(PORT,()=>console.log(""))











/* const websocket = require ('ws');
const  PORT =3030;
const server = new websocket.Server({
    port:PORT
})

server.on('connection', (socket)=>{
    console.log("Someone ping !")
    socket.on('message' ,(data=>{
        console.log('meaasge from client ',data)
        socket.send(" thanks for message")
    }))
}) */