$(document).ready(function () {
  $("#seo").on("click", function (e) {
    $("#wd").removeClass("active");
    $("#md").removeClass("active");
    $("#dm").removeClass("active");
    $("#seo").addClass("active");
    $("#serSeo").removeClass("display-none");
    $("#serWd").addClass("display-none");
    $("#serDm").addClass("display-none");
    $("#serMd").addClass("display-none");
  });

  $("#wd").on("click", function (e) {
    $("#seo").removeClass("active");
    $("#md").removeClass("active");
    $("#dm").removeClass("active");
    $("#wd").addClass("active");
    $("#serWd").removeClass("display-none");
    $("#serSeo").addClass("display-none");
    $("#serDm").addClass("display-none");
    $("#serMd").addClass("display-none");
  });

  $("#md").on("click", function (e) {
    $("#wd").removeClass("active");
    $("#seo").removeClass("active");
    $("#dm").removeClass("active");
    $("#md").addClass("active");
    $("#serMd").removeClass("display-none");
    $("#serWd").addClass("display-none");
    $("#serDm").addClass("display-none");
    $("#serSeo").addClass("display-none");
  });

  $("#dm").on("click", function (e) {
    $("#wd").removeClass("active");
    $("#md").removeClass("active");
    $("#seo").removeClass("active");
    $("#dm").addClass("active");
    $("#serDm").removeClass("display-none");
    $("#serWd").addClass("display-none");
    $("#serSeo").addClass("display-none");
    $("#serMd").addClass("display-none");
  });
});
