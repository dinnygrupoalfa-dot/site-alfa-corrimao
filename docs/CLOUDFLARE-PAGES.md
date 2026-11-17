# Cloudflare Pages — configuração e estado real

Integração **ativa e verificada** em 15/11/2026. Este documento preserva os parâmetros de build e distingue a prévia publicada da migração do domínio oficial.

| Parâmetro | Valor |
| --- | --- |
| Repositório | dinnygrupoalfa-dot/site-alfa-corrimao |
| Preset | Astro |
| Branch de produção em uso | main |
| Diretório raiz | raiz do repositório |
| Comando de build | npm run build |
| Diretório de saída | dist |
| Node | 24 |
| Segredos obrigatórios | nenhum |
| Backend / adapter | nenhum; output static |
| Projeto Cloudflare | alfa-corrimao-web |
| Endereço público de revisão | https://alfa-corrimao-web.pages.dev/ |
| Landing comercial | https://alfa-corrimao-web.pages.dev/corrimaos-para-predios/ |
| Origem GitHub | dinnygrupoalfa-dot/site-alfa-corrimao / main |
| Última implantação verificada em 15/11 | commit a19ab33b7dcd892c9dd79d883472c3e4a09c85b8; sucesso; 15 páginas |
| Domínio definitivo | somente após aprovação e migração separada |

O pacote pode ser instalado com npm ci a partir do package-lock.json versionado. O build inclui public/_headers e public/robots.txt.

O site é publicado automaticamente pelo **Git integration** do Cloudflare Pages quando há commits na branch `main`. Não há necessidade de script manual ou Wrangler deploy para a versão estática.

## Indexação

A versão de revisão tem noindex/nofollow no HTML, Disallow no robots.txt e X-Robots-Tag no _headers. Noindex não é controle de acesso: um pages.dev pode ser visitado por quem tiver o link. Se for necessária revisão privada, definir o acesso na configuração separada da hospedagem.

Antes da migração definitiva: validar contatos, conteúdo e fotografias; confirmar que o build publicado corresponde ao commit aprovado; configurar URL canônica e sitemap; retirar os três bloqueios de indexação; revisar rotas antigas e redirecionamentos. Não aplicar redirecionamentos presumidos.

Nenhuma mudança de DNS, domínio, HostGator ou projeto antigo é necessária para compilar ou testar localmente este código.

## Histórico de ativação

- 15/11/2026: GitHub conectado ao Cloudflare Pages; falha inicial por inconsistência `package.json`/`package-lock.json`, corrigida no GitHub.
- Commit `9dfed0074a3afc62670d50a11675a691f992eabc`: compilação e publicação bem-sucedidas do site original.
- Commit `a19ab33b7dcd892c9dd79d883472c3e4a09c85b8`: landing `/corrimaos-para-predios/` e imagens adicionadas; build e publicação **success**; 15 páginas.
- A publicação de revisão não significa aprovação editorial ou técnica. Nenhum domínio personalizado estava configurado quando a integração foi verificada.

## Última publicação de conteúdo — 17/11/2026

- Commit `3454408165254b9839631d1d0317856a99b94533`, status remoto **success** nas etapas de build e deploy; 16 páginas geradas. A Home, a landing de anúncios, corrimãos/escadarias, guarda-corpos e Obras Realizadas recebem novas imagens.
- Galeria completa: https://alfa-corrimao-web.pages.dev/obras-realizadas/pier-de-cubatao/ (**46 imagens do píer**).
- A execução futura de `npm run build` inclui `scripts/check-built.mjs`, verificando links, imagens, quantidade de páginas e relação de produtos.
- Domínio personalizado não conectado nesta fase. Aprovação visual e comercial pendente.
