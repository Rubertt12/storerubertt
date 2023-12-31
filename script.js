function searchImage() {
  var searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase()
  var imageMap = {
    /*  NEO GEO */
    "fatal fury": {
      image: "./assets/fatal fury.png",
      link: "https://exemplo.com/link1",
    },
    "dodge ball": {
      image: "./assets/dodge ball.png",
      link: "https://exemplo.com/link2",
    },
    "samurai shodown": {
      image: "./assets/samurai shodown.png",
      link: "https://exemplo.com/link3",
    },

    /*  PS1 */
    "Crash Bandicoot": {
      image: "./assets/crash.jpeg",
      link: "https://drive.google.com/file/d/1S2I9WwjCCU1xvYdm8phrzxsncPgVM6Kv/view?usp=sharing",
    },
    "Resident evil 3 ": {
      image: "./assets/resident evil 3.jfif",
      link: "https://drive.google.com/file/d/1Vf4FplcbETU0HUb7Sl1GfSi5PIh1Cxr7/view?usp=sharing",
    },
    "Silent hill": {
      image: "./assets/Silent hill.jpg",
      link: "https://drive.google.com/file/d/1gzsGrGl8lyqreJAKqDjrk1QgaFXBC0JS/view?usp=sharing",
    },
    Yugioh: {
      image: "./assets/yugioh.jpg",
      link: "https://drive.google.com/file/d/1GDcZP3xFwr9ElzHGs2tVx1EwwG5GQySJ/view?usp=sharing",
    },
    /*  PS2 */
    "need for speed 2": {
      image: "./assets/need for speed 2.png",
      link: "https://exemplo.com/link5",
    },

    "Mortal Kombat armagedon": {
      image: "./assets/mortal kombat armagedon.jpg",
      link: "https://exemplo.com/link5",
    },

    "Resident Evil 4": {
      image: "./assets/resident-evil-4.jfif",
      link: "https://exemplo.com/link5",
    },

    "Downhill Domination": {
      image: "./assets/downhill.jpg",
      link: "https://exemplo.com/link5",
    },

    // /*  Nintendo */
    // "resident evil 2": {
    //   image: "./assets/resident-evil-2.jpg",
    //   link: "https://exemplo.com/link4",
    // },
    // "mortal kombat 3": {
    //   image: "./assets/mortal kombat 3.jpg",
    //   link: "./assets/Mortal Kombat Trilogy(USA)(REV A).zip",
    // },

    // "Legend of zelda": {
    //   image: "./assets/zelda.png",
    //   link: "#",
    // },

    // DOOM: {
    //   image: "./assets/doom.jpg",
    //   link: "#",
    // },
  }

  if (!searchTerm) {
    showCustomAlert("Você deve escrever o nome do seu jogo.")
    return
  }

  var found = false

  for (var key in imageMap) {
    if (key.toLowerCase().includes(searchTerm)) {
      var modal = document.getElementById("imageModal")
      var modalImage = document.getElementById("modalImage")
      var modalLink = document.getElementById("modalLink")

      var imageSize = "200px"

      modalImage.src = imageMap[key].image
      modalImage.style.width = imageSize
      modalImage.style.height = "auto"
      modalLink.href = imageMap[key].link

      modalLink.setAttribute("target", "_blank")

      modal.style.display = "block"
      found = true
      break
    }
  }

  if (!found) {
  var alertImageUrl = "/assets/robo triste.jpeg"; // Substitua com o caminho real da sua imagem
  showCustomAlert("Jogo não encontrado", alertImageUrl);
}
}



function closeModal() {
  var modal = document.getElementById("imageModal")
  modal.style.display = "none"
}

// Adiciona um evento de clique ao botão de fechar
var closeButton = document.querySelector(".close-button")
closeButton.addEventListener("click", function (event) {
  event.preventDefault() // Impede o comportamento padrão do link
  event.stopPropagation() // Impede a propagação do evento para o modal
  closeModal()
})

// Adiciona um evento de clique ao modal
var modal = document.getElementById("imageModal")
modal.addEventListener("click", function () {
  closeModal()
})

// Adiciona um evento de rolagem à janela
window.addEventListener("scroll", function () {
  var navbar = document.querySelector("ul")
  navbar.classList.toggle("scrolled", window.scrollY > 1)
})

// Adiciona um evento de pressionar tecla
document.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é "Esc" ou "Espaço"
  if (event.key === "Escape" || event.key === " ") {
    closeModal()
  }
})

function toggleMenu() {
  var navList = document.querySelector("ul")
  var menuIcon = document.querySelector(".menu-icon")

  navList.classList.toggle("active")
  menuIcon.classList.toggle("change")
}

function showInfo(iconName) {
  var infoDiv = document.getElementById("icon-info")
  var iconInfo = ""

  switch (iconName) {
    // case "Nintendo 64":
    //   iconInfo = "Console de videogame lançado pela Nintendo em 1996."
    //   break
    case "Neo Geo":
      iconInfo = "Console de videogame produzido pela SNK em 1990."
      break
    case "PlayStation":
      iconInfo = "Console de videogame lançado pela Sony em 1994."
      break
    case "PlayStation 2":
      iconInfo = "Console de videogame da Sony lançado em 2000"
      break
  }

  infoDiv.innerHTML = iconInfo
}

// Função para enviar o formulário
function enviarFormulario() {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var message = document.getElementById("message").value

  // Verifique se os campos estão preenchidos
  if (!name || !email || !message) {
    exibirMensagem("Por favor, preencha todos os campos do formulário.", false)
    return
  }

  // Construa os dados do formulário
  var formData = new FormData()
  formData.append("name", name)
  formData.append("email", email)
  formData.append("message", message)

  // Envie os dados para o servidor usando Fetch API
  fetch("https://formspree.io/f/xbjnrdpk", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Exiba a resposta do servidor no elemento com ID "resultado"
      document.getElementById("resultado").innerHTML = data.message

      window.open("https://formspree.io/thanks?language=pt", "_blank")
    })
    .catch((error) => {
      console.error("Erro ao enviar formulário:", error)
      exibirMensagem(
        "Erro ao enviar o formulário. Por favor, tente novamente mais tarde.",
        false
      )
    })
}

function showCustomAlert(message) {
  var customAlert = document.getElementById("customAlert")
  var alertMessage = document.getElementById("alertMessage")

  alertMessage.innerHTML = message
  customAlert.style.display = "block"
}

function closeCustomAlert() {
  var customAlert = document.getElementById("customAlert")
  customAlert.style.display = "none"
}
