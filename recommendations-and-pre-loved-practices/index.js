$(".help-button").click((event) => {
  $(event.target).siblings(".help-box").toggleClass("show");
});

$(".close-button").click((event) => {
  $(event.target).parents(".help-box").toggleClass("show");
});
