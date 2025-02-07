import salutationsModel from "../models/salutations.model.js";
import  liste_salut  from "../models/salutations.model.js";
import db from '../config/db.js';
import url from 'url';
const salut = async (req, res) => {
    
     const params = url.parse(req.url, true).query; 
       const langue = params.code;
        let random =0;
        if (langue){
        await salutationsModel.salut_code(langue)
        .then((lan)=> {
            if(!lan[0]){
                res.status(404);
                res.send({message: `code langue introuvable`});
                return;
            }
            let rep = lan;
            let long= rep.length;
            random = Math.floor(Math.random() * long)
            res.send(lan[random]);
         });
        }
        else {
            await salutationsModel.liste_salut()
            .then((pascode)=>{
                let rep = pascode;
                let long= rep.length;
            random = Math.floor(Math.random() * long)
            res.send(pascode[random]);
            });
        }
                
            
        
  
}
const plussalut = async (req, res) => {
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
}
const liste = async (req, res) => {
await salutationsModel.liste_salut()
.then((salutations) => {
    res.send(salutations);
})
}
export{
    salut, plussalut, liste
}