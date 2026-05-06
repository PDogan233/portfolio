/* ===== Active Nav Link ===== */
document.addEventListener("DOMContentLoaded", function () {
  var page = window.location.pathname.split("/").pop() || "index.html";
  if (page === "" || page === "/") page = "index.html";
  document.querySelectorAll(".nav-links a[data-page]").forEach(function (a) {
    a.classList.toggle("active", a.getAttribute("data-page") === page);
  });
});

