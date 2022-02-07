const openModal = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");
const body = document.querySelector("body");
const closebtn = modal.querySelector('#close-modal');
openModal.addEventListener("click", () => {
  modalContainer.classList.add("show-container");
  modal.classList.add("show");
  body.style.overflowY = "hidden";
});

// document.addEventListener("click", (e) => {
//     if (e.target.id === "close-modal") {
//         modalContainer.classList.remove("show-container");
//         body.style.overflowY = "visible";
//   }
// });

closebtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show-container");
    body.style.overflowY = "visible";
})
