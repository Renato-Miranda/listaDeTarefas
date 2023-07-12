export class ModelTarefa{
    constructor(){
        this.titulo = ''
        this.status = false
        this.id = ''
    }

    construirTarefa(tituloTarefa){
        this.setTitulo(tituloTarefa)
        this.setId()
        return this
    }

    setTitulo(titulo){
        this.titulo = titulo
    }
    setStatus(){
        this.status = !this.status
    }
    setId(){
        this.id = this._geraID()
    }
    _geraID(){
        const numeroAleatorio = Math.floor(Math.random() * 1000)
        return numeroAleatorio
    }
}