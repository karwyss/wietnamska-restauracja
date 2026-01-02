const modal = document.querySelector("#contactModal");
const openBtn = document.querySelector("#openContact");
const closeBtn = document.querySelector("#closeContactTop");

openBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Zapobiega przeładowaniu strony/skokowi
  modal.showModal();  // Otwiera popup jako modal (blokuje tło)
});

closeBtn.addEventListener("click", () => {
  modal.close();
});