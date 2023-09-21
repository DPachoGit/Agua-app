import { Router } from "express";
import beachController from "../controllers/beachController.js";

const router = Router();

router.post('/addbeach', (req, res) => {
    beachController.addBeach(req, res);
});

router.post('/deletebeach', (req, res) => {
    beachController.deleteBeach(req, res);
});

router.get('/getAllBeaches', (req, res) => {
    beachController.getAllBeaches(req, res);
});

export default router;