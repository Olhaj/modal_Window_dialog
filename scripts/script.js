const openRegisterBtn = document.querySelector("#openRegisterBtn");
const registerDialog = document.querySelector("#registerDialog");
const closeRegisterBtn = document.querySelector("#closeRegisterBtn");

const registrationForm = document.querySelector("#registrationForm");

const confirmationDialog = document.querySelector("#confirmationDialog");
const closeConfirmation = document.querySelector("#closeConfirmation");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancelBtn");

// Открытие окна регистрации
openRegisterBtn.addEventListener("click", () => {
  registerDialog.showModal();
  openRegisterBtn.hidden = true;
});

// Закрытие окна регистрации
closeRegisterBtn.addEventListener("click", () => {
  registerDialog.close();
  openRegisterBtn.hidden = false;
});

// Отправка формы регистрации
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    return;
  }

  // Второе окно откроется поверх первого
  confirmationDialog.showModal();
});

// Закрытие окна подтверждения
closeConfirmation.addEventListener("click", () => {
  confirmationDialog.close();
});

// Кнопка «Отменить»
cancelBtn.addEventListener("click", () => {
  confirmationDialog.close();
});

// Подтверждение регистрации
confirmBtn.addEventListener("click", () => {
  confirmationDialog.close();
  registerDialog.close();

  registrationForm.reset();
  openRegisterBtn.hidden = false;

  alert("Регистрация подтверждена!");
});
