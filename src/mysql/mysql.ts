import  mysql from 'mysql';

export default class MySQL {
    private static _instance: MySQL
    connection: mysql.Connection
    connected: boolean = false
    /**
     * Constructor de la clase
     */
    constructor(){
        console.log('Clase inicializada')
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT)
        })

        this.connectDB()

    }
    /**
     * Conectar a la base de datos
     */
    private connectDB(){
        this.connection.connect((err: mysql.MysqlError) =>{
            if(err)
                return console.log(err.message)
            
            this.connected = true
            console.log("Base de datos Conectada")
        })
    }
    /**
     * Obtiene la instancia o crea una nueva
     */
    public static get instance(){
        return this._instance || (this._instance = new this())
    }
    /**
     * Ejecuta un cierto query ingresado
     * @param query Query ingresado usando '?' como variables de escape
     * @param args Argumentos para el query
     * @param callback Callback donde se devuelve el error o el resultado
     */
    static ejecutarQuery(query:string,  args:Object[] = [], callback: Function){
        this.instance.connection.query(query, args,(err, results:Object[], fields)=>{
            if(err){
                console.log(`Error en query: ${err}`)
                return callback(err)
            }
            if(results.length === 0)
                return callback('El registro solicitado no existe')
            
            callback(null, results)
                
        })
    }

}
