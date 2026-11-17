# Pendências da revisão do site publicado no Cloudflare

- Aprovação visual das **16 páginas** e da seleção de fotografias, incluindo a landing de anúncios. O logotipo disponível no acervo é de baixa resolução; substituir por versão oficial de melhor qualidade se houver, preservando a identidade.
- Confirmar operacionalmente WhatsApp de Ernani, telefone fixo e e-mail. Não foram realizadas ligações nem envio de mensagens.
- Validar liga/acabamento e detalhes de inox antes de acrescentar especificações. Não foi assumido inox 304.
- Confirmar códigos de cinza RAL 9006, 9007 e 7034F antes de inseri-los no catálogo público.
- Revisão técnica do texto de acessibilidade/normas pela Alfa antes da publicação. Não há promessa de aprovação de AVCB nem reprodução de norma não verificada.
- Documentar clientes e obras (Sobloco, Terracom, Instituto Neymar Júnior, Labate e outros) e a autorização aplicável a nomes/logotipos. Nenhum nome de cliente foi publicado.
- Revisar identificação empresarial e dados de contato para a versão definitiva das páginas legais. Os textos atuais descrevem o funcionamento real desta implementação.
- **Integração GitHub–Cloudflare Pages ativa e verificada em 15/11/2026**. Confirmar resultado de cada implantação subsequente e manter a distinção entre versão de revisão e domínio final.
- Liberar indexação apenas na versão definitiva aprovada: retirar bloqueios coordenadamente e configurar URL canônica/sitemap para o domínio aprovado.
- Validar envio real do formulário no WhatsApp e recebimento pela equipe em teste autorizado, sem confundir abrir mensagem com enviar orçamento.

O blog está propositalmente sem artigos; isso não impede o funcionamento do site.

## Demandas de revisão recebidas de Enéias — 15/11/2026

1. **AC-380 / ACF-007**: imagem do corrimão que aparenta estar torto, segundo o solicitante. **Retirada concluída em 16/11/2026**: referências no site e recursos publicados removidos; substituição editorial ainda não selecionada.
2. **Escadarias de prédios**: lote de Enéias recebido e catalogado em 17/11/2026; ACF-127 (vista geral) e ACF-126 (obra em andamento) **já integradas ao site** em 17/11, aguardando aprovação visual de Dinny/Enéias.
3. **Píer de Cubatão**: 46 fotografias distintas catalogadas (ACF-115–164), após deduplicação do lote bruto; **galeria completa publicada** em `/obras-realizadas/pier-de-cubatao/` com 46 fotos; revisar fotos com pessoas e atribuições de materiais/escopo antes de aprovação editorial final.
4. **Vídeos do píer**: ainda não editados, silenciados nem publicados. Avaliar posteriormente.

Acompanhamento e prova documental: `docs/REVISOES-E-PRESTACAO-DE-CONTAS.md` e `docs/OBRA-PIER-CUBATAO.md`.

5. **Bloqueio definitivo de seis fotografias (16/11/2026):** AC-377, AC-379, AC-380, AC-381, AC-382 e AC-383. Não reutilizar em qualquer produto ou galeria. Foram excluídos 13 arquivos do Drive e 4 recursos do repositório. Ver registro REV-005. Fotografia substituta: pendente.

## Concluído no lote 021 — 17/11/2026

- Reorganizadas as entradas em `Fotos Novo Site Alfa/00 - Originais recebidos` e renomeadas as pastas com grafia de produtos/obras corrigida.
- **27 duplicatas exatas** nas duas pastas de 31 fotos: não copiadas novamente; **4 novas** catalogadas como ACF-126–129.
- Quatro imagens soltas com nomes fornecidos por Enéias: duplicatas exatas de ACF-005, ACF-022, ACF-023, ACF-070; nomes comerciais preservados como referências e nenhum novo código indevido.
- Píer: 70 fotos brutas, 46 distintas, 24 cópias idênticas; 35 complementares novas ACF-130–164. Vídeos preservados e não editados.
- **Etapa 4 realizada em 17/11:** integração editorial nas páginas e implantação Cloudflare concluídas. Próximo passo: revisão visual página a página, prints antes/depois e aprovação de Dinny, Ernani e Enéias. A prestação de contas final depende dessas aprovações.

## Checkpoint de conferência — iniciado em 17/11/2026

- [x] Site Astro compilado e publicado no Cloudflare Pages (16 páginas; commit `3454408165254b9839631d1d0317856a99b94533`).
- [x] Todas as 46 fotografias distintas do Píer integradas à sua galeria específica.
- [x] Novas imagens ACF-126–129 incorporadas a páginas de escadarias/guarda-corpos/landing.
- [ ] Conferir visualmente a **Home** no desktop e celular (checkpoint 01).
- [ ] Receber feedback de Dinny/Ernani/Enéias; corrigir uma página de cada vez.
- [ ] Aprovar separadamente as **16 páginas** e arquivar prints antes/depois.
- [ ] Compor PDF final de prestação de contas com evidências verificadas.

Veja `docs/CHECKPOINT-REVISAO-SITE.md`.

## Checkpoint 01A — WhatsApp comercial (17/11/2026)

- [x] Configuração de destinatário do WhatsApp comercial: **Edna, (11) 99753-1839**, distinta do telefone técnico do engenheiro.
- [x] Botões de pedido de orçamento e atalhos do cabeçalho passam a apontar ao WhatsApp; fixo preservado no topo.
- [x] Página de contato prioriza WhatsApp, mantendo formulário opcional ao final.
- [ ] Conferir publicação e funcionamento no celular, com prints antes/depois e aprovação de Dinny.
- [ ] Testar **recebimento real** de mensagem no WhatsApp da Edna (a compilação apenas verifica os links).
- [ ] Confirmar responsividade em 320, 375 e 425 px antes de encerrar checkpoint.
