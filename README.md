# HUM website

## Istruzioni

I contenuti delle pagine sono prese dai markdown che si trovano nella cartella "content" della root di questo progetto.<br/>
All'interno vi è un file .md per ogni pagina (7 compresa la home e i dati nel footer).<br/>

## MarkdownJSX

MDX permette di utilizzare componenti React che fungono da primitive per l'organizzazione visiva del contenuto delle pagine.<br/>
E' fondamentale che nell'inserimento di markdown tra i tag di una primitiva vi sia una riga vuota subito dopo il tag di apertura e subito prima del tag di chiusura.

Esempio:

```JSX
<GenericLink to="/zone">scopri di più</GenericLink>
```

oppure

```JSX
<HomeBody> <!-- riga vuota sotto -->

## Lorem ipsum dolor sit amet, lorem consectetur adipiscing sed elit.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque libero, luctus euismod congue eu, accumsan vitae leo. Donec ut dolor ac metus vulputate volutpat. Vestibulum viverra semper convallis. In nec est vitae risus tempor consectetur.

</HomeBody> <!-- riga vuota sopra -->
```

## Altre info utili

### frontmatter

Il frontmatter è il contenuto incluso all'inizio degli md:

```md
---
title: 'whatever',
btn1: "scopri"
---
```

lo usiamo per accoppiare pagine visive con il contenuto markdown attraverso il campo `id`.
