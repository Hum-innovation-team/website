(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Fl6W:function(e,n,a){"use strict";a.r(n);var o=a("V329"),r=a("q1tI"),t=a.n(r),i=a("Wbzz"),l=a("A2+M"),d=a("E/Ix"),s=a("Zttt"),c=a("O1mb"),p=a("vrFN"),m=a("n6RJ"),u=a("yrax"),g=a("As+U"),x=a("PpyZ");var f={Accordion:c.a,PageHeader:g.a,ExpertBody:function(e){var n=e.children;return t.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n)},LeftParagraph:m.b,TitledParagraph:x.a,HeaderLogo:u.a,AlignRight:m.a,Link:i.Link};n.default=function(){var e=o.data.mdx.body;return t.a.createElement(s.a,null,t.a.createElement(p.a,null),t.a.createElement(d.MDXProvider,{components:f},t.a.createElement(l.MDXRenderer,null,e)))}},V329:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"management\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar PageHeader = makeShortcode(\\"PageHeader\\");\\nvar HeaderLogo = makeShortcode(\\"HeaderLogo\\");\\nvar Link = makeShortcode(\\"Link\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(PageHeader, {\\n    mdxType: \\"PageHeader\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h1\\", null, \\".management\\"), mdx(\\"p\\", null, mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CGatto del Cheshire\\\\u201D Alice cominci\\\\xF2 \\\\u201Cmi diresti per favore, che strada dovrei prendere da qui?\\\\u201D\\"), mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CDipende da \\", mdx(\\"strong\\", {\\n    parentName: \\"em\\"\\n  }, \\"dove vuoi arrivare\\"), \\"\\\\u201D disse il Gatto.\\"), mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"L. Carrol\\"), mdx(\\"br\\", null))), mdx(HeaderLogo, {\\n    mdxType: \\"HeaderLogo\\"\\n  })), mdx(\\"p\\", null, \\"\\\\xC8 proprio con spirito sempre focalizzato sull\\\\u2019obiettivo che HUM si approccia al \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"project management\\"), \\": si occupa di tutti gli aspetti necessari per la realizzazione di percorsi articolati, e accompagna il cliente lungo la miglior strada, tenendo sempre presente il monito del Gatto ad Alice: \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"la differenza la fa dove si vuole andare\\"), \\".\\"), mdx(\\"p\\", null, \\"La forza di HUM \\\\xE8 \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"tenere gli occhi fissi sul dove\\"), \\" e, per farlo, ha deciso di mixare le metodologie scientifiche di project management - metodo waterfall e metodo agile - scegliendo di volta in volta gli elementi di ciascuno pi\\\\xF9 idonei al progetto in corso e al team che lo sviluppa. L\\\\u2019unico aspetto a cui non rinuncia mai \\\\xE8 il \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"creare microprogetti\\"), \\" che incrementano la funzionalit\\\\xE0 complessive (iterazioni), la capacit\\\\xE0 di adattarsi con forza alla necessit\\\\xE0.\\\\nHUM sa anche che, \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"dove risiede la forza, risiede la sfida\\"), \\": grazie all\\\\u2019organizzazione flessibile, al team attivato su necessit\\\\xE0 del progetto, alla suddivisione del lavoro in base alle competenze e all\\\\u2019organizzazione, \\\\xE8 in grado di prendere decisioni, farle eseguire in modo efficace e portare a casa risultati unici, \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"proprio come \\\\xE8 unico ogni progetto \\\\u2026 e ogni cliente\\"), \\". \\"), mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"In particolare, HUM gestisce:\\")), mdx(\\"div\\", null, mdx(\\"p\\", null, \\"l\\\\u2019analisi preliminare e la progettazione architettonica del sistema, piattaforma, sito o app \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" l\\\\u2019attivazione e il coordinamento del team necessario al progetto \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" il coordinamento della realizzazione di web products: siti, applicazioni, e-commerce, piattaforme \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" il dialogo operativo con tutte le professionalit\\\\xE0 coinvolte \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" la ricerca di bandi, fondi e finanziamenti che possano agevolare la realizzazione del progetto \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" studi e approfondimenti utili per valorizzare al massimo il prodotto creato \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" relazioni con partner \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" gestione dei team di partner e stackholder \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"/\\"), \\" relazione con le risorse interne all\\\\u2019azienda del cliente\\")), mdx(Link, {\\n    to: \\"/team\\",\\n    mdxType: \\"Link\\"\\n  }, \\"Ad occuparci di tutto questo, ci siamo noi\\"));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')}}]);
//# sourceMappingURL=component---src-pages-management-js-4bbf8d07521430486bec.js.map