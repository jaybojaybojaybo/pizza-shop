// prototype DoMath
//
// function Pizza



$(function () {
  var premiumToppings = [];
  var toppings = [];

  $("form#pizzaOptions").submit(function(event){
    event.preventDefault();

    var size = $('input[name="size"]:checked').val();
    var sauce = $('input[name="sauce"]:checked').val();
    var extra = $('input[name="extra"]:checked').val();
    $('input[name="premium"]:checked').each(function() {
      var premiumTop = $(this).val();
      premiumToppings.push(premiumTop);
    });
    $('input[name="topping"]:checked').each(function() {
      var regulartop = $(this).val();
      toppings.push(regulartop);
    });

console.log(size);
console.log(sauce);
console.log(extra);
console.log(premiumToppings);
console.log(toppings);
  });
});
