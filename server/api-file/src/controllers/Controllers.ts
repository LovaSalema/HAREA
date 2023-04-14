import { Router } from "express"
import FileRoute from './file/FileRoute'

const router = Router()

router.use(FileRoute)

export const Controllers = router

export default router