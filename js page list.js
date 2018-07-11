function() {
  var pagePath = window.location.pathname;
  var isPage;
  var PageList = ["/apps/application/",
  "/hosting/",
  "/apps/application/",
  "/security/",
  "/domains/registration/results",
  "/hosting/wordpress-hosting/"];

  if (PageList.includes(pagePath)) {
    isPage = true;
  } else {
    isPage = false;
  }
  return isPage;
}

Look at verification o
