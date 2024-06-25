import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    construtor(){

    }

    create(req,res){
        const nome = req.body.nome;

        CategoriaModel.create(nome).then(
            resposta => {
                console.debug("Inserindo um Categoria");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo um Categoria");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    
    read(req,res){
        CategoriaModel.read().then(
            resposta => {
                console.debug("Lendo Categorias");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: lendo Categoria");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req,res){
        const id_categoria = req.params.id_categoria;
        const nome = req.body.nome;

        CategoriaModel.update(id_categoria,nome).then(
            resposta => {
                console.debug('Atualizando Categorias')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro atualizando Categorias')
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req,res){
        const id_categoria = req.params.id_categoria;

        CategoriaModel.delete(id_categoria).then(
            resposta => {
                console.debug('Deletando Categoria')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro deletando Categoria')
                res.status(resposta[0]).json(resposta[1])
            }
        );
        
    }
}

export default new CategoriaController();