// Начальная кнопка «Зарегистрироваться»
const openRegisterBtn = document.querySelector("#openRegisterBtn");

// Первое окно с формой регистрации
const registerDialog = document.querySelector("#registerDialog");

// Кнопка закрытия первого окна
const closeRegisterBtn = document.querySelector("#closeRegisterBtn");

// Форма регистрации
const registrationForm = document.querySelector("#registrationForm");

// Второе окно подтверждения
const confirmationDialog = document.querySelector("#confirmationDialog");

// Кнопка закрытия окна подтверждения
const closeConfirmation = document.querySelector("#closeConfirmation");

// Кнопка подтверждения регистрации
const confirmBtn = document.querySelector("#confirmBtn");

// Кнопка отмены регистрации
const cancelBtn = document.querySelector("#cancelBtn");

// --------------------------------------------------
// ОТКРЫТИЕ ОКНА РЕГИСТРАЦИИ
// --------------------------------------------------

/*
  addEventListener("click", ...) запускает функцию
  после нажатия на кнопку.

  showModal() открывает dialog как модальное окно.

  hidden = true скрывает начальную кнопку,
  чтобы она не была видна за открытой формой.
*/
openRegisterBtn.addEventListener("click", () => {
  registerDialog.showModal();
  openRegisterBtn.hidden = true;
});

// --------------------------------------------------
// ЗАКРЫТИЕ ОКНА РЕГИСТРАЦИИ ПО КРЕСТИКУ
// --------------------------------------------------

/*
  close() закрывает dialog.

  После закрытия первого окна начальная кнопка
  снова становится видимой.
*/
closeRegisterBtn.addEventListener("click", () => {
  registerDialog.close();
  openRegisterBtn.hidden = false;
});

// --------------------------------------------------
// ОТПРАВКА ФОРМЫ РЕГИСТРАЦИИ
// --------------------------------------------------

/*
  Событие submit срабатывает при отправке формы.

  preventDefault() отменяет стандартную отправку формы
  и не перезагружает страницу.
*/
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /*
    checkValidity() проверяет required,
    правильность email и minlength пароля.

    Если форма заполнена неправильно,
    показываем стандартное сообщение браузера.
  */
  if (!registrationForm.checkValidity()) {
    registrationForm.reportValidity();
    return;
  }

  /*
    Открываем окно подтверждения.

    Оно появляется поверх уже открытого окна регистрации.
  */
  confirmationDialog.showModal();
});

// --------------------------------------------------
// ЗАКРЫТИЕ ОКНА ПОДТВЕРЖДЕНИЯ ПО КРЕСТИКУ
// --------------------------------------------------

/*
  Закрывается только окно подтверждения.

  Форма регистрации остаётся открытой,
  поэтому начальная кнопка не появляется.
*/
closeConfirmation.addEventListener("click", () => {
  confirmationDialog.close();
});

// --------------------------------------------------
// ОТМЕНА РЕГИСТРАЦИИ
// --------------------------------------------------

/*
  Кнопка «Отменить» закрывает только второе окно.

  Пользователь возвращается к форме регистрации
  и может исправить данные.
*/
cancelBtn.addEventListener("click", () => {
  confirmationDialog.close();
  registrationForm.reset();
});

// --------------------------------------------------
// ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ
// --------------------------------------------------

/*
  При подтверждении:

  1. Закрываем окно подтверждения.
  2. Закрываем окно регистрации.
  3. Очищаем форму.
  4. Возвращаем начальную кнопку.
  5. Показываем сообщение пользователю.
*/
confirmBtn.addEventListener("click", () => {
  confirmationDialog.close();
  registerDialog.close();

  registrationForm.reset();

  openRegisterBtn.hidden = false;

  alert("Регистрация подтверждена!");
});

// --------------------------------------------------
// ЗАКРЫТИЕ ПО КЛИКУ ВНЕ СОДЕРЖИМОГО ОКНА
// --------------------------------------------------

/*
  При клике по dialog event.target равен самому dialog.

  При клике внутри формы event.target будет равен
  внутреннему элементу, поэтому окно не закроется.
*/

// Клик по фону первого окна
registerDialog.addEventListener("click", (event) => {
  if (event.target === registerDialog) {
    registerDialog.close();
    registrationForm.reset();
    // Возвращаем начальную кнопку
    openRegisterBtn.hidden = false;
  }
});

// Клик по фону второго окна
confirmationDialog.addEventListener("click", (event) => {
  if (event.target === confirmationDialog) {
    confirmationDialog.close();
    registrationForm.reset();
    /*
      Первое окно при этом не закрываем.
      Начальная кнопка остаётся скрытой,
      потому что регистрационная форма всё ещё открыта.
    */
  }
});

// --------------------------------------------------
// ЗАКРЫТИЕ ПО КЛАВИШЕ ESC
// --------------------------------------------------

/*
  У dialog есть стандартное событие cancel,
  которое срабатывает при нажатии клавиши Escape.

  Если открыто второе окно, Escape закрывает его.
  Первое окно при этом остаётся открытым.

  Если открыто первое окно, Escape закрывает его
  и возвращает начальную кнопку.
*/

confirmationDialog.addEventListener("cancel", () => {
  confirmationDialog.close();
});

registerDialog.addEventListener("cancel", () => {
  registerDialog.close();

  openRegisterBtn.hidden = false;
});
