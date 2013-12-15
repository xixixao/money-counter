require({
  urlArgs: "b=" + ((new Date()).getTime()),
  paths: {
    jquery: 'vendor/jquery/jquery'
  },
  shim: {
    "vendor/foundation/foundation": ["jquery"]
  }
}, ['jquery', 'app/main', 'vendor/foundation/custom.modernizr', 'vendor/foundation/foundation'], function($, main) {
  return $(function() {
    $(document).foundation();
    return main();
  });
});
