import { rejects } from "assert";
import { resolve } from "path";
import db from '../config/db.js';
const liste_salut= () => {
    return new Promise((resolve, reject) => {
        const requete = 'SELECT * from salutations';
        
        db.query(requete,(erreur, resultat)=> {
            if(erreur){
                console.log(`Erreur sqlstate ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};
/*function Ajoutersalut(code_langue,langue,message){
    salutations.push({code_langue:code_langue,langue:langue,message:message});
}*/
export  default{ 
 liste_salut
};