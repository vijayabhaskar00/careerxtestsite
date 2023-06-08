let navDropDown = document.querySelector(".drop__name");
let dropDownMenu = document.querySelector(".navbar__dropdown");
let downArrow = document.querySelector("ion-icon[name='chevron-down']");
let smScreenMenu = document.querySelector(".navbar__smallScreen");
let navbarMenu = document.querySelector(".navbar__list");
let smScreenMenuIcon = document.querySelector(".navbar__smallScreen ion-icon");
let listDrop = document.querySelector(".list__drop");

navDropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
  downArrow.classList.toggle("active");
  listDrop.classList.toggle("makeGap");
});

smScreenMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// ************************ - NAVBAR ENDS - ***********************
