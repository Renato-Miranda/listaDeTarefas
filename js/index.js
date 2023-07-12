import { ControllerTarefas } from "./mvcTarefas/controller.js"
const btnCriarTarefa = document.querySelector('#criarTarefa') 
const tituloTarefa = document.querySelector('#tituloTarefa')
const controller = new ControllerTarefas()

function criarTarefa(){

    const titulo = tituloTarefa.value
    if(titulo.length < 2){
        alert('Titulo inválido tente novamente')
    }else{
        alert(`A tarefa "${titulo}" foi add com sucesso!`)
    }
}



btnCriarTarefa.addEventListener('click', criarTarefa)