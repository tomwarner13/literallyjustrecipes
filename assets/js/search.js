document.addEventListener("DOMContentLoaded", (event) => {
  console.log('search js loaded');

  const searchInput = document.getElementById("searchField");

  searchInput.addEventListener("keyup", function(e) {
    console.log(e.target.value);
  });

  searchInput.addEventListener("change", function(e) {
    console.log(e.target.value);
  });
});