# Checkpoint de revisão — Site Alfa Corrimão

**Início da revisão:** 17/11/2026. **Responsáveis pela avaliação:** Dinny, Ernani e Enéias. **Último ponto do fluxo:** integração editorial das fotos do lote 021. O estado **publicado** não significa **aprovado**.

## Como vamos trabalhar

1. Abrir **uma página por vez**, primeiro no computador e depois no celular.
2. Dinny envia prints e o comentário concreto de Ernani/Enéias ou a sua própria observação.
3. Registrar **REV-XXX** com trecho atual, pedido e evidência **antes**.
4. Fazer a alteração autorizada no repositório, conferir a publicação Cloudflare e registrar print **depois**.
5. Marcar **Aprovada** somente quando Dinny confirmar; caso contrário manter **Em revisão**.
6. Só depois passar para a próxima página. Não repetir solicitações já resolvidas.

## Checklist por página — 16 páginas

| Nº | Página | URL de revisão | Estado visual | Foco da conferência |
| --- | --- | --- | --- | --- |
| 01 | **Início** | https://alfa-corrimao-web.pages.dev/ | **REV-008 executada tecnicamente; aguardando novo print e aprovação** | Logo, títulos, fotos, carrossel, píer e **CTA WhatsApp de Edna no celular** |
| 02 | Landing de anúncios | https://alfa-corrimao-web.pages.dev/corrimaos-para-predios/ | Aguardando | Texto do briefing, fotos da escadaria, corrimão duplo, rampas, chamadas, formulário e celular |
| 03 | Corrimão alumínio / escadarias | https://alfa-corrimao-web.pages.dev/corrimaos/aluminio-escadarias/ | Aguardando | ACF-127 e ACF-126, produto correto, qualidade dos enquadramentos |
| 04 | Corrimão inox / rampas | https://alfa-corrimao-web.pages.dev/corrimaos/inox-rampas/ | Aguardando | Fotos de rampas, continuidade do corrimão e terminologia sem alegar inox 304 sem prova |
| 05 | Guarda-corpos | https://alfa-corrimao-web.pages.dev/guarda-corpos/ | Aguardando | ACF-128 e ACF-129, aplicações vidro/metal, fotos do píer e celular |
| 06 | Obras realizadas | https://alfa-corrimao-web.pages.dev/obras-realizadas/ | Aguardando | Galeria, filtros, ampliação, destaque e link para píer |
| 07 | Píer de Cubatão — 46 fotos | https://alfa-corrimao-web.pages.dev/obras-realizadas/pier-de-cubatao/ | Aguardando | 46 imagens carregam, nenhuma repetição exata, filtros, detalhes, qualidade e imagem de pessoas |
| 08 | Corrimãos (índice) | https://alfa-corrimao-web.pages.dev/corrimaos/ | Aguardando | Produtos, ordem, fotos, direcionamento para escadas/rampas |
| 09 | Vidro temperado | https://alfa-corrimao-web.pages.dev/vidro-temperado/ | Aguardando | Tipos de produto, fotos, carrossel e links |
| 10 | Construtoras e condomínios | https://alfa-corrimao-web.pages.dev/construtoras-e-condominios/ | Aguardando | Público, benefícios, credibilidade e contato |
| 11 | Quem somos | https://alfa-corrimao-web.pages.dev/quem-somos/ | Aguardando | História, marca, responsabilidades e informações confirmadas |
| 12 | Acessibilidade e normas | https://alfa-corrimao-web.pages.dev/acessibilidade-e-normas/ | Aguardando | Referências técnicas e ausência de promessas indevidas |
| 13 | Contato | https://alfa-corrimao-web.pages.dev/contato/ | **Reorganizada; aguardando revisão visual** | WhatsApp comercial prioritário, fixo preservado, formulário opcional no final |
| 14 | Blog | https://alfa-corrimao-web.pages.dev/blog/ | Aguardando | Estado sem artigos inventados |
| 15 | Política de privacidade | https://alfa-corrimao-web.pages.dev/politica-de-privacidade/ | Aguardando | Dados e contatos publicados |
| 16 | Termos de uso | https://alfa-corrimao-web.pages.dev/termos-de-uso/ | Aguardando | Revisão editorial/jurídica |

## Checklist da página inicial — checkpoint 01

- [ ] Logotipo e nome **Alfa Corrimão** corretos.
- [ ] Texto inicial, chamadas e prioridades comerciais aprovados.
- [ ] Fotografia de escadaria **ACF-127** adequada; nenhuma das seis fotos proibidas.
- [ ] Carrossel avança a cada **3,5 segundos** e possui controles de pausa/setas.
- [ ] Destaque do **Píer de Cubatão** aparece e leva às **46 fotos**.
- [ ] Botões **Pedir/Solicitar orçamento** abrem diretamente o WhatsApp comercial da Edna **(11) 99753-1839**.
- [ ] WhatsApp disponível no topo **e** flutuando ao rolar, sem quebrar o layout em 425 px.
- [ ] Na página de Contato, WhatsApp é prioritário e o formulário ficou opcional no final.
- [ ] Cards dos serviços e botões de orçamento direcionam corretamente.
- [ ] Versão do celular não corta títulos, imagens, botões ou carrosséis.
- [ ] Imagens carregam; qualidade e enquadramento aprovados.
- [ ] Prints “antes/depois” e solicitações de Ernani e Enéias registrados.
- [ ] **Aprovação explícita de Dinny** para encerrar a revisão da Home.

## Controle das mudanças

| ID | Escopo | Situação | Evidência |
| --- | --- | --- | --- |
| REV-005 | Exclusão das seis fotos indevidas (AC-377/379/380/381/382/383) | Executada, proibida reimportação | docs/REVISOES-E-PRESTACAO-DE-CONTAS.md |
| REV-006 | Triagem das novas fotos, Catálogo Mestre ACF-126–164 | Concluído e verificado | docs/ACERVO-LOTE-021.md |
| REV-007 | Uso editorial do lote 021: Home, produtos, Obras, Píer e landing | **Publicado; aguarda revisão visual** | Commit `3454408165254b9839631d1d0317856a99b94533`; Cloudflare: 16 páginas, build e deploy success |
| REV-008 | Checkpoint 01: WhatsApp da Edna, CTAs de orçamento e contato simplificado | **Código preparado; verificar build/deploy e prints** | Captura móvel de Dinny, 425 × 644; commit e deployment no registro REV-008 |
| REV-009+ | Próximas alterações por página | Aguardando observações | Prints e comentários de Dinny |

**Domínio:** esta revisão usa o subdomínio `pages.dev`; não houve alteração do domínio oficial ou DNS. O conteúdo permanece em `noindex` até a aprovação final de publicação comercial.

## Checkpoint 01A — Correções solicitadas na Home (17/11/2026)

**Solicitação de Dinny, a partir de print no Chrome responsivo (425 × 644):** adicionar WhatsApp no topo além do flutuante; redirecionar todos os CTAs de pedido de orçamento para **Edna (11) 99753-1839**; preservar telefone fixo **(11) 4357-3447**; reorganizar a página de contato, priorizando WhatsApp e deixando formulário somente como opção secundária no final. Na landing, os CTAs de orçamento passam a abrir WhatsApp diretamente; o formulário permanece como alternativa.

**Estado:** alterações de código preparadas e em validação de implantação. Print **depois** e aprovação de Dinny ainda pendentes. Não mudar SEO, domínio ou garantia nesta intervenção.

## REV-009 — Cabeçalho móvel em linha única (17/11/2026)

**Pedido:** a captura móvel enviada por Dinny mostrou dois andares de botões, consumindo espaço da Home. **Autorização:** “Ok” após proposta de compactar apenas o cabeçalho.

**Mudança:** no celular, logotipo, Menu, Orçamento e atalho de WhatsApp ficam lado a lado; WhatsApp flutuante e telefone fixo continuam; CTA de orçamento mantém o número comercial da Edna. O atalho de WhatsApp tem identificação acessível. Sem alterações de conteúdo, SEO ou fotos.

**Estado:** implementação solicitada, aguardando confirmação do build/deploy e nova captura móvel de Dinny. **Home ainda não aprovada.**
