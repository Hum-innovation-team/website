(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Fl6W:function(e,n,a){"use strict";a.r(n);var r=a("V329"),o=a("q1tI"),t=a.n(o),i=a("Wbzz"),l=a("A2+M"),d=a("E/Ix"),s=a("Zttt"),p=a("O1mb"),c=a("vrFN"),u=a("n6RJ"),m=a("yrax"),x=a("As+U"),g=a("PpyZ");var f={Accordion:p.a,PageHeader:x.a,ExpertBody:function(e){var n=e.children;return t.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},n)},LeftParagraph:u.b,TitledParagraph:g.a,HeaderLogo:m.a,AlignRight:u.a,Link:i.Link};n.default=function(){var e=r.data.mdx.body;return t.a.createElement(s.a,null,t.a.createElement(c.a,null),t.a.createElement(d.MDXProvider,{components:f},t.a.createElement(l.MDXRenderer,null,e)))}},V329:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"management\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar PageHeader = makeShortcode(\\"PageHeader\\");\\nvar HeaderLogo = makeShortcode(\\"HeaderLogo\\");\\nvar Link = makeShortcode(\\"Link\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(PageHeader, {\\n    mdxType: \\"PageHeader\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h1\\", null, \\".management\\"), mdx(\\"p\\", null, mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CGatto del Cheshire\\\\u201D Alice cominci\\\\xF2 \\\\u201Cmi diresti per favore, che strada dovrei prendere da qui?\\\\u201D\\"), mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"\\\\u201CDipende da dove vuoi arrivare\\\\u201D disse il Gatto.\\"), mdx(\\"br\\", null), \\"\\\\n\\", mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, \\"L. Carrol\\"), mdx(\\"br\\", null))), mdx(HeaderLogo, {\\n    mdxType: \\"HeaderLogo\\"\\n  })), mdx(\\"p\\", null, \\"\\\\xC8 proprio con spirito sempre focalizzato sull\\\\u2019obiettivo che HUM si approccia al \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"project management\\"), \\", occupandosi di tutti gli aspetti necessari per la realizzazione di percorsi articolati e progettazioni multiformi, accompagnando il cliente lungo la miglior strada, tenendo presente il monito del Gatto ad Alice: \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"la differenza la fa dove si vuole andare.\\")), mdx(\\"p\\", null, \\"HUM sa tenere gli occhi fissi sul \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"dove\\"), \\", e sa che la forza di un progetto \\\\xE8 la sua \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"definizione temporale limitata\\"), \\": aprire e chiudere, sviluppare e sintetizzare. HUM sa anche che, \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"dove risiede la forza, risiede la sfida\\"), \\": grazie all\\\\u2019organizzazione flessibile, al team attivato su necessit\\\\xE0 del progetto stesso, alla suddivisione del lavoro in base alle competenze e all\\\\u2019organizzazione, HUM \\\\xE8 in grado di prendere decisioni, farle eseguire in modo efficace e portare a casa risultati unici, \\", mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"proprio come \\\\xE8 unico ogni progetto \\\\u2026 e ogni cliente\\"), \\".\\"), mdx(\\"p\\", null, mdx(\\"strong\\", {\\n    parentName: \\"p\\"\\n  }, \\"In particolare, HUM gestisce:\\")), mdx(\\"div\\", null, mdx(\\"ul\\", null, mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"l\\\\u2019analisi preliminare e la progettazione architettonica del sistema/piattaforma/sito\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"l\\\\u2019attivazione e il coordinamento del team necessario al progetto\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"il coordinamento della realizzazione di web products: siti, applicazioni, e-commerce, piattaforme\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"il dialogo operativo con tutte le professionalit\\\\xE0 coinvolte\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"consulenza completa per aspetti legali\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"la ricerca di bandi, fondi e finanziamenti che possano agevolare la realizzazione del progetto\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"studi e approfondimenti utili per valorizzare al massimo il prodotto creato\\"), mdx(\\"li\\", {\\n    parentName: \\"ul\\"\\n  }, \\"relazioni con partner\\"))), mdx(Link, {\\n    to: \\"/team\\",\\n    mdxType: \\"Link\\"\\n  }, \\"Ad occuparci di tutto questo, ci siamo noi\\"));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')}}]);
//# sourceMappingURL=component---src-pages-management-js-7505a9b6710a72993957.js.map