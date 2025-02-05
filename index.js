// Importer le module express
import express from 'express';
import salutationsRouter from './src/routes/salutations.route.js';
// Créer une application express
const app = express();
const PORT = process.env.PORT;
app.use('/', salutationsRouter);
app.use(express.json());
app.get('/', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});
/*app.post('/api/salutations', (res,req) =>{
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
});*/
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});