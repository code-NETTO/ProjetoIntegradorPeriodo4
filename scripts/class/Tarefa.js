class Tarefa{
    nome = "";
    assunto = "";
    categoria = "";
    prioridade = "";
    tempoInicio = "";
    tempoFim = "";
    notaAdicional = "";

    constructor(nome, assunto, categoria, tempoInicio, tempoFim, notaAdicional){
        this.nome = nome;
        this.assunto = assunto;
        this.categoria = categoria;
        this.tempoInicio = tempoInicio;
        this.tempoFim = tempoFim;
        this.notaAdicional = notaAdicional;
    }
}

export default Tarefa;