// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();   
import {salut, plussalut,liste } from "../controllers/salutations.controller.js";
import url from 'url';
import querystring from 'querystring'; 
import e from 'express';

// On utilise router au lieu de app
router.get('/api', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});

router.get('/api/salutations/liste', liste);
router.get('/api/salutations', salut);
router.post('/api/salutations', plussalut);

// On exporte le router pour pouvoir l'utiliser dans index.js
export default router;