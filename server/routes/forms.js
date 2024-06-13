import {Router} from "express"
import { getForms, createForms} from "../controllers/forms.js";

const router = Router();

router.get("/", getForms)
router.post("/", createForms);

export default router;