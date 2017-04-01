// Biznasty
var premiumToppings = [];
var toppings = [];
var sizePrice;
var premiumPrice;
var toppingPrice;
var pizzaPrice;

function Pizza(size,sauce,extra,premiums,tops) {
  this.size = size;
  this.sauce = sauce;
  this.extra = extra;
  this.premiums = premiumToppings;
  this.tops = toppings;
}

function SizePrice(sizeForPrice) {
  if (sizeForPrice === "Personal") {
    sizePrice = 8;
  } else if (sizeForPrice === "Medium") {
    sizePrice = 12;
  } else if ( sizeForPrice === "Large") {
    sizePrice = 16;
  } else {
    sizePrice = 20;
  }
  return sizePrice;
}

Pizza.prototype.PizzaPrice = function(sizesPrice, premiumsPrice, toppingsPrice) {
  return (parseFloat(sizesPrice) + parseFloat(premiumsPrice*3) + parseFloat(toppingsPrice*1.5));
}


// Front End
$(document).ready(function () {
  var size;
  var sauce;
  var extra;


  $("form#pizzaOptions").submit(function(event){
    event.preventDefault();
    size = $('input[name="size"]:checked').val();
    sizePrice = SizePrice(size);
    sauce = $('input[name="sauce"]:checked').val();
    extra = $('input[name="extra"]:checked').val();
    $("input:checkbox[name=premium]:checked").each(function() {
      var premiumTop = $(this).val();
      premiumToppings.push(premiumTop);
      premiumPrice = premiumToppings.length;
      return premiumToppings;
    });
    $('input:checkbox[name=topping]:checked').each(function() {
      var regulartop = $(this).val();
      toppings.push(regulartop);
      toppingPrice = toppings.length;
      return toppings;
    });

    //creating user's pizza
    var yourPizza = new Pizza(size,sauce,extra,premiumToppings,toppings);

    //displaying user's pizza for confirmation
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

    //getting pricing based on user's inputs
    var pizzaPrice = yourPizza.PizzaPrice(sizePrice,premiumPrice,toppingPrice);

    //displaying the price of the user's pizza
    $("#totalPrice").text(pizzaPrice.toFixed(2));


// console.log(size);
// console.log(sauce);
// console.log(extra);
// console.log(premiumPrice);
// console.log(toppingPrice);
// console.log(yourPizza);
console.log(sizePrice);
console.log(premiumPrice);
console.log(toppingPrice);

  });
});
