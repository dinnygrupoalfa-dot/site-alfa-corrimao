#!/usr/bin/env python3
"""Extrai somente campos publicos dos trabalhos publicados do dump WordPress.
Uso: python3 scripts/extrair-trabalhos-wordpress.py CAMINHO_PRIVADO/backup.sql > src/data/legacy-works.json
NUNCA inclua o backup SQL no repositorio.
"""
import sys, re, json, html

def parse_values(src, columns):
    rows=[]; row=[]; i=0; n=len(src)
    while i<n:
        c=src[i]
        if c.isspace() or c==',': i+=1; continue
        if c=='(': row=[]; i+=1; continue
        if c==')':
            if len(row)!=len(columns): raise ValueError("Campos inconsistentes")
            rows.append(dict(zip(columns,row))); i+=1; continue
        if c=="'":
            i+=1; buf=[]
            while i<n:
                if src[i]=='\\' and i+1<n:
                    ch=src[i+1]; buf.append({'n':'\n','r':'\r','t':'\t','0':'\x00'}.get(ch,ch)); i+=2
                elif src[i]=="'": i+=1; break
                else: buf.append(src[i]); i+=1
            row.append(''.join(buf)); continue
        j=i
        while i<n and src[i] not in ',)': i+=1
        value=src[j:i].strip()
        row.append(None if value=='NULL' else value)
    return rows

def clean(value):
    return html.unescape(re.sub(r'<[^>]+>', ' ', value or '')).strip()

def main():
    if len(sys.argv)!=2: raise SystemExit("Informe o caminho do SQL privado")
    with open(sys.argv[1],encoding='utf-8') as f: sql=f.read()
    match=re.search(r'INSERT INTO `wp_posts` \((.*?)\) VALUES (.*?);\n',sql,re.S)
    if not match: raise SystemExit("INSERT wp_posts nao encontrado; conferir prefixo/tipo de backup")
    cols=re.findall(r'`([^`]+)`',match.group(1))
    rows=parse_values(match.group(2),cols)
    works=[r for r in rows if r['post_type']=='trabalho' and r['post_status']=='publish']
    result=[{'id':int(r['ID']),'slug':r['post_name'],
             'url':'/trabalho/'+r['post_name']+'/',
             'title':clean(r['post_title']),
             'description':clean(r['post_content']),
             'date':r['post_date'][:10],
             'images_status':'pendente_de_conferencia'} for r in works]
    slugs=[r['slug'] for r in result]
    if len(slugs)!=len(set(slugs)): raise SystemExit("Slugs duplicados: revisar")
    print(json.dumps(result,ensure_ascii=False,indent=2))

if __name__=='__main__': main()
