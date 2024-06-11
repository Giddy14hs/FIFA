import {Router} from "express"
import { createForms} from "../controllers/forms.js";

const router = Router();

router.post("/", createForms);

export default router;