import { Router } from 'express'
import { upload, download, bind_template } from './FileController'
import multer from 'multer'

const storage = multer.memoryStorage()
const upload_memory = multer({ storage: storage })

const router = Router()

router.post('/file/template/bind', bind_template)
router.post('/file/upload', upload_memory.single("file"), upload)
router.get('/file/download/:id', download)

export default router