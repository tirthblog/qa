
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  document.getElementById("review-name").textContent = urlParams.get("name");
  document.getElementById("review-email").textContent = urlParams.get("email");
};
