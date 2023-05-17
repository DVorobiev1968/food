function userService(selector, modal_selector, text){
  const modalTrigger = document.querySelectorAll(selector),
    modalText = document.querySelector("#service_modal-text"),
    modal = document.querySelector(modal_selector),
    modalCloseBtn = document.querySelector("[service-close]");

  function openModal(
    text = "Заглушка для имитации вызова служебной функции"
  ) {
    modal.classList.add("show");
    modal.classList.remove("hide");
    modalText.innerHTML =
      event.target.innerText !== undefined
        ? event.target.innerText
        : text;
    document.body.style.overflow = "hidden";
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", ()=>openModal(text));
    console.log('userService:',btn);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalCloseBtn.addEventListener("click", closeModal);
};

export default userService;