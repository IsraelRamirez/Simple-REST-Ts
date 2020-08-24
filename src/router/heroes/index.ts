import {Router, Request, Response} from 'express'
import heroesControllers from '../../controllers/heroesController';


const routerHeroes = Router()


routerHeroes.get('/heroes', heroesControllers.getHeroes)
routerHeroes.get('/heroes/:id', heroesControllers.getHeroe)

export default routerHeroes