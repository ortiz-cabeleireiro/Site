document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupNovidade");
  const fecharPopup = document.getElementById("fecharPopup");
  const fecharPopupBtn = document.getElementById("fecharPopupBtn");

  if (!popup || !fecharPopup || !fecharPopupBtn) return;

  setTimeout(() => {
    popup.classList.add("active");
    popup.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }, 600);

  function fechar() {
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  fecharPopup.addEventListener("click", fechar);
  fecharPopupBtn.addEventListener("click", fechar);

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      fechar();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popup.classList.contains("active")) {
      fechar();
    }
  });
});