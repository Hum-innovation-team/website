(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/Xql":function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"team\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar PageHeader = makeShortcode(\\"PageHeader\\");\\nvar HeaderLogo = makeShortcode(\\"HeaderLogo\\");\\nvar TitledParagraph = makeShortcode(\\"TitledParagraph\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(PageHeader, {\\n    mdxType: \\"PageHeader\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h1\\", null, \\".team\\"), mdx(\\"p\\", null, \\"Il matematico Alan Turing nella prima met\\\\xE0 del \\\\u2018900, si \\\\xE8 chiesto se \\", mdx(\\"em\\", {\\n    parentName: \\"p\\"\\n  }, mdx(\\"strong\\", {\\n    parentName: \\"em\\"\\n  }, \\"\\\\u201Cle macchine sono in grado di pensare\\\\u201D\\")), \\". Oggi, il team di HUM mette il proprio lavoro a servizio di questa domanda, sviluppando innovazioni con l\\\\u2019obiettivo di avvicinare le performance tecnologiche alle necessit\\\\xE0 umane.\\")), mdx(HeaderLogo, {\\n    mdxType: \\"HeaderLogo\\"\\n  })), mdx(TitledParagraph, {\\n    mdxType: \\"TitledParagraph\\"\\n  }, mdx(\\"h2\\", null, \\"Chi siamo\\"), mdx(\\"div\\", null, mdx(\\"p\\", null, \\"La squadra di HUM \\\\xE8 pronta per soddisfare le necessit\\\\xE0 del progetto che viene affidato: programmatori, it expert, grafici, project manager, esperti legali, designer, ux expert, marketing specialist lavorano per far dialogare intelligenze digitali ed esigenze di aziende, business e piattaforme.\\"))));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},"As+U":function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var t=n("q1tI"),a=n.n(t),o=(n("40A7"),"p1aaxc76");function i(e){var r=e.children;return a.a.createElement("header",{className:o},r)}n("mL/S")},PpyZ:function(e,r,n){"use strict";n.d(r,"a",(function(){return i}));var t=n("q1tI"),a=n.n(t),o=(n("40A7"),"t1mezbqz");function i(e){var r=e.children;return a.a.createElement("div",{className:o},r)}n("mZ7+")},xkl6:function(e,r,n){"use strict";n.r(r);var t=n("/Xql"),a=n("q1tI"),o=n.n(a),i=n("A2+M"),s=n("E/Ix"),c=n("Zttt"),d=n("O1mb"),u=n("vrFN"),l=n("yrax"),m=n("PpyZ"),p=n("As+U"),g={GenericLink:d.b,PageHeader:p.a,TitledParagraph:m.a,HeaderLogo:l.a};r.default=function(){var e=t.data.mdx.body;return o.a.createElement(c.a,null,o.a.createElement(u.a,null),o.a.createElement(s.MDXProvider,{components:g},o.a.createElement(i.MDXRenderer,null,e)))}}}]);
//# sourceMappingURL=component---src-pages-team-js-d0faaa7c9a8433e47174.js.map