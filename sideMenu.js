const refs = {
  menu: document.querySelector(".aside"),
  menuBtn: document.querySelector(".menu-button"),
  aside: document.querySelector(".aside"),
};

const onClickBtn = (e) => {
  e.currentTarget.classList.toggle("menu-button-open");
};

const onBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    refs.menuBtn.classList.remove("menu-button-open");
  }
};

refs.menuBtn.addEventListener("click", onClickBtn);

refs.aside.addEventListener("click", onBackdropClick);
