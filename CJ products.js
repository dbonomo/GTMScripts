function() {
  var items = {{products_sold}};
  var itemArray = [];
  var i, len;
  for (i = 0, len = items.length; i < len; i++) {
    var counter = i+1;
    var prodName = items[i].category;
    // replace periods with nothing
    var prodName = prodName.replace(/\./g,'');
    // replace spaces with underscore
    var prodName = prodName.replace(/\s+/g,'_');
    var prodPrice = items[i].price;
    var prodQty = items[i].quantity;
    var ampChar = "&";
    // \u0026
    // &
    var nameString = ampChar+"ITEM"+counter+"="+prodName;
    var qtyString = ampChar+"QTY"+counter+"="+prodQty;
    var priceString = ampChar+"AMT"+counter+"="+prodPrice;

    // var nameString = "\u0026"+"ITEM"+counter+"="+prodName;
    // var qtyString = "\u0026"+"QTY"+counter+"="+prodQty;
    // var priceString = "\u0026"+"AMT"+counter+"="+prodPrice;

    itemArray.push(nameString);
    itemArray.push(qtyString);
    itemArray.push(priceString);
  }
  return itemArray;
}
