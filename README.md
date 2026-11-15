# Alfa Corrimão — site oficial em Astro

Implementação do Briefing Oficial V3 (14/11/2026). Código exclusivo deste repositório privado: https://github.com/dinnygrupoalfa-dot/site-alfa-corrimao.

## Executar e visualizar

Requisitos: Node.js 24 e npm.

```sh
npm ci
npm run dev
```

Abra o endereço local mostrado pelo Astro. Para conferir exatamente os arquivos estáticos:

```sh
npm run check
npm test
npm run build
npm run test:site
npm run preview
```

O build exporta **15 páginas** e seus recursos para `dist/`. Não depende de ChatGPT Sites, contas de visitantes, servidor de aplicação ou banco de dados.

## Páginas

| Página | Rota |
| --- | --- |
| Início | / |
| Quem somos | /quem-somos/ |
| Corrimãos | /corrimaos/ |
| Alumínio para escadarias | /corrimaos/aluminio-escadarias/ |
| Inox para rampas | /corrimaos/inox-rampas/ |
| Landing para anúncios: escadarias e rampas | /corrimaos-para-predios/ (âncoras #escadarias e #rampas) |
| Guarda-corpos | /guarda-corpos/ |
| Vidro temperado | /vidro-temperado/ |
| Acessibilidade e normas | /acessibilidade-e-normas/ |
| Construtoras e condomínios | /construtoras-e-condominios/ |
| Obras realizadas | /obras-realizadas/ |
| Contato e orçamentos | /contato/ |
| Blog (sem artigos) | /blog/ |
| Política de privacidade | /politica-de-privacidade/ |
| Termos de uso | /termos-de-uso/ |

## Onde editar pelo GitHub

- `src/pages/`: conteúdo das páginas.
- `src/components/ProductPage.astro`: estrutura das duas páginas prioritárias.
- `src/data/site.ts`: contatos, navegação e produtos.
- `src/data/images.json`: identificação, descrição visual, aplicação e origem de cada fotografia.
- `src/styles/global.css`: cores, tipografia e responsividade.
- `src/scripts/site.ts`: menu, carrosséis, filtros, ampliação e formulário.
- `src/scripts/quote.mjs`: validação e composição da mensagem de orçamento.
- `public/images/`: fotos originais do acervo, cópias WebP otimizadas e logotipo catalogado.
- `docs/CONTEUDO-E-FONTES.md`: critérios editoriais e rastreabilidade.
- `docs/PENDENCIAS.md`: validações comerciais e editoriais restantes.
- `docs/CLOUDFLARE-PAGES.md`: integração GitHub–Cloudflare Pages ativa, publicação e indexação.
- `docs/VALIDACAO.md`: resultados de testes, implantação e limites.
- `docs/REVISOES-E-PRESTACAO-DE-CONTAS.md`: pedidos de Ernani/Enéias, estados, evidências e acompanhamento.
- `docs/OBRA-PIER-CUBATAO.md`: 11 fotografias da obra catalogadas no Drive; encaixe proposto, sem publicação.
- `src/pages/corrimaos-para-predios.astro`: landing comercial criada a partir do PDF de Ernani.
- `src/data/landing-images.json` e `src/styles/landing.css`: rastreabilidade das 14 novas fotos da landing e estilo isolado.

O formulário abre uma mensagem no WhatsApp; não envia automaticamente nem armazena os dados no site. Os testes não enviam mensagens.

## Fotografias

A versão inicial utilizou 12 fotografias do catálogo do Drive, preservadas por ID ACF; 8 distintas na página inicial. A landing de anúncios acrescentou **14 fotografias** específicas de escadarias e rampas ao repositório. O catálogo do Drive conta ainda com **11 fotos do Píer de Cubatão (ACF-115 a ACF-125)**, apenas catalogadas e copiadas para acervo organizado, **ainda não publicadas no site**. O logotipo é o arquivo ACF-006, sem redesenho. Cada imagem de produto carrega `data-image-id`; o catálogo em JSON mantém aplicação e origem. Legendas não atribuem ligas, dimensões ou conclusão da obra à fotografia.

Para regenerar versões WebP após alterar uma imagem original:

```sh
npm run images:optimize
```

## Publicação

**Publicado para revisão:** https://alfa-corrimao-web.pages.dev/ por **Cloudflare Pages**, com integração GitHub na branch `main`.

A landing comercial está em https://alfa-corrimao-web.pages.dev/corrimaos-para-predios/ e usa as âncoras `#escadarias` e `#rampas`. A implantação de 15/11/2026 do commit `a19ab33b7dcd892c9dd79d883472c3e4a09c85b8` concluiu com sucesso e confirmou **15 páginas geradas**. Commits na branch `main` iniciam nova compilação automaticamente.

**O domínio `alfacorrimao.com.br` ainda não está conectado ao projeto Cloudflare**; não presumir migração, redirecionamento ou alteração do DNS/HostGator.

A versão de revisão **continua** bloqueada para indexação em três camadas: meta robots, robots.txt e X-Robots-Tag. Consulte a documentação antes de liberar a versão definitiva.

O workflow do GitHub executa apenas validações e disponibiliza o build como artefato privado temporário. Não configura hospedagem ou domínio.

## Direitos

Marca e fotografias pertencem aos respectivos titulares. Conteúdo e imagens sujeitos à validação editorial da Alfa antes de publicação. Não há licença pública concedida ao acervo.

## Estado editorial em 15/11/2026

- Revisão solicitada por Enéias: retirar imagem **AC-380 / ACF-007** (corrimão aparenta estar torto); pedido **pendente**, sem alteração de páginas nesta etapa.
- Selecionar mais fotos de escadarias de prédios para o site; **pendente**.
- Lote 020 do **Píer de Cubatão**: 11 imagens examinadas, catalogadas e copiadas ao acervo, com identificação ACF-115–125, **não publicadas**.
- Para registrar pedidos e provas antes/depois, consulte `docs/REVISOES-E-PRESTACAO-DE-CONTAS.md`.
