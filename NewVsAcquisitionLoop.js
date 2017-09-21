function() {
  var items = {{products_sold}};
  var itemString,itemObjectArray = [];
  var itemVariantCount = 0;
  var i, len, isrenew;
  for (i = 0, len = items.length; i < len; i++) {
    var prodVariant = items[i].variant;
    if (prodVariant == "renew") {
      itemVariantCount ++;
    }
  }
  if (itemVariantCount >= 1) {
    isrenew = "Renewal";
  } else {
    isrenew = "Acquisition";
  }
  return isrenew;
}
