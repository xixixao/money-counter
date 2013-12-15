define(function (require, exports, module) {
  var __filename = module.uri || "", __dirname = __filename.substring(0, __filename.lastIndexOf("/") + 1);
  var $;

$ = require('jquery');

module.exports = function() {
  return $(function() {
    var recalculate, values;
    values = {};
    recalculate = function() {
      var amount, sum, value;
      sum = 0;
      for (value in values) {
        amount = values[value];
        sum += value * amount;
      }
      console.log(sum);
      return $('.result').text(" " + sum);
    };
    $('span.prefix').each(function() {
      return values[$(this).text()] = 0;
    });
    return $('input').keyup(function() {
      var $this;
      $this = $(this);
      values[$this.parent().parent().find('span').text()] = Number($(this).val());
      console.log(values);
      return recalculate();
    });
  });
};

});
