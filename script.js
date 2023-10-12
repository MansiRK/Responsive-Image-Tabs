// Getting the filter container and image items
const filterImgContainer = document.querySelector(".image-filter");
const imageItems = document.querySelectorAll(".image-item");

// Adding click event listener to the filter container
filterImgContainer.addEventListener("click", (event) => {
  // Check if the clicked element has the 'filter-tabs' class
  if (event.target.classList.contains("filter-tabs")) {
    const filterImg = event.target.getAttribute("data-filter");

    filterImages(filterImg);
    updateActiveFilter(event.target);
  }
});

// Function to filter images based on the selected filter
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

// Function to update the active filter style
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
