---
id: "code"
---

<PageHeader>

<div>

# .code

_"La semplicità è una grande virtù, ma occorre un duro lavoro per raggiungerla nonché educazione per apprezzarla. E come se non bastasse: la complessità vende meglio" (Edsger Dijkstra)_

</div>

<HeaderLogo />

</PageHeader>

Nonostante i progetti non siano tutti complessi, ci piace pensare che l'eleganza e la qualità risiedano anche nelle cose semplici.<br/>
Proprio per questo motivo, in questa pagina, illustriamo brevemente le tecnologie impiegate nello sviluppo di questo sito web accompagnate da piccoli estratti di codice.

## Innovazione

Negli ultimi anni il mondo del web è stato profondamente stravolto da una serie di tecnologie che hanno rivoluzionato gli utenti e gli sviluppatori stessi.<br />
Abbiamo deciso quindi di fare una scelta a prova di futuro, una scelta che ci permettesse di usufruire delle ultime tecnologie disponibili fornendo cosi un'esperienza diversa dal solito.

La differenza più ovvia è la mancanza di refresh delle pagine. Noterai anche tu che navigando all'interno di questo portale non si verifica alcun "flash" sullo schermo, classico comportamento invece delle pagine web comuni. Questa caratteristica è ciò che denota una [single-page-application](https://it.wikipedia.org/wiki/Single-page_application): una tipologia di applicazioni (o siti web) pensata per evitare l'interruzione dell'esperienza d'uso.

Quella meno ovvia agli utenti, invece, è la completa assenza di codice server-side.<br/>
Moltissimi altri portali fanno un uso spropositato dei cosiddetti **CMS**, ovvero di applicazioni che forniscono agli amministratori un pannello dal quale è possibile creare i contenuti che andranno a popolare il sito. Detto così il problema non sembra esserci, ma i **costi di manutenzione**, dei server e i **rischi** di sicurezza legati all'utilizzo di tale codice portano spesso più problemi di quelli che vogliono risolvere.

## Tecnologie

Per poter progettare un tale sito web è possibile scegliere diverse tecnologie, più o meno complesse in base alle esigenze, per facilitare il lavoro.e<br/>
Una delle più solide e utilizzate proprio per la creazione di applicazioni single page è [GatsbyJS](https://www.gatsbyjs.org/), un framework basato su React.js, GraphQL e molte altre tecnologie di ultima generazione in ambito front-end.

Come anticipato, permette la creazione di siti web statici, ovvero di siti web che non hanno bisogno di alcun pannello di amministrazione online, bensì a partire da un insieme di file Markdown vengono generati file HTML, JavaScript e CSS che possono essere hostati su una qualunque CDN.<br />
Nel nostro caso abbiamo spinto le cose un po' più in là: utilizzando un [repository pubblico](https://github.com/Hum-innovation-team/website) su GitHub, abbiamo automatizzato la generazione di questi file attraverso le [Github Actions](https://github.com/features/actions) e la loro pubblicazione grazie alle [Github Pages](https://pages.github.com/).
In questo modo, ad ogni `git push`, il lavoro viene visivamente sincronizzato in pochi secondi a tutto il pubblico.<br />
Di seguito un estratto della configurazione del workflow

```yml
- name: Checkout
      uses: actions/checkout@v1

    - name: Building the website
      run: |
        yarn
        yarn run build
    - name: Deploying the website
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BASE_BRANCH: master
        BRANCH: gh-pages
        FOLDER: public
```

Inoltre essendo Gatsby un tool molto dinamico, esistono moltissime personalizzazioni da poter applicare al flusso di generazione delle pagine e di interpretazione del codice, così per fornire un autonomia editoriale si è scelto di introdurre dei blocchi primitivi di layout da poter utilizzare all'interno dei file Markdown come fossero tag HTML, ma con specifiche regole di stile.<br/>
Questo grazie all'uso di MarkdownX, una sorta di Markdown che permette l'inserzione di componenti React nel testo.

Di seguito vediamo un uso esemplificativo del renderer di MDX

```javascript
return (
  <Layout>
    <SEO />
    <MDXProvider
      components={{ GenericLink, PageHeader, TitledParagraph, HeaderLogo }}
    >
      <MDXRenderer>{body}</MDXRenderer>
    </MDXProvider>
  </Layout>
)
```

Ed ecco un uso di tali primitive all'interno di un file MarkdownX

```md
<PageHeader>

# Questo è un header

<HeaderLogo />

</PageHeader>

<TitledParagraph>
Questo è un paragrafo
</TitledParagraph>
```

È facile immaginare le potenzialità di uno strumento del genere: sicuro e di ampie possibilità di funzionamento e seppur queste tecnologie sono relativamente nuove e hanno ancora della strada da fare, siamo sicuri che non appena raggiungeranno una certa semplicità di utilizzo da parte di editori, writer, blogger e content creator in generale, diventerà il "standard de facto" nel web.

<p><span style="font-size: 18px; font-weight: bold;"> Hanno contribuito alla realizzazione di hum.srl:</span></p>

[@Silvia.Bernardi](https://www.linkedin.com/in/silvia-bernardi-comunicazione/) micro copy/UX Writing<br/>
[@Giacomo.Cerquone](https://giacomocerquone.com/) code/dev<br/>
[@TrapStudio](https://www.trapstudio.it/) UI/UX<br/>
