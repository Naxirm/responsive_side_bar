const sbToggle = document.querySelector(".sidebar-toggle");
const sb = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");

sbToggle.addEventListener("click", function () {
  sb.classList.remove("show-sidebar");
  sbToggle.style.display = "none";
});

closebtn.addEventListener("click", function () {
  sb.classList.add("show-sidebar");
  sbToggle.style.display = "flex";
});
