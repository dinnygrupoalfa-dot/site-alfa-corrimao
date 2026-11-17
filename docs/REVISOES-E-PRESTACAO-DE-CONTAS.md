# Registro de revisões e prestação de contas — Alfa Corrimão

Data inicial: 15/11/2026. Documento de **registro e acompanhamento**; não é autorização automática para modificar conteúdo público.

## Método de comprovação

Para cada solicitação, registrar: (1) número e solicitante; (2) página/URL e elemento; (3) pedido em linguagem do solicitante; (4) arquivo ou print **antes**; (5) alteração efetivamente autorizada e executada; (6) print **depois**; (7) commit do GitHub e implantação correspondente no Cloudflare; (8) validação visual/funcional e resposta do solicitante. Distinguir **pendente**, **em execução**, **publicado e verificado** e **aprovado**.

Não confundir: imagem catalogada no Google Drive ≠ imagem publicada no site; alteração no repositório ≠ aprovação da equipe; build bem-sucedido ≠ revisão visual concluída.

## Pedidos recebidos

| Registro | Solicitante | Pedido | Local encontrado | Status em 15/11/2026 |
| --- | --- | --- | --- | --- |
| REV-001 | Enéias | Retirar a fotografia do corrimão que aparenta estar torto. | Acervo **AC-380 / ACF-007**; consta na landing `/corrimaos-para-predios/`, em `src/components/ProductPage.astro` e `src/pages/obras-realizadas.astro`. | **Excluída do site em 16/11/2026**; substituição ainda pendente de seleção editorial. |
| REV-002 | Enéias | Mostrar mais fotografias de **escadarias de prédios**. | Landing escadarias, página do produto e galeria de obras. | **Pendente**: aguardar imagens selecionadas pela usuária e confirmar aplicação. |
| REV-003 | Enéias | Avaliar as 11 melhores fotos da obra informada como **Píer de Cubatão**. | Pasta de seleção e Catálogo Mestre. | **Catalogado**: ACF-115–ACF-125, cópias organizadas e descrição documentada; publicação pendente. |
| REV-004 | Equipe Alfa / futura análise | Examinar os vídeos do píer, possivelmente sem som, para uso comercial. | Pasta bruta enviada por Enéias. | **Ideia / estudo**: não autorizada edição ou publicação. |

## Proposta de encaixe do píer

- **Obras realizadas:** entrada prioritária de portfólio com galeria própria.
- **Guarda-corpos:** possível ligação após confirmar a participação e o escopo Alfa.
- **Landing escadarias:** não usar fotos do píer para substituir a solicitação de corrimãos de parede.
- **Página dedicada:** só se houver dados concretos e necessidade de detalhamento comercial.

Ver: [Inventário do Píer de Cubatão](OBRA-PIER-CUBATAO.md) e [Catálogo Mestre](https://docs.google.com/spreadsheets/d/1BDqAiSdnud_1P06w0_ObrgQagmCPHaOrszcr_lcUusA/edit).

## Evidências e PDF de prestação de contas

O PDF deve consolidar os registros **somente após conferir**: pedido, antes/depois, commit e publicação. A primeira versão da prestação de contas foi gerada na conversa com Dinny, mas **não está anexada a este repositório**. Não alegar distribuição ou aprovação do PDF sem confirmação. A documentação técnica de andamento permanece neste arquivo; os PDFs são versões de apresentação para Enéias e Ernani.

**Regra editorial vigente:** não alterar o site até a etapa de correções receber autorização; continuar organizando acervo e documentação.

## REV-005 — Remoção de seis imagens reprovadas (16/11/2026)

**Pedido:** Dinny solicitou excluir de todos os locais acessíveis seis fotos que Enéias identificou como alheias às obras da Alfa e inadequadas. As seis imagens foram enviadas diretamente na conversa, na sequência: **(1) AC-381, (2) AC-379/ACF-008, (3) AC-380/ACF-007, (4) AC-377/ACF-050, (5) AC-383 e (6) AC-382**. A AC-381 também correspondia à imagem antiga do WordPress `corrimao_aluminio_parede_08` e a três versões reduzidas.

**Execução verificada:** (a) commit GitHub `128366d3d9118096407fec366e68dcd2ac9493a2`, implantado com status **success** no Cloudflare Pages; (b) referências removidas da landing `/corrimaos-para-predios/`, página de alumínio, galeria `/obras-realizadas/` e arquivos de dados; (c) quatro arquivos eliminados de `public/images/` (três da ACF-007 e uma `landing-escada-ac377.jpg`); (d) **13 arquivos permanentemente excluídos do Google Drive**, incluindo os originais/cópias catalogados e versões antigas do WordPress; (e) Catálogo Mestre atualizado: **ACF-007, ACF-008 e ACF-050 bloqueados, sem URL ou fotografia**, deixando 122 arquivos ativos; (f) pesquisas pelos seis códigos e `corrimao_aluminio_parede_08` não retornaram imagens remanescentes no Drive conectado.

**Limites reais:** a exclusão na branch atual não apaga versões históricas de commits Git, versões anteriores dos PDFs já entregues, downloads salvos por terceiros, anexos antigos da conversa nem eventuais caches. Este registro é textual e não inclui as imagens reprovadas. Não afirmar exclusão de cópias sem verificação individual.

**Resultado do pedido editorial:** fotos reprovadas não constam mais do site de produção. Fotos substitutas e validação final de Enéias continuam pendentes.

## REV-006 — Organização autorizada do acervo (17/11/2026)

Dinny autorizou explicitamente executar as etapas **1 a 3** do plano: comparar duplicatas, concentrar e organizar arquivos no Drive e atualizar o catálogo. A execução foi concluída: pasta `Fotos Novo Site Alfa` padronizada, originais reunidos em `00 - Originais recebidos`; quatro duplicatas de fotos soltas associadas a ACF-005/022/023/070; **39 imagens novas** catalogadas como ACF-126–164, todas com original/cópia e destino sugerido. Píer com **46 fotografias distintas** organizadas e 12 vídeos mantidos em originais. O Catálogo Mestre passa a **161 arquivos ativos**; as seis imagens excluídas continuam proibidas. Evidências: [Catálogo Mestre](https://docs.google.com/spreadsheets/d/1BDqAiSdnud_1P06w0_ObrgQagmCPHaOrszcr_lcUusA/edit) e `docs/ACERVO-LOTE-021.md`.

**Não realizado:** edição/publicação de imagens do lote 021, alteração de páginas, testes pós-alterações, prints antes/depois e novo PDF final. Esses itens pertencem à etapa seguinte, que precisa de autorização própria.

## REV-007 — Integração das fotos e publicação da galeria completa (17/11/2026)

**Autorização:** Dinny, após conclusão das etapas de organização do acervo, solicitou executar a etapa de integração no site e fornecer o link da página inicial para conferência e revisão por prints, uma página de cada vez.

**Alterações realizadas e verificadas:** (1) 50 imagens JPEG do acervo adicionadas ao repositório — **46 do Píer de Cubatão ACF-115–164** e **4 de escadarias/guarda-corpos ACF-126–129**; (2) nova galeria de obra `/obras-realizadas/pier-de-cubatao/` com todos os 46 códigos, filtros por tipo e ampliação; (3) destaque da obra na Home e no índice `/obras-realizadas/`; (4) escadarias ACF-126/127 no catálogo de produto e na landing de anúncios; (5) guarda-corpos ACF-128/129 na página de serviço; (6) carrosséis com intervalo de **3,5 s**; (7) checklist persistente de 16 páginas em `docs/CHECKPOINT-REVISAO-SITE.md`.

**Evidência técnica:** commit `3454408165254b9839631d1d0317856a99b94533`, confirmação via API Cloudflare Pages de **build e deploy bem-sucedidos**, 16 páginas compiladas. O domínio oficial não foi tocado; site de revisão permanece com bloqueio de indexação.

**Estado:** **publicado e tecnicamente compilado; ainda NÃO aprovado visualmente**. Prints antes/depois, correções pontuais e PDF final ficam para checkpoints subsequentes. As seis fotos reprovadas permanecem proibidas.

## REV-008 — Atendimento comercial via WhatsApp (17/11/2026)

**Origem:** observação de Dinny sobre a Home em tela responsiva 425 × 644. **Autorização expressa:** fazer as correções imediatamente, incluindo configuração central de contato.

**Antes:** cabeçalho e botão principal da Home levavam a `/contato/`; formulário aparecia antes do WhatsApp; botões e formulários usavam o telefone técnico de Ernani; WhatsApp existia apenas flutuante no móvel.

**Alteração autorizada:** o canal de orçamentos passa a ser **WhatsApp de Edna, (11) 99753-1839**. Site centralizado em `src/data/site.ts` (`whatsappNumber`), sem mudar o telefone fixo **(11) 4357-3447** nem apagar o contato técnico de Ernani. Botões de orçamento e 'fale conosco' direcionam ao WhatsApp comercial; cabeçalho móvel mostra botões separados de orçamento e WhatsApp, além do botão flutuante; página de contato agora dá prioridade à conversa e mantém formulário opcional em seção recolhida ao final; landing encaminha CTAs diretamente ao WhatsApp comercial e preserva o formulário alternativo.

**Evidência antes:** print de Dinny na conversa de 17/11/2026 (Chrome, 425 × 644). **Pendente:** registro do commit, build e deploy Cloudflare, screenshot depois, teste de abertura no aparelho e confirmação de chegada da mensagem no WhatsApp de Edna. Não declarar aprovação visual ou recebimento até serem verificados.
