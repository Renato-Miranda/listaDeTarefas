import { ModelTarefa } from "./modelTarefa.js";

export class ControllerTarefas{
    constructor(){
        this.listaDeTarefas = [];
    }
    criarTarefa(tituloTarefa){
        const model = new ModelTarefa()
        const tarefa = model.construirTarefa(tituloTarefa)
        this.listaDeTarefas.push(tarefa);
        const view = new ViewTarefas()
        view.mostrarTarefaNaTela(this.listaDeTarefas)
    }
}