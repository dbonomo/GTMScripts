function() {
  var urlsToTest = [
    '/hosting/wordpress-hosting/what-is-wordpress/',
    '/hosting/wordpress-hosting/wordpress-tutorial/',
    '/hosting/wordpress-hosting/wordpress-plugins/',
    '/hosting/wordpress-hosting/wordpress-security/',
    '/hosting/wordpress-hosting/wordpress-user-accounts/',
    '/hosting/wordpress-hosting/wordpress-widgets/',
    '/hosting/wordpress-hosting/wordpress-themes/',
    '/hosting/wordpress-hosting/wordpress-how-to-install-wordpress-themes/',
    '/hosting/wordpress-hosting/best-premium-wordpress-themes/',
    '/hosting/wordpress-hosting/wordpress-developer-resources/',
    '/hosting/wordpress-hosting/wordpress-blog-resources/',
    '/hosting/wordpress-hosting/best-business-wordpress-themes/',
    '/hosting/wordpress-hosting/wordpress-vs-other-content-management-systems/',
    '/domains/how-to-choose-the-best-domain/',
    '/domains/how-to-choose-the-right-tld/',
    '/domains/what-is-a-tld-definition/',
    '/dns/what-is-dns-domain-name-system-definition/',
    '/dns/free-vs-premium-paid-DNS/',
    '/security/what-is-ssl-secure-socket-layer-definition/',
    '/security/how-does-ssl-secure-socket-layer-work/',
    '/security/how-does-ssl-secure-socket-layer-work/',
    '/security/free-ssl-premium-ssl-certificates-difference/',
    '/security/domain-phishing-security-attacks-guide',
    '/security/how-to-keep-domain-secure',
    '/security/what-is-domain-privacy-definition'
  ];

  for (var i = 0; i < urlsToTest.length; i += 1) {
    if (document.location.href.indexOf(urlsToTest[i]) > -1) {
      return true;
    }
  };

  return false;
}
