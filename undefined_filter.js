function() {
  var rawCouponCode = {{rawCouponCode}};
  var emailHash;
  if (rawCouponCode) {
    couponCode = rawCouponCode;
  } else {
    couponCode = "";
  }
  return couponCode ;
}
