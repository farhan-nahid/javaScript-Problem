// GitHub-link:    https://github.com/farhan-nahid/third-assignment

// Problem 1: kilometerToMeter

function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return "You Can not convert a negative value";
  } else {
    var meter = kilometer * 1000;
    return meter;
  }
}

// Call Function
const convertIntoMeter = kilometerToMeter(100);
console.log(convertIntoMeter); //print output  (Negative value error massage including)

// Problem 2:  budgetCalculator

function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return "Please enter the right number what you want";
  } else {
    var watchPrize = watch * 50;
    var phonePrize = phone * 100;
    var laptopPrize = laptop * 500;

    var totalPrize = watchPrize + phonePrize + laptopPrize;
    return totalPrize;
  }
}

// Call Function
var totalCost = budgetCalculator(20, 20, 20);
console.log(totalCost); //print output  (Negative value error massage including)

// Problem 3:   hotelCost

function hotelCost(day) {
  if (day < 0) {
    return "Please input a valid day !!";
  } else {
    var cost = 0;
    if (day <= 10) {
      cost = day * 100;

      return cost;
    } else if (day <= 20) {
      var firstTenDay = 10 * 100;
      var remainingDay = day - 10;
      var secondTenDay = remainingDay * 80;
      cost = firstTenDay + secondTenDay;

      return cost;
    } else {
      var firstTenDay = 10 * 100;
      var secondTenDay = 10 * 80;
      var remainingDay = day - 20;
      var totalDay = remainingDay * 50;
      cost = firstTenDay + secondTenDay + totalDay;

      return cost;
    }
  }
}

// Call Function
const yourCost = hotelCost(30);
console.log(yourCost); //print output  (Negative value error massage including)

// Problem 4:megaFriend

function megaFriend(friends) {
  if (friends.length > 0) {
    var bigFriend = friends[0];
    for (var i = 0; i < friends.length; i++) {
      var newBigFriend = friends[i];
      if (typeof newBigFriend === "number") {
        return "Array Element can't be a number !!";
      } else {
        if (newBigFriend.length > bigFriend.length) {
          bigFriend = newBigFriend;
        }
      }
    }
    return bigFriend;
  }
}

//My FriendsName Array
var friendList = ["Abir Bhai", "Nahid", "Farhan"];
// Call Function
var biggestName = megaFriend(friendList);
console.log(biggestName); //print output  (Number type error massage including)
