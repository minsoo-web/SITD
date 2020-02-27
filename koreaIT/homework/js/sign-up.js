$(document).ready(function() {
  $("#email-dropdown").click(function() {
    $("#email-cite").val("");
    $(".dropdown-list").toggleClass("flex-box");
  });
  $(`input[name="email"]`).click(function() {
    if ($(`input[name="email"]:checked`).val() === "naver.com") {
      $("#email-cite").val("naver.com");
    }
    if ($(`input[name="email"]:checked`).val() === "google.com") {
      $("#email-cite").val("google.com");
    }
    if ($(`input[name="email"]:checked`).val() === "hanmail.net") {
      $("#email-cite").val("hanmail.net");
    }
    if ($(`input[name="email"]:checked`).val() === "daum.net") {
      $("#email-cite").val("daum.net");
    }
    $(".dropdown-list").toggleClass("flex-box");
  });
});
