import express, {Router} from 'express'
import path from 'path';

export default class Server{
    public app: express.Application
    public port: number

    constructor(port: number){
        this.port = port
        this.app = express()
    }
    /**
     * Inicia la clase con el puerto ingresado
     * @param port Puerto en el que se creará el servidor
     */
    static init (port: number){
        return new Server(port)
    }
    /**
     * Indica la carpeta publica y estatica
     */
    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public')
        this.app.use(express.static(publicPath))
    }
    /**
     * Inicia el servidor escuchando en el puerto ingresado
     * @param callback Callback para verificar el inicio del servidor
     */
    start(callback: Function){
        this.app.listen( this.port, callback())
        this.publicFolder()
    }
    
    routes(router: Router){
        this.app.use(router)
    }
}