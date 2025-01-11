const wakeDropdown = document.getElementById("wake-setting");

wakeDropdown.addEventListener("change", function() {
  console.log("Wake value:", this.value);
});