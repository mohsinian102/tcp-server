import net from 'net'

const sender = net.createConnection( 
    {host: "127.0.0.1", port: 3099},
()=>{
    sender.write("I am the sender");
})