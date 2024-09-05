// Função para pesquisar e exibir os resultados na página
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo seu ID
    const sectionResultados = document.getElementById("resultados-pesquisa");
  
    // Verifica se a seção foi encontrada
    if (sectionResultados) {
      // Inicializa uma string vazia para construir o HTML dos resultados
      let htmlResultados = "";
  
      // Itera sobre cada nível (assumindo que 'niveis' é um array de objetos)
      niveis.forEach(nivel => {
        // Cria o HTML para cada item de resultado, formatando os dados do nível
        htmlResultados += `
          <div class="item-resultado">
            <h2>${nivel.titulo}</h2>
            <p class="descricao-meta">${nivel.caracteristicas}</p>
            <a href="${nivel.link}" target="_blank">Mais informações</a>
          </div>
        `;
      });
  
      // Atribui o HTML gerado para a seção de resultados
      sectionResultados.innerHTML = htmlResultados;
    } else {
      console.error("Seção de resultados não encontrada.");
    }
  }