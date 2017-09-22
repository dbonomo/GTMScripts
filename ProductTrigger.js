function() {
  var items = {{products_sold}};
  var itemString,itemObjectArray = [];
  var renewalCount, registerCount, reactivateCount, transferCount = 0;
  var i, len, isrenew;
  for (i = 0, len = items.length; i < len; i++) {
    var prodVariant = items[i].variant;
    if (prodVariant == "renew") {
      renewalCount ++;
    }
    if (prodVariant == "register") {
      registerCount ++;
    }
    if (prodVariant == "reactivate") {
      reactivateCount ++;
    }
    if (prodVariant == "transfer") {
      transferCount ++;
    }
  }
  if (renewalCount >= 1) {
    isrenew = "Renewal";
  } elseif () {
    isrenew = "Registration";
  }
  return isrenew;
}
