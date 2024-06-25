import mysql from "mysql2";
import config from "../Config.js";

class DoceModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(nome_doce){
        let sql = `INSERT INTO doces (nome_doce) VALUES("${nome_doce}");`
            
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201,"Doce Adicionado"])
            });
        });
    }

    read(){
        let sql = `SELECT * FROM doces;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if (erro) {
                    reject([400,erro])
                }
                resolve([200, retorno])
            })
        });
        
    }

    update(id_doce,nome){
        let sql = `UPDATE doces SET nome_doce ="${nome_doce}" WHERE id_doce="${id_doce}"`
    
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) {
                    reject([400,erro])
                }else if(retorno.affectedRows > 0){
                    resolve([200,'Doces atualizado'])
                }else{
                    resolve([404,"Doce nao encontrado"])
                }
            })
        });
    }

    delete(id_doce){
        let sql = `DELETE FROM doces WHERE id_doce="${id_doce}"`
        
        return new Promise((resolve,reject) => {
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) {
                    reject([400,erro])
                }
                    resolve([200,'Doce Deletado'])
            })
        });
        
    }
}

export default new DoceModel();