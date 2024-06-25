import mysql from "mysql2";
import config from "../Config.js";

class CategoriaModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db);
    }

    create(id_categoria, nome_categoria){
        let sql = `INSERT INTO categorias (id_categoria, nome_categoria) VALUES(${id_categoria},"${nome_categoria}");`
            
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject([400,erro])
                }
                resolve([201,"Categoria Adicionada"])
            });
        });
    }

    read(){
        let sql = `SELECT * FROM categorias;`

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if (erro) {
                    reject([400,erro])
                }
                resolve([200, retorno])
            })
        });
        
    }

    update(id_categoria,nome){
        let sql = `UPDATE categorias SET nome ="${nome}" WHERE id_categoria="${id_categoria}"`
    
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) {
                    reject([400,erro])
                }else if(retorno.affectedRows > 0){
                    resolve([200,'Categoria atualizada'])
                }else{
                    resolve([404,"Categoria nao encontrada"])
                }
            })
        });
    }

    delete(id_categoria){
        let sql = `DELETE FROM categorias WHERE id_categoria="${id_categoria}"`
        
        return new Promise((resolve,reject) => {
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro) {
                    reject([400,erro])
                }
                    resolve([200,'Categoria Deletada'])
            })
        });
        
    }
}

export default new CategoriaModel();