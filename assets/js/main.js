const mobileNav = document.querySelector(".header__mobile-nav")
const mobileNavList = document.querySelectorAll(".header__mobile-nav-list")

mobileNav.addEventListener('click', () => {
  mobileNavList.forEach(element => {
    console.log(element);
    element.classList.toggle("flex")
  });
})