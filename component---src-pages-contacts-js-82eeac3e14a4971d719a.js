(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{AL77:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"contacts\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar ContactsBody = makeShortcode(\\"ContactsBody\\");\\nvar ContactsForm = makeShortcode(\\"ContactsForm\\");\\nvar LeftParagraph = makeShortcode(\\"LeftParagraph\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"h1\\", null, \\"contatti\\"), mdx(ContactsBody, {\\n    mdxType: \\"ContactsBody\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h2\\", null, \\"Ora vogliamo sapere di te. Stai cercando il posto giusto per realizzare un progetto innovativo sia dal punto di vista tecnico che di contenuti e performance?\\"), mdx(\\"p\\", null, \\"Entra in contatto con HUM! Compila il form, verrai subito contattato: non vediamo l\\\\u2019ora di ascoltare le tue idee, i tuoi progetti e le tue sfide!\\")), mdx(ContactsForm, {\\n    mdxType: \\"ContactsForm\\"\\n  })), mdx(LeftParagraph, {\\n    mdxType: \\"LeftParagraph\\"\\n  }, mdx(\\"p\\", null, \\"Dati Societari\\"), mdx(\\"p\\", null, \\"HUM S.r.l.\\", mdx(\\"br\\", null), \\"\\\\nSede legale: via Aldo Moro, 22 San Lazzaro di Savena\\", mdx(\\"br\\", null), \\"\\\\nNumero REA BO - 537739\\", mdx(\\"br\\", null), \\"\\\\nCodice fiscale e n. Iscrizione al registro imprese 03671581209\\", mdx(\\"br\\", null), \\"\\\\nPartita IVA IT 03671581209\\", mdx(\\"br\\", null), \\"\\\\nCapitale sociale I.V. 10.000,00 \\\\u20AC\\", mdx(\\"br\\", null))));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},zAea:function(e,t,n){"use strict";n.r(t);n("f3/d");var r=n("AL77"),o=n("q1tI"),a=n.n(o),c=n("A2+M"),i=n("E/Ix"),l=(n("40A7"),n("Zttt")),s=n("O1mb"),u=n("vrFN"),m=n("yrax"),d="sktx5le",p="c8u879n";var y="i221f7b",f="fkvi02d";function x(e){var t=e.type,n=e.placeholder,r=e.name,c=Object(o.useState)(""),i=c[0],l=c[1];return a.a.createElement("div",{className:f},a.a.createElement("input",{name:r,className:y,type:t,value:i,onChange:function(e){return l(e.target.value)}}),a.a.createElement("small",{style:i?{top:"1rem",fontSize:"0.75rem",opacity:"1",color:"#430f00",fontWeight:"700",textTransform:"uppercase"}:null},n))}var v="f1wfstxi";var g={GenericLink:s.b,ContactsBody:function(e){var t=e.children;return a.a.createElement("div",{className:p},t)},ContactsForm:function(){return a.a.createElement("form",{className:v,method:"POST",action:"https://formspree.io/mqkeazpw"},a.a.createElement(x,{type:"text",placeholder:"Il tuo nome e cognome",name:"name"}),a.a.createElement(x,{type:"text",placeholder:"indirizzo e-mail",name:"_replyto"}),a.a.createElement(x,{type:"text",placeholder:"telefono (facoltativo)",name:"phone"}),a.a.createElement("textarea",{style:{padding:"1rem"},className:y,type:"textarea",rows:"6",placeholder:"Scrivi qui la tua richiesta",name:"message"}),a.a.createElement(s.c,{value:"Invia",className:d}))},HeaderLogo:m.a};t.default=function(){var e=r.data.mdx.body;return a.a.createElement(l.a,null,a.a.createElement(u.a,null),a.a.createElement(i.MDXProvider,{components:g},a.a.createElement(c.MDXRenderer,null,e)))},n("VC6A")}}]);
//# sourceMappingURL=component---src-pages-contacts-js-82eeac3e14a4971d719a.js.map