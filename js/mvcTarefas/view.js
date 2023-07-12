const ul = document.querySelector('.content-list')
export class ViewTarefas{
    mostrarTarefasNaTela(listaDeTarefas){
        ul.innerHTML = `` 
        listaDeTarefas.forEach((tarefa)=>{
            console.log(`tarefa: ${tarefa.titulo} id:${tarefa.id}`);
        })
    }

    _criarHtmlTarefa(tarefa){
        const li = document.createElement('li')
        const p = document.createElement('p')
        li.classList.add('task')
        li.id = tarefa.id

        p.textContent = tarefa.titulo

        ul.appendChild(li)
        li.appendChild(p)
    }
}