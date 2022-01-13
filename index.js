$(document).on("click", function (e) {
  if ($(e.target).closest("#header-nav-menu").length === 0) {
    closeHeaderNavMenu();
  }
});

function openHeaderSearchForm() {
  $("#header-search-form").removeClass("closed");
  $("#header-search-form").addClass("opened");
  $("body").css("overflow-y", "hidden");
}

function closeHeaderSearchForm() {
  $("#header-search-form").removeClass("opened");
  $("#header-search-form").addClass("closed");
  $("body").css("overflow-y", "scroll");
}

function openHeaderNavMenu() {
  $("#header-nav-menu").removeClass("closed");
  $("#header-nav-menu").addClass("opened");
}

function closeHeaderNavMenu() {
  $("#header-nav-menu").removeClass("opened");
  $("#header-nav-menu").addClass("closed");
}

$("#open-search-button").click((e) => {
  openHeaderSearchForm();
});

$("#close-search-button").click((e) => {
  closeHeaderSearchForm();
});

$("#open-menu-button").click((e) => {
  e.stopPropagation();
  openHeaderNavMenu();
});

$("#close-menu-button").click((e) => {
  closeHeaderNavMenu();
});

$("#search-background").click((e) => {
  closeHeaderSearchForm();
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
  closeHeaderNavMenu();
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;
  if (st > lastScrollTop && st > navbarHeight) {
    $("header").addClass("header-up");
  } else {
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("header-up");
    }
  }

  lastScrollTop = st;
}
