import { rejects } from "assert";
import { resolve } from "path";
import db from '../config/db.js';
import { error } from "console";
import e from "express";
const liste_salut= () => {
    return new Promise((resolve, reject) => {
        const requete = `SELECT * FROM salutations`;
        
        db.query(requete,(erreur, resultat)=> {
            if(erreur){
                console.log(`Erreur sqlstate ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};
const salut_code= (code) => {
    return new Promise((resolve, reject) => {
        const requete = `SELECT * FROM salutations WHERE code_langue = ?`;
        const params = [code];
        db.query(requete,params,(erreur,resultat) => {
            if(erreur){
                console.log(`erreur sqlstate ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};


export  default{ 
 liste_salut,salut_code
};