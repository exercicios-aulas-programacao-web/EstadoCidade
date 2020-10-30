const estados = [
    {
        uf: "PR", cidades: [
                          {id: 1, nome: "Curitiba"}
                        , {id: 2, nome: "Cascavel"}
                        , {id: 3, nome: "Maringá"}
                           ] 
    }
    ,
    {
        uf: "SC", cidades: [
                          {id: 4, nome: "Florianópolis"}
                        , {id: 5, nome: "Blumenau"}
                        , {id: 6, nome: "Lages"}
                           ] 
    }
    ,
    {
        uf: "RS", cidades: [
                          {id: 7, nome: "Porto Alegre"}
                        , {id: 8, nome: "Gramado"}
                        , {id: 9, nome: "Caxias do Sul"}
                           ] 
    }
];

const alteraEstado = () =>{
    const selectEstado = document.getElementById("estado");
    const estadoSelecionado = selectEstado.value;

    const selectCidade = document.getElementById("cidade");
    selectCidade.innerHTML = "";

    const divSaida = document.getElementById("saida");
    divSaida.innerHTML = "";

    if(estadoSelecionado){
        adicionaOpcaoSelect(selectCidade, "", "Selecione uma cidade");

        const ufFiltro = estados.filter(
            estado => estado.uf === estadoSelecionado)[0];  
        
        ufFiltro.cidades.forEach(
            cidade => adicionaOpcaoSelect(selectCidade, cidade.id, cidade.nome)
        );
    }

    ajustaComboCidades();

};

const ajustaComboCidades = () => {
    const selectCidade = document.getElementById("cidade");

    if (selectCidade.length > 0){
        selectCidade.disabled = false;
    }else{
        adicionaOpcaoSelect(selectCidade, "", "---Selecione um estado---");
        selectCidade.disabled = true;
    }
};

const alteraCidade = () => {
    const divSaida = document.getElementById("saida");
    const selectEstado = document.getElementById("estado");
    const selectCidade = document.getElementById("cidade");

    const estadoSelecionado = selectEstado.value;
    const cidadeSelecionada = selectCidade.options[selectCidade.selectedIndex].text;
    if (selectCidade.value){
        divSaida.innerHTML = `${cidadeSelecionada}/${estadoSelecionado}`;
    }else{
        divSaida.innerHTML = "";
    }
};

const adicionaOpcaoSelect = (select, value, text) => {
    select.insertAdjacentHTML("beforeend"
                 , `<option value="${value}">${text}</option>`);
};

const iniciar = () => {
    document.getElementById("estado").addEventListener("change", alteraEstado);
    document.getElementById("cidade").addEventListener("change", alteraCidade);
    ajustaComboCidades();
};

document.addEventListener("DOMContentLoaded", iniciar);