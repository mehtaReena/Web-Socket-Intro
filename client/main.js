let messageEl = document.getElementById("message");
let inputEl = document.getElementById("msg-input");
let buttonEl = document.getElementById("send");
let chatContainer = document.getElementById("list");

const socket = io('ws://localhost:3030');
socket.on('connect',()=>{
    console.log("connect established....")

})
buttonEl.addEventListener('click',(e)=>{

    socket.send( inputEl.value);
    inputEl.value=''
})

socket.on('message', data=>{
    console.log(data);
    let listEl = document.createElement('li');
    listEl.innerText= data;
    chatContainer.appendChild(listEl);
})





/* let socket= new websocket('ws://localhost:3030');

socket.onopen=()=>{
    console.log("connected Server");
    socket.send("hello....")

}
socket.onmessage = (msg)=>{
    console.log("from Server : " + msg.data );

}

socket.onclose=()=>{
    console.log("from Server :  close " )

}

buttonEl.addEventListener('click',(e)=>{
    console.log(inputEl.value)
}) */