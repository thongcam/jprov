$(".help-button").click((event) => {
  $(event.target).siblings(".help-box").toggleClass("show");
});

$(".close-button").click((event) => {
  $(event.target).parents(".help-box").toggleClass("show");
});

$(".filter-checkbox input[type='checkbox']").change((event) => {
  let filterMap = {};

  $(".filters-wrapper input[type='checkbox']").each(
    (i, elem) => (filterMap[elem.name] = [])
  );

  $(event.target)
    .parents(".filters-wrapper")
    .find("input[type='checkbox']")
    .each((i, elem) => {
      if (elem.checked) {
        filterMap[elem.name].push(elem.value);
      }
    });

  $(event.target)
    .parents(".filters-cards-wrapper")
    .find(".item-card")
    .each((i, card) => {
      let showCard = true;
      Object.keys(filterMap).forEach((key, i) => {
        if (!filterMap[key].includes($(card).data(key))) {
          showCard = false;
        }
      });

      if (showCard) {
        $(card).addClass("show");
      } else {
        $(card).removeClass("show");
      }
    });
});
