function initSearch() {
  const postElements = document.querySelectorAll("article.post-search");
  const counter = document.getElementById("current-count");
  const counterPadding = counter.innerText.length;

  function applySearchFilter(filter) {
    let searchRegex = new RegExp(filter, "i");
    let visibleCount = 0;
    postElements.forEach((element) => {
      let isVisible = searchRegex.test(element.attributes["data-search-content"].value);
      element.hidden = !isVisible;
      if(isVisible) visibleCount++;
    });
    counter.innerText = String(visibleCount).padStart(counterPadding, '0');
  }

  const searchInput = document.getElementById("searchField");

  searchInput.addEventListener("keyup", function(e) {
    applySearchFilter(e.target.value);
  });

  searchInput.addEventListener("change", function(e) {
    applySearchFilter(e.target.value);
  });  
}

if (document.readyState !== "loading") {
  initSearch();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initSearch();
  });
}
