import {Request, Response} from 'express'
import MySQL from '../mysql/mysql';
import errorResponse from '../errors/errorResponse';

const getHeroes= (req: Request, res: Response) =>{
    MySQL.ejecutarQuery('SELECT * FROM heroes', [], (error: string, results: Object[])=>{
        if(error)
            return res.status(500).json(errorResponse.error('Error no controlado', error))
        
        if(results.length === 0)
            return res.status(400).json(errorResponse.badRequest())
        
        res.json({
            ok: true,
            results: results 
        })
    })
}

const getHeroe= (req: Request, res: Response) =>{
    //const id = Number(req.params.id)
    const id = req.params.id
    if(!id)
        return res.status(400).json(errorResponse.badRequest())
    
    MySQL.ejecutarQuery('SELECT * FROM heroes WHERE id = ?', [id], (error: string, results: Object[])=>{
        if(error)
            return res.status(500).json(errorResponse.error('Error no controlado', error))
        
        if(results.length === 0)
            return res.status(400).json(errorResponse.badRequest())
        
        res.json({
            ok: true,
            results: results 
        })
    })
}

export default { getHeroe, getHeroes }