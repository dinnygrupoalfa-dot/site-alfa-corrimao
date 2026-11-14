# Parâmetros para futura integração GitHub–Cloudflare Pages

Documento de preparação. Não executado nesta entrega.

| Parâmetro | Valor |
| --- | --- |
| Repositório | dinnygrupoalfa-dot/site-alfa-corrimao |
| Preset | Astro |
| Branch de produção proposta | main |
| Diretório raiz | raiz do repositório |
| Comando de build | npm run build |
| Diretório de saída | dist |
| Node | 24 |
| Segredos obrigatórios | nenhum |
| Backend / adapter | nenhum; output static |
| Domínio inicial | URL pages.dev retornada pela futura criação do projeto |
| Domínio definitivo | somente após aprovação e migração separada |

O pacote pode ser instalado com npm ci a partir do package-lock.json versionado. O build inclui public/_headers e public/robots.txt.

Não usar publicação manual, Wrangler deploy, API de deploy ou ChatGPT Sites. Não há workflow de publicação neste repositório.

## Indexação

A versão de revisão tem noindex/nofollow no HTML, Disallow no robots.txt e X-Robots-Tag no _headers. Noindex não é controle de acesso: um pages.dev pode ser visitado por quem tiver o link. Se for necessária revisão privada, definir o acesso na configuração separada da hospedagem.

Antes da migração definitiva: validar contatos, conteúdo e fotografias; confirmar que o build publicado corresponde ao commit aprovado; configurar URL canônica e sitemap; retirar os três bloqueios de indexação; revisar rotas antigas e redirecionamentos. Não aplicar redirecionamentos presumidos.

Nenhuma mudança de DNS, domínio, HostGator ou projeto antigo é necessária para compilar ou testar localmente este código.
