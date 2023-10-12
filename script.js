const filterImgContainer = document.querySelector(".image-filter"),
  imageItems = document.querySelectorAll(".image-item");

filterImgContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-image")) {
    // deactivate existing active 'filter-item'
    filterImgContainer.querySelector(".active").classList.remove("active");

    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterImg = event.target.getAttribute("data-filter");
    imageItems.forEach((item) => {
      if (item.classList.contains(filterImg) || filterImg === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
