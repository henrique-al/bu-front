const modalGameOver = () => {
  // const imgBoom1 = document.createElement("img");
  // imgBoom1.src = "../imgs/img/boom.gif";
  // imgBoom1.classList.add("boom1");
  // imgBoom1.width = "150";
  // imgBoom1.height = "170";
  
  // const imgBoom2 = document.createElement("img");
  // imgBoom2.src = "../imgs/img/boom.gif";
  // imgBoom2.classList.add("boom2");
  // imgBoom2.width = "150";
  // imgBoom2.height = "170";
  
  const modal = document.createElement("div");
  modal.classList.add("modal-gameOver");
  modal.role = "dialog";
  
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog-gameOver");
  modalDialog.role = "document";
  
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content-gameOver");
  
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header-gameOver");
  
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title-gameOver");
  
  const alienImg1 = document.createElement("img");
  alienImg1.src = "../imgs/img/alienGO.png";
  alienImg1.width = "80";
  alienImg1.height = "150";
  modalTitle.appendChild(alienImg1);
  
  const gameOverTitle = document.createElement("h1");
  gameOverTitle.classList.add("text");
  gameOverTitle.textContent = "Game Over";
  modalTitle.appendChild(gameOverTitle);
  
  const alienImg2 = document.createElement("img");
  alienImg2.src = "../imgs/img/alienGO.png";
  alienImg2.width = "80";
  alienImg2.height = "150";
  modalTitle.appendChild(alienImg2);
  
  modalHeader.appendChild(modalTitle);
  modalContent.appendChild(modalHeader);
  
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body-gameOver");
  
  const message1 = document.createElement("h4");
  message1.textContent = "O tempo acabou e agora o mundo conhecerá o fim";
  modalBody.appendChild(message1);
  
  const message2 = document.createElement("h1");
  message2.textContent = "..............................";
  modalBody.appendChild(message2);
  
  modalContent.appendChild(modalBody);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);
  
  // document.getElementById("container").appendChild(imgBoom1);
  document.getElementById("container").appendChild(modal);
  // document.getElementById("container").appendChild(imgBoom2);
};