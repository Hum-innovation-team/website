(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{GHEQ:function(e){e.exports=JSON.parse('{"data":{"mdx":{"body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"id\\": \\"home\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar AlignRight = makeShortcode(\\"AlignRight\\");\\nvar GenericLink = makeShortcode(\\"GenericLink\\");\\nvar HomeBody = makeShortcode(\\"HomeBody\\");\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"h1\\", null, \\"innovation needs, hum it!\\"), mdx(AlignRight, {\\n    mdxType: \\"AlignRight\\"\\n  }, mdx(GenericLink, {\\n    to: \\"/zone\\",\\n    mdxType: \\"GenericLink\\"\\n  }, \\"scopri di pi\\\\xF9\\")), mdx(\\"p\\", null, mdx(\\"span\\", _extends({\\n    parentName: \\"p\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-wrapper\\",\\n    \\"style\\": {\\n      \\"position\\": \\"relative\\",\\n      \\"display\\": \\"block\\",\\n      \\"marginLeft\\": \\"auto\\",\\n      \\"marginRight\\": \\"auto\\",\\n      \\"maxWidth\\": \\"1042px\\"\\n    }\\n  }), \\"\\\\n      \\", mdx(\\"a\\", _extends({\\n    parentName: \\"span\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-link\\",\\n    \\"href\\": \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png\\",\\n    \\"style\\": {\\n      \\"display\\": \\"block\\"\\n    },\\n    \\"target\\": \\"_blank\\",\\n    \\"rel\\": [\\"noopener\\"]\\n  }), \\"\\\\n    \\", mdx(\\"span\\", _extends({\\n    parentName: \\"a\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-background-image\\",\\n    \\"style\\": {\\n      \\"paddingBottom\\": \\"47.600767754318625%\\",\\n      \\"position\\": \\"relative\\",\\n      \\"bottom\\": \\"0\\",\\n      \\"left\\": \\"0\\",\\n      \\"backgroundImage\\": \\"url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4ElEQVQoz5WSSw6DMAxEDYRf+RuhLiu1q94h2fb+R+pMcCVYkSI9Jopsx55E/CoVmMASVGpoGxLwBnIa6AA2cBf8Rmz2gEUrBiChvgKxjTXQWfFcfl/sUqX9LFirZEi4xFM15nZhkfOHgAL0KJZDXRIqjl1BB7MtB06syESwLlPGjSNrVE42g1u0TGUVLEbPU6A8GUofr9mLsdvZpnNHD5vjyD4BO5xWDcEuBGoe7n60VpyGSwJZjMe4pxu2IqWnNxqNLUIK6M4uhc+us7e8sdgbvLD5gP6F5Tw97drfYvYFphw/8Dgxur0AAAAASUVORK5CYII=\')\\",\\n      \\"backgroundSize\\": \\"cover\\",\\n      \\"display\\": \\"block\\"\\n    }\\n  })), \\"\\\\n  \\", mdx(\\"img\\", _extends({\\n    parentName: \\"a\\"\\n  }, {\\n    \\"className\\": \\"gatsby-resp-image-image\\",\\n    \\"alt\\": \\"box\\",\\n    \\"title\\": \\"box\\",\\n    \\"src\\": \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png\\",\\n    \\"srcSet\\": [\\"/static/67c23f12fa4154b463ae024e204aa01b/1bae2/home-box.png 350w\\", \\"/static/67c23f12fa4154b463ae024e204aa01b/a8200/home-box.png 700w\\", \\"/static/67c23f12fa4154b463ae024e204aa01b/cbc03/home-box.png 1042w\\"],\\n    \\"sizes\\": \\"(max-width: 1042px) 100vw, 1042px\\",\\n    \\"loading\\": \\"lazy\\"\\n  })), \\"\\\\n  \\"), \\"\\\\n    \\")), mdx(HomeBody, {\\n    mdxType: \\"HomeBody\\"\\n  }, mdx(\\"h2\\", null, \\"Lorem ipsum dolor sit amet, lorem consectetur adipiscing sed elit.\\"), mdx(\\"p\\", null, \\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus neque libero, luctus euismod congue eu, accumsan vitae leo. Donec ut dolor ac metus vulputate volutpat. Vestibulum viverra semper convallis. In nec est vitae risus tempor consectetur.\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;"}}}')},RXBc:function(e,n,t){"use strict";t.r(n);var r=t("GHEQ"),o=t("q1tI"),a=t.n(o),i=t("A2+M"),s=t("E/Ix"),c=t("Zttt"),u=t("O1mb"),m=t("n6RJ"),l=t("vrFN");t("EDuE");var p={GenericLink:u.b,HomeBody:function(e){var n=e.children;return a.a.createElement("div",{style:{width:"70%",marginTop:"4rem"}},n)},AlignRight:m.a};n.default=function(){var e=r.data.mdx.body;return a.a.createElement(c.a,null,a.a.createElement(l.a,null),a.a.createElement(s.MDXProvider,{components:p},a.a.createElement(i.MDXRenderer,null,e)))}},n6RJ:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("q1tI"),o=t.n(r);function a(e){var n=e.children;return o.a.createElement("div",{style:{textAlign:"right"}},n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-44c48fb90b3676571523.js.map