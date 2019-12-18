(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BrJV:function(e,n,r){"use strict";r.r(n);var o=r("gtwB"),a=r("q1tI"),t=r.n(a),i=r("A2+M"),s=r("E/Ix"),c=r("Zttt"),p=r("O1mb"),d=r("vrFN"),l=r("n6RJ"),u=r("yrax"),m=r("PpyZ"),g=r("As+U"),x={GenericLink:p.b,PageHeader:g.a,TitledParagraph:m.a,HeaderLogo:u.a,LeftParagraph:function(e){var n=e.children,r=e.borders;return t.a.createElement(l.b,{margin:{marginTop:"5rem"},borders:r},n)}};n.default=function(){var e=o.data.mdx.body;return t.a.createElement(c.a,null,t.a.createElement(d.a,null),t.a.createElement(s.MDXProvider,{components:x},t.a.createElement(i.MDXRenderer,null,e)))}},gtwB:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"zone\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar PageHeader = makeShortcode(\\"PageHeader\\");\\nvar HeaderLogo = makeShortcode(\\"HeaderLogo\\");\\nvar LeftParagraph = makeShortcode(\\"LeftParagraph\\");\\nvar TitledParagraph = makeShortcode(\\"TitledParagraph\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(PageHeader, {\\n    mdxType: \\"PageHeader\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h1\\", null, \\".zone\\"), mdx(\\"p\\", null, mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CIl ragionamento pu\\\\xF2 essere considerato come l\\\\u2019esercizio di una combinazione di due capacit\\\\xE0, che possiamo chiamare \\", mdx(\\"strong\\", {\\n    parentName: \\"em\\"\\n  }, \\"intuizione e ingegnosit\\\\xE0\\"), \\".\\\\u201D (Alan Turing)\\"))), mdx(HeaderLogo, {\\n    mdxType: \\"HeaderLogo\\"\\n  })), mdx(LeftParagraph, {\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"p\\", null, \\"HUM crea architetture per siti web e app, realizza piattaforme e-commerce, si occupa di ricerca e sviluppo e cura ogni aspetto del project management, utilizzando due capacit\\\\xE0: \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"intuizione e ingegnosit\\\\xE0\\"), \\", a disposizione di aziende, business e team.\\")), mdx(TitledParagraph, {\\n    mdxType: \\"TitledParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Architettura siti web e app\\"), mdx(\\"div\\", null, mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"Con calcoli, misurazioni e progettazioni minuziose, HUM d\\\\xE0 vita ad ambienti digitali altamente performanti, accoglienti ed efficaci.\\"), \\" Proprio come un architetto segue il percorso che dal cantiere porta alla creazione di una casa, HUM segue ogni aspetto dell\\\\u2019edificazione di un sito, di un portale, di un\\\\u2019applicazione. Per ogni cliente viene creato un progetto, per ogni necessit\\\\xE0 viene costruito un percorso e per ogni sfida si trova una soluzione.\\"))), mdx(LeftParagraph, {\\n    borders: true,\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Creazione e-commerce: sviluppo, potenziamento e gestione\\"), mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"HUM progetta e realizza e-commerce B2B e B2C, trova le soluzioni tecniche e strategiche pi\\\\xF9 idonee\\"), \\" e, grazie a partnership consolidate, anche su aspetti legali relativi alle normative di diversi Paesi e pratiche necessarie per commercializzare con l\\\\u2019estero. HUM sa quanto tutto questo percorso sia da svolgere con minuziosit\\\\xE0 e competenza, sempre a fianco del cliente: anche per questo, collaboriamo con partner per fornire consulenze di marketing.\\")), mdx(LeftParagraph, {\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Assistenza e consulenza integrate\\"), mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"HUM accompagna ogni progetto anche nella fase del post-creazione: anche il miglior sito e la web app pi\\\\xF9 soddisfacente hanno bisogno di continuous improvement e continuous integration.\\"), \\" Proprio per questo, HUM segue le fasi di crescita e sviluppo, sempre pronti ad intuire nuove necessit\\\\xE0 e trasformare le sfide in opportunit\\\\xE0.\\")), mdx(LeftParagraph, {\\n    borders: true,\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Project management\\"), mdx(\\"div\\", null, mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"La forza di HUM \\\\xE8 la gestione di progetti complessi e di tutte le risorse ad essi necessarie: risorse umane ed economiche, planning e strategia, programmazione e controllo.\\"), \\" Lavoriamo con il focus fisso sugli obiettivi, con strumenti che ci permettono di essere on time e on budget, e con la flessibilit\\\\xE0 che consente al cliente di contenere i costi. Questa esperienza, consolidata negli anni anche grazie a partnership affidabili e strutturate, rende forti noi e i nostri clienti.\\"))), mdx(LeftParagraph, {\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Ricerca e sviluppo\\"), mdx(\\"div\\", null, mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"HUM ha radici solide nel presente e sguardo proiettato al futuro\\"), \\": proprio per questo elabora e fornisce ricerche nell\\\\u2019ambito di nuove tecnologie, intelligenza artificiale, machine learning, data engineering e profilazione utenti, grazie a studi continui e matching di competenze.\\"))), mdx(LeftParagraph, {\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Formazione\\"), mdx(\\"div\\", null, mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"Il know how diventa occasione di incontro e apprendimento: la sede di HUM \\\\xE8 un centro operativo di studi e crescita per professionisti e stakeholder\\"), \\", dove si progettano corsi su misura per il cliente e per le risorse interne, iter formativi per le squadre che devono gestire gli e-commerce, percorsi di supporto per startup che vogliono approfondire project e risk management, workshop con clienti, colleghi e partner per analizzare prospettive innovative e risultati di ricerche.\\"))));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')}}]);
//# sourceMappingURL=component---src-pages-zone-js-519b616250e1b438b3ad.js.map