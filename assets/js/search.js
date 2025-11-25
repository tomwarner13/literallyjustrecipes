function initSearch() {
  const postElements = document.querySelectorAll("article.post-search");
  const counter = document.getElementById("current-count");

  function applySearchFilter(filter) {
    let searchRegex = new RegExp(filter, "i");
    postElements.forEach((element) => {
      element.hidden = !searchRegex.test(element.attributes["data-search-content"].value);
    });
    counter.innerText = String(document.querySelectorAll(".post:not([hidden])").length).padStart(2, '0');
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
