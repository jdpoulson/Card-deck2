var suits = ["clubs", "diamonds", "hearts", "spades"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var deck = [];
var card1;
var card2;
$(document).ready(function() {
  $("form#deck").submit(function(event) {
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        deck.push(number + " of " + suit + " ");
      });
    });
    $("#mydeck").show();
    $("#mydeck").append(deck);
    event.preventDefault()
    $("button#draw1").click(function() {
      card1 = deck[Math.floor(Math.random() * 51)];
      $(".card1").text(card1);
    });
    $("button#draw2").click(function() {
      card2 = deck[Math.floor(Math.random() * 51)];
      $(".card2").text(card2);
    });
    $("button#compare").click(function() {
      var array1 = card1.split(" ");
      var array2 = card2.split(" ");
      if (parseInt(array1[0]) > parseInt(array2[0])) {
        $(".compare").text("Player one wins")
      } else if (parseInt(array1[0]) < parseInt(array2[0])) {
        $(".compare").text("Player two wins")
      } else if (parseInt(array1[0]) === parseInt(array2[0])) {
        $(".compare").text("Tie")
      }
    });
  });
});
