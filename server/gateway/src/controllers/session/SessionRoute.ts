import { Router } from 'express'
import { token } from './SessionController'

const router = Router()

router.get('/session/token', token)

export default router
