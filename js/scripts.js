$(document).ready(function() {
  var suits = ["spades", "clubs", "hearts", "diamonds"];
  var nums = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit) {
    nums.forEach(function(item) {
      $("ul#list").append("<li>" + item + " of " + suit + "</li>");
    });
  });
});
