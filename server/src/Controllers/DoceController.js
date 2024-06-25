import DoceModel from "../../src/Models/DoceModel.js";

class DoceController{
    construtor(){

    }

    create(req,res){
        const nome = req.body.nome;

        DoceModel.create(nome).then(
            resposta => {
                console.debug("Inserindo um Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: Inserindo um Doce");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }
    
    read(req,res){
        DoceModel.read().then(
            resposta => {
                console.debug("Lendo Doce");
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("ERRO: lendo Doce");
                console.debug(resposta)
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    update(req,res){
        const id_doce = req.params.id_doce;
        const nome = req.body.nome;

        DoceModel.update(id_doce,nome).then(
            resposta => {
                console.debug('Atualizando Doces')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro atualizando Doces')
                res.status(resposta[0]).json(resposta[1])
            }
        );
    }

    delete(req,res){
        const id_doce = req.params.id_doce;

        DoceModel.delete(id_doce).then(
            resposta => {
                console.debug('Deletando Doce')
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug('Erro deletando Doce')
                res.status(resposta[0]).json(resposta[1])
            }
        );
        
    }
}

export default new DoceController();