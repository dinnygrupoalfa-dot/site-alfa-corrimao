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

O build exporta as 14 páginas e seus recursos para `dist/`. Não depende de ChatGPT Sites, contas de visitantes, servidor de aplicação ou banco de dados.

## Páginas

| Página | Rota |
| --- | --- |
| Início | / |
| Quem somos | /quem-somos/ |
| Corrimãos | /corrimaos/ |
| Alumínio para escadarias | /corrimaos/aluminio-escadarias/ |
| Inox para rampas | /corrimaos/inox-rampas/ |
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
- `docs/CLOUDFLARE-PAGES.md`: parâmetros para futura integração, ainda não configurada.

O formulário abre uma mensagem no WhatsApp; não envia automaticamente nem armazena os dados no site. Os testes não enviam mensagens.

## Fotografias

12 fotografias reais do catálogo do Drive, preservadas por ID ACF; 8 distintas na página inicial. O logotipo é o arquivo ACF-006, sem redesenho. Cada imagem de produto carrega `data-image-id`; o catálogo em JSON mantém aplicação e origem. Legendas não atribuem ligas, dimensões ou conclusão da obra à fotografia.

Para regenerar versões WebP após alterar uma imagem original:

```sh
npm run images:optimize
```

## Publicação

Nenhuma publicação foi realizada. Não há comandos de deploy, tokens Cloudflare ou integração com Sites neste projeto. A publicação deverá usar exclusivamente a futura integração GitHub–Cloudflare Pages. O site atual, domínio e HostGator não fazem parte desta implementação.

A versão de revisão está bloqueada para indexação em três camadas: meta robots, robots.txt e X-Robots-Tag. Consulte a documentação antes de liberar a versão definitiva.

O workflow do GitHub executa apenas validações e disponibiliza o build como artefato privado temporário. Não configura hospedagem ou domínio.

## Direitos

Marca e fotografias pertencem aos respectivos titulares. Conteúdo e imagens sujeitos à validação editorial da Alfa antes de publicação. Não há licença pública concedida ao acervo.
