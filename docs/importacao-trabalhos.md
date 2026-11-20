# Importação dos trabalhos históricos

A rota dinâmica `src/pages/trabalho/[slug].astro` foi criada nesta branch. Ela gera as URLs originais a partir de arquivos JSON em `src/data/legacy-works*.json` e rejeita slugs inválidos ou repetidos.

## Próxima ação obrigatória
Importar o arquivo de 327 trabalhos públicos, `alfa_trabalhos_327_dados_publicos.json`, como `src/data/legacy-works.json` nesta branch. O arquivo foi conferido fora do GitHub, mas **ainda não foi enviado** para o repositório. Sem ele, nenhuma rota histórica será gerada.

A importação pode ser feita por upload de arquivo na interface do GitHub, selecionando esta branch, ou por ferramenta autorizada que aceite bytes de arquivos locais.

Depois executar `npm ci && npm run build && npm test`, conferir 327 páginas no resultado e verificar links e fotografias. Não mesclar nem publicar até isso ocorrer.

## Fotos
O JSON marca `images_status: pendente_de_conferencia`. As fotos devem ser relacionadas ao trabalho correto a partir do banco de dados (metadados de anexos e imagem destacada) e dos arquivos originais. Não usar fotos genéricas como substitutas.

## Segurança
Não enviar dump SQL nem backups integrais ao GitHub. Só dados públicos selecionados.
