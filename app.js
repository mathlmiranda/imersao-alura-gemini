function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    // onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Itera sobre cada dado na lista de dados.
    // Para cada dado, cria um elemento HTML com as informações do dado
    // e adiciona-o à string 'resultados'.
    for (let dado of dados) {
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

    // Atribui o conteúdo da string 'resultados' ao elemento 'section',
    // atualizando a seção com os resultados da pesquisa.
    section.innerHTML = resultados;
}