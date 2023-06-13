const modalReuniao = () => {
  const modal = document.createElement("div"); 
  modal.className = "modal";
  modal.id = "reuniao"

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog-reuniao";
  modalDialog.setAttribute("role", "document");

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content-reuniao";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header-reuniao";

  const sirene = document.createElement("div");
  sirene.className = "sirene-reuniao";

  const img = document.createElement("img");
  img.src = "/imgs/img/sirene.gif";
  img.width = "55";
  img.height = "50";

  sirene.appendChild(img);

  const modalTitle = document.createElement("div");
  modalTitle.className = "modal-title-reuniao";

  const title = document.createElement("h1");
  title.className = "text-reuniao";
  title.textContent = "Reunião solicitada";

  modalTitle.appendChild(title);

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body-reuniao";

  const bodyText = document.createElement("h4");
  bodyText.textContent = "Favor, apresentar-se no salão inicial";

  modalBody.appendChild(bodyText);

  modalHeader.appendChild(sirene);
  modalHeader.appendChild(modalTitle);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);

  modal.appendChild(modalDialog);

  document.getElementById("container").appendChild(modal)
};
