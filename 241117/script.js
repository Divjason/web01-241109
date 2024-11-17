// const button = document.querySelector("button");
// console.log(button);
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("버튼 클릭됨!");
// });

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("버튼 클릭됨!");
});
