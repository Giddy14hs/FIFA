import {Router} from "express"
import { createContact, getContacts} from "../controllers/contact.js";

const router = Router();

router.get("/", getContacts);
router.post("/", createContact);

export default router;