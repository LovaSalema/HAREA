import { Router } from "express"
import { Controllers as FileControllers } from '@mzara/api-file'
import SessionRoute from './session/SessionRoute'
import NotificationRoute from './notification/NotificationRoute'

const router = Router()

// router.use(UserRouter)
router.use(SessionRoute)
router.use(NotificationRoute)
router.use(FileControllers)

export default router