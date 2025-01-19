document.addEventListener("DOMContentLoaded", (event) => {
  const postElements = document.querySelectorAll("article.post-search");

  function applySearchFilter(filter) {
  	let searchRegex = new RegExp(filter, "i");
  	postElements.forEach((element) => {
  	  element.hidden = !searchRegex.test(element.attributes["data-search-content"].value);
  	});
  }

  const searchInput = document.getElementById("searchField");

  searchInput.addEventListener("keyup", function(e) {
    applySearchFilter(e.target.value);
  });

  searchInput.addEventListener("change", function(e) {
    applySearchFilter(e.target.value);
  });
});