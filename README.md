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

O build exporta **16 páginas** e seus recursos para `dist/`. Não depende de ChatGPT Sites, contas de visitantes, servidor de aplicação ou banco de dados.

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
| Píer de Cubatão — galeria completa | /obras-realizadas/pier-de-cubatao/ |
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

Na versão inicial, o acervo publicado utilizou 12 fotografias do catálogo do Drive, preservadas por ID ACF; 8 distintas na página inicial. A landing de anúncios acrescentou **14 fotografias** específicas de escadarias e rampas ao repositório. O catálogo do Drive conta ainda com **11 fotos do Píer de Cubatão (ACF-115 a ACF-125)**, apenas catalogadas e copiadas para acervo organizado, **ainda não publicadas no site**. O logotipo é o arquivo ACF-006, sem redesenho. Cada imagem de produto carrega `data-image-id`; o catálogo em JSON mantém aplicação e origem. Legendas não atribuem ligas, dimensões ou conclusão da obra à fotografia.

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

## Histórico editorial de 15/11/2026 (superado por registros posteriores)

- Revisão solicitada por Enéias: retirar imagem **AC-380 / ACF-007** (corrimão aparenta estar torto); pedido **pendente**, sem alteração de páginas nesta etapa.
- Selecionar mais fotos de escadarias de prédios para o site; **pendente**.
- Lote 020 do **Píer de Cubatão**: 11 imagens examinadas, catalogadas e copiadas ao acervo, com identificação ACF-115–125, **não publicadas**.
- Para registrar pedidos e provas antes/depois, consulte `docs/REVISOES-E-PRESTACAO-DE-CONTAS.md`.

## Fotografias excluídas — 16/11/2026

A pedido de Dinny, com informação de Enéias de que as imagens não pertencem aos serviços da Alfa Corrimão, ficam **proibidas de utilização e reimportação** as fotos **AC-377, AC-379, AC-380, AC-381, AC-382 e AC-383**. As entradas **ACF-007, ACF-008 e ACF-050** foram bloqueadas no Catálogo Mestre. O site não referencia mais AC-377/AC-380 e seus recursos foram excluídos do repositório atual; a publicação foi validada com sucesso pela Cloudflare no commit `128366d3d9118096407fec366e68dcd2ac9493a2`. Treze arquivos relacionados foram excluídos permanentemente do Drive, incluindo variantes do WordPress `corrimao_aluminio_parede_08`. Relatório sem imagens em `docs/REVISOES-E-PRESTACAO-DE-CONTAS.md`. O histórico Git e cópias antigas fora deste controle não são automaticamente apagados.

## Acervo atualizado — Lote 021 (17/11/2026)

O Google Drive foi reorganizado na pasta `Fotos Novo Site Alfa`: os lotes brutos recebidos e as quatro fotografias soltas foram movidos para `00 - Originais recebidos`, sem modificar seu conteúdo. O Catálogo Mestre agora contém **161 arquivos ativos (160 fotografias e um logotipo)**; 39 novos registros **ACF-126–164**, incluindo **4 fotos de escadaria/guarda-corpos** e **35 fotos complementares do Píer de Cubatão**. O total do píer é de **46 fotos distintas** no acervo, e 12 vídeos preservados. As fotos não foram publicadas no site nesta etapa. Veja `docs/ACERVO-LOTE-021.md` e [Catálogo Mestre](https://docs.google.com/spreadsheets/d/1BDqAiSdnud_1P06w0_ObrgQagmCPHaOrszcr_lcUusA/edit).

## Integração do lote 021 no site — 17/11/2026

**Publicação técnica confirmada:** commit `3454408165254b9839631d1d0317856a99b94533` implantado com sucesso no Cloudflare Pages; registro remoto mostrou **16 páginas Astro compiladas** e **118 ativos avaliados no upload**. O álbum completo do Píer de Cubatão está em https://alfa-corrimao-web.pages.dev/obras-realizadas/pier-de-cubatao/ com **46 fotografias distintas**; quatro imagens ACF-126–129 aparecem nas páginas de escadarias e guarda-corpos. A página inicial recebeu destaque do píer e a landing de anúncios inclui ACF-126/127. Os carrosséis convencionais avançam a cada **3500 ms** (respeitando preferência por movimento reduzido, interação e pausa). Fotos proibidas não foram adicionadas.

**Revisão visual ainda pendente:** Dinny, Ernani e Enéias devem aprovar as páginas individualmente. Acompanhar em [docs/CHECKPOINT-REVISAO-SITE.md](docs/CHECKPOINT-REVISAO-SITE.md). O endereço `alfacorrimao.com.br` não foi alterado; a versão de revisão continua com `noindex, nofollow`. O comando `npm run build` agora inclui a verificação de links, imagens e páginas ao fim do build.

## Atendimento e conversão — alteração de 17/11/2026

- Canal central de **orçamentos pelo WhatsApp de Edna**: **(11) 99753-1839**, controlado por `site.whatsappNumber` e pela função `whatsapp()` em `src/data/site.ts`. O telefone de Ernani **(11) 94770-4632** permanece apenas como contato técnico; não é mais o número de destino do formulário de orçamento.
- Telefone fixo mantido no topo: **(11) 4357-3447**.
- Cabeçalho responsivo: `Pedir orçamento` e `WhatsApp` direcionam à conversa; atalho flutuante preservado. Home, landing e CTAs comerciais usam a mesma configuração centralizada, sem número duplicado em componentes.
- Página `/contato/`: WhatsApp é o fluxo principal; formulário é **opcional, recolhido e ao final**.
- A página de revisão e o domínio definitivo não foram alterados além das mudanças autorizadas de atendimento; revisão visual e teste de recebimento de mensagens ainda necessários. Registro REV-008 em `docs/CHECKPOINT-REVISAO-SITE.md`.
