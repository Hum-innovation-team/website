(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{GHEQ:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"home\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar AlignRight = makeShortcode(\\"AlignRight\\");\\nvar GenericLink = makeShortcode(\\"GenericLink\\");\\nvar HomeBody = makeShortcode(\\"HomeBody\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"h1\\", null, \\"innovation needs, hum it!\\"), mdx(AlignRight, {\\n    mdxType: \\"AlignRight\\"\\n  }, mdx(GenericLink, {\\n    to: \\"/zone\\",\\n    mdxType: \\"GenericLink\\"\\n  }, \\"scopri di pi\\\\xF9\\")), mdx(\\"p\\", null, mdx(\\"span\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-wrapper\\",\\n    \\"style\\": {\\n      \\"position\\": \\"relative\\",\\n      \\"display\\": \\"block\\",\\n      \\"marginLeft\\": \\"auto\\",\\n      \\"marginRight\\": \\"auto\\",\\n      \\"maxWidth\\": \\"1400px\\"\\n    }\\n  }), \\"\\\\n      \\", mdx(\\"span\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-background-image\\",\\n    \\"style\\": {\\n      \\"paddingBottom\\": \\"41.02795311091074%\\",\\n      \\"position\\": \\"relative\\",\\n      \\"bottom\\": \\"0\\",\\n      \\"left\\": \\"0\\",\\n      \\"backgroundImage\\": \\"url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz11SyU7DMBScxGnSNmmcpWolBBIcOHHlRtOULqJSjwgJ8Tl8Bl/LjOssYGlq128ynjc2tiXcOGdAU2P6WmBysDCcjfb3Fjh4aDTVFd045Qg0t+WwB4pWREzBdFthwfXD0SKS8IiGphjWLdfkhHsaIN+JvtT8uaQIubEish+JV5jtCiTHHAkFIxG9Q0M3cheQG+1tbybjN0+b2p/EgvlIrieQXBLLL4OAAnNi5gUDOfEcOXrkgZEXdHtsOTjnQ8sJsSbuibv3zInIYSEx/BsSoatws8S89XmyfZmYuFCZh9p2CV1WzGKJmA4MCVbzroRh/UZZdZdDTkTBhdZq92CHmooJbcvhrY9BFxJL8C3tHc27F9Hn5V/BKR/Z/4Z7LiEFp/zIlZhXSLFMOer/5+iun9e9iT/C3dP6BV5JKBVnwbCIAAAAAElFTkSuQmCC\')\\",\\n      \\"backgroundSize\\": \\"cover\\",\\n      \\"display\\": \\"block\\"\\n    }\\n  })), \\"\\\\n  \\", mdx(\\"img\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-image\\",\\n    \\"alt\\": \\"box\\",\\n    \\"title\\": \\"box\\",\\n    \\"src\\": \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/fa92b/Wireframe_Head.png\\",\\n    \\"srcSet\\": [\\"/static/a4edea54f4be5ac0adfee986e4a4c22c/1bae2/Wireframe_Head.png 350w\\", \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/a8200/Wireframe_Head.png 700w\\", \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/fa92b/Wireframe_Head.png 1400w\\", \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/44231/Wireframe_Head.png 2100w\\", \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/f9c3f/Wireframe_Head.png 2800w\\", \\"/static/a4edea54f4be5ac0adfee986e4a4c22c/a1181/Wireframe_Head.png 4436w\\"],\\n    \\"sizes\\": \\"(max-width: 1400px) 100vw, 1400px\\",\\n    \\"loading\\": \\"lazy\\"\\n  })), \\"\\\\n    \\")), mdx(HomeBody, {\\n    mdxType: \\"HomeBody\\"\\n  }, mdx(\\"h2\\", null, \\"HUM, tecnologia e intuizione.\\"), mdx(\\"p\\", null, \\"Creiamo architetture web per l\\\\u2019innovazione e realizziamo siti, app e progetti\\\\nper trasformare il presente e generare il futuro.\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},RXBc:function(e,n,t){"use strict";t.r(n);var a=t("GHEQ"),r=t("q1tI"),o=t.n(r),i=t("A2+M"),c=t("E/Ix"),s=(t("40A7"),t("Zttt")),d=t("O1mb"),m=t("n6RJ"),p=t("vrFN"),u=(t("EDuE"),"h1llnfj4");var l={GenericLink:d.b,HomeBody:function(e){var n=e.children;return o.a.createElement("div",{className:u},n)},AlignRight:m.a};n.default=function(){var e=a.data.mdx.body;return o.a.createElement(s.a,{maxWidth:"1136px"},o.a.createElement(p.a,null),o.a.createElement(c.MDXProvider,{components:l},o.a.createElement(i.MDXRenderer,null,e)))},t("+Dfr")}}]);
//# sourceMappingURL=component---src-pages-index-js-a3d43213666686fa12a2.js.map