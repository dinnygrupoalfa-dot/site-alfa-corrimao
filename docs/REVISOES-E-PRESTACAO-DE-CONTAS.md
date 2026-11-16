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
