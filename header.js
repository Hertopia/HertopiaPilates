const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

// 点击汉堡菜单时，显示或隐藏导航链接
burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  burger.classList.toggle("toggle");
});
