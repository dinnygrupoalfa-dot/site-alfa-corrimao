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
| 01 | **Início** | https://alfa-corrimao-web.pages.dev/ | **Aguardando Dinny** | Logo, títulos, fotos principais, hero/carrossel 3,5s, destaque do píer, soluções, links e celular |
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
| 13 | Contato | https://alfa-corrimao-web.pages.dev/contato/ | Aguardando | WhatsApp, telefone, formulário e envio manual |
| 14 | Blog | https://alfa-corrimao-web.pages.dev/blog/ | Aguardando | Estado sem artigos inventados |
| 15 | Política de privacidade | https://alfa-corrimao-web.pages.dev/politica-de-privacidade/ | Aguardando | Dados e contatos publicados |
| 16 | Termos de uso | https://alfa-corrimao-web.pages.dev/termos-de-uso/ | Aguardando | Revisão editorial/jurídica |

## Checklist da página inicial — checkpoint 01

- [ ] Logotipo e nome **Alfa Corrimão** corretos.
- [ ] Texto inicial, chamadas e prioridades comerciais aprovados.
- [ ] Fotografia de escadaria **ACF-127** adequada; nenhuma das seis fotos proibidas.
- [ ] Carrossel avança a cada **3,5 segundos** e possui controles de pausa/setas.
- [ ] Destaque do **Píer de Cubatão** aparece e leva às **46 fotos**.
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
| REV-007 | Uso editorial do lote 021: Home, produtos, Obras, Píer e landing | Preparado para validação Cloudflare | Commit da implantação |
| REV-008+ | Alterações solicitadas página a página | Ainda não abertas | Cada print e comentário recebido |

**Domínio:** esta revisão usa o subdomínio `pages.dev`; não houve alteração do domínio oficial ou DNS. O conteúdo permanece em `noindex` até a aprovação final de publicação comercial.
