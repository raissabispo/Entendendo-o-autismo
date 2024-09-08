function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos e o valor do campo de pesquisa
  let sectionResultados = document.getElementById("resultados-pesquisa");
  let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
      sectionResultados.innerHTML = `
          <div class="mensagem-erro">
              <p>Nada foi encontrado. Precisa digitar o nível do autismo.</p>
          </div>
      `;
      return;
  }

  // Inicializa uma string vazia para construir o HTML dos resultados
  let resultados = "";

  // Itera sobre cada nível e filtra os resultados
  for (let nivel of niveis) {
      let titulo = nivel.titulo.toLowerCase();
      let descricao = nivel.descricao.toLowerCase();
      let caracteristicas = nivel.caracteristicas.toLowerCase();

      // Verifica se o título, descrição, características ou tags contêm o valor da pesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || caracteristicas.includes(campoPesquisa)) {
          // Cria o HTML para cada item de resultado que corresponde à pesquisa
          resultados += `
              <div class="item-resultado">
                  <h2>${nivel.titulo}</h2>
                  <p class="descricao-meta">${nivel.caracteristicas}</p>
                  <p><strong>Idade de Diagnóstico:</strong> ${nivel.idadeDiagnostico}</p>
                  <p><strong>Comorbidades:</strong> ${nivel.comorbidades}</p>
                  <p><strong>Tratamentos:</strong> ${nivel.tratamentos}</p>
                  <p><strong>Prognóstico:</strong> ${nivel.prognostico}</p>
                  <a href="${nivel.link}" target="_blank"><strong>Mais informações</strong></a>
              </div>
          `;
      }
  } 

  // Se nenhum resultado for encontrado, exibe a mensagem
  if (!resultados) {
      resultados = `
          <div class="mensagem-erro">
              <p>Nada foi encontrado.</p>
          </div>
      `;
  }

  // Atribui o HTML gerado para a seção de resultados
  sectionResultados.innerHTML = resultados;
}
