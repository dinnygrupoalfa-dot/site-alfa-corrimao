# Revisão institucional — Home — 18/11/2026

## Objetivo
Redesenhar a página inicial da Alfa Corrimão com posicionamento de fabricante e instalador de corrimãos, guarda-corpos e vidro para construtoras e condomínios, sem se apresentar como empresa construtora de edifícios.

## Escopo desta etapa
- Reconstrução apenas de src/pages/index.astro e estilo isolado src/styles/home.css.
- Melhoria dos rótulos do menu em src/data/site.ts, sem mudar as rotas existentes.
- src/components/Carousel.astro recebe opção noPause para a Home, sem mudar seu comportamento padrão em outras páginas.
- Nenhuma alteração na página de vendas do engenheiro Ernani, nas páginas de produto, nos textos legais, no domínio ou na publicação principal.

## Fontes
- Dados empresariais em src/data/site.ts (CNPJ 17.119.304/0001-75, São Bernardo do Campo – SP, registro desde 21/09/2012).
- Serviços reais definidos no projeto (alumínio para escadarias, inox para rampas, guarda-corpos, vidro).
- Fotografias catalogadas em src/data/images.json e src/data/new-images.json, sendo 8 fotos na abertura e registro do Píer de Cubatão com 46 imagens.
- Clientes informados pela Alfa. Nesta versão a Home apresenta nomes em texto em vez de logotipos, pois há pendências de contraste e identificação em alguns logos. Não inventar depoimentos nem resultados.
- WhatsApp comercial da Home continua sendo o canal da Edna. A landing /corrimaos-para-predios/ da ramificação-base usa exclusivamente o engenheiro Ernani.

## Ordem da Home
1. Hero comercial objetivo e galeria de 8 fotos; CTA comercial e CTA para obras.
2. Faixa de credibilidade com tempo de registro, cidade e público atendido.
3. Quatro famílias de produtos.
4. Obras realizadas, com destaque ao Píer e produtos em aplicação.
5. Relação textual de clientes sem afirmações adicionais.
6. Dados empresariais e link para Quem Somos.
7. Três passos de solicitação de orçamento e CTA comercial.

## Pendências para próximos ciclos
- Construir Quem Somos, Índice de Produtos, Construtoras/Condomínios e outras páginas com este padrão editorial.
- Conferir aprovação visual de Home no desktop e celular.
- Revisar rótulos dos logotipos antes de reaproveitar faixa na Home.
- Apenas após aprovação: SEO, indexação, domínio, formulários e dados legais.

Status: prévia para revisão, não integrada à main.
