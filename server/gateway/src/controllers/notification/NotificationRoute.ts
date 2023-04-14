import { Router } from 'express'
import { expoTokenRegister } from './NotificationController'

const router = Router()

router.post('/notification/expo', expoTokenRegister)

export default router
