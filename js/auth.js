const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const buttonOut = document.querySelector(".button-out");
const userName = document.querySelector(".user-name");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById("login");
const inputPassword = document.getElementById("password");

//Авторизация
const login = (user) => {
  buttonAuth.style.display = "none";
  buttonOut.style.display = "flex";
  userName.style.display = "flex";
  userName.textContent = user.login;
  modalAuth.style.display = "none";
};
//Логаут
const logout = () => {
  buttonOut.style.display = "none";
  userName.style.display = "none";
  buttonAuth.style.display = "flex";
  userName.textContent = "";
  // Удаление user из localStorage
  localStorage.removeItem("user");
};

//Всплывающее модальное окно по клику на "Войти"
buttonAuth.addEventListener("click", () => {
  modalAuth.style.display = "flex";
});

//Логаут по клику по кнопке "Выйти"
buttonOut.addEventListener("click", () => {
  logout();
});

//Закрытие модального окна по клику на крест
closeAuth.addEventListener("click", () => {
  modalAuth.style.display = "none";
});

//Получение данных с формы авторизации, создание user, и запись в localStorage
logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const user = {
    login: inputLogin.value,
    password: inputPassword.value,
  };
  if (inputLogin.value === "") {
    console.log("1111");
    alert("Введите имя пользователя");
  } else {
    localStorage.setItem("user", JSON.stringify(user));
    login(user);
  }
});

// Проверка наличия записи в localStorage о сохраненном пользователе
if (localStorage.getItem("user")) {
  login(JSON.parse(localStorage.getItem("user")));
}
