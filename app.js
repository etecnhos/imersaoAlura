function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nenhum resultado foi encontrado. Busque por um Jogador</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "" ;

for (let dado of dados){
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))



    {


        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao} 
                <a href=${dado.link} target="_blank"> Mais informacoes</a>
        </div>` ;

    }
    
}
 if (!resultados ) {
        resultados = "<p>Nada foi encntrado</p>"
 }
section.innerHTML = resultados;
}




