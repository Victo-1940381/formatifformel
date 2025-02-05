import  liste_salut  from "../models/salutations.model.js";
const salut = async (req, res) => {
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
 liste_salut[0];
}
export{
    salut, plussalut, liste
}