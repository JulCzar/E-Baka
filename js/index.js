let modalAtivo = false
const modal = document.getElementById("modal")

function criaModal(i) {
    if (!modalAtivo) {
        modalAtivo = true
        modal.style.display = "block"
        let foto = document.querySelectorAll(".equipe")[i].src
        let nome = document.querySelectorAll(".equipe")[i].name
        let descricao = document.querySelectorAll(".equipe")[i].parentElement
        descricao = descricao.textContent
        modal.insertAdjacentHTML('beforeend', `
        <div id="modalJS" class="content">
            <div id="fechar"><a onclick='fecharModal()' href='#'><i class="material-icons">clear</i></a></div>
            <img id="foto" src="${foto}" alt="Foto do membro clicado">
            <div id="nome">${nome}</div>
            <div id="descricao">${descricao}</div>
            <div id="endFloat"></div>
        </div>`)
    }
}

function fecharModal() {
    modalAtivo = false
    modal.style.display = "none"
    document.getElementById("modalJS").remove()
}