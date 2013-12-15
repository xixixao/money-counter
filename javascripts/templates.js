define(['vendor/jade-runtime'], function (jade){ var templates = {};

//
// Source file: [/Users/srb/Work/Web/minimal/src/html/index.jade]
// Template name: [index]
//
templates['index'] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),cachebust = locals_.cachebust,reload = locals_.reload,optimize = locals_.optimize;buf.push("<!DOCTYPE html><html><head><title>undefined</title><link" + (jade.attrs({ terse: true, 'rel':('stylesheet'), 'href':('/css/style.css' + cachebust) }, {"rel":true,"href":true})) + ">");
if ( reload)
{
buf.push("<script src=\"/socket.io/socket.io.js\"></script><script src=\"/js/reload-client.js\"></script>");
}
if ( optimize)
{
buf.push("<script src=\"/js/bootstrap-built.js\"></script>");
}
else
{
buf.push("<script src=\"/js/vendor/requirejs/require.js\" data-main=\"/js/bootstrap.js\"></script>");
}
buf.push("</head><body><p>Everything working?<strong class=\"test\"> no</strong>");
if ( optimize)
{
buf.push("and optimized");
}
buf.push("</p></body></html>");;return buf.join("");
}
return templates; });