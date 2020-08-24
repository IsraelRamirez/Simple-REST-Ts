require('./config/config')
import Server from './server/server';
import router from './router/router'

const server = Server.init(3000)

server.routes(router)

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})