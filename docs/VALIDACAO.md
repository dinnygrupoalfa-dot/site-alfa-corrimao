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
