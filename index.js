"use strict";
// validator for phone number
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+7 (___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-phone-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
// validator for card number

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "____  ____  ____  ____",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-card-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

// validator for card period

document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "__ / __",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");

    if (clearVal !== "false" && e.type === "blur") {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = "";
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
  };
  var phone_inputs = document.querySelectorAll("[data-card-period-pattern]");
  for (let elem of phone_inputs) {
    for (let ev of ["input", "blur", "focus"]) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});

// validator for CVV code

function isValidLenght(e) {
  const value = e.target.value;

  if (value.length < 3) return true;
  return false;
}

function showMoreinf() {
  let target = event.target;
  parent = target.getAttribute("data-parent");
  // беру контейнер в котором скрытые элементы

  const classes = target.getAttribute("data-parent-class");
  // применяю классы для скрытый элементов если они есть
  if (classes) {
    document.getElementById(parent).classList.toggle(classes);
  }
  document.getElementById(parent).style.height = "auto";
  // показываю элемент
  const text = target.getAttribute("data-text-close");
  // получаю новый текст для кнопки
  target.innerText = text;
  // меняю текст кнопки
  const toggleClass = target.getAttribute("data-toggle-class");
  // меняю стили кнопки чтобы она стала скрывающей кнопкой
  target.classList.toggle(toggleClass);
  target.onclick = hideMoreInf;
  // присваиваю на нажатие другую фукнцию - скрыть все что было открыто
}

function hideMoreInf() {
  let target = event.target;
  parent = target.getAttribute("data-parent");
  const classes = target.getAttribute("data-parent-class");
  if (classes) {
    document.getElementById(parent).classList.toggle(classes);
  }

  document.getElementById(parent).style.height = "0";

  const text = target.getAttribute("data-text-show");
  target.innerText = text;
  const toggleClass = target.getAttribute("data-toggle-class");
  target.classList.toggle(toggleClass);
  target.onclick = showMoreinf;
}

function MakeOrder() {
  const target = document.getElementById("containerDialog");
  const body = document.body;
  body.classList.toggle("blockScreen");

  target.style.display = "flex";
  getNow();
  // const userHeight = window.innerHeight;
  // const blockHeight = $(".containerOrder").height();

  // if (userHeight <= blockHeight) {
  //   target.style.alignItems = "flex-start";
  //   target.style.overflowY = "scroll";
  // } else {
  //   target.style.alignItems = "center";
  // }
  body.style.overflowX = "hidden";
}

function closeOrder() {
  const target = document.getElementById("containerDialog");
  const body = document.body;
  body.classList.toggle("blockScreen");

  target.style.display = "none";
}

function getNow() {
  const date = new Date();
  let now = date.getFullYear();
  if (date.getMonth() + 1 < 10) {
    now += "-0" + (date.getMonth() + 1);
  } else now += "-" + (date.getMonth() + 1);
  if (date.getDate() < 10) {
    now += "-0" + date.getDate();
  } else now += "-" + date.getDate();
  $("#dateOrder").val(now);
}

function activateSlider() {
  const doing = parseInt(event.target.getAttribute("data-doing"));
  let currentPos = parseInt(
    document
      .querySelector(".displayToSlide")
      .getAttribute("data-current-position")
  );
  if ((doing === -1) & (currentPos === 1)) return;
  if ((doing === 1) & (currentPos === 3)) return;

  let activePoint = document.getElementById(`point${currentPos}`);
  activePoint.classList.toggle("activePoint");
  if (doing === 1) {
    currentPos += 1;
    activePoint = document.getElementById(`point${currentPos}`);
    activePoint.classList.toggle("activePoint");
    const itemSlide = document.querySelectorAll(".itemSlide");
    itemSlide.forEach((el) => {
      el.style.transform = `translateX(${-148 * (currentPos - 1)}px)`;
    });
    document
      .querySelector(".displayToSlide")
      .setAttribute("data-current-position", currentPos);
  } else {
    currentPos -= 1;
    activePoint = document.getElementById(`point${currentPos}`);
    activePoint.classList.toggle("activePoint");
    const itemSlide = document.querySelectorAll(".itemSlide");
    itemSlide.forEach((el) => {
      el.style.transform = `translateX(${-148 * (currentPos - 1)}px)`;
    });
    document
      .querySelector(".displayToSlide")
      .setAttribute("data-current-position", currentPos);
  }
}
