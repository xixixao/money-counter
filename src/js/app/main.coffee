$ = require 'jquery'

module.exports = ->
  $ ->
    values = {}

    recalculate = ->
      sum = 0
      sum += value * amount for value, amount of values
      console.log sum
      $('.result').text " #{sum}"

    $('span.prefix').each ->
      values[$(this).text()] = 0

    $('input').keyup ->
      $this = $(this)
      values[$this.parent().parent().find('span').text()] = Number $(this).val()
      console.log values
      recalculate()



