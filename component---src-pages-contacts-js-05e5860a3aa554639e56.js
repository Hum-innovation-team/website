(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{AL77:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"contacts\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar ContactsBody = makeShortcode(\\"ContactsBody\\");\\nvar ContactsForm = makeShortcode(\\"ContactsForm\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"h1\\", null, \\"contatti\\"), mdx(ContactsBody, {\\n    mdxType: \\"ContactsBody\\"\\n  }, mdx(\\"div\\", null, mdx(\\"h2\\", null, \\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\\"), mdx(\\"p\\", null, \\"Vivamus neque libero, luctus euismod congue eu, accumsan vitae leo. Donec ut dolor ac metus vulputate volutpat. Vestibulum viverra semper convallis. In nec est vitae risus tempor consectetur. Duis venenatis lectus orci, in lobortis ante feugiat vel. Duis placerat tincidunt erat a consectetur. Praesent at aliquam nisl. Sed elementum feugiat lacus, et sodales ex dictum sit amet.\\")), mdx(ContactsForm, {\\n    mdxType: \\"ContactsForm\\"\\n  })));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},zAea:function(e,t,n){"use strict";n.r(t);var r=n("AL77"),o=n("q1tI"),a=n.n(o),c=n("A2+M"),s=n("E/Ix"),u=(n("40A7"),n("Zttt")),i=n("O1mb"),l=n("vrFN"),m=n("yrax"),d="sktx5le",p="c8u879n";var y="i221f7b",f="fkvi02d";function v(e){var t=e.type,n=e.placeholder,r=Object(o.useState)(""),c=r[0],s=r[1];return a.a.createElement("div",{className:f},a.a.createElement("input",{className:y,type:t,value:c,onChange:function(e){return s(e.target.value)}}),a.a.createElement("small",{style:c?{top:" 1rem",fontSize:" 0.75rem",opacity:" 1",color:" #430f00",fontWeight:" 700",textTransform:" uppercase"}:null},n))}var x="f1wfstxi";var b={GenericLink:i.b,ContactsBody:function(e){var t=e.children;return a.a.createElement("div",{className:p},t)},ContactsForm:function(){return a.a.createElement("form",{className:x},a.a.createElement(v,{type:"text",placeholder:"nome"}),a.a.createElement(v,{type:"text",placeholder:"cognome"}),a.a.createElement(v,{type:"text",placeholder:"indirizzo e-mail"}),a.a.createElement("textarea",{className:y,type:"textarea",placeholder:"Nome"}),a.a.createElement(i.c,{value:"Invia",className:d}))},HeaderLogo:m.a};t.default=function(){var e=r.data.mdx.body;return a.a.createElement(u.a,null,a.a.createElement(l.a,null),a.a.createElement(s.MDXProvider,{components:b},a.a.createElement(c.MDXRenderer,null,e)))},n("VC6A")}}]);
//# sourceMappingURL=component---src-pages-contacts-js-05e5860a3aa554639e56.js.map