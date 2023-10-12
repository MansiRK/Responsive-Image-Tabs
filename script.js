const filterImgContainer = document.querySelector(".image-filter");
const imageItems = document.querySelectorAll(".image-item");

filterImgContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-tabs")) {
    const filterImg = event.target.getAttribute("data-filter");
    filterImages(filterImg);
    updateActiveFilter(event.target);
  }
});

function filterImages(filter) {
  imageItems.forEach((item) => {
    if (filter === "all" || item.classList.contains(filter)) {
      item.classList.remove("hide");
      item.classList.add("show");
    } else {
      item.classList.remove("show");
      item.classList.add("hide");
    }
  });
}

function updateActiveFilter(activeFilter) {
  const activeFilterClass = "active";
  const currentActiveFilter = filterImgContainer.querySelector(
    `.${activeFilterClass}`
  );

  if (currentActiveFilter) {
    currentActiveFilter.classList.remove(activeFilterClass);
  }

  activeFilter.classList.add(activeFilterClass);
}
