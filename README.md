# Dashboard de Ações da WEG

Este projeto é uma aplicação web simples que exibe um dashboard com os valores diários das ações da WEG (código WEGE3.SA) na Bovespa. A interface mostra os dados das ações em uma tabela e um gráfico de linha para visualização rápida das tendências.

## Funcionalidades
- Exibição de dados de abertura, alta, baixa e fechamento das ações em uma lista.
- Gráfico de linha interativo para visualizar o histórico de preços de fechamento.
- Design responsivo com estilo personalizado.

## Tecnologias Utilizadas
- HTML5, CSS3, JavaScript
- Chart.js (para visualização de dados)
- Alpha Vantage API (para busca de dados de ações)

## Como Executar o Projeto
1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/andersonmoegel/a-esweg.git
   cd a-esweg
   ```

2. **Obter uma chave da API Alpha Vantage:**
   - Acesse [Alpha Vantage](https://www.alphavantage.co/support/#api-key) e cadastre-se para obter uma chave de API gratuita.

3. **Atualizar o arquivo `script.js`:**
   - Substitua o valor da constante `apiKey` pela sua chave de API.

4. **Abrir o arquivo `index.html` em um navegador:**
   - O dashboard será carregado e os dados serão exibidos.

## Estrutura de Arquivos
```
/
|-- index.html       # Interface principal do dashboard
|-- styles.css       # Estilização do dashboard
|-- script.js        # Lógica de busca e exibição de dados
```

## Configuração do Projeto
- `index.html` define a estrutura da página.
- `styles.css` aplica o tema escuro e estiliza os componentes.
- `script.js` faz a chamada à API Alpha Vantage e renderiza os dados.

## Personalização
- **Trocar o símbolo de ação:**
  No arquivo `script.js`, altere o valor da constante `symbol` para a ação desejada.
  ```javascript
  const symbol = 'WEGE3.SA'; // Altere para outro símbolo, como PETR4.SA
  ```

- **Estilização adicional:**
  Edite `styles.css` para personalizar as cores e o layout do dashboard.

## Dependências
- [Chart.js](https://www.chartjs.org/) para visualização de dados.

## Possíveis Melhorias
- Adição de mais métricas, como média móvel e volume.
- Suporte para seleção de diferentes períodos de tempo.

## Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

