import {Router, Request, Response} from 'express'
import routerHeroes from './heroes/index'

const router = Router()

router.use(routerHeroes)

export default router