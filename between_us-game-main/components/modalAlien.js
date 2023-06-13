const buttonForAlien = (socket, tipo) => {
  const button = document.createElement("button");
  button.setAttribute("class", "button_alien_hacker")
  button.innerText = "Hacker👾";
  button.style.position = "fixed";
  button.style.bottom = "0";
  button.style.left = "0";
  button.style.zIndex = 1000
  document.body.appendChild(button);

  const waitTime = 80000;

  let canClick = true;
  button.addEventListener("click", () => {
    if (canClick) {
        socket.send("HACKEOU_TODOS")
      canClick = false;
      button.style.display = "none";
      setTimeout(() => {
        canClick = true;
        button.style.display = "block";
      }, waitTime);
    }
  });
};

const modalAlien = (socket, tipo) => {
  const closeModal = () => {
    modal.style.display = "block";
  };
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.addEventListener("click", closeModal);
  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog-alien";
  modalDialog.setAttribute("role", "document");
  modal.appendChild(modalDialog);
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-alien";
  modalDialog.appendChild(modalContent);
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header-alien";
  modalContent.appendChild(modalHeader);
  const alienDiv = document.createElement("div");
  alienDiv.className = "alien-alien";
  modalHeader.appendChild(alienDiv);
  const alienImg = document.createElement("img");
  alienImg.src = "../imgs/img/alien.png";
  alienImg.width = "150";
  alienImg.height = "100";
  alienDiv.appendChild(alienImg);
  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title-alien";
  modalHeader.appendChild(modalTitle);
  const h1Emoji1 = document.createElement("h1");
  h1Emoji1.textContent = "👽";
  modalTitle.appendChild(h1Emoji1);
  const h1Text = document.createElement("h1");
  h1Text.className = "text-alien";
  h1Text.textContent = "Você é um " + tipo;
  modalTitle.appendChild(h1Text);
  const h1Emoji2 = document.createElement("h1");
  h1Emoji2.textContent = "👽";
  modalTitle.appendChild(h1Emoji2);
  buttonForAlien(socket, tipo)
};
