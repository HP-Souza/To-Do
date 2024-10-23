function adicionarTarefa() {
  let li = document.createElement("LI");
  let input = document.formPrincipal.tarefa.value;
  let inputTexto = document.createTextNode(input);

  li.appendChild(inputTexto);

  if (document.formPrincipal.tarefa.value != "") {
    document.querySelector("ul").appendChild(li);
    document.formPrincipal.tarefa.value = "";
  } else {
  }

  criarBotaoFechar(li);
}

function criarBotaoFechar(li) {
  let rotulo = document.createElement("SPAN");
  let fechar = document.createTextNode("\u00D7");

  rotulo.className = "close";
  rotulo.appendChild(fechar);
  li.appendChild(rotulo);

  rotulo.onclick = () => {
    rotulo.parentElement.style.display = "none";
  };
}

document.querySelectorAll("li").forEach(criarBotaoFechar);
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
