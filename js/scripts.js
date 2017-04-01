var premiumToppings = [];
var toppings = [];

function Pizza(size,sauce,extra,premiums,tops) {
  this.size = size;
  this.sauce = sauce;
  this.extra = extra;
  this.premiums = premiumToppings;
  this.tops = toppings;
}

$(document).ready(function () {
  var size;
  var sauce;
  var extra;

  $("form#pizzaOptions").submit(function(event){
    event.preventDefault();
    size = $('input[name="size"]:checked').val();
    sauce = $('input[name="sauce"]:checked').val();
    extra = $('input[name="extra"]:checked').val();
    $("input:checkbox[name=premium]:checked").each(function() {
      var premiumTop = $(this).val();
      premiumToppings.push(premiumTop);
      return premiumToppings;
    });
    $('input:checkbox[name=topping]:checked').each(function() {
      var regulartop = $(this).val();
      toppings.push(regulartop);
      return toppings;
    });

    var yourPizza = new Pizza(size,sauce,extra,premiumToppings,toppings);
    $("#confirmation").show();
    $("#pizzaSize").text(yourPizza.size);
    $("#pizzaExtraSauce").text(yourPizza.extra + " ");
    $("#pizzaSauce").text(yourPizza.sauce);
    premiumToppings.forEach(function(topping) {
      $("ul#pizzaToppings").append("<li>" + topping + "</li>");
    });
    toppings.forEach(function(topping) {
      $("ul#pizzaToppings").append("<li>" + topping + "</li>");
    });

console.log(size);
console.log(sauce);
console.log(extra);
console.log(premiumToppings);
console.log(toppings);



  });
});
