const modalSoldado = () => {
  const closeModal = () => {
    modal.style.display = "none";
  };
  // criar o elemento modal
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.addEventListener("click", closeModal);

  // criar o elemento modal-dialog-soldado
  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog-soldado";
  modalDialog.setAttribute("role", "document");
  modal.appendChild(modalDialog);

  // criar o elemento modal-content-soldado
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-soldado";
  modalDialog.appendChild(modalContent);

  // criar o elemento modal-header-soldado
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header-soldado";
  modalContent.appendChild(modalHeader);

  // criar o elemento alien-soldado
  const alienDiv = document.createElement("div");
  alienDiv.className = "alien-soldado";
  modalHeader.appendChild(alienDiv);

  // criar o elemento img dentro de alien-soldado
  const alienImg = document.createElement("img");
  alienImg.src = "../imgs/img/tiosam.png";
  alienImg.width = "130";
  alienImg.height = "130";
  alienDiv.appendChild(alienImg);

  // criar o elemento modal-title-soldado
  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title-soldado";
  modalHeader.appendChild(modalTitle);

  // criar o elemento h1 com emojis dentro de modal-title-soldado
  const h1Emoji1 = document.createElement("h1");
  const imgEmoji1 = document.createElement("img");
  imgEmoji1.src = "../imgs/img/soldierEmoji.png";
  imgEmoji1.width = "60";
  imgEmoji1.height = "60";
  h1Emoji1.appendChild(imgEmoji1);
  modalTitle.appendChild(h1Emoji1);

  const h1Text = document.createElement("h1");
  h1Text.className = "text-soldado";
  h1Text.textContent = "Você é um soldado";
  modalTitle.appendChild(h1Text);

  const h1Emoji2 = document.createElement("h1");
  const imgEmoji2 = document.createElement("img");
  imgEmoji2.src = "../imgs/img/soldierEmoji.png";
  imgEmoji2.width = "60";
  imgEmoji2.height = "60";
  h1Emoji2.appendChild(imgEmoji2);
  modalTitle.appendChild(h1Emoji2);

  // adicionar modal ao DOM
  document.getElementById("container").appendChild(modal);
};
