(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{DhPJ:function(e,n,a){"use strict";a.r(n);var t=a("hhe6"),o=a("q1tI"),s=a.n(o),r=a("A2+M"),d=a("E/Ix"),i=a("Zttt"),p=a("O1mb"),m=a("vrFN"),l=a("yrax"),c=a("PpyZ"),u=a("As+U"),x={GenericLink:p.b,PageHeader:u.a,TitledParagraph:c.a,HeaderLogo:l.a};n.default=function(){var e=t.data.mdx.body;return s.a.createElement(i.a,null,s.a.createElement(m.a,null),s.a.createElement(d.MDXProvider,{components:x},s.a.createElement(r.MDXRenderer,null,e)))}},hhe6:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"code\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar PageHeader = makeShortcode(\\"PageHeader\\");\\nvar HeaderLogo = makeShortcode(\\"HeaderLogo\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(PageHeader, {\\n    mdxType: \\"PageHeader\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h1\\", null, \\".code\\"), mdx(\\"p\\", null, mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CLa semplicit\\\\xE0 \\\\xE8 una grande virt\\\\xF9, ma occorre un duro lavoro per raggiungerla nonch\\\\xE9 educazione per apprezzarla. E come se non bastasse: la complessit\\\\xE0 vende meglio\\\\u201D (Edsger Dijkstra)\\"))), mdx(HeaderLogo, {\\n    mdxType: \\"HeaderLogo\\"\\n  })), mdx(\\"p\\", null, \\"Nonostante i progetti non siano tutti complessi, ci piace pensare che l\\\\u2019eleganza e la qualit\\\\xE0 risiedano anche nelle cose semplici.\\", mdx(\\"br\\", null), \\"\\\\nProprio per questo motivo, in questa pagina, illustriamo brevemente le tecnologie impiegate nello sviluppo di questo sito web accompagnate da piccoli estratti di codice.\\"), mdx(\\"h2\\", null, \\"Innovazione\\"), mdx(\\"p\\", null, \\"Negli ultimi anni il mondo del web \\\\xE8 stato profondamente stravolto da una serie di tecnologie che hanno rivoluzionato gli utenti e gli sviluppatori stessi.\\", mdx(\\"br\\", null), \\"\\\\nAbbiamo deciso quindi di fare una scelta a prova di futuro, una scelta che ci permettesse di usufruire delle ultime tecnologie disponibili fornendo cosi un\\\\u2019esperienza diversa dal solito.\\"), mdx(\\"p\\", null, \\"La differenza pi\\\\xF9 ovvia \\\\xE8 la mancanza di refresh delle pagine. Noterai anche tu che navigando all\\\\u2019interno di questo portale non si verifica alcun \\\\u201Cflash\\\\u201D sullo schermo, classico comportamento invece delle pagine web comuni. Questa caratteristica \\\\xE8 ci\\\\xF2 che denota una \\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://it.wikipedia.org/wiki/Single-page_application\\"\\n  }), \\"single-page-application\\"), \\": una tipologia di applicazioni (o siti web) pensata per evitare l\\\\u2019interruzione dell\\\\u2019esperienza d\\\\u2019uso.\\"), mdx(\\"p\\", null, \\"Quella meno ovvia agli utenti, invece, \\\\xE8 la completa assenza di codice server-side.\\", mdx(\\"br\\", null), \\"\\\\nMoltissimi altri portali fanno un uso spropositato dei cosiddetti \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"CMS\\"), \\", ovvero di applicazioni che forniscono agli amministratori un pannello dal quale \\\\xE8 possibile creare i contenuti che andranno a popolare il sito. Detto cos\\\\xEC il problema non sembra esserci, ma i \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"costi di manutenzione\\"), \\", dei server e i \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"rischi\\"), \\" di sicurezza legati all\\\\u2019utilizzo di tale codice portano spesso pi\\\\xF9 problemi di quelli che vogliono risolvere.\\"), mdx(\\"h2\\", null, \\"Tecnologie\\"), mdx(\\"p\\", null, \\"Per poter progettare un tale sito web \\\\xE8 possibile scegliere diverse tecnologie, pi\\\\xF9 o meno complesse in base alle esigenze, per facilitare il lavoro.e\\", mdx(\\"br\\", null), \\"\\\\nUna delle pi\\\\xF9 solide e utilizzate proprio per la creazione di applicazioni single page \\\\xE8 \\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://www.gatsbyjs.org/\\"\\n  }), \\"GatsbyJS\\"), \\", un framework basato su React.js, GraphQL e molte altre tecnologie di ultima generazione in ambito front-end.\\"), mdx(\\"p\\", null, \\"Come anticipato, permette la creazione di siti web statici, ovvero di siti web che non hanno bisogno di alcun pannello di amministrazione online, bens\\\\xEC a partire da un insieme di file Markdown vengono generati file HTML, JavaScript e CSS che possono essere hostati su una qualunque CDN.\\", mdx(\\"br\\", null), \\"\\\\nNel nostro caso abbiamo spinto le cose un po\\\\u2019 pi\\\\xF9 in l\\\\xE0: utilizzando un \\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://github.com/Hum-innovation-team/website\\"\\n  }), \\"repository pubblico\\"), \\" su GitHub, abbiamo automatizzato la generazione di questi file attraverso le \\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://github.com/features/actions\\"\\n  }), \\"Github Actions\\"), \\" e la loro pubblicazione grazie alle \\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://pages.github.com/\\"\\n  }), \\"Github Pages\\"), \\".\\\\nIn questo modo, ad ogni \\", mdx(\\"code\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"className\\": \\"language-text\\"\\n  }), \\"git push\\"), \\", il lavoro viene visivamente sincronizzato in pochi secondi a tutto il pubblico.\\", mdx(\\"br\\", null), \\"\\\\nDi seguito un estratto della configurazione del workflow\\"), mdx(\\"div\\", {\\n    \\"className\\": \\"gatsby-highlight\\",\\n    \\"data-language\\": \\"yml\\"\\n  }, mdx(\\"pre\\", _extends({\\n    parentName: \\"div\\"\\n  }, {\\n    \\"className\\": \\"language-yml\\"\\n  }), mdx(\\"code\\", _extends({\\n    parentName: \\"pre\\"\\n  }, {\\n    \\"className\\": \\"language-yml\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"name\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" Checkout\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"uses\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" actions/checkout@v1\\\\n\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"name\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" Building the website\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"run\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"|\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token scalar string\\"\\n  }), \\"\\\\n        yarn\\\\n        yarn run build\\"), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"name\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" Deploying the website\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"uses\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" JamesIves/github\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\"pages\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\"deploy\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\"action@releases/v3\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"with\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\"\\\\n        \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"ACCESS_TOKEN\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" $\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"{\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"{\\"), \\" secrets.ACCESS_TOKEN \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"}\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"}\\"), \\"\\\\n        \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"BASE_BRANCH\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" master\\\\n        \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"BRANCH\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" gh\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"-\\"), \\"pages\\\\n        \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token key atrule\\"\\n  }), \\"FOLDER\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\":\\"), \\" public\\"))), mdx(\\"p\\", null, \\"Inoltre essendo Gatsby un tool molto dinamico, esistono moltissime personalizzazioni da poter applicare al flusso di generazione delle pagine e di interpretazione del codice, cos\\\\xEC per fornire un autonomia editoriale si \\\\xE8 scelto di introdurre dei blocchi primitivi di layout da poter utilizzare all\\\\u2019interno dei file Markdown come fossero tag HTML, ma con specifiche regole di stile.\\", mdx(\\"br\\", null), \\"\\\\nQuesto grazie all\\\\u2019uso di MarkdownX, una sorta di Markdown che permette l\\\\u2019inserzione di componenti React nel testo.\\"), mdx(\\"p\\", null, \\"Di seguito vediamo un uso esemplificativo del renderer di MDX\\"), mdx(\\"div\\", {\\n    \\"className\\": \\"gatsby-highlight\\",\\n    \\"data-language\\": \\"javascript\\"\\n  }, mdx(\\"pre\\", _extends({\\n    parentName: \\"div\\"\\n  }, {\\n    \\"className\\": \\"language-javascript\\"\\n  }), mdx(\\"code\\", _extends({\\n    parentName: \\"pre\\"\\n  }, {\\n    \\"className\\": \\"language-javascript\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token keyword\\"\\n  }), \\"return\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"(\\"), \\"\\\\n  \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), \\"Layout\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token constant\\"\\n  }), \\"SEO\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"/\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), \\"MDXProvider\\\\n      components\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"=\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"{\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"{\\"), \\" GenericLink\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\",\\"), \\" PageHeader\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\",\\"), \\" TitledParagraph\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\",\\"), \\" HeaderLogo \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"}\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"}\\"), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), \\"MDXRenderer\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"{\\"), \\"body\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"}\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"/\\"), \\"MDXRenderer\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"/\\"), \\"MDXProvider\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n  \\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"<\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\"/\\"), \\"Layout\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token operator\\"\\n  }), \\">\\"), \\"\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\")\\")))), mdx(\\"p\\", null, \\"Ed ecco un uso di tali primitive all\\\\u2019interno di un file MarkdownX\\"), mdx(\\"div\\", {\\n    \\"className\\": \\"gatsby-highlight\\",\\n    \\"data-language\\": \\"md\\"\\n  }, mdx(\\"pre\\", _extends({\\n    parentName: \\"div\\"\\n  }, {\\n    \\"className\\": \\"language-md\\"\\n  }), mdx(\\"code\\", _extends({\\n    parentName: \\"pre\\"\\n  }, {\\n    \\"className\\": \\"language-md\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"<\\"), \\"PageHeader\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\">\\")), \\"\\\\n\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token title important\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"#\\"), \\" Questo \\\\xE8 un header\\"), \\"\\\\n\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"<\\"), \\"HeaderLogo\\"), \\" \\", mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"/>\\")), \\"\\\\n\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"</\\"), \\"PageHeader\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\">\\")), \\"\\\\n\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"<\\"), \\"TitledParagraph\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\">\\")), \\"\\\\nQuesto \\\\xE8 un paragrafo\\\\n\\", mdx(\\"span\\", _extends({\\n    parentName: \\"code\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token tag\\"\\n  }), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\"</\\"), \\"TitledParagraph\\"), mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"token punctuation\\"\\n  }), \\">\\"))))), mdx(\\"p\\", null, \\"\\\\xC8 facile immaginare le potenzialit\\\\xE0 di uno strumento del genere: sicuro e di ampie possibilit\\\\xE0 di funzionamento e seppur queste tecnologie sono relativamente nuove e hanno ancora della strada da fare, siamo sicuri che non appena raggiungeranno una certa semplicit\\\\xE0 di utilizzo da parte di editori, writer, blogger e content creator in generale, diventer\\\\xE0 il \\\\u201Cstandard de facto\\\\u201D nel web.\\"), mdx(\\"p\\", null, \\"Questa \\\\xE8 la prima release del sito, ma stiamo gi\\\\xE0 lavorando alla sua evoluzione, e ne vedrete delle belle. Vogliamo che il nostro sito sia la DEMO del nostro modo di lavorare e pensare il web.\\"), mdx(\\"p\\", null, mdx(\\"span\\", {\\n    style: {\\n      \\"fontSize\\": \\"18px\\",\\n      \\"fontWeight\\": \\"bold\\"\\n    }\\n  }, \\" Hanno contribuito alla realizzazione di hum.srl:\\")), mdx(\\"p\\", null, mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://www.linkedin.com/in/silvia-bernardi-comunicazione/\\"\\n  }), \\"@Silvia.Bernardi\\"), \\" micro copy/UX Writing\\", mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://giacomocerquone.com/\\"\\n  }), \\"@Giacomo.Cerquone\\"), \\" code/dev\\", mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"a\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"href\\": \\"https://www.trapstudio.it/\\"\\n  }), \\"@TrapStudio\\"), \\" UI/UX\\", mdx(\\"br\\", null)));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')}}]);
//# sourceMappingURL=component---src-pages-code-js-cf0a9fbf5ba728ce1f48.js.map