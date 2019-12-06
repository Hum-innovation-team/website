# HUM website

## Istruzioni

I contenuti delle pagine sono prese dai markdown che si trovano nella cartella "content" della root di questo progetto.<br/>
All'interno vi è un file .md per ogni pagina (7 compresa la home e i dati nel footer).<br/>

## MarkdownJSX

MDX permette di utilizzare componenti React che fungono da primitive per l'organizzazione visiva del contenuto delle pagine.<br/>
E' fondamentale che nell'inserimento di markdown tra i tag di una primitiva vi sia una riga vuota subito dopo il tag di apertura e subito prima del tag di chiusura.

## Altre info utili

### frontmatter

Il frontmatter è il contenuto incluso tra i tre trattini:

```md
---
title: 'whatever',
btn1: "scopri"
---
```

lo usiamo per accoppiare pagine visive con il contenuto markdown.
