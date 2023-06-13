const modalGeneral = () => {
  const closeModal = () => {
    modal.style.display = "none";
  };
  // criar o elemento modal
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.addEventListener("click", closeModal);

  // criar o elemento modal-dialog-solArmado
  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog-solArmado";
  modalDialog.setAttribute("role", "document");
  modal.appendChild(modalDialog);

  // criar o elemento modal-content-solArmado
  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-solArmado";
  modalDialog.appendChild(modalContent);

  // criar o elemento modal-header-solArmado
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header-solArmado";
  modalContent.appendChild(modalHeader);

  // criar o elemento alien-solArmado
  const alienDiv = document.createElement("div");
  alienDiv.className = "alien-solArmado";
  modalHeader.appendChild(alienDiv);

  // criar o elemento img dentro de alien-solArmado
  const alienImg = document.createElement("img");
  alienImg.src = "../imgs/img/tiosam.png";
  alienImg.width = "130";
  alienImg.height = "130";
  alienDiv.appendChild(alienImg);

  // criar o elemento modal-title-solArmado
  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title-solArmado";
  modalHeader.appendChild(modalTitle);

  // criar o elemento h1 com imagens dentro de modal-title-solArmado
  const h1Img1 = document.createElement("h1");
  const img1 = document.createElement("img");
  img1.src = "../imgs/img/general.png";
  img1.width = "60";
  img1.height = "60";
  h1Img1.appendChild(img1);
  modalTitle.appendChild(h1Img1);

  const h1Text = document.createElement("h1");
  h1Text.className = "text-solArmado";
  h1Text.textContent = "Você é um general";
  modalTitle.appendChild(h1Text);

  const h1Img2 = document.createElement("h1");
  const img2 = document.createElement("img");
  img2.src = "../imgs/img/general.png";
  img2.width = "60";
  img2.height = "60";
  h1Img2.appendChild(img2);
  modalTitle.appendChild(h1Img2);

  // adicionar modal ao DOM
  document.getElementById("container").appendChild(modal);
};
