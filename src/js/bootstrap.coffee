# Require.js config
require
  urlArgs: "b=#{(new Date()).getTime()}"
  paths:
    jquery: 'vendor/jquery/jquery'
   shim:
    "vendor/foundation/foundation": ["jquery"]
  , [
    'jquery'
    'app/main'
    'vendor/foundation/custom.modernizr'
    'vendor/foundation/foundation'
  ], ($, main) ->
    $ ->
      $(document).foundation()
      main()


