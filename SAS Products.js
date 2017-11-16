function() {
  var items = {{products_sold}};
  var skulist = [];
  var qtylist = [];
  var pricelist = [];

  var i, len;
  for (i = 0, len = items.length; i < len; i++) {
    var prodName = items[i].category;
    var prodPrice = items[i].price;
    var prodQty = items[i].quantity;
    skulist.push(prodName);
    qtylist.push(prodQty);
    pricelist.push(prodPrice);
  }
  //need to work out how to handle the & symbol \u0026
  var skustring = "\u0026"+"skulist"+"="+skulist;
  var pricestring = "\u0026"+"pricelist"+"="+pricelist;
  var qtystring = "\u0026"+"quantitylist"+"="+qtylist;
  var SASTrackingString = skustring+pricestring+qtystring;
  return SASTrackingString;
}
