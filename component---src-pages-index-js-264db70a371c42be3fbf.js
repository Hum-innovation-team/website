(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GHEQ:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"home\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar AlignRight = makeShortcode(\\"AlignRight\\");\\nvar GenericLink = makeShortcode(\\"GenericLink\\");\\nvar HomeBody = makeShortcode(\\"HomeBody\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"h1\\", null, \\"innovation needs, hum it!\\"), mdx(AlignRight, {\\n    mdxType: \\"AlignRight\\"\\n  }, mdx(GenericLink, {\\n    to: \\"/zone\\",\\n    mdxType: \\"GenericLink\\"\\n  }, \\"scopri di pi\\\\xF9\\")), mdx(\\"p\\", null, mdx(\\"span\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-wrapper\\",\\n    \\"style\\": {\\n      \\"position\\": \\"relative\\",\\n      \\"display\\": \\"block\\",\\n      \\"marginLeft\\": \\"auto\\",\\n      \\"marginRight\\": \\"auto\\",\\n      \\"maxWidth\\": \\"1042px\\"\\n    }\\n  }), \\"\\\\n      \\", mdx(\\"a\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-link\\",\\n    \\"href\\": \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png\\",\\n    \\"style\\": {\\n      \\"display\\": \\"block\\"\\n    },\\n    \\"target\\": \\"_blank\\",\\n    \\"rel\\": [\\"noopener\\"]\\n  }), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"a\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-background-image\\",\\n    \\"style\\": {\\n      \\"paddingBottom\\": \\"47.600767754318625%\\",\\n      \\"position\\": \\"relative\\",\\n      \\"bottom\\": \\"0\\",\\n      \\"left\\": \\"0\\",\\n      \\"backgroundImage\\": \\"url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz5WSSw6DMAxEDYRf+RuhLiu1q94h2fb+R+pMcCVYkSI9Jopsx55E/CoVmMASVGpoGxLwBnIa6AA2cBf8Rmz2gEUrBiChvgKxjTXQWfFcfl/sUqX9LFirZEi4xFM15nZhkfOHgAL0KJZDXRIqjl1BB7MtB06syESwLlPGjSNrVE42g1u0TGUVLEbPU6A8GUofr9mLsdvZpnNHD5vjyD4BO5xWDcEuBGoe7n60VpyGSwJZjMe4pxu2IqWnNxqNLUIK6M4uhc+us7e8sdgbvLD5gP6F5Tw97drfYvYFphw/8Dgxur0AAAAASUVORK5CYII=\')\\",\\n      \\"backgroundSize\\": \\"cover\\",\\n      \\"display\\": \\"block\\"\\n    }\\n  })), \\"\\\\n  \\", mdx(\\"img\\", _extends({\\n    parentName: \\"a\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-image\\",\\n    \\"alt\\": \\"box\\",\\n    \\"title\\": \\"box\\",\\n    \\"src\\": \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png\\",\\n    \\"srcSet\\": [\\"/static/67c23f12fa4154b463ae024e204aa01b/1bae2/home-box.png 350w\\", \\"/static/67c23f12fa4154b463ae024e204aa01b/a8200/home-box.png 700w\\", \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png 1042w\\"],\\n    \\"sizes\\": \\"(max-width: 1042px) 100vw, 1042px\\",\\n    \\"loading\\": \\"lazy\\"\\n  })), \\"\\\\n  \\"), \\"\\\\n    \\")), mdx(HomeBody, {\\n    mdxType: \\"HomeBody\\"\\n  }, mdx(\\"h2\\", null, \\"HUM, tecnologia e intuizione.\\"), mdx(\\"p\\", null, \\"Creiamo architetture web per l\\\\u2019innovazione e realizziamo siti, app e progetti\\\\nper trasformare il presente e generare il futuro.\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},RXBc:function(e,n,t){"use strict";t.r(n);var r=t("GHEQ"),o=t("q1tI"),a=t.n(o),i=t("A2+M"),c=t("E/Ix"),s=(t("40A7"),t("Zttt")),u=t("O1mb"),l=t("n6RJ"),p=t("vrFN"),m=(t("EDuE"),"h1llnfj4");var d={GenericLink:u.b,HomeBody:function(e){var n=e.children;return a.a.createElement("div",{className:m},n)},AlignRight:l.a};n.default=function(){var e=r.data.mdx.body;return a.a.createElement(s.a,{maxWidth:"1136px"},a.a.createElement(p.a,null),a.a.createElement(c.MDXProvider,{components:d},a.a.createElement(i.MDXRenderer,null,e)))},t("+Dfr")},n6RJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return l}));t("jm62"),t("ioFf"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V");var r=t("q1tI"),o=t.n(r);t("40A7");function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){var n=e.children;return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end"}},n)}var u="l18ui70s";function l(e){var n=e.children,t=e.margin;return o.a.createElement("div",{className:u,style:i({},t)},n)}t("Izvg")}}]);
//# sourceMappingURL=component---src-pages-index-js-264db70a371c42be3fbf.js.map