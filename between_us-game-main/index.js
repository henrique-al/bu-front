const modalCodigoFinal = () => {
  if (prompt("Código") === "2873") {
    const modal = document.createElement("div");
    modal.classList.add("modal-vit");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("role", "dialog");
    const dialog = document.createElement("div");
    dialog.classList.add("modal-dialog-vit");
    dialog.setAttribute("role", "document");
    const content = document.createElement("div");
    content.classList.add("modal-content-vit");
    const header = document.createElement("div");
    header.classList.add("modal-header-vit");
    const title = document.createElement("div");
    title.classList.add("modal-title-vit");
    const img1 = document.createElement("img");
    img1.setAttribute("src", "./imgs/img/alien.gif");
    img1.setAttribute("width", "80");
    img1.setAttribute("height", "150");
    const titleText = document.createElement("h1");
    titleText.classList.add("text");
    titleText.innerText = "Parece que acabou...";
    const img2 = document.createElement("img");
    img2.setAttribute("src", "./imgs/img/alien.gif");
    img2.setAttribute("width", "80");
    img2.setAttribute("height", "150");
    title.appendChild(img1);
    title.appendChild(titleText);
    title.appendChild(img2);
    const body = document.createElement("div");
    body.classList.add("modal-body-vit");
    const message1 = document.createElement("h4");
    message1.innerText = "Vocês se livraram dos aliens com sucesso!";
    const message2 = document.createElement("h1");
    message2.innerText = "!Parabéns!";
    body.appendChild(message1);
    body.appendChild(message2);
    header.appendChild(title);
    content.appendChild(header);
    content.appendChild(body);
    dialog.appendChild(content);
    modal.appendChild(dialog);
  }
};

const modalCodigo = (num) => {
  const closeModal = () => {
    document.getElementsByClassName("modal-cod")[0].remove();
  };
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal-cod");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.addEventListener("click", closeModal);

  // Criar o elemento <div> com a classe "modal-dialog"
  const modalDialog = document.createElement("div");
  modalDialog.setAttribute("class", "modal-dialog-cod");
  modalDialog.setAttribute("role", "document");

  // Criar o elemento <div> com a classe "modal-content"
  const modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content-cod");

  // Criar o elemento <div> com a classe "modal-header"
  const modalHeader = document.createElement("div");
  modalHeader.setAttribute("class", "modal-header-cod");

  // Criar o elemento <div> com a classe "modal-title"
  const modalTitle = document.createElement("div");
  modalTitle.setAttribute("class", "modal-title-cod");

  // Adicionar o elemento <h1> com o emoji 🌀
  const emoji1 = document.createElement("h1");
  emoji1.textContent = "🌀";

  // Adicionar o elemento <h1> com a classe "text" e o texto "Código desbloqueado!"
  const text = document.createElement("h1");
  text.setAttribute("class", "text");
  text.textContent = "Código desbloqueado!";

  // Adicionar o elemento <h1> com o emoji 🌀
  const emoji2 = document.createElement("h1");
  emoji2.textContent = "🌀";

  // Adicionar os elementos <h1> como filhos do elemento <div> com a classe "modal-title"
  modalTitle.appendChild(emoji1);
  modalTitle.appendChild(text);
  modalTitle.appendChild(emoji2);

  // Adicionar o elemento <div> com a classe "modal-title" como filho do elemento <div> com a classe "modal-header"
  modalHeader.appendChild(modalTitle);

  // Criar o elemento <div> com a classe "modal-body"
  const modalBody = document.createElement("div");
  modalBody.setAttribute("class", "modal-body-cod");

  // Adicionar o elemento <h4> com o texto "Código recebido atráves da missão especial, parabéns!"
  const h4 = document.createElement("h4");
  h4.textContent = "Código recebido atráves da missão especial, parabéns!";

  // Adicionar o elemento <h1> com o texto "-num-"
  const code = document.createElement("h1");
  code.textContent = "Código: " + num;

  // Adicionar os elementos <h4> e <h1> como filhos do elemento <div> com a classe "modal-body"
  modalBody.appendChild(h4);
  modalBody.appendChild(code);

  // Adicionar os elementos <div> com as classes "modal-header" e "modal-body" como filhos do elemento <div> com a classe "modal-content"
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  // Adicionar o elemento <div> com a classe "modal-content" como filho do elemento <div> com a classe "modal-dialog"
  modalDialog.appendChild(modalContent);

  // Adicionar o elemento <div> com a classe "modal-dialog" como filho do elemento <div> com a classe "modal"
  modal.appendChild(modalDialog);

  // Adicionar o elemento <div> com a classe "modal" como filho do elemento <body> da página
  document.getElementById("container").appendChild(modal);
};

const modalPergunta = ({ question, answers, correctIndex }) => {
  // criar o elemento modal
  const modal = document.createElement("div");
  modal.classList.add("modal-pergumta");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");

  // criar o elemento modal-dialog
  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog-pergunta");
  modalDialog.setAttribute("role", "document");

  // criar o elemento modal-content
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content-pergunta");

  // criar o elemento modal-header
  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header-pergunta");

  // criar o elemento modal-title
  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-title-pergunta");

  // criar o elemento h1
  const heading = document.createElement("h1");
  heading.classList.add("text");
  heading.innerHTML = question;

  // adicionar o h1 ao modal-title
  modalTitle.appendChild(heading);

  // adicionar o modal-title ao modal-header
  modalHeader.appendChild(modalTitle);

  // adicionar o modal-header ao modal-content
  modalContent.appendChild(modalHeader);

  // criar o elemento modal-body
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body-pergunta");

  // criar o elemento perguntas
  const perguntas = document.createElement("div");
  perguntas.classList.add("perguntas-pergunta");

  // criar as quatro perguntas com botões
  for (var i = 0; i < 4; i++) {
    // criar o elemento button
    const button = document.createElement("button");
    button.setAttribute("data-index", i);

    // criar o elemento div com a classe perg
    const perg = document.createElement("div");
    perg.classList.add("perg-pergunta");
    perg.setAttribute("id", "P" + i);

    // criar o elemento h3
    const question = document.createElement("h3");
    question.innerHTML = answers[i];

    // adicionar o h3 à div perg
    perg.appendChild(question);

    // adicionar a div perg ao botão
    button.appendChild(perg);

    // adicionar o botão às perguntas
    perguntas.appendChild(button);
  }

  // adicionar as perguntas ao modal-body
  modalBody.appendChild(perguntas);

  // adicionar o modal-body ao modal-content
  modalContent.appendChild(modalBody);

  // adicionar o modal-content ao modal-dialog
  modalDialog.appendChild(modalContent);

  // adicionar o modal-dialog ao modal
  modal.appendChild(modalDialog);

  // adicionar o modal ao body
  document.getElementById("container").appendChild(modal);
};

const tasks = {
  task1Done: false,
  task2Done: false,
  task3Done: false,
  task4Done: false,
  task5Done: false,
  task6Done: false,
  task7Done: false,
  task8Done: false,
  task9Done: false,
  task10Done: false,
  task11Done: false,
  task12Done: false,
};

const task01 = document.getElementById("task01");
const task02 = document.getElementById("task02");
const task03 = document.getElementById("task03");
const task04 = document.getElementById("task04");
const task05 = document.getElementById("task05");
const task06 = document.getElementById("task06");
const task07 = document.getElementById("task07");
const task08 = document.getElementById("task08");
const task09 = document.getElementById("task09");
const task10 = document.getElementById("task10");
const task11 = document.getElementById("task11");
const task12 = document.getElementById("task12");
const task13 = document.getElementById("task13");

task01.addEventListener("targetFound", () => {
  if (!tasks.task1Done) {
    const question = {
      question: "Qual a fraqueza do alien Awaa?",
      answers: [(a1 = "Sol"), (a2 = "Água"), (a3 = "Natureza"), (a4 = "Neve")],
      correctIndex: 0,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task1Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task1Done && tasks.task2Done && tasks.task3Done) {
            modalCodigo(2);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task1Done = false;
          tasks.task2Done = false;
          tasks.task3Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task02.addEventListener("targetFound", () => {
  if (!tasks.task2Done) {
    const question = {
      question: "Qual o nome desse(a) professor(a): 🐗-li☕",
      answers: [
        (a1 = "Tathiana"),
        (a2 = "Jandré"),
        (a3 = "Romário"),
        (a4 = "Willer"),
      ],
      correctIndex: 2,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task2Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task1Done && tasks.task2Done && tasks.task3Done) {
            modalCodigo(2);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task1Done = false;
          tasks.task2Done = false;
          tasks.task3Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task03.addEventListener("targetFound", () => {
  if (!tasks.task3Done) {
    const question = {
      question: "Qual o nome desse(a) professor(a): 🤖⚽🏃‍♂️",
      answers: [
        (a1 = "ChatGPT"),
        (a2 = "Jandré"),
        (a3 = "Leandro"),
        (a4 = "Willer"),
      ],
      correctIndex: 1,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task3Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task1Done && tasks.task2Done && tasks.task3Done) {
            modalCodigo(2);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task1Done = false;
          tasks.task2Done = false;
          tasks.task3Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});

task04.addEventListener("targetFound", () => {
  if (!tasks.task4Done) {
    const question = {
      question: "Qual a fraqueza do alien Kënt?",
      answers: [(a1 = "Fogo"), (a2 = "Água"), (a3 = "Neve"), (a4 = "Natureza")],
      correctIndex: 2,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task4Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task4Done && tasks.task5Done && tasks.task6Done) {
            modalCodigo(8);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task4Done = false;
          tasks.task5Done = false;
          tasks.task6Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task05.addEventListener("targetFound", () => {
  if (!tasks.task5Done) {
    const question = {
      question: "Qual o nome desse(a) professor(a): 👱‍♀️📄🥰",
      answers: [
        (a1 = "Tathiana"),
        (a2 = "Jandré"),
        (a3 = "Andreia"),
        (a4 = "Willer"),
      ],
      correctIndex: 0,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task5Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task4Done && tasks.task5Done && tasks.task6Done) {
            modalCodigo(8);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task4Done = false;
          tasks.task5Done = false;
          tasks.task6Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task06.addEventListener("targetFound", () => {
  if (!tasks.task6Done) {
    const question = {
      question: "Qual o nome desse(a) professor(a): 💻🚲",
      answers: [
        (a1 = "Ribeiro"),
        (a2 = "Kristian"),
        (a3 = "Romário"),
        (a4 = "Roberto"),
      ],
      correctIndex: 3,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task6Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[1].remove();
          if (tasks.task4Done && tasks.task5Done && tasks.task6Done) {
            modalCodigo(8);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task4Done = false;
          tasks.task5Done = false;
          tasks.task6Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});

task07.addEventListener("targetFound", () => {
  if (!tasks.task7Done) {
    const question = {
      question: "Qual a fraqueza do alien Gotha?",
      answers: [(a1 = "Neve"), (a2 = "Água"), (a3 = "Natureza"), (a4 = "Fogo")],
      correctIndex: 3,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task7Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task7Done && tasks.task8Done && tasks.task9Done) {
            modalCodigo(7);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task7Done = false;
          tasks.task8Done = false;
          tasks.task9Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task08.addEventListener("targetFound", () => {
  if (!tasks.task8Done) {
    const question = {
      question: "Qual o nome desse professor: 🃏🌐🚗",
      answers: [
        (a1 = "Jandré"),
        (a2 = "Leandro"),
        (a3 = "Kristian"),
        (a4 = "Ribeiro"),
      ],
      correctIndex: 1,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task8Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task7Done && tasks.task8Done && tasks.task9Done) {
            modalCodigo(7);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task7Done = false;
          tasks.task8Done = false;
          tasks.task9Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task09.addEventListener("targetFound", () => {
  if (!tasks.task9Done) {
    const question = {
      question: "Qual o nome desse professor: 🤖",
      answers: [
        (a1 = "Leandro"),
        (a2 = "Kristian"),
        (a3 = "Jandré"),
        (a4 = "Ribeiro"),
      ],
      correctIndex: 1,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task9Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task7Done && tasks.task8Done && tasks.task9Done) {
            modalCodigo(7);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task7Done = false;
          tasks.task8Done = false;
          tasks.task9Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});

task10.addEventListener("targetFound", () => {
  if (!tasks.task10Done) {
    const question = {
      question: "Qual a fraqueza do alien Marciano?",
      answers: [(a1 = "Natureza"), (a2 = "Água"), (a3 = "Neve"), (a4 = "Fogo")],
      correctIndex: 1,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task10Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task10Done && tasks.task11Done && tasks.task12Done) {
            modalCodigo(3);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task10Done = false;
          tasks.task11Done = false;
          tasks.task12Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task11.addEventListener("targetFound", () => {
  if (!tasks.task11Done) {
    const question = {
      question: "Qual o nome desse professor: 🕹️👩‍🦰🔫🔫",
      answers: [
        (a1 = "Tathiana"),
        (a2 = "Jandré"),
        (a3 = "Roberto"),
        (a4 = "Jhonathan"),
      ],
      correctIndex: 3,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacper)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task11Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task10Done && tasks.task11Done && tasks.task12Done) {
            modalCodigo(3);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task10Done = false;
          tasks.task11Done = false;
          tasks.task12Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});
task12.addEventListener("targetFound", () => {
  if (!tasks.task12Done) {
    const question = {
      question: "Qual o nome desse professor: 🎸🎤USA",
      answers: [
        (a1 = "Willer"),
        (a2 = "Jandré"),
        (a3 = "Roberto"),
        (a4 = "Jhonathan"),
      ],
      correctIndex: 0,
    };
    modalPergunta(question);
    const buttons = document.querySelectorAll(
      "button:not(.button_alien_hacker)"
    );
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        const dataIndex = button.getAttribute("data-index");
        if (dataIndex === question.correctIndex.toString()) {
          tasks.task12Done = true;
          alert("Correto");
          document.getElementsByClassName("modal-pergumta")[0].remove();
          if (tasks.task10Done && tasks.task11Done && tasks.task12Done) {
            modalCodigo(3);
          }
        } else {
          alert("Resposta errada, refaça toda essa seção de perguntas");
          tasks.task10Done = false;
          tasks.task11Done = false;
          tasks.task12Done = false;
          document.getElementsByClassName("modal-pergumta")[0].remove();
        }
      })
    );
  } else {
    alert("Pergunta já respondida");
  }
});

task13.addEventListener("targetFound", () => {
  let countDone = 0;
  for (const task in tasks) {
    if (tasks[task]) {
      countDone++;
    }
  }
  if (countDone === 12) {
    modalCodigoFinal();
  } else {
    alert("Algumas tasks não foram concluídas");
  }
});
