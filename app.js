function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    // onde os resultados serão exibidos.
    let section = document.getElementById ("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do mouse ou característica dele</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados.
    // Para cada dado, cria um elemento HTML com as informações do dado
    // e adiciona-o à string 'resultados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Onde Comprar</a>
            </div>
        `;
        }
        
    }

    if(!resultados) {
        resultados = "<p>Nada foi encontrdo</p>"
    }

    // Atribui o conteúdo da string 'resultados' ao elemento 'section',
    // atualizando a seção com os resultados da pesquisa.
    section.innerHTML = resultados;
}