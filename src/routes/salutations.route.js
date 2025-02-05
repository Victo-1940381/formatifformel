// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();   
import url from 'url';
import querystring from 'querystring'; 
import { salutations} from '../models/salutations.model.js';
import e from 'express';

// On utilise router au lieu de app
router.get('/api', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});

router.get('/api/salutations/liste', (req, res) => {
        res.send(salutations);
});
router.get('/api/salutations', (req, res) => {
   const params = url.parse(req.url, true).query; 
   const langue = params.code;
    let random =0;
if(langue){
    if(salutations.some(e => e.code_langue == langue)){
        if(langue == "fr"){
            random = Math.floor(Math.random() * 4);
            res.send(salutations[random]);
        }
        else if(langue == "en"){
            random = Math.floor((Math.random() * 4)+4);
            res.send(salutations[random]);
        }
        else if(langue == "es"){
            random = Math.floor((Math.random() * 4)+8);
            res.send(salutations[random]);
        }
        else if(langue == "de"){
            random = Math.floor((Math.random() * 4)+12);
            res.send(salutations[random]);
        }
        
    }
    else{
         //   const erreur = {message: ""};
           // const json = JSON.stringify(erreur);
            res.send({message: "Erreur, le code de langue [" + langue + "] n'existe pas"});
            res.statusCode =404;
        }
    
}
else{
   
        random = Math.floor((Math.random() * 16));
        res.send(salutations[random]);
    }
});
router.post('/api/salutations', (res,req) =>{
    const code = req.body.code_langue;
    const langue= req.body.langue;
    const message = req.body.message;
    if(!req.body.code_langue){
        console.log("le paramètre du code de la langue est manquant");
    }
    else{
        if(!req.body.langue){
            console.log("le paramètre de la langue est manquant")

        }
        else{
            if(!req.body.message){
                console.log("le paramètre du message est manquant");

            }
            else{
                Ajoutersalut(code,langue,message);
            }
        }
    }
});

// On exporte le router pour pouvoir l'utiliser dans index.js
export default router;