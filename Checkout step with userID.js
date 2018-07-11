function () {
  var userID = {{UserID}};
if (userID) {
  return {
    'userID' : userID,
    'ecommerce': {
      'checkout': {
        'actionField': {'step':2,'option':'Add To Cart'}
     }
  }}
} else {
  return {
    'ecommerce': {
      'checkout': {
        'actionField': {'step':2,'option':'Add To Cart'}
     }
  }}};
}
