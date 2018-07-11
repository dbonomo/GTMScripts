function () {

  var version = 1; // sets a version number??

  return function(model) { // returns a function based off poo

    var referrerCookie = getCookie('_ga-ss');// gets the referrer cookie
    var hasCampaignParams = document.location.href.match(/(d|g)clid|utm_source/); //matches campaign param
    var referrer = {{Referrer}}; //gets referrer from some built in thingy in GTM
    var uaNum = model.get('trackingId'); //
    var cache = {};
    var uaNums = [];
    var storedRef,
        storedVersion,
        parts,
        i;

  	if (!referrerCookie && !hasCampaignParams) return; // if there's no referrer cookie and no param, return jack shit

    if (referrerCookie) { // if there's a cookie

      parts = referrerCookie.split('|');
      storedVersion = Number(parts[0]);

      if (version === storedVersion) {

        uaNums = parts[1].length ? parts[1].split(',') : uaNums
        storedRef = decodeURIComponent(parts[2]);

        for (i = 0; i < uaNums.length; i++) cache[uaNums[i]] = true;

      }

      if (!referrer) return setRefCookie(uaNums, storedRef);

    }

    if (storedRef === referrer) {

      if (cache[uaNum]) {
        model.set('referrer', null);
      } else {
        uaNums.push(uaNum);
      }

    } else {

      // New referrer and no campaign params, we can dump the cookie entirely
      if (!hasCampaignParams) {

        document.cookie = '_ga-ss=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Path=/';

      } else {

        uaNums = [uaNum];
        setRefCookie(uaNums, referrer)

      }

    }

  };

  function setRefCookie(uaNums, referrer) {

    document.cookie = "_ga-ss=" +
      [version, uaNums.join(), encodeURIComponent(referrer)].join('|') +
      "; Expires=" + new Date(+new Date() + 1000 * 60 * 30).toGMTString() +
      "; Path=/";

  }

  function getCookie(cookieName) {

    cookieName = "; " + cookieName + "=";
    var cookieStr = "; " + document.cookie;

    if (cookieStr.indexOf(cookieName) > -1) {

      return cookieStr.split(cookieName)[1].split(';')[0];

    }

  }

}
