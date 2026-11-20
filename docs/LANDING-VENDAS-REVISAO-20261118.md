# Landing de vendas — revisão de 18/11/2026

Escopo estrito: somente a página /corrimaos-para-predios/; não alterar as outras páginas, domínio ou DNS.

## Fontes e decisão editorial
- Conversa original com Ernani: https://drive.google.com/file/d/1S4JzovU2M20AXhJMqZg9VGApkNz733nJ/view
- HTML de referência produzido pela Adapta: https://drive.google.com/file/d/1ItlTYXovmxeFjHm0ty6YO_osUXtA1otu/view
- Catálogo das 30 fotografias renomeadas em 18/11: https://drive.google.com/file/d/1N7kiROVsLTP3m2ppqBf1TlKjD6ItqmQx/view
- Logotipos aprovados: https://drive.google.com/file/d/1SX0UwR3-fD4BCCzs9YB88Dk3LoGr4dbv/view

## Fotografias
17 ESC e 13 RMP. Todas as 30 fotografias aparecem na galeria de abertura, com avanço automático a cada 3 segundos e setas laterais. Os arquivos mantêm a referência no nome e a descrição visual no atributo alt. RMP-10 é uma cópia exata de RMP-01: mantida por solicitação de utilizar todas as fotografias do lote. Imagens não comprovam liga metálica, conformidade normativa, cliente ou obra específica sem documentação; não associar legendas a esses atributos.

## Clientes
A faixa contínua utiliza nove logotipos padronizados, com movimento suave, sem botão de pausa; no desktop, o mouse sobre ela interrompe o movimento enquanto estiver na área. Não contém frases atribuídas a clientes. Nomes adicionais informados pela empresa: Sobloco, Jestec, Prefeitura de Cubatão e Labate/Labat; seus logotipos permanecem fora da faixa até disponibilidade/identificação segura. A lista de clientes foi fornecida diretamente pela Alfa.

## Produto e contratação
- Corrimão duplo de parede em alumínio para escadarias; tubo de 38,1 mm e acessórios de alumínio.
- Corrimão duplo em inox para rampas de acesso a PNE.
- Reforços recuperados do HTML aprovado: papel da vistoria do Corpo de Bombeiros e AVCB, exigências técnicas detalhadas, corrimão intermediário para escadas largas, quatro benefícios do alumínio, cuidados em rampas e condições comerciais.
- Visual: cabeçalho e logotipo compactados apenas nesta página, com hero mais alto na janela inicial e novo destaque ao pagamento.
- Duas rotas de campanha: #escadarias e #rampas.
- NBR 9050: preservar o conjunto de exigências explicitadas no material fornecido por Ernani, sem reabrir discussão normativa.
- Pagamento: destaque "Nenhum pagamento antes de a obra começar"; contrato e faturamento por marcos. Regras de adiamento, guarda e multas não integram texto promocional; constam do instrumento contratual.

## Contatos
- Exclusivamente nesta landing, todos os pedidos de orçamento e dúvidas técnicas, inclusive cabeçalho, WhatsApp flutuante, botões e formulário, vão ao engenheiro Ernani, (11) 94770-4632, via technicalWhatsapp e site.phone.
- Nas demais páginas, permanece o atendimento comercial da Edna, (11) 99753-1839, sem alterações nos respectivos contatos.
- A propriedade campaignLanding do layout ativa essa distinção; não modificar os contatos institucionais.
- Arquivo principal: src/pages/corrimaos-para-predios.astro.
- Galeria: public/images/landing-20261118/.
- Faixa: src/components/ClientMarquee.astro; ativos compactados em assets/landing-logos-clientes.zip, extraídos para public/images/clientes/ por scripts/prepare-landing-logos.mjs.

Publicação: estes arquivos foram preparados em branch de revisão; a branch main (produção Cloudflare) não deve ser alterada sem a conferência final.
