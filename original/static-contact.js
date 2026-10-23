// Replaces Contact Form 7 (which needed WordPress to send mail).
// On submit, opens the visitor's own email app with the message pre-filled.
// Set CONTACT_EMAIL to Lisa's address to switch it on.
(function () {
  var CONTACT_EMAIL = "";

  var form = document.querySelector("form[data-static-contact]");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var get = function (name) {
      var el = form.querySelector('[name="' + name + '"]');
      return el ? el.value.trim() : "";
    };
    var name = get("your-name");
    var email = get("your-email");
    var subject = get("your-subject") || "Enquiry from magicmastersswimming.com.au";
    var message = get("your-message");

    var out = form.querySelector(".wpcf7-response-output");
    if (!CONTACT_EMAIL) {
      if (out) {
        out.textContent = "Online enquiries are paused while the site is upgraded. Please check back soon.";
        out.style.display = "block";
      }
      return;
    }
    var body = message + "\n\n— " + name + (email ? " (" + email + ")" : "");
    window.location.href =
      "mailto:" + CONTACT_EMAIL +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  });
})();
