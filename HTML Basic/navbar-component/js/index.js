// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const menu = document.getElementById("slideout-menu");

console.log(menu);

// 打开

// 关闭

document.getElementById("mobile-menu-button").addEventListener("click", () => {
  menu.dataset.open = "true";
});

document
  .getElementById("mobile-close-menu-button")
  .addEventListener("click", () => {
    // document.getElementById("slideout-menu").classList.toggle("open");
    menu.dataset.open = "false";
  });
