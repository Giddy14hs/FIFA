import {Router} from "express"
import { getForms, createForms} from "../controllers/forms.js";
import authentication from "../middlewares/authentication.js";

const router = Router();

router.get("/", authentication, getForms)
router.post("/", authentication, createForms);

export default router;