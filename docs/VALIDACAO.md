# Validação da implementação — 14/11/2026

## Resultados locais

- `npm run check`: 0 erros, 0 avisos e 0 sugestões.
- `npm run build`: 14 páginas estáticas geradas em dist.
- `npm test`: 2 testes passaram; telefones brasileiros e composição da mensagem de orçamento.
- `npm run test:site`: 14 páginas e 458 referências locais conferidas; arquivos, links, âncoras, imagens com texto alternativo, H1 único, oito fotos distintas na home e links entre as duas páginas prioritárias.
- Instalação após atualização de sharp para 0.35.5: 0 vulnerabilidades reportadas pelo npm.
- Fotografias: 12 originais e 24 WebP (640/1280), além do logotipo ACF-006.
- Integridade: hashes Git dos recursos binários e package-lock comparados com os blobs enviados ao repositório.

## Conferência no navegador

- Home visualizada em computador e em viewport móvel.
- 14 páginas navegadas em viewport móvel, sem transbordamento horizontal.
- Páginas institucionais e comerciais navegadas; sem imagens quebradas observadas.
- Carrossel: botão Próxima avançou de 01/03 para 02/03; navegação manual ativou pausa.
- Menu móvel: abre e fecha.
- Galeria: filtro Rampas exibe 2 fotografias; ampliação abre diálogo; Escape fecha.
- Formulário: tentativa vazia mantém o campo de nome inválido e obrigatório. Mensagem e telefone cobertos pelos testes unitários.
- Prévia local via Astro; nenhuma hospedagem criada.

## Limites

Não foi enviada mensagem no WhatsApp nem testado recebimento pela equipe. Contatos continuam sujeitos à validação comercial. Não foi feito teste físico em aparelhos móveis; foi usada a emulação de viewport do navegador. A aprovação editorial das fotos e textos permanece pendente. O workflow CI executará os mesmos comandos no GitHub; esta documentação registra os resultados locais, não antecipa o status remoto.

## Atualização de implantação — 15/11/2026 (fonte: Cloudflare Pages)

- Branch: `main`; repositório `dinnygrupoalfa-dot/site-alfa-corrimao`.
- Commit verificado: `a19ab33b7dcd892c9dd79d883472c3e4a09c85b8`.
- Log remoto: **15 páginas compiladas**, incluindo `/corrimaos-para-predios/index.html`; upload e implantação concluídos com status **success**.
- Endereço de revisão: https://alfa-corrimao-web.pages.dev/
- **Não foi feita nova bateria de testes locais ou avaliação visual física de todos os dispositivos** nesta atualização; não reproduzir os testes da versão de 14 páginas como se fossem testes da versão de 15.
- Em 15/11, as 11 fotos do Píer de Cubatão foram catalogadas somente no Drive. Documentação e catálogo foram atualizados; **nenhuma foto do píer foi colocada no site**.

## Exclusão de imagens indevidas — 16/11/2026

- Commit `128366d3d9118096407fec366e68dcd2ac9493a2`: exclusão de recursos e referências das imagens AC-380/AC-377, remoção da entrada ACF-007 e do JSON de imagens da landing; cloudflare registrou status de implantação **success**.
- O site atual **não inclui** as fotos AC-377, AC-379, AC-380, AC-381, AC-382, AC-383. As outras quatro não eram arquivos publicados identificados nesta versão Astro.
- 13 arquivos relacionados foram excluídos do Drive; pesquisas posteriores por códigos AC-377/379/380/381/382/383 e pelas variantes WordPress da AC-381 deram lista vazia.
- Catálogo Mestre atualizado com 122 arquivos ativos e três identificadores de bloqueio (ACF-007/008/050).
- As correções não incluíram novos textos comerciais ou novas imagens. Revisão visual de Enéias e testes em celulares ainda não realizados nesta etapa.
