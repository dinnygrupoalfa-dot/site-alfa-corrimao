# Migração WordPress → Astro / Cloudflare Pages

Status: EM PREPARAÇÃO. Não mesclar na main nem alterar DNS sem aprovação.

## Fontes
- Backup original WordPress (SQL alfaco49_wrdprss1.sql e arquivos public_html), guardado em local privado.
- Inventário de migração: 327 trabalhos publicados, 6 páginas, 7 categorias, 386 registros de anexos. Os totais vêm do banco de dados, não de uma auditoria de indexação ao vivo.
- Repositório atual Astro e ambiente de prévia Pages.

## Regras de preservação
- Preservar a rota /trabalho/{slug}/ para os 327 trabalhos sempre que possível; gerar páginas Astro com dados reais do banco.
- Não inventar texto, imagens, autoria, clientes, normas ou especificações.
- Não publicar o SQL, wp-config.php, chaves, credenciais ou backup completo em GitHub público.
- Verificar a presença física e a correspondência das imagens antes de marcar uma página como pronta.
- Preservar URLs de imagens antigas quando viável, ou preparar redirecionamentos individuais comprovados.
- Validar Search Console, backlinks e Google Ads antes de alterar rotas antigas.
- Redirecionar com 301 apenas quando houver destino equivalente. Não redirecionar todos os trabalhos para a home.

## Etapas e critérios de conclusão
1. Extrair dados públicos dos 327 trabalhos para um arquivo de dados sem segredos; conferir slugs e caminhos de imagens.
2. Disponibilizar imagens necessárias, conferir links e gerar as 327 rotas /trabalho/{slug}/ com build estático.
3. Conferir páginas institucionais, categorias, paginação antiga e 301 necessários; registrar exceções.
4. Configurar site/canonical/sitemap e preparar remoção coordenada dos bloqueios de indexação (Layout.astro, robots.txt e _headers) SOMENTE no lançamento.
5. Executar build e testes automatizados de rotas, imagens, HTTP 200/301/404, acessibilidade básica e links.
6. Conferir GTM, GA4, Google Ads, WhatsApp, formulários e destino de campanhas, evitando duplicação de eventos.
7. Preparar zona DNS Cloudflare e Email Routing; inventariar MX/SPF/DKIM atuais e testar recebimento. Não mudar nameservers ainda.
8. Aprovar lançamento, registrar plano de rollback, fazer troca DNS e monitorar Search Console e erros 404.

## Bloqueios atuais intencionais
- Layout.astro: meta robots noindex,nofollow.
- public/robots.txt: Disallow: /.
- public/_headers: X-Robots-Tag: noindex,nofollow.

Esses bloqueios não devem ser removidos enquanto o ambiente for somente prévia. No lançamento devem ser removidos em conjunto e reavaliados para previews.

## Implementação inicial
- public/_redirects contém quatro candidatos de categorias antigas para rotas Astro existentes; ainda requerem validação de equivalência e testes.
- Nenhuma alteração em DNS, HostGator ou domínio é parte desta branch.

Referência Cloudflare: https://developers.cloudflare.com/pages/configuration/redirects/
